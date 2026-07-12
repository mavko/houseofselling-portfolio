'use client'

import type { DiagramVariant } from '@/content/case-study-types'

import { AgentLoopDiagram } from './AgentLoopDiagram'
import { DataPipelineDiagram } from './DataPipelineDiagram'

type CaseStudyDiagramProps = {
  variant: DiagramVariant
  caption: string
}

export function CaseStudyDiagram({ variant, caption }: CaseStudyDiagramProps) {
  switch (variant) {
    case 'data-pipeline':
      return <DataPipelineDiagram caption={caption} />
    case 'agent-loop':
      return <AgentLoopDiagram caption={caption} />
    default: {
      const _exhaustive: never = variant
      return _exhaustive
    }
  }
}
