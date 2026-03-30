'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { shuffleLetters } from '@/lib/shuffleLetters'

const MotionLink = motion(Link)

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href) || href.startsWith('//')
}

const PortfolioOpenHeatmapBackdrop = dynamic(
  () =>
    import('@/components/PortfolioOpenHeatmapBackdrop').then(
      (m) => m.PortfolioOpenHeatmapBackdrop,
    ),
  { ssr: false },
)

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

const rowEntranceTransition = (delaySec: number, reduceMotion: boolean) =>
  reduceMotion
    ? { duration: 0 }
    : { delay: delaySec, duration: 0.5, ease: easeOut }

const rowEntranceFilterTransition = (delaySec: number, reduceMotion: boolean) =>
  reduceMotion
    ? { duration: 0 }
    : { delay: delaySec, duration: 0.32, ease: easeOut }

export interface HoverExpandItem {
  id?: string
  label: string
  sublabel?: string
  image: string
  imageAlt?: string
  /** Merged onto the preview <img> (e.g. object-top for tall screenshots). */
  imageClassName?: string
  description?: string
  href?: string
  entranceDelaySec?: number
  hoverMedia?: 'image' | 'heatmap'
  /** When true the row stays expanded and shows its media permanently. */
  alwaysExpanded?: boolean
}

export interface HoverExpandProps {
  items: HoverExpandItem[]
  collapsedHeight?: number
  expandedHeight?: number
  className?: string
  interactionEnabled?: boolean
  reduceMotion?: boolean
  indexOffset?: number
}

const ScrambleSpan = React.memo(function ScrambleSpan({
  text,
  delaySec,
  reduceMotion,
}: {
  text: string
  delaySec: number
  reduceMotion: boolean
}) {
  const ref = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    if (reduceMotion || !ref.current) return
    const node = ref.current
    const id = setTimeout(
      () => shuffleLetters(node, { text, iterations: 6, fps: 30 }),
      delaySec * 1000,
    )
    return () => clearTimeout(id)
  }, [reduceMotion, text, delaySec])

  return <span ref={ref}>{text}</span>
})

