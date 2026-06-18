import type { CursorReportSnapshot } from '@/content/cursor-report-types'

type CursorModelListProps = {
  models: CursorReportSnapshot['models']
}

export function CursorModelList({ models }: CursorModelListProps) {
  return (
    <ol className="flex flex-col">
      {models.map((model) => (
        <li
          key={model.rank}
          className="flex items-center gap-3 border-b border-white/[0.06] py-2.5 first:pt-0 last:border-b-0 last:pb-0"
        >
          <span className="w-5 shrink-0 text-xs font-semibold text-zinc-500 tabular-nums">
            {model.rank}
          </span>
          <p
            className="truncate text-sm font-medium text-[#ededed]"
            title={model.name}
          >
            {model.name}
          </p>
        </li>
      ))}
    </ol>
  )
}
