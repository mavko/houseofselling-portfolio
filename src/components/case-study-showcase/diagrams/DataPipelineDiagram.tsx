'use client'

type DataPipelineDiagramProps = {
  caption: string
}

const stages = [
  { id: 'source', label: 'Couchbase', detail: 'documents stay' },
  { id: 'export', label: 'Export', detail: 'JSONL delta / full' },
  { id: 'project', label: 'Project', detail: 'gated parity' },
  { id: 'apps', label: 'Apps', detail: 'shared truth' },
] as const

/**
 * Two-column card grid — scannable path without a long vertical stack.
 */
export function DataPipelineDiagram({ caption }: DataPipelineDiagramProps) {
  return (
    <figure className="w-full space-y-5">
      <ol
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
        aria-label="Data path from Couchbase donor to product apps"
      >
        {stages.map((stage, index) => (
          <li
            key={stage.id}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
          >
            <span className="font-mono text-[11px] tabular-nums text-zinc-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-2 text-[17px] font-medium leading-snug text-[#ededed]">
              {stage.label}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-zinc-500">
              {stage.detail}
            </p>
          </li>
        ))}
      </ol>

      {caption ? (
        <figcaption className="text-[13px] leading-relaxed text-zinc-500 text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