export { ScrambleSpan }

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 220,
  className,
  interactionEnabled = true,
  reduceMotion = false,
  indexOffset = 0,
}: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (!interactionEnabled) setHoveredIndex(null)
  }, [interactionEnabled])

  const effectiveHoveredIndex = interactionEnabled ? hoveredIndex : null

  React.useEffect(() => {
    if (!interactionEnabled) return
    void import('@/components/PortfolioOpenHeatmapBackdrop')
  }, [interactionEnabled])

  return (
    <div className={cn('font-display flex w-full flex-col', className)}>
      {items.map((item, i) => {
        const isHovered = effectiveHoveredIndex === i
        const isOtherHovered = effectiveHoveredIndex !== null && !isHovered
        const delaySec = item.entranceDelaySec ?? 0
        const showMedia = item.alwaysExpanded || isHovered
        const heightTarget = item.alwaysExpanded
          ? expandedHeight
          : interactionEnabled && isHovered
            ? expandedHeight
            : collapsedHeight

        const isHeatmapRow = item.hoverMedia === 'heatmap'

        const rowContent = (
          <>
            <motion.div
              className="absolute inset-0 h-full w-full"
              initial={false}
              animate={
                isHeatmapRow
                  ? { opacity: showMedia ? 1 : 0 }
                  : {
                      opacity: showMedia ? 1 : 0,
                      scale: showMedia ? 1 : 1.06,
                    }
              }
              transition={
                isHeatmapRow
                  ? { opacity: { duration: 0.28, ease: easeOut } }
                  : {
                      opacity: { duration: 0.45, ease: easeOut },
                      scale: { duration: 0.55, ease: easeOut },
                    }
              }
            >
              {isHeatmapRow ? (
                <>
                  <motion.div
                    className="absolute inset-0"
                    initial={reduceMotion ? false : { filter: 'blur(12px)' }}
                    animate={{ filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.85,
                      delay: delaySec + 0.4,
                      ease: easeOut,
                    }}
                  >
                    <PortfolioOpenHeatmapBackdrop
                      reduceMotion={reduceMotion}
                      active={showMedia}
                      expandedHeight={expandedHeight}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? ''}
                    className={cn(
                      'h-full w-full object-cover',
                      item.imageClassName,
                    )}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                </>
              )}
            </motion.div>

            <div className="absolute inset-0 flex items-end px-5 pb-4">
              <div className="flex w-full items-center gap-3">
                <motion.span
                  className="shrink-0 text-xs tabular-nums"
                  animate={{
                    color: showMedia ? '#ffffff' : 'currentColor',
                    opacity: showMedia ? 0.5 : 0.4,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {String(indexOffset + i + 1).padStart(2, '0')}
                </motion.span>

                <motion.span
                  className="shrink-0 font-semibold tracking-tight"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1rem)' }}
                  animate={{
                    color: showMedia ? '#ffffff' : 'currentColor',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ScrambleSpan
                    text={item.label}
                    delaySec={delaySec}
                    reduceMotion={reduceMotion}
                  />
                </motion.span>

                {showMedia && item.description ? (
                  <motion.span
                    className="hidden shrink-0 text-sm text-white/70 sm:inline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.12, ease: easeOut }}
                  >
                    — {item.description}
                  </motion.span>
                ) : null}

                <motion.div
                  className="h-px min-w-3 flex-1 origin-left bg-current opacity-15"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={rowEntranceTransition(delaySec, reduceMotion)}
                  aria-hidden
                />

                {item.sublabel ? (
                  <motion.span
                    className="shrink-0 text-xs tracking-widest uppercase"
                    animate={{
                      color: showMedia
                        ? 'rgba(255,255,255,0.55)'
                        : 'currentColor',
                      opacity: showMedia ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ScrambleSpan
                      text={item.sublabel}
                      delaySec={delaySec}
                      reduceMotion={reduceMotion}
                    />
                  </motion.span>
                ) : null}
              </div>
            </div>
          </>
        )

        const motionCommon = {
          className: cn(
            'relative w-full overflow-hidden outline-none',
            item.href &&
              interactionEnabled &&
              'cursor-pointer [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-95',
            item.href &&
              !interactionEnabled &&
              'pointer-events-none cursor-default',
          ),
          initial: reduceMotion ? false : { opacity: 0, filter: 'blur(6px)' },
          animate: {
            height: heightTarget,
            opacity: isOtherHovered ? 0.38 : 1,
            filter: 'blur(0px)',
          },
          transition: {
            height: {
              type: 'spring' as const,
              stiffness: 280,
              damping: 32,
              mass: 0.9,
            },
            opacity: interactionEnabled
              ? { duration: 0.22, ease: 'easeOut' as const }
              : rowEntranceTransition(delaySec, reduceMotion),
            filter: interactionEnabled
              ? { duration: 0.22, ease: 'easeOut' as const }
              : rowEntranceFilterTransition(delaySec, reduceMotion),
          },
          onHoverStart: () => {
            if (interactionEnabled && !item.alwaysExpanded) setHoveredIndex(i)
          },
          onHoverEnd: () => {
            if (interactionEnabled && !item.alwaysExpanded)
              setHoveredIndex(null)
          },
        }

        const href = item.href

        return (
          <React.Fragment key={item.id ?? i}>
            {href ? (
              isExternalHref(href) ? (
                <motion.a
                  href={href}
                  rel="noopener noreferrer"
                  {...motionCommon}
                >
                  {rowContent}
                </motion.a>
              ) : (
                <MotionLink href={href} prefetch {...motionCommon}>
                  {rowContent}
                </MotionLink>
              )
            ) : (
              <motion.div {...motionCommon}>{rowContent}</motion.div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
