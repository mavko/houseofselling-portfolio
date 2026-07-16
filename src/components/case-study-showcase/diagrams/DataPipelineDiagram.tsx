'use client'

type DataPipelineDiagramProps = {
  caption: string
  /** Vertical fits a half-width column; horizontal for full measure. */
  orientation?: 'horizontal' | 'vertical'
}

const stages = [
  {
    id: 'source',
    label: 'Couchbase',
    detail: 'archive stays',
    role: 'Donor',
    live: false,
  },
  {
    id: 'export',
    label: 'Export',
    detail: 'copy the records',
    role: 'Move',
    live: false,
  },
  {
    id: 'project',
    label: 'Project',
    detail: 'check before go-live',
    role: 'Gate',
    live: false,
  },
  {
    id: 'apps',
    label: 'Apps',
    detail: 'shared truth',
    role: 'Live',
    live: true,
  },
] as const

/**
 * Spec canvas: open stroke path. Emerald only on the live end.
 */
export function DataPipelineDiagram({
  caption,
  orientation = 'horizontal',
}: DataPipelineDiagramProps) {
  return (
    <figure className="w-full space-y-3">
      {orientation === 'vertical' ? (
        <VerticalPipeline />
      ) : (
        <HorizontalPipeline />
      )}

      {caption ? (
        <figcaption className="text-[13px] leading-relaxed text-zinc-400 italic text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function HorizontalPipeline() {
  const VB_W = 720
  const VB_H = 168
  const NODE_Y = 72
  const NODE_XS = [72, 264, 456, 648] as const

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Data path from Couchbase donor to product apps: Couchbase, Export, Project, then Apps live"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker
          id="pipeline-arrow-h"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="rgba(255,255,255,0.35)" />
        </marker>
        <marker
          id="pipeline-arrow-h-live"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="#34d399" />
        </marker>
      </defs>

      {stages.slice(0, -1).map((stage, i) => {
        const x1 = NODE_XS[i]!
        const x2 = NODE_XS[i + 1]!
        const toLive = stages[i + 1]?.live === true
        return (
          <line
            key={`seg-${stage.id}`}
            x1={x1 + 10}
            y1={NODE_Y}
            x2={x2 - 10}
            y2={NODE_Y}
            stroke={toLive ? '#34d399' : 'rgba(255,255,255,0.2)'}
            strokeWidth={1.25}
            markerEnd={
              toLive ? 'url(#pipeline-arrow-h-live)' : 'url(#pipeline-arrow-h)'
            }
          />
        )
      })}

      {stages.map((stage, i) => {
        const x = NODE_XS[i]!
        return (
          <PipelineNode
            key={stage.id}
            stage={stage}
            cx={x}
            cy={NODE_Y}
            labelAnchor="middle"
            roleY={NODE_Y - 28}
            labelY={NODE_Y + 28}
            detailY={NODE_Y + 48}
          />
        )
      })}
    </svg>
  )
}

function VerticalPipeline() {
  const VB_W = 320
  const VB_H = 340
  const NODE_X = 28
  const NODE_YS = [36, 120, 204, 288] as const
  const TEXT_X = 52

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-auto w-full max-w-[320px]"
      role="img"
      aria-label="Data path from Couchbase donor to product apps: Couchbase, Export, Project, then Apps live"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker
          id="pipeline-arrow-v"
          markerWidth="8"
          markerHeight="8"
          refX="3"
          refY="6"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0 0 L3 6 L6 0 Z" fill="rgba(255,255,255,0.35)" />
        </marker>
        <marker
          id="pipeline-arrow-v-live"
          markerWidth="8"
          markerHeight="8"
          refX="3"
          refY="6"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0 0 L3 6 L6 0 Z" fill="#34d399" />
        </marker>
      </defs>

      {stages.slice(0, -1).map((stage, i) => {
        const y1 = NODE_YS[i]!
        const y2 = NODE_YS[i + 1]!
        const toLive = stages[i + 1]?.live === true
        return (
          <line
            key={`seg-${stage.id}`}
            x1={NODE_X}
            y1={y1 + 10}
            x2={NODE_X}
            y2={y2 - 10}
            stroke={toLive ? '#34d399' : 'rgba(255,255,255,0.2)'}
            strokeWidth={1.25}
            markerEnd={
              toLive ? 'url(#pipeline-arrow-v-live)' : 'url(#pipeline-arrow-v)'
            }
          />
        )
      })}

      {stages.map((stage, i) => {
        const y = NODE_YS[i]!
        return (
          <g key={stage.id}>
            <circle
              cx={NODE_X}
              cy={y}
              r={4.5}
              fill={stage.live ? '#34d399' : 'rgba(255,255,255,0.55)'}
            />
            <text
              x={TEXT_X}
              y={y - 8}
              fill={stage.live ? '#6ee7b7' : '#a1a1aa'}
              fontSize={11}
              fontWeight={500}
            >
              {stage.role}
            </text>
            <text
              x={TEXT_X}
              y={y + 10}
              fill={stage.live ? '#a7f3d0' : '#ededed'}
              fontSize={15}
              fontWeight={500}
            >
              {stage.label}
            </text>
            <text x={TEXT_X} y={y + 28} fill="#a1a1aa" fontSize={12}>
              {stage.detail}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function PipelineNode({
  stage,
  cx,
  cy,
  labelAnchor,
  roleY,
  labelY,
  detailY,
}: {
  stage: (typeof stages)[number]
  cx: number
  cy: number
  labelAnchor: 'middle' | 'start'
  roleY: number
  labelY: number
  detailY: number
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={4.5}
        fill={stage.live ? '#34d399' : 'rgba(255,255,255,0.55)'}
      />
      <text
        x={cx}
        y={roleY}
        textAnchor={labelAnchor}
        fill={stage.live ? '#6ee7b7' : '#a1a1aa'}
        fontSize={11}
        fontWeight={500}
      >
        {stage.role}
      </text>
      <text
        x={cx}
        y={labelY}
        textAnchor={labelAnchor}
        fill={stage.live ? '#a7f3d0' : '#ededed'}
        fontSize={15}
        fontWeight={500}
      >
        {stage.label}
      </text>
      <text
        x={cx}
        y={detailY}
        textAnchor={labelAnchor}
        fill="#a1a1aa"
        fontSize={12}
      >
        {stage.detail}
      </text>
    </g>
  )
}
