import type { CursorReportSnapshot } from '@/content/cursor-report-types'

import { CursorAgentsChart } from './CursorAgentsChart'
import { CursorModelList } from './CursorModelList'
import { CursorReportHeader } from './CursorReportHeader'
import { CursorReportNarrative } from './CursorReportNarrative'
import {
  CursorReportCard,
  CursorReportGroup,
  CursorReportShell,
} from './CursorReportShell'
import { CursorTimeSeriesChart } from './CursorTimeSeriesChart'
import { formatChartRange } from '@/lib/cursor-report-format'

type CursorReportPageProps = {
  snapshot: CursorReportSnapshot
}

export function CursorReportPage({ snapshot }: CursorReportPageProps) {
  const chartRange = formatChartRange(snapshot.tokensSeries)

  return (
    <CursorReportShell>
      <CursorReportHeader profile={snapshot.profile} />

      <CursorReportNarrative />

      <CursorReportGroup label="Activity">
        <div className="grid gap-4 lg:grid-cols-2">
          <CursorReportCard>
            <CursorTimeSeriesChart
              title="Tokens"
              subtitle={snapshot.stats.totalTokens}
              points={snapshot.tokensSeries}
              startLabel={chartRange.start}
              endLabel={chartRange.end}
            />
          </CursorReportCard>
          <CursorReportCard>
            <CursorAgentsChart
              subtitle={`${snapshot.stats.agents.toLocaleString()} agents`}
              points={snapshot.agentsSeries}
              localTotal={snapshot.stats.localAgents}
              cloudTotal={snapshot.stats.cloudAgents}
              startLabel={chartRange.start}
              endLabel={chartRange.end}
            />
          </CursorReportCard>
        </div>
      </CursorReportGroup>

      <CursorReportCard title="Models">
        <CursorModelList models={snapshot.models} />
      </CursorReportCard>
    </CursorReportShell>
  )
}
