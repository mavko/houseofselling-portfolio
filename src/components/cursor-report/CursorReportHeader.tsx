import { ExternalLink } from 'lucide-react'

import type { CursorReportSnapshot } from '@/content/cursor-report-types'

type CursorReportHeaderProps = {
  profile: CursorReportSnapshot['profile']
}

export function CursorReportHeader({ profile }: CursorReportHeaderProps) {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 flex-col gap-2">
        <h1 className="font-display text-3xl font-medium tracking-tight text-[#e8e6e3] font-stretch-125% sm:text-4xl">
          Cursor report
        </h1>
        <p className="text-base/9 text-[#ededed]">
          {profile.displayName} · @{profile.handle}
        </p>
      </div>
      <a
        href={profile.cursorUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-white/70 px-4 text-sm font-semibold text-zinc-950 transition-[transform,background-color] hover:bg-white/80 active:scale-[0.96]"
      >
        Cursor profile
        <ExternalLink className="size-3.5 opacity-60" aria-hidden />
      </a>
    </header>
  )
}
