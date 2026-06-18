import {
  CURSOR_ACCENT,
  CURSOR_ACCENT_LOCAL,
} from '@/lib/cursor-report-theme'

import {
  CursorChartAxisLabels,
  CursorChartSectionHeader,
} from './cursor-chart-primitives'

type AgentsPoint = { date: string; local: number; cloud: number }

type CursorAgentsChartProps = {
  subtitle: string
  points: AgentsPoint[]
  localTotal?: number
  cloudTotal?: number
  startLabel?: string
  endLabel?: string
}

export function CursorAgentsChart({
  subtitle,
  points,
  localTotal,
  cloudTotal,
  startLabel,
  endLabel,
}: CursorAgentsChartProps) {
  const start = startLabel ?? points[0]?.date ?? ''
  const end = endLabel ?? points[points.length - 1]?.date ?? ''

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <CursorChartSectionHeader label="Agents" value={subtitle} />
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span
              className="size-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: CURSOR_ACCENT_LOCAL }}
            />
            Local{localTotal != null ? ` (${localTotal})` : ''}
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="size-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: CURSOR_ACCENT }}
            />
            Cloud{cloudTotal != null ? ` (${cloudTotal})` : ''}
          </span>
        </div>
      </div>
      <div
        className="relative flex h-48 items-end gap-px border-b border-white/10"
        role="img"
        aria-label="Agents per day chart"
      >
        {points.map((point) => {
          const hasData = point.local + point.cloud > 0

          return (
            <div
              key={point.date}
              className="group relative flex h-full min-w-0 flex-1 flex-col justify-end"
              title={`${point.date}: local ${point.local}, cloud ${point.cloud}`}
            >
              {hasData ? (
                <>
                  {point.local > 0 ? (
                    <div
                      className="min-h-[2px] w-full rounded-t-sm transition-opacity group-hover:opacity-80"
                      style={{
                        height: `${Math.max(point.local, 2)}%`,
                        backgroundColor: CURSOR_ACCENT_LOCAL,
                      }}
                    />
                  ) : null}
                  {point.cloud > 0 ? (
                    <div
                      className="min-h-[2px] w-full rounded-b-sm transition-opacity group-hover:opacity-80"
                      style={{
                        height: `${Math.max(point.cloud, 2)}%`,
                        backgroundColor: CURSOR_ACCENT,
                      }}
                    />
                  ) : null}
                </>
              ) : (
                <div
                  className="min-h-[2px] w-full rounded-sm opacity-25"
                  style={{
                    height: '2%',
                    backgroundColor: 'color-mix(in srgb, white 8%, transparent)',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
      <CursorChartAxisLabels start={start} end={end} />
    </section>
  )
}
