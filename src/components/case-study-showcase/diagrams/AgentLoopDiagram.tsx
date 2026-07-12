'use client'

type AgentLoopDiagramProps = {
  caption: string
}

const steps = [
  { id: 'study', label: 'Study', detail: 'map the donor' },
  { id: 'migrate', label: 'Migrate', detail: 'move knowledge carefully' },
  { id: 'prove', label: 'Prove', detail: 'parity before cutover' },
  { id: 'cut', label: 'Cut', detail: 'delete the dead path' },
] as const

/**
 * Two-column card grid — same figure language as the data path.
 */
export function AgentLoopDiagram({ caption }: AgentLoopDiagramProps) {
  return (
    <figure className="w-full space-y-5">
      <ol
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
        aria-label="Agentic loop: study, migrate, prove parity, cut dead path"
      >
        {steps.map((step, index) => (
          <li
            key={step.id}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
          >
            <span className="font-mono text-[11px] tabular-nums text-zinc-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-2 text-[17px] font-medium leading-snug text-[#ededed]">
              {step.label}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-zinc-500">
              {step.detail}
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
