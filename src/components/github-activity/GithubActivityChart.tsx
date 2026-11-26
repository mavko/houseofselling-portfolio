'use client'

import { LineBackdrop } from '@/components/charts/line-backdrop'
import { Line, LineChart } from '@/components/charts/line-chart'
import { LineChartLoading } from '@/components/charts/line-chart-loading'
import { ChartTooltip, type TooltipRow } from '@/components/charts/tooltip'
import type {
  GithubActivityDay,
  GithubActivityResponse,
} from '@/lib/github-activity'
import { useEffect, useMemo, useState } from 'react'

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

// Sunset sky recipe (bklit). Scene colours, intentionally identical in light
// and dark mode. Contributions is the recipe's ember → gold line; the PR
// lines use the sky's own rose and dusky-mauve tones with a softer glow.
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
  { offset: 0, color: '#b4703c', opacity: 1 },
  { offset: 0.22, color: '#b4703c', opacity: 0.85 },
  { offset: 0.45, color: '#7a4650', opacity: 0.7 },
  { offset: 0.7, color: '#3e2a48', opacity: 0.45 },
  { offset: 1, color: '#3e2a48', opacity: 0 },
]

const POOL_STOPS = [
  { offset: 0, color: '#8a6a2a', opacity: 0.6 },
  { offset: 1, color: '#8a6a2a', opacity: 0 },
]

const STARS = [
  { left: '14%', top: '22%', opacity: 0.3 },
  { left: '38%', top: '13%', opacity: 0.25 },
  { left: '77%', top: '4%', opacity: 0.35 },
  { left: '92%', top: '26%', opacity: 0.2 },
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
        className="relative w-full overflow-hidden rounded-xl"
        style={{
          background: 'linear-gradient(to bottom, #211c2b, #18161d)',
          height: CHART_HEIGHT,
        }}
      >
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
                fill="#ffffff"
                height={3}
                key={`${star.left}-${star.top}`}
                opacity={star.opacity}
                width={3}
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
            dotColor="#fff1d0"
            dotHaloBlur={4}
            dotHaloOpacity={0.7}
            dotHaloScale={2.4}
            dotSize={4.5}
            indicatorColor="#3e2a48"
            indicatorEnd="point"
            indicatorEndColor="#fff1d0"
            indicatorFadeEdges="top"
            indicatorFadeLength={35}
            rows={tooltipRows}
            showDatePill={false}
            topOffset={16}
          />
        </LineChart>
      </div>
      <div className="font-display mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/60">
        {SERIES.map((series) => (
          <span className="inline-flex items-center gap-1.5" key={series.key}>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: series.color }}
            />
            {series.label} {totals[series.key]}
          </span>
        ))}
      </div>
    </div>
  )
}
