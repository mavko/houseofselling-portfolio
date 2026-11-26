'use client'

import { LineBackdrop } from '@/components/charts/line-backdrop'
import { LineChart } from '@/components/charts/line-chart'
import { LineChartLoading } from '@/components/charts/line-chart-loading'
import { ParticleLine } from '@/components/charts/particle-line'
import { ChartTooltip, type TooltipRow } from '@/components/charts/tooltip'
import type {
  GithubActivityDay,
  GithubActivityResponse,
} from '@/lib/github-activity'
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CHART_HEIGHT = 440
const CHART_MARGIN = { top: 28, right: 0, bottom: 12, left: 0 }
/** Lines occupy ~30% of the card, not the full plot, leaving room for the intro. */
const LINE_HEIGHT_OF_CARD = 0.3
const PLOT_HEIGHT = CHART_HEIGHT - CHART_MARGIN.top - CHART_MARGIN.bottom
/** `yScaleDomainMax` becomes `[0, max * 1.1]`; data max is 1 after normalizing. */
const Y_DOMAIN_MAX =
  1 / (((LINE_HEIGHT_OF_CARD * CHART_HEIGHT) / PLOT_HEIGHT) * 1.1)

const EMPTY_DAYS: GithubActivityDay[] = []
const EMPTY_TOTALS = { contributions: 0, prsOpened: 0, prsMerged: 0 }

type SeriesKey = 'contributions' | 'prsOpened' | 'prsMerged'

interface Series {
  key: SeriesKey
  label: string
  /** Tooltip dot colour. */
  color: string
  /** WebGL particle ramp — parsed as hex by the renderer, so no CSS vars here. */
  colors: readonly string[]
  strokeWidth: number
  density?: number
  spread?: number
}

// Comet reveal with the earlier Sunset sky line styling: ember → gold for
// contributions, rose and dusky mauve for the two PR series.
const EMBER_GOLD = ['#d9622b', '#f0b25a', '#f7dc9a', '#f7dc9a'] as const
const ROSE = ['#a8506a', '#e08a9c', '#f5c4cd', '#f5c4cd'] as const
const MAUVE = ['#7a6a96', '#c9b8dc', '#fff1d0', '#fff1d0'] as const

const SERIES: readonly Series[] = [
  {
    key: 'contributions',
    label: 'Contributions',
    color: '#f0b25a',
    colors: EMBER_GOLD,
    strokeWidth: 2,
  },
  {
    key: 'prsOpened',
    label: 'PRs opened',
    color: '#e08a9c',
    colors: ROSE,
    density: 3,
    spread: 110,
    strokeWidth: 1.5,
  },
  {
    key: 'prsMerged',
    label: 'PRs merged',
    color: '#c9b8dc',
    colors: MAUVE,
    density: 3,
    spread: 110,
    strokeWidth: 1.5,
  },
]

const SKY_STOPS = [
  { offset: 0, color: '#ffffff', opacity: 0.42 },
  { offset: 0.22, color: '#e4e4e7', opacity: 0.28 },
  { offset: 0.45, color: '#a1a1aa', opacity: 0.16 },
  { offset: 0.7, color: '#3f3f46', opacity: 0.08 },
  { offset: 1, color: '#09090b', opacity: 0 },
]

const POOL_STOPS = [
  { offset: 0, color: '#e4e4e7', opacity: 0.22 },
  { offset: 1, color: '#e4e4e7', opacity: 0 },
]

