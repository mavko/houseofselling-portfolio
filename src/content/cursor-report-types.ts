export type HeatmapLevel = 0 | 1 | 2 | 3 | 4

export type CursorReportSnapshot = {
  syncedAt: string
  profile: {
    handle: string
    displayName: string
    joinedDaysAgo: number
    cursorUrl: string
    avatarUrl?: string
  }
  stats: {
    agents: number
    longestAgentDays: number
    longestStreakDays: number
    currentStreakDays: number
    totalTokens: string
    localAgents?: number
    cloudAgents?: number
  }
  activityHeatmap: {
    months: string[]
    weekdays: string[]
    cells: { date: string; level: HeatmapLevel }[]
  }
  tokensSeries: { date: string; value: number }[]
  agentsSeries: { date: string; local: number; cloud: number }[]
  models: { rank: number; name: string; share?: number }[]
}
