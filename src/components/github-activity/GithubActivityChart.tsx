'use client'

import { LineBackdrop } from '@/components/charts/line-backdrop'
import { Line, LineChart } from '@/components/charts/line-chart'
import { LineChartLoading } from '@/components/charts/line-chart-loading'
import { LinkPreview } from '@/components/LinkPreview'
import { ChartTooltip, type TooltipRow } from '@/components/charts/tooltip'
import { PROJECT_PILLS } from '@/content/project-pills'
import type {
  GithubActivityDay,
  GithubActivityResponse,
} from '@/lib/github-activity'
import { type CSSProperties, useEffect, useMemo, useState } from 'react'

const CHART_HEIGHT = 220
const ZERO_MARGIN = { top: 0, right: 0, bottom: 0, left: 0 }

const EMPTY_DAYS: GithubActivityDay[] = []
const EMPTY_TOTALS = { contributions: 0, prsOpened: 0, prsMerged: 0 }

type SeriesKey = 'contributions' | 'prsOpened' | 'prsMerged'

interface Series {
  key: SeriesKey
  label: string
  /** Solid fallback + legend/tooltip colour. */
  color: string
  gradient: [string, string, string]
  glow: { blur: number; opacity: number }
  strokeWidth: number
}

// Glimmering monochrome sky. Scene colours are intentionally identical in light
// and dark mode: a near-black base with a silver horizon glow. Series lines keep
// their distinct hues so the three data sets stay readable against the monochrome sky.
const SERIES: readonly Series[] = [
  {
    key: 'contributions',
    label: 'Contributions',
    color: '#f0b25a',
    gradient: ['#d9622b', '#f0b25a', '#f7dc9a'],
    glow: { blur: 5, opacity: 0.85 },
    strokeWidth: 2,
  },
  {
    key: 'prsOpened',
    label: 'PRs opened',
    color: '#e08a9c',
    gradient: ['#a8506a', '#e08a9c', '#f5c4cd'],
    glow: { blur: 4, opacity: 0.5 },
    strokeWidth: 1.5,
  },
  {
    key: 'prsMerged',
    label: 'PRs merged',
    color: '#c9b8dc',
    gradient: ['#7a6a96', '#c9b8dc', '#fff1d0'],
    glow: { blur: 4, opacity: 0.45 },
    strokeWidth: 1.5,
  },
]

const SKY_STOPS = [
  { offset: 0, color: '#ffffff', opacity: 0.42 },
  { offset: 0.22, color: '#f0f0f0', opacity: 0.3 },
  { offset: 0.45, color: '#b8b8b8', opacity: 0.2 },
  { offset: 0.7, color: '#545454', opacity: 0.12 },
  { offset: 1, color: '#000000', opacity: 0 },
]

const POOL_STOPS = [
  { offset: 0, color: '#ffffff', opacity: 0.24 },
  { offset: 1, color: '#ffffff', opacity: 0 },
]

const STARS = [
  { left: '10%', top: '18%', size: 2, opacity: 0.5, duration: 3.2, delay: 0 },
  {
    left: '26%',
    top: '9%',
    size: 2,
    opacity: 0.4,
    duration: 4.6,
    delay: -1.2,
  },
  {
    left: '44%',
    top: '24%',
    size: 2,
    opacity: 0.32,
    duration: 5.4,
    delay: -2.4,
  },
  {
    left: '61%',
    top: '11%',
    size: 3,
    opacity: 0.44,
    duration: 4.1,
    delay: -0.8,
  },
  {
    left: '77%',
    top: '5%',
    size: 2,
    opacity: 0.55,
    duration: 3.7,
    delay: -2.9,
  },
  {
    left: '91%',
    top: '27%',
    size: 2,
    opacity: 0.36,
    duration: 4.9,
    delay: -1.7,
  },
]

const HIGHLIGHT = {
  dimOpacity: 0.25,
  fadeLength: 40,
  glow: { blur: 6 },
  span: 3,
  strokeWidth: 2.5,
}

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

export function GithubActivityChart() {
  const [data, setData] = useState<GithubActivityResponse | null>(null)

  useEffect(() => {
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

  const chartData = useMemo(
    () =>
      days.map((day) => ({
        date: new Date(`${day.date}T12:00:00Z`),
        contributions: day.contributions,
        prsOpened: day.prsOpened,
        prsMerged: day.prsMerged,
      })),
    [days],
  )

  const peak = useMemo(() => {
    let max = 1
    for (const day of days) {
      max = Math.max(max, day.contributions, day.prsOpened, day.prsMerged)
    }
    return max
  }, [days])

  if (!data) {
    return (
      <div style={{ height: CHART_HEIGHT }}>
        <LineChartLoading loadingStyle="sweep" />
      </div>
    )
  }

  return (
    <div
      aria-label={`GitHub activity, last 30 days: ${totals.contributions} contributions, ${totals.prsOpened} pull requests opened, ${totals.prsMerged} merged.`}
      role="group"
    >
      {/* The scene carries its own sky, so it looks the same in light and dark mode. */}
      <div
        className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10"
        style={{
          background: '#000000',
          height: CHART_HEIGHT,
        }}
      >
        <div className="pointer-events-none absolute top-3 left-3 z-10 flex max-w-[calc(100%-1.5rem)] origin-top-left scale-50 flex-wrap gap-2 text-xl">
          {PROJECT_PILLS.map((pill) => (
            <LinkPreview
              className="pointer-events-auto"
              key={pill.url}
              url={pill.url}
              avatar={pill.avatar}
              external
            >
              {pill.label}
            </LinkPreview>
          ))}
        </div>
        <LineChart
          aspectRatio=""
          data={chartData}
          margin={ZERO_MARGIN}
          revealSignature="github-activity"
          style={{ height: CHART_HEIGHT }}
          yScaleDomainMax={peak * 2.2}
        >
          <LineBackdrop
            center={{ x: 0.45, y: 0.82 }}
            dataKey="contributions"
            radius={{ x: 0.95, y: 0.6 }}
            stops={SKY_STOPS}
          />
          <LineBackdrop
            center={{ x: 0.88, y: 0.85 }}
            dataKey="contributions"
            radius={{ x: 0.35, y: 0.22 }}
            stops={POOL_STOPS}
          />
          <LineBackdrop dataKey="contributions">
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
            <Line
              dataKey={series.key}
              fadeEdges={false}
              glow={series.glow}
              highlight={HIGHLIGHT}
              key={series.key}
              stroke={series.color}
              strokeGradient={series.gradient}
              strokeWidth={series.strokeWidth}
            />
          ))}
          <ChartTooltip
            dotColor="#ffffff"
            dotHaloBlur={4}
            dotHaloOpacity={0.55}
            dotHaloScale={2.4}
            dotSize={4.5}
            indicatorColor="#9a9a9a"
            indicatorEnd="point"
            indicatorEndColor="#ffffff"
            indicatorFadeEdges="top"
            indicatorFadeLength={35}
            rows={tooltipRows}
            showDatePill={false}
            topOffset={16}
          />
        </LineChart>
      </div>
    </div>
  )
}
