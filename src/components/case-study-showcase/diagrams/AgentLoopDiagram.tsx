'use client'

type AgentLoopDiagramProps = {
  caption: string
}

const steps = [
  { id: 'study', label: 'Study', detail: 'map the archive' },
  { id: 'migrate', label: 'Migrate', detail: 'move carefully' },
  { id: 'prove', label: 'Prove', detail: 'parity before cut' },
  { id: 'cut', label: 'Cut', detail: 'delete the dead path' },
] as const

const VB_W = 720
const VB_H = 188
const NODE_Y = 58
const RETURN_Y = 132
const CORNER = 14
/** Inset from edges so “Cut” / long details don’t clip at the viewBox. */
const NODE_XS = [96, 272, 448, 624] as const

/**
 * Spec canvas: horizontal loop — forward rail + return path to Study.
 * Distinct from the open migration path (no emerald; closed circuit).
 */
export function AgentLoopDiagram({ caption }: AgentLoopDiagramProps) {
  const firstX = NODE_XS[0]!
  const lastX = NODE_XS[NODE_XS.length - 1]!

  const returnPath = [
    `M ${lastX} ${NODE_Y + 10}`,
    `L ${lastX} ${RETURN_Y - CORNER}`,
    `Q ${lastX} ${RETURN_Y} ${lastX - CORNER} ${RETURN_Y}`,
    `L ${firstX + CORNER} ${RETURN_Y}`,
    `Q ${firstX} ${RETURN_Y} ${firstX} ${RETURN_Y - CORNER}`,
    `L ${firstX} ${NODE_Y + 10}`,
  ].join(' ')

  return (
    <figure className="w-full space-y-3">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Closed operating loop: Study, Migrate, Prove, Cut, then back to Study"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="loop-arrow-fwd"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0 0 L6 3 L0 6 Z" fill="rgba(255,255,255,0.4)" />
          </marker>
          <marker
            id="loop-arrow-back"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0 0 L6 3 L0 6 Z" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>

        {/* Forward rail */}
        {steps.slice(0, -1).map((step, i) => {
          const x1 = NODE_XS[i]!
          const x2 = NODE_XS[i + 1]!
          return (
            <line
              key={`fwd-${step.id}`}
              x1={x1 + 10}
              y1={NODE_Y}
              x2={x2 - 10}
              y2={NODE_Y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={1.25}
              markerEnd="url(#loop-arrow-fwd)"
            />
          )
        })}

        {/* Return path: Cut ↓ → across → ↑ Study (dashed = closes the loop) */}
        <path
          d={returnPath}
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth={1.25}
          strokeDasharray="4 5"
          markerEnd="url(#loop-arrow-back)"
        />

        <text
          x={(firstX + lastX) / 2}
          y={RETURN_Y + 26}
          textAnchor="middle"
          fill="#a1a1aa"
          fontSize={11}
          fontWeight={500}
        >
          back to Study
        </text>

        {steps.map((step, i) => {
          const x = NODE_XS[i]!
          return (
            <g key={step.id}>
              <circle
                cx={x}
                cy={NODE_Y}
                r={4.5}
                fill="rgba(255,255,255,0.55)"
              />
              <text
                x={x}
                y={NODE_Y - 20}
                textAnchor="middle"
                fill="#ededed"
                fontSize={15}
                fontWeight={500}
              >
                {step.label}
              </text>
              <text
                x={x}
                y={NODE_Y + 26}
                textAnchor="middle"
                fill="#a1a1aa"
                fontSize={12}
              >
                {step.detail}
              </text>
            </g>
          )
        })}
      </svg>

      <p className="sr-only">After Cut, the loop returns to Study.</p>

      {caption ? (
        <figcaption className="text-[13px] leading-relaxed text-zinc-400 italic text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
