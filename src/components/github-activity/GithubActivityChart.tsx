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
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from 'react'

const WINDOW_SECONDS = 30 * 24 * 60 * 60
const CHART_HEIGHT = 200
const CHART_MARGIN = { top: 12, right: 8, bottom: 20, left: 8 }

const EMPTY_DAYS: GithubActivityDay[] = []
const EMPTY_TOTALS = { contributions: 0, prsOpened: 0, prsMerged: 0 }

type SeriesKey = 'contributions' | 'prsOpened' | 'prsMerged'

interface Series {
  key: SeriesKey
  label: string
  /** Four hex stops, left → right, like Particle Line palettes. */
  palette: readonly [string, string, string, string]
  color: string
}

const SERIES: readonly Series[] = [
  {
    key: 'contributions',
    label: 'Contributions',
    palette: PARTICLE_LINE_GOLD,
    color: PARTICLE_LINE_GOLD[1],
  },
  {
    key: 'prsOpened',
    label: 'PRs opened',
    palette: ['#2f7fc9', '#7cc4ff', '#4aa3f0', '#c4e6ff'],
    color: '#7cc4ff',
  },
  {
    key: 'prsMerged',
    label: 'PRs merged',
    palette: ['#139a6b', '#34d399', '#1fb984', '#a7f3d0'],
    color: '#34d399',
  },
]

const dayLabelFormat = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
})

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

function noonUtcSeconds(date: string): number {
  return Math.floor(new Date(`${date}T12:00:00Z`).getTime() / 1000)
}

function ParticleGlowLine({
  days,
  series,
}: {
  days: GithubActivityDay[]
  series: Series
}) {
  const { xScale, yScale, innerWidth, innerHeight } = useChart()
  const uid = useId().replace(/:/g, '')
  const gradientId = `gh-grad-${series.key}-${uid}`
  const filterId = `gh-glow-${series.key}-${uid}`
  const clipId = `gh-clip-${series.key}-${uid}`

  const pathD = useMemo(() => {
    if (days.length < 2) {
      return ''
    }
    return linePathD(days, {
      curve: curveMonotoneX,
      x: (day) => xScale(new Date(noonUtcSeconds(day.date) * 1000)) ?? 0,
      y: (day) => yScale(day[series.key]) ?? 0,
    })
  }, [days, series.key, xScale, yScale])

  if (!pathD) {
    return null
  }

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
          {series.palette.map((color, index) => (
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
          height={Math.max(1, innerHeight) + 40}
          id={filterId}
          width={Math.max(1, innerWidth) + 40}
          x={-20}
          y={-20}
        >
          <feGaussianBlur stdDeviation={3.5} />
        </filter>
        <clipPath id={clipId}>
          <rect
            height={Math.max(1, innerHeight) + 8}
            width={Math.max(1, innerWidth)}
            x={0}
            y={-4}
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
        strokeOpacity={0.55}
        strokeWidth={6}
      />
      <path
        clipPath={`url(#${clipId})`}
        d={pathD}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={series.key === 'contributions' ? 2 : 1.75}
      />
    </>
  )
}

/** Day-snapping hover/tap layer: crosshair + a dot per series. */
function DayHoverLayer({
  days,
  hoveredIndex,
  onHover,
}: {
  days: GithubActivityDay[]
  hoveredIndex: number | null
  onHover: (hover: { index: number; x: number } | null) => void
}) {
  const { xScale, yScale, innerWidth, innerHeight } = useChart()

  const dayXs = useMemo(
    () =>
      days.map((day) => xScale(new Date(noonUtcSeconds(day.date) * 1000)) ?? 0),
    [days, xScale],
  )

  const pick = useCallback(
    (event: PointerEvent<SVGRectElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      let best = -1
      let bestDistance = Number.POSITIVE_INFINITY
      for (let i = 0; i < dayXs.length; i += 1) {
        const dx = Math.abs((dayXs[i] ?? 0) - x)
        if (dx < bestDistance) {
          bestDistance = dx
          best = i
        }
      }
      onHover(best >= 0 ? { index: best, x: dayXs[best] ?? 0 } : null)
    },
    [dayXs, onHover],
  )

  const clear = useCallback(() => onHover(null), [onHover])

  const day = hoveredIndex === null ? undefined : days[hoveredIndex]
  const x = hoveredIndex === null ? undefined : dayXs[hoveredIndex]

  return (
    <g>
      {day !== undefined && x !== undefined ? (
        <g pointerEvents="none">
          <line
            stroke="rgba(255,255,255,0.25)"
            strokeDasharray="2 3"
            x1={x}
            x2={x}
            y1={0}
            y2={innerHeight}
          />
          {SERIES.map((series) => (
            <circle
              cx={x}
              cy={yScale(day[series.key]) ?? 0}
              fill="#000"
              key={series.key}
              r={3.5}
              stroke={series.color}
              strokeWidth={2}
            />
          ))}
        </g>
      ) : null}
      <rect
        fill="transparent"
        height={innerHeight}
        onPointerDown={pick}
        onPointerLeave={clear}
        onPointerMove={pick}
        style={{ cursor: 'crosshair' }}
        width={Math.max(1, innerWidth)}
        x={0}
        y={0}
      />
    </g>
  )
}

function DayTooltip({
  day,
  x,
  containerWidth,
}: {
  day: GithubActivityDay
  x: number
  containerWidth: number
}) {
  const left = x + CHART_MARGIN.left
  const flip = left > containerWidth - 170
  return (
    <div
      className="pointer-events-none absolute top-0 z-10 min-w-[150px] rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-xs text-white/80 shadow-lg backdrop-blur-md"
      role="status"
      style={{
        left,
        transform: flip ? 'translateX(calc(-100% - 12px))' : 'translateX(12px)',
      }}
    >
      <div className="font-display mb-1 text-white">
        {dayLabelFormat.format(new Date(`${day.date}T12:00:00Z`))}
      </div>
      {SERIES.map((series) => (
        <div
          className="flex items-center justify-between gap-4"
          key={series.key}
        >
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: series.color }}
            />
            {series.label}
          </span>
          <span className="text-white tabular-nums">{day[series.key]}</span>
        </div>
      ))}
    </div>
  )
}

