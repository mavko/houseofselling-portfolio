import type { ReactNode } from 'react'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type CursorReportShellProps = {
  children: ReactNode
  className?: string
}

export function CursorReportShell({ children, className }: CursorReportShellProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-10 text-[#ededed] md:gap-12',
        className,
      )}
    >
      {children}
    </div>
  )
}

type CursorReportCardProps = {
  children: ReactNode
  className?: string
  title?: string
}

export function CursorReportCard({
  children,
  className,
  title,
}: CursorReportCardProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:gap-5 sm:p-6',
        className,
      )}
    >
      {title ? (
        <h3 className="font-display text-sm font-semibold tracking-tight text-[#e8e6e3] font-stretch-125%">
          {title}
        </h3>
      ) : null}
      {children}
    </section>
  )
}

export function CursorReportGroup({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <CursorSectionLabel>{label}</CursorSectionLabel>
      {children}
    </div>
  )
}

export function CursorSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.12em] text-zinc-400 uppercase">
      {children}
    </p>
  )
}

export function CursorSectionDivider() {
  return <Separator className="bg-white/10" />
}
