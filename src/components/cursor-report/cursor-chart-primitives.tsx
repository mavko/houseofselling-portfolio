import {
  CURSOR_MUTED_LABEL_CLASS,
  CURSOR_VALUE_CLASS,
} from '@/lib/cursor-report-theme'

type ChartSectionHeaderProps = {
  label: string
  value: string
}

export function CursorChartSectionHeader({ label, value }: ChartSectionHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className={CURSOR_MUTED_LABEL_CLASS}>{label}</p>
      <p className={CURSOR_VALUE_CLASS}>{value}</p>
    </div>
  )
}

type ChartAxisLabelsProps = {
  start: string
  end: string
}

export function CursorChartAxisLabels({ start, end }: ChartAxisLabelsProps) {
  return (
    <div className="relative mt-3 h-5 text-sm font-semibold text-zinc-400 tabular-nums">
      <span className="absolute left-0">{start}</span>
      <span className="absolute right-0">{end}</span>
    </div>
  )
}

type SeriesPoint = { date: string; value: number }

export function buildTimeSeriesPaths(points: SeriesPoint[]) {
  if (points.length === 0) {
    return { areaPath: '', linePath: '' }
  }

  const max = Math.max(...points.map((p) => p.value), 1)
  const coords = points.map((p, i) => {
    const x = points.length === 1 ? 50 : (i / (points.length - 1)) * 98 + 1
    const y = 100 - (p.value / max) * 96
    return { x, y }
  })

  const linePath = coords
    .map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`)
    .join(' ')

  const areaPath = `${linePath} L ${coords[coords.length - 1]?.x.toFixed(2) ?? 98} 100 L ${coords[0]?.x.toFixed(2) ?? 1} 100 Z`

  return { areaPath, linePath }
}
