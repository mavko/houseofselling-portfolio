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
import { linePathD } from '@/components/charts/line-path'
import { curveMonotoneX } from 'd3-shape'
import { useCallback, useEffect, useMemo, useRef, useState, useId } from 'react'

const WINDOW_SECONDS = 30 * 24 * 60 * 60

const EMPTY_DAYS: GithubActivityDay[] = []
const EMPTY_TOTALS = { contributions: 0, prsOpened: 0, prsMerged: 0 }

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
    if (typeof d.contributions !== 'number') {
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
  if (typeof t.contributions !== 'number') {
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

  const openedColor = '#7cc4ff'
  const mergedColor = '#34d399'

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

function ParticleGlowLine() {
  const chart = useChart()
  const { data, xScale, yScale, xAccessor, innerWidth } = chart
  const uid = useId().replace(/:/g, '')
  const gradientId = `gh-grad-${uid}`
  const filterId = `gh-glow-${uid}`
  const clipId = `gh-clip-${uid}`

  const getX = useCallback(
    (d: Record<string, unknown>) => xScale(xAccessor(d)) ?? 0,
    [xScale, xAccessor],
  )
  const getY = useCallback(
    (d: Record<string, unknown>) => {
      const value = d.value
      return typeof value === 'number' ? (yScale(value) ?? 0) : 0
    },
    [yScale],
  )
  const pathD = useMemo(
    () =>
      data.length > 1
        ? linePathD(data, { curve: curveMonotoneX, x: getX, y: getY })
        : '',
    [data, getX, getY],
  )

  if (!pathD) {
    return null
  }

  const commitsColor = PARTICLE_LINE_GOLD[1] ?? '#ffd45e'

  return (
    <>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          x1={0}
          x2={Math.max(innerWidth, 1)}
          y1={0}
          y2={0}
        >
          {PARTICLE_LINE_GOLD.map((color, index) => (
            <stop
              key={`${index}-${color}`}
              offset={index / 3}
              stopColor={color}
            />
          ))}
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height={Math.max(1, innerWidth) + 40}
          id={filterId}
          width={Math.max(1, innerWidth) + 40}
          x={-20}
          y={-20}
        >
          <feGaussianBlur stdDeviation={3.5} />
        </filter>
        <clipPath id={clipId}>
          <rect
            height={Math.max(1, innerHeight)}
            width={Math.max(1, innerWidth)}
            x={0}
            y={0}
          />
        </clipPath>
      </defs>
      <path
        clipPath={`url(#${clipId})`}
        d={pathD}
        fill="none"
        filter={`url(#${filterId})`}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeOpacity={0.6}
        strokeWidth={6}
      />
      <path
        clipPath={`url(#${clipId})`}
        d={pathD}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={2}
      />
    </>
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
    days.length > 0 ? (days[days.length - 1]?.contributions ?? 0) : 0

  const chartData = useMemo(
    () =>
      days.map((day) => ({
        time: noonUtcSeconds(day.date),
        value: day.contributions,
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
      <div style={{ height: 200 }}>
        <LiveLineChart
          data={chartData}
          margin={{ top: 12, right: 8, bottom: 20, left: 8 }}
          nowOffsetUnits={0}
          paused={false}
          style={{ height: 200 }}
          value={todayCommits}
          window={WINDOW_SECONDS}
        >
          <ParticleGlowLine />
          <LiveLine
            badge={false}
            dataKey="value"
            fill={false}
            momentumColors={{
              up: commitsColor,
              down: commitsColor,
              flat: commitsColor,
            }}
            pulse={!reducedMotion}
            stroke="transparent"
            strokeWidth={2}
          />
          <PrMarkerLayer days={days} />
        </LiveLineChart>
      </div>
      <div className="font-display mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/60">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: commitsColor }}
          />
          Contributions {totals.contributions}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#7cc4ff' }}
          />
          PRs opened {totals.prsOpened}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#34d399' }}
          />
          PRs merged {totals.prsMerged}
        </span>
      </div>
    </div>
  )
}
