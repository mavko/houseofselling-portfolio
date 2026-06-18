'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const ACTIVITY_LEVELS = Array.from({ length: 24 }, (_, i) => {
  if (i % 5 === 0) return 2
  if (i % 3 === 0) return 1
  return 0
})

const ARTIFACT_SURFACE =
  'h-full w-full overflow-hidden rounded-4xl border border-white/10 bg-black [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]'

function activityStyle(level: number) {
  if (level === 2) {
    return {
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.45)',
    } as const
  }
  if (level === 1) {
    return {
      backgroundColor: 'rgba(255, 255, 255, 0.42)',
      boxShadow: '0 0 4px rgba(255, 255, 255, 0.22)',
    } as const
  }
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
  } as const
}

export function CursorReportArtifactTile() {
  const reduceMotion = useReducedMotion()

  return (
    <Link href="/cursor" className="group flex flex-col rounded-4xl">
      <div
        className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 ${ARTIFACT_SURFACE}`}
      >
        <div className="flex min-w-0 flex-col">
          <p className="font-display text-balance text-lg font-semibold tracking-tight text-white sm:text-xl">
            Cursor report
          </p>
        </div>
        <div className="flex shrink-0 gap-[3px]" aria-hidden>
          {ACTIVITY_LEVELS.map((level, i) => {
            const style = activityStyle(level)
            const shouldGlow = level > 0 && !reduceMotion

            return (
              <motion.span
                key={`activity-${i}`}
                className="size-2 rounded-[2px]"
                style={style}
                initial={false}
                animate={
                  shouldGlow
                    ? {
                        opacity: level === 2 ? [0.55, 1, 0.55] : [0.35, 0.8, 0.35],
                      }
                    : undefined
                }
                transition={
                  shouldGlow
                    ? {
                        duration: 2.4 + (i % 4) * 0.35,
                        repeat: Infinity,
                        ease: [0.77, 0, 0.175, 1],
                        delay: i * 0.08,
                      }
                    : undefined
                }
              />
            )
          })}
        </div>
      </div>
    </Link>
  )
}