const STARS = [
  {
    left: '6%',
    top: '38%',
    size: 2,
    opacity: 0.45,
    duration: 4.4,
    delay: -1.1,
  },
  { left: '10%', top: '18%', size: 3, opacity: 0.65, duration: 3.2, delay: 0 },
  {
    left: '17%',
    top: '46%',
    size: 2,
    opacity: 0.4,
    duration: 5.6,
    delay: -3.8,
  },
  {
    left: '26%',
    top: '9%',
    size: 2,
    opacity: 0.55,
    duration: 4.6,
    delay: -1.2,
  },
  {
    left: '31%',
    top: '42%',
    size: 2,
    opacity: 0.48,
    duration: 3.9,
    delay: -2.1,
  },
  {
    left: '38%',
    top: '33%',
    size: 2,
    opacity: 0.42,
    duration: 5.1,
    delay: -3.4,
  },
  {
    left: '44%',
    top: '24%',
    size: 2,
    opacity: 0.5,
    duration: 5.4,
    delay: -2.4,
  },
  {
    left: '53%',
    top: '16%',
    size: 2,
    opacity: 0.52,
    duration: 4.3,
    delay: -0.5,
  },
  {
    left: '61%',
    top: '11%',
    size: 3,
    opacity: 0.6,
    duration: 4.1,
    delay: -0.8,
  },
  {
    left: '68%',
    top: '35%',
    size: 2,
    opacity: 0.46,
    duration: 5.8,
    delay: -4.2,
  },
  {
    left: '77%',
    top: '5%',
    size: 2,
    opacity: 0.7,
    duration: 3.7,
    delay: -2.9,
  },
  {
    left: '83%',
    top: '19%',
    size: 3,
    opacity: 0.58,
    duration: 3.5,
    delay: -1.5,
  },
  {
    left: '91%',
    top: '27%',
    size: 2,
    opacity: 0.5,
    duration: 4.9,
    delay: -1.7,
  },
  {
    left: '95%',
    top: '12%',
    size: 2,
    opacity: 0.44,
    duration: 4.7,
    delay: -3.1,
  },
]

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function hasCounts(value: unknown): boolean {
  return (
    isRecord(value) &&
    typeof value.contributions === 'number' &&
    typeof value.prsOpened === 'number' &&
    typeof value.prsMerged === 'number'
  )
}

function isGithubActivityResponse(
  value: unknown,
): value is GithubActivityResponse {
  if (!isRecord(value) || typeof value.generatedAt !== 'string') {
    return false
  }
  if (value.source !== 'graphql' && value.source !== 'public-events') {
    return false
  }
  if (!Array.isArray(value.days) || !hasCounts(value.totals)) {
    return false
  }
  return value.days.every(
    (day: unknown) =>
      isRecord(day) && typeof day.date === 'string' && hasCounts(day),
  )
}

function tooltipRows(point: Record<string, unknown>): TooltipRow[] {
  return SERIES.map((series) => {
    const value = point[series.key]
    return {
      color: series.color,
      label: series.label,
      value: typeof value === 'number' ? value : 0,
    }
  })
}

// Realistic 30-day shipping cadence used only in `NODE_ENV === 'development'`
// so local previews match production volume without a live GitHub token.
const PREVIEW_SERIES: readonly [number, number, number][] = [
  [14, 2, 1],
  [22, 4, 3],
  [19, 3, 4],
  [7, 1, 1],
  [5, 0, 1],
  [28, 5, 4],
  [34, 6, 5],
  [26, 4, 5],
  [31, 5, 4],
  [18, 3, 3],
  [9, 1, 2],
  [4, 0, 0],
  [24, 4, 3],
  [39, 7, 5],
  [42, 6, 6],
  [29, 4, 5],
  [21, 3, 4],
  [11, 2, 1],
  [6, 1, 1],
  [33, 5, 4],
  [46, 8, 6],
  [37, 6, 7],
  [28, 4, 5],
  [25, 4, 3],
  [12, 2, 2],
  [8, 1, 1],
  [35, 6, 5],
  [44, 7, 6],
  [31, 5, 5],
  [38, 6, 4],
]

function buildPreviewActivity(): GithubActivityResponse {
  const now = new Date()
  const todayUtc = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
  const days: GithubActivityDay[] = PREVIEW_SERIES.map(
    ([contributions, prsOpened, prsMerged], index) => {
      const day = new Date(
        todayUtc.getTime() - (PREVIEW_SERIES.length - 1 - index) * 86_400_000,
      )
      return {
        date: day.toISOString().slice(0, 10),
        contributions,
        prsOpened,
        prsMerged,
      }
    },
  )
  return {
    generatedAt: now.toISOString(),
    source: 'graphql',
    days,
    totals: days.reduce(
      (acc, day) => ({
        contributions: acc.contributions + day.contributions,
        prsOpened: acc.prsOpened + day.prsOpened,
        prsMerged: acc.prsMerged + day.prsMerged,
      }),
      { ...EMPTY_TOTALS },
    ),
  }
}

