'use client'

import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const FAB_LAYER = 110
const SCRIM_LAYER = 100

type FloatingActionMenuProps = {
  options: {
    label: string
    onClick: () => void
    Icon?: React.ReactNode
  }[]
  className?: string
  /** Where the option list opens relative to the trigger. */
  menuPlacement?: 'up' | 'down'
  /** `anchor` follows in-flow slot; `corner` pins bottom-right. */
  position?: 'anchor' | 'corner'
}

export default function FloatingActionMenu({
  options,
  className,
  menuPlacement = 'up',
  position = 'anchor',
}: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion() ?? false
  const opensDown = menuPlacement === 'down'
  const pinCorner = position === 'corner'

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    if (pinCorner) return

    const update = () => {
      const rect = anchorRef.current?.getBoundingClientRect()
      if (!rect) return
      setCoords({ top: rect.top, left: rect.left })
    }

    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [isOpen, pinCorner])

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  const headerScrimGradient =
    'linear-gradient(180deg, var(--fab-scrim) 0%, var(--fab-scrim) 15%, color-mix(in srgb, var(--fab-scrim) 92%, transparent) 26%, color-mix(in srgb, var(--fab-scrim) 78%, transparent) 36%, color-mix(in srgb, var(--fab-scrim) 60%, transparent) 46%, color-mix(in srgb, var(--fab-scrim) 42%, transparent) 55%, color-mix(in srgb, var(--fab-scrim) 26%, transparent) 64%, color-mix(in srgb, var(--fab-scrim) 13%, transparent) 73%, color-mix(in srgb, var(--fab-scrim) 5%, transparent) 82%, transparent 100%)'

  const menu = (
    <div
      className={cn('fixed', pinCorner && 'right-8 bottom-8', className)}
      style={
        pinCorner
          ? { zIndex: FAB_LAYER }
          : {
              top: coords.top,
              left: coords.left,
              zIndex: FAB_LAYER,
            }
      }
    >
      <Button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="h-10 w-10 rounded-full border border-white/30 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-[#111111d1]"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }
          }
        >
          <Plus className="h-6 w-6" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: opensDown ? -8 : 10,
                    y: opensDown ? -8 : 10,
                    filter: 'blur(10px)',
                  }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: opensDown ? -8 : 10,
                    y: opensDown ? -8 : 10,
                    filter: 'blur(10px)',
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : {
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  }
            }
            className={cn(
              'absolute',
              opensDown ? 'top-full left-0 mt-2' : 'right-0 bottom-10 mb-2',
            )}
          >
            <div
              className={cn(
                'flex flex-col gap-2',
                opensDown ? 'items-start' : 'items-end',
              )}
            >
              {options.map((option, index) => (
                <motion.div
                  key={option.label}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: opensDown ? -16 : 20 }
                  }
                  animate={
                    reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                  }
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: opensDown ? -16 : 20 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <Button
                    type="button"
                    onClick={() => {
                      option.onClick()
                      setIsOpen(false)
                    }}
                    size="sm"
                    className="flex items-center gap-2 rounded-xl border-none bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm hover:bg-[#111111d1]"
                  >
                    {option.Icon}
                    <span>{option.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const portal =
    mounted &&
    createPortal(
      <>
        <AnimatePresence>
          {isOpen ? (
            <motion.button
              key="fab-scrim"
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.12 : 0.2,
                ease: 'easeOut',
              }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 top-0 h-screen [--fab-scrim:#000000] backdrop-blur-[6px] motion-reduce:backdrop-blur-none"
              style={{
                background: headerScrimGradient,
                zIndex: SCRIM_LAYER,
              }}
            />
          ) : null}
        </AnimatePresence>
        {menu}
      </>,
      document.body,
    )

  if (pinCorner) {
    return <>{portal}</>
  }

  return (
    <>
      {/* In-flow anchor keeps layout above the hero copy */}
      <div ref={anchorRef} className="h-10 w-10 shrink-0" aria-hidden />
      {portal}
    </>
  )
}
