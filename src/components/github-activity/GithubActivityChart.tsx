'use client'

import { PARTICLE_LINE_GOLD } from '@/components/charts/particle-line'
import { LineChartLoading } from '@/components/charts/line-chart-loading'
import { LiveLineChart } from '@/components/charts/live-line-chart'
import { LiveLine } from '@/components/charts/live-line'
import type {
  GithubActivityDay,
  GithubActivityResponse,
} from '@/lib/github-activity'
import { useChart } from '@/components/charts/chart-context'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const WINDOW_SECONDS = 30 * 24 * 60 * 60

const EMPTY_DAYS: GithubActivityDay[] = []
const EMPTY_TOTALS = { commits: 0, prsOpened: 0, prsMerged: 0 }

function isGithubActivityResponse(
  value: unknown,
): value is GithubActivityResponse {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false
  }
  const record = value as Record<string, unknown>
  if (typeof record.generatedAt !== 'string') {
    return false
  }
  if (record.source !== 'graphql' && record.source !== 'public-events') {
    return false
  }
  if (!Array.isArray(record.days)) {
    return false
  }
  for (const day of record.days) {
    if (typeof day !== 'object' || day === null || Array.isArray(day)) {
      return false
    }
    const d = day as Record<string, unknown>
    if (typeof d.date !== 'string') {
      return false
    }
    if (typeof d.commits !== 'number') {
      return false
    }
    if (typeof d.prsOpened !== 'number') {
      return false
    }
    if (typeof d.prsMerged !== 'number') {
      return false
    }
  }
  const totals = record.totals
  if (typeof totals !== 'object' || totals === null || Array.isArray(totals)) {
    return false
  }
  const t = totals as Record<string, unknown>
  if (typeof t.commits !== 'number') {
    return false
  }
  if (typeof t.prsOpened !== 'number') {
    return false
  }
  if (typeof t.prsMerged !== 'number') {
    return false
  }
  return true
}

function noonUtcSeconds(date: string): number {
  return Math.floor(new Date(`${date}T12:00:00Z`).getTime() / 1000)
}

function PrMarkerLayer({ days }: { days: GithubActivityDay[] }) {
  const chart = useChart()
  const { xScale, innerWidth, innerHeight } = chart

  const maxPr = useMemo(() => {
    let max = 1
    for (const day of days) {
      if (day.prsOpened > max) {
        max = day.prsOpened
      }
      if (day.prsMerged > max) {
        max = day.prsMerged
      }
    }
    return max
  }, [days])

  const openedColor = PARTICLE_LINE_GOLD[1] ?? '#ffd45e'
  const mergedColor = '#a7f3d0'

  return (
    <g>
      {days.map((day) => {
        const x = xScale(new Date(noonUtcSeconds(day.date) * 1000)) as number
        if (!Number.isFinite(x) || x < 0 || x > innerWidth) {
          return null
        }
        const openedHeight = innerHeight * 0.16 * (day.prsOpened / maxPr)
        const mergedHeight = innerHeight * 0.16 * (day.prsMerged / maxPr)
        return (
          <g key={day.date}>
            {day.prsOpened > 0 && (
              <line
                stroke={openedColor}
                strokeLinecap="round"
                strokeWidth={2}
                x1={x - 2}
                x2={x - 2}
                y1={innerHeight - openedHeight}
                y2={innerHeight}
              />
            )}
            {day.prsMerged > 0 && (
              <line
                stroke={mergedColor}
                strokeLinecap="round"
                strokeWidth={2}
                x1={x + 2}
                x2={x + 2}
                y1={innerHeight - mergedHeight}
                y2={innerHeight}
              />
            )}
          </g>
        )
      })}
    </g>
  )
}

export function GithubActivityChart() {
  const [data, setData] = useState<GithubActivityResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }
    mediaQuery.addEventListener('change', handler)
    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  const load = useCallback(async (signal?: AbortSignal) => {
    try {
      const response = await fetch('/api/github-activity', { signal })
      if (!response.ok) {
        return
      }
      const json: unknown = await response.json()
      if (!isGithubActivityResponse(json)) {
        return
      }
      setData(json)
      setLoading(false)
    } catch {
      // ignore aborted / network errors
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    abortRef.current = controller
    void load(controller.signal)

    const interval = window.setInterval(() => {
      if (document.hidden) {
        return
      }
      void load()
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
  }, [load])

  const days = data?.days ?? EMPTY_DAYS
  const totals = data?.totals ?? EMPTY_TOTALS
  const todayCommits =
    days.length > 0 ? (days[days.length - 1]?.commits ?? 0) : 0

  const chartData = useMemo(
    () =>
      days.map((day) => ({
        time: noonUtcSeconds(day.date),
        value: day.commits,
      })),
    [days],
  )

  if (loading || !data) {
    return (
      <div style={{ height: 200 }}>
        <LineChartLoading loadingStyle="sweep" />
      </div>
    )
  }

  const commitsColor = PARTICLE_LINE_GOLD[1] ?? '#ffd45e'

  return (
    <div>
      <div
        style={{
          filter: 'drop-shadow(0 0 6px rgba(255, 212, 94, 0.35))',
          height: 200,
        }}
      >
        <LiveLineChart
          data={chartData}
          value={todayCommits}
          window={WINDOW_SECONDS}
          nowOffsetUnits={0}
          paused={false}
          style={{ height: 200 }}
        >
          <LiveLine
            dataKey="value"
            stroke={commitsColor}
            strokeWidth={2}
            fill={false}
            pulse={!reducedMotion}
            badge={false}
          />
          <PrMarkerLayer days={days} />
        </LiveLineChart>
      </div>
      <div className="text-muted-foreground font-display mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs">
        <span>Commits {totals.commits}</span>
        <span>PRs opened {totals.prsOpened}</span>
        <span>PRs merged {totals.prsMerged}</span>
      </div>
    </div>
  )
}
