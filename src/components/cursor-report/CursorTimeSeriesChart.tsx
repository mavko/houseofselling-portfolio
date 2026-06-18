import { CURSOR_ACCENT } from '@/lib/cursor-report-theme'

import {
  buildTimeSeriesPaths,
  CursorChartAxisLabels,
  CursorChartSectionHeader,
} from './cursor-chart-primitives'

type SeriesPoint = { date: string; value: number }

type CursorTimeSeriesChartProps = {
  title: string
  subtitle: string
  points: SeriesPoint[]
  startLabel?: string
  endLabel?: string
}

export function CursorTimeSeriesChart({
  title,
  subtitle,
  points,
  startLabel,
  endLabel,
}: CursorTimeSeriesChartProps) {
  const { areaPath, linePath } = buildTimeSeriesPaths(points)
  const start = startLabel ?? points[0]?.date ?? ''
  const end = endLabel ?? points[points.length - 1]?.date ?? ''

  return (
    <section className="flex flex-col gap-6">
      <CursorChartSectionHeader label={title} value={subtitle} />
      <div
        className="relative h-48 border-b border-white/10"
        role="img"
        aria-label={`${title} chart`}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {areaPath ? (
            <path d={areaPath} fill={CURSOR_ACCENT} opacity={0.12} />
          ) : null}
          {linePath ? (
            <path
              d={linePath}
              fill="none"
              stroke={CURSOR_ACCENT}
              strokeWidth={1.5}
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ) : null}
        </svg>
      </div>
      <CursorChartAxisLabels start={start} end={end} />
    </section>
  )
}