export function GithubActivityChart() {
  const [data, setData] = useState<GithubActivityResponse | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hover, setHover] = useState<{ index: number; x: number } | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

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

  const measure = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node
    if (node) {
      setContainerWidth(node.getBoundingClientRect().width)
    }
  }, [])

  const handleHover = useCallback(
    (next: { index: number; x: number } | null) => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
      }
      setHover(next)
    },
    [],
  )

  const days = data?.days ?? EMPTY_DAYS
  const totals = data?.totals ?? EMPTY_TOTALS
  const today = days.length > 0 ? days[days.length - 1] : undefined

  // The live chart's y-domain follows the largest series per day, so all
  // three lines share one honest scale.
  const chartData = useMemo(
    () =>
      days.map((day) => ({
        time: noonUtcSeconds(day.date),
        value: Math.max(day.contributions, day.prsOpened, day.prsMerged),
      })),
    [days],
  )

  if (!data) {
    return (
      <div style={{ height: CHART_HEIGHT }}>
        <LineChartLoading loadingStyle="sweep" />
      </div>
    )
  }

  const hoveredDay = hover === null ? undefined : days[hover.index]
  const contributionsColor = SERIES[0]?.color ?? '#ffd45e'

  return (
    <div
      aria-label={`GitHub activity, last 30 days: ${totals.contributions} contributions, ${totals.prsOpened} pull requests opened, ${totals.prsMerged} merged.`}
      role="group"
    >
      <div className="relative" ref={measure} style={{ height: CHART_HEIGHT }}>
        <LiveLineChart
          data={chartData}
          margin={CHART_MARGIN}
          nowOffsetUnits={0}
          paused={false}
          style={{ height: CHART_HEIGHT }}
          value={
            today
              ? Math.max(today.contributions, today.prsOpened, today.prsMerged)
              : 0
          }
          window={WINDOW_SECONDS}
        >
          {[...SERIES].reverse().map((series) => (
            <ParticleGlowLine days={days} key={series.key} series={series} />
          ))}
          <LiveLine
            badge={false}
            dataKey="value"
            fill={false}
            momentumColors={{
              up: contributionsColor,
              down: contributionsColor,
              flat: contributionsColor,
            }}
            pulse={!reducedMotion}
            stroke="transparent"
            strokeWidth={2}
          />
          <DayHoverLayer
            days={days}
            hoveredIndex={hover === null ? null : hover.index}
            onHover={handleHover}
          />
        </LiveLineChart>
        {hoveredDay !== undefined && hover !== null ? (
          <DayTooltip
            containerWidth={containerWidth}
            day={hoveredDay}
            x={hover.x}
          />
        ) : null}
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
