'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

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

export interface HoverExpandItem {
  /** Stable key for list reconciliation */
  id?: string
  label: string
  /** e.g. country, year, category */
  sublabel?: string
  image: string
  imageAlt?: string
  /** short descriptor shown when expanded */
  description?: string
  /** Optional link for the whole row */
  href?: string
  /**
   * Delay (seconds) before this row’s opacity/blur entrance — stack with list stagger.
   */
  entranceDelaySec?: number
  /** When `heatmap`, the expanded hover shows the Paper Design heatmap instead of `image`. */
  hoverMedia?: 'image' | 'heatmap'
}

export interface HoverExpandProps {
  items: HoverExpandItem[]
  /**
   * Row height when collapsed, in pixels.
   * @default 68
   */
  collapsedHeight?: number
  /**
   * Row height when expanded, in pixels.
   * @default 320
   */
  expandedHeight?: number
  className?: string
  /**
   * When false, rows stay collapsed, do not respond to hover, and use staggered entrance motion.
   * When true, hover-expand + dimming use short transitions.
   */
  interactionEnabled?: boolean
  reduceMotion?: boolean
  /**
   * Added to the visual index so multi-section lists can show 01…N across the dialog.
   */
  indexOffset?: number
}

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
    <div className={cn('font-title flex w-full flex-col', className)}>
      <div className="w-full border-t border-current opacity-15" />

      {items.map((item, i) => {
        const isHovered = effectiveHoveredIndex === i
        const isOtherHovered = effectiveHoveredIndex !== null && !isHovered
        const delaySec = item.entranceDelaySec ?? 0
        const heightTarget =
          interactionEnabled && isHovered ? expandedHeight : collapsedHeight

        const isHeatmapRow = item.hoverMedia === 'heatmap'

        const rowContent = (
          <>
            <motion.div
              className="absolute inset-0 h-full w-full"
              initial={false}
              animate={
                isHeatmapRow
                  ? { opacity: isHovered ? 1 : 0 }
                  : {
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 1.06,
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
                  <PortfolioOpenHeatmapBackdrop
                    reduceMotion={reduceMotion}
                    active={isHovered}
                    expandedHeight={expandedHeight}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? ''}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                </>
              )}
            </motion.div>

            <div className="absolute inset-0 flex items-end px-5 pb-4">
              <div className="flex w-full items-end justify-between gap-4">
                <div className="flex min-w-0 items-baseline gap-3">
                  <motion.span
                    className="shrink-0 text-xs tabular-nums opacity-40"
                    animate={{
                      color: isHovered ? '#ffffff' : 'currentColor',
                      opacity: isHovered ? 0.5 : 0.4,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {String(indexOffset + i + 1).padStart(2, '0')}
                  </motion.span>

                  <motion.span
                    className="truncate font-semibold tracking-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1rem)' }}
                    animate={{
                      color: isHovered ? '#ffffff' : 'currentColor',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>

                  {item.description ? (
                    <motion.span
                      className="hidden truncate text-sm text-white/70 sm:block"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.12 : 0,
                        ease: easeOut,
                      }}
                    >
                      — {item.description}
                    </motion.span>
                  ) : null}
                </div>

                {item.sublabel ? (
                  <motion.span
                    className="shrink-0 text-xs tracking-widest uppercase"
                    animate={{
                      color: isHovered
                        ? 'rgba(255,255,255,0.55)'
                        : 'currentColor',
                      opacity: isHovered ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.sublabel}
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
            item.href && !interactionEnabled && 'cursor-pointer',
          ),
          initial: reduceMotion ? false : { opacity: 0, filter: 'blur(10px)' },
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
              : rowEntranceTransition(delaySec, reduceMotion),
          },
          onHoverStart: () => {
            if (interactionEnabled) setHoveredIndex(i)
          },
          onHoverEnd: () => {
            if (interactionEnabled) setHoveredIndex(null)
          },
        }

        return (
          <React.Fragment key={item.id ?? i}>
            {item.href ? (
              <motion.a
                href={item.href}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                {...motionCommon}
              >
                {rowContent}
              </motion.a>
            ) : (
              <motion.div {...motionCommon}>{rowContent}</motion.div>
            )}

            <div className="w-full border-t border-current opacity-15" />
          </React.Fragment>
        )
      })}
    </div>
  )
}
