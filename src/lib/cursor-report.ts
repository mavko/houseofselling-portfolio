import cursorReportSnapshot from '@/generated/cursor-report.json'

import type { CursorReportSnapshot } from '@/content/cursor-report-types'

export function getCursorReportSnapshot(): CursorReportSnapshot {
  return cursorReportSnapshot as CursorReportSnapshot
}