export function GithubActivityChart({ intro }: { intro?: ReactNode }) {
  const [data, setData] = useState<GithubActivityResponse | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const id = window.requestAnimationFrame(() => {
        setData(buildPreviewActivity())
      })
      return () => {
        window.cancelAnimationFrame(id)
      }
    }

    const controller = new AbortController()
    const load = async () => {
      try {
        const response = await fetch('/api/github-activity', {
          signal: controller.signal,
        })
        if (!response.ok) {
          return
        }
        const json: unknown = await response.json()
        if (isGithubActivityResponse(json)) {
          setData(json)
        }
      } catch {
        // aborted or offline: keep the last data
      }
    }
    void load()

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        void load()
      }
    }, 60_000)
    const onVisibility = () => {
      if (!document.hidden) {
        void load()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      controller.abort()
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const days = data?.days ?? EMPTY_DAYS
  const totals = data?.totals ?? EMPTY_TOTALS

  // Each series is divided by its own peak so the three lines swing within a
  // comparable 0–1 range. Raw counts stay on the point for the tooltip.
  const maxima = useMemo(() => {
    const result: Record<SeriesKey, number> = {
      contributions: 1,
      prsOpened: 1,
      prsMerged: 1,
    }
    for (const day of days) {
      for (const series of SERIES) {
        result[series.key] = Math.max(result[series.key], day[series.key])
      }
    }
    return result
  }, [days])

  const chartData = useMemo(
    () =>
      days.map((day) => ({
        date: new Date(`${day.date}T12:00:00Z`),
        contributions: day.contributions,
        prsOpened: day.prsOpened,
        prsMerged: day.prsMerged,
        contributionsNorm: day.contributions / maxima.contributions,
        prsOpenedNorm: day.prsOpened / maxima.prsOpened,
        prsMergedNorm: day.prsMerged / maxima.prsMerged,
      })),
    [days, maxima],
  )

  const scene = (
    <div
      className="relative w-full overflow-hidden rounded-[2.625rem] border border-white/10"
      style={{
        background: 'linear-gradient(to bottom, #101012, #040405)',
        height: CHART_HEIGHT,
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-8 sm:p-11">
        {intro ? (
          <div className="pointer-events-auto max-w-[36rem]">{intro}</div>
        ) : null}
      </div>
      {data ? (
        <LineChart
          aspectRatio=""
          data={chartData}
          margin={CHART_MARGIN}
          revealSignature="github-activity"
          style={{ height: CHART_HEIGHT }}
          yScaleDomainMax={Y_DOMAIN_MAX}
        >
          <LineBackdrop
            center={{ x: 0.45, y: 0.91 }}
            dataKey="contributionsNorm"
            opacity={0.8}
            radius={{ x: 0.95, y: 0.3 }}
            stops={SKY_STOPS}
          />
          <LineBackdrop
            center={{ x: 0.88, y: 0.925 }}
            dataKey="contributionsNorm"
            radius={{ x: 0.35, y: 0.11 }}
            stops={POOL_STOPS}
          />
          <LineBackdrop dataKey="contributionsNorm">
            {STARS.map((star) => (
              <rect
                className="github-glimmer"
                fill="#ffffff"
                height={star.size}
                key={`${star.left}-${star.top}`}
                opacity={star.opacity}
                style={
                  {
                    '--glimmer-opacity': star.opacity,
                    animationDelay: `${star.delay}s`,
                    animationDuration: `${star.duration}s`,
                  } as CSSProperties
                }
                width={star.size}
                x={star.left}
                y={star.top}
              />
            ))}
          </LineBackdrop>
          {[...SERIES].reverse().map((series) => (
            <ParticleLine
              colors={series.colors}
              dataKey={`${series.key}Norm`}
              density={series.density}
              effect="comet"
              key={series.key}
              spread={series.spread}
              stroke={series.color}
              strokeWidth={series.strokeWidth}
            />
          ))}
          <ChartTooltip
            rows={tooltipRows}
            showDatePill={false}
            titleClassName="inline-block rounded-full bg-zinc-100 px-4 py-1 text-zinc-900 shadow-lg"
          />
        </LineChart>
      ) : (
        <LineChartLoading
          aspectRatio=""
          className="h-full"
          gridShimmerStroke="rgba(255, 255, 255, 0.22)"
          gridStroke="rgba(255, 255, 255, 0.06)"
          label=""
          loadingStyle="sweep"
          margin={CHART_MARGIN}
          stroke="#ffffff"
        />
      )}
    </div>
  )

  if (!data) {
    return scene
  }

  return (
    <div
      aria-label={`GitHub activity, last 30 days: ${totals.contributions} contributions, ${totals.prsOpened} pull requests opened, ${totals.prsMerged} merged.`}
      role="group"
    >
      {/* The scene carries its own sky, so it looks the same in light and dark mode. */}
      {scene}
    </div>
  )
}
