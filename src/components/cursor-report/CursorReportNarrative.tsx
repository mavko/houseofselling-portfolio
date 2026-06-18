import { CURSOR_REPORT_NARRATIVE } from '@/content/cursor-report-narrative'

import { CursorReportCard } from './CursorReportShell'
import { CursorReportScannableList } from './CursorReportScannableList'

const FULL_WIDTH_SECTIONS = new Set(['one-liner', 'building'])

export function CursorReportNarrative() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
        {CURSOR_REPORT_NARRATIVE.map((section) => (
          <CursorReportCard
            key={section.id}
            title={section.title}
            className={FULL_WIDTH_SECTIONS.has(section.id) ? 'sm:col-span-2' : undefined}
          >
            {section.body ? (
              <p
                className={
                  section.id === 'one-liner' || section.id === 'building'
                    ? 'text-sm leading-relaxed text-[#ededed]'
                    : 'text-sm leading-relaxed text-zinc-400'
                }
              >
                {section.body}
              </p>
            ) : null}
            {section.items ? (
              <CursorReportScannableList items={section.items} />
            ) : null}
          </CursorReportCard>
        ))}
    </div>
  )
}
