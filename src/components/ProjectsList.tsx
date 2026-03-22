'use client'
import React, { useEffect, useRef, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import { cn } from '@/lib/utils'
import { shuffleLetters } from '@/lib/shuffleLetters'

/** Stable boolean — avoids Framer useReducedMotion() null flicker. */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      mq.addEventListener('change', onStoreChange)
      return () => mq.removeEventListener('change', onStoreChange)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}

const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

/** Seconds between rows (first row = 0 extra; rest cascade one-by-one). */
const ROW_STAGGER_SEC = 0.045
/** Shine layer starts slightly after the fill layer (same for every row). */
const LINE_LAYER_OFFSET_SEC = 0.05

const rowEnterTransition = (delay: number, reduceMotion: boolean) =>
  reduceMotion ? { duration: 0 } : { delay, duration: 0.5, ease: easeOut }

const headingTransition = (delay: number, reduceMotion: boolean) =>
  reduceMotion ? { duration: 0 } : { delay, duration: 0.25, ease: easeOut }

const current = [
  {
    id: nanoid(),
    name: 'Open',
    description: 'Available for opportunities in startups',
    href: 'https://www.linkedin.com/in/sebastianselling/',
    year: [2026, 'ongoing'],
  },
]
const projects = [
  {
    id: nanoid(),
    name: 'minibrf.se',
    description: 'Proptech for multi-tenant associations.',
    href: 'https://minibrf.se/',
    year: [2024, 'ongoing'],
  },
  {
    id: nanoid(),
    name: 'heredium.co',
    description:
      'AI Agent for analyzing real estate markets across cities (in dev)',
    href: 'https://heredium.co/',
    year: [2025, 'ongoing'],
  },
]
const business = [
  {
    id: nanoid(),
    name: 'din.fastighetsförvaltare',
    description: 'Technical Property Management',
    href: 'https://www.dinfastighetsforvaltare.se/',
    year: [2025, 'ongoing'],
  },
  {
    id: nanoid(),
    name: 'besiktningsman.se',
    description: 'Premier construction inspection agency',
    href: 'https://www.besiktningsman.se',
    year: [2017, 'ongoing'],
  },
  {
    id: nanoid(),
    name: 'drykit.co',
    description: 'Sensors that keep You and Your Home safe from Mold.',
    href: 'https://www.drykit.co',
    year: [2023, 2024],
  },
]

const startups = [
  {
    id: nanoid(),
    name: 'scribbly.ai',
    description: 'Bespoke AI transcriptions in seconds',
    href: 'https://scribbly.se/',
    year: [2024, 2025],
  },
  {
    id: nanoid(),
    name: 'icontrol',
    description: 'Replace paper with an app on the field',
    href: '/artifacts/archive/makings-of-icontrol',
    year: [2014, 2017],
  },
  {
    id: nanoid(),
    name: 'ispect',
    description: 'The standardized inspection app',
    href: '/artifacts/archive/makings-of-ispect',
    year: [2012, 2024],
  },
]

const Project: React.FC<{
  id: string
  href: string
  name: string
  description: string
  year: (string | number)[]
  /** Global order in the list — 0 = first row, no extra stagger. */
  staggerIndex: number
  entranceDelayMs: number
}> = ({ href, name, description, year, staggerIndex, entranceDelayMs }) => {
  const reduceMotion = usePrefersReducedMotion()
  const nameRef = useRef<HTMLSpanElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)
  const shuffleCleanupsRef = useRef<(() => void)[]>([])
  const baseDelaySec = entranceDelayMs / 1000
  const rowStaggerSec = staggerIndex * ROW_STAGGER_SEC
  const lineDelayAfterSec = baseDelaySec + rowStaggerSec
  const lineDelayBeforeSec =
    baseDelaySec + rowStaggerSec + LINE_LAYER_OFFSET_SEC
  const rowDelaySec = baseDelaySec + rowStaggerSec

  const yearLabel =
    year.length > 1 ? `${year[0]}-${year[year.length - 1]}` : `${year[0]}`

  useEffect(() => {
    if (reduceMotion) return
    const startMs = rowDelaySec * 1000
    shuffleCleanupsRef.current = []
    const id = window.setTimeout(() => {
      shuffleCleanupsRef.current = [
        shuffleLetters(nameRef.current, { text: name, iterations: 9 }),
        shuffleLetters(yearRef.current, { text: yearLabel, iterations: 9 }),
      ]
    }, startMs)
    return () => {
      clearTimeout(id)
      shuffleCleanupsRef.current.forEach((fn) => fn())
      shuffleCleanupsRef.current = []
    }
  }, [reduceMotion, name, yearLabel, rowDelaySec])

  const lineStyle = {
    '--line-delay-after': `${lineDelayAfterSec}s`,
    '--line-delay-before': `${lineDelayBeforeSec}s`,
  } as React.CSSProperties

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      className={cn(
        'group relative flex w-[calc(100%+0.5rem)] items-center gap-3 overflow-hidden rounded-[14px] text-sm leading-7 outline-none',
        'text-white/[0.93] transition-colors duration-150',
        '[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.06]',
      )}
      initial={reduceMotion ? false : { opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={rowEnterTransition(rowDelaySec, reduceMotion)}
    >
      <span ref={nameRef} className="inline-block shrink-0 font-medium">
        {name}
      </span>
      <span className="sr-only"> — {description}</span>
      <div
        className="project-line-track project-line-track--anim"
        style={lineStyle}
        aria-hidden
      />
      <span
        ref={yearRef}
        className="shrink-0 font-normal text-white/55 tabular-nums"
      >
        {yearLabel}
      </span>
    </motion.a>
  )
}

type ProjectsListProps = {
  /** Wait for shell (e.g. dialog panel) before list entrance + line stagger. */
  entranceDelayMs?: number
}

const ProjectsList = ({ entranceDelayMs = 350 }: ProjectsListProps) => {
  const reduceMotion = usePrefersReducedMotion()
  const baseDelaySec = entranceDelayMs / 1000

  const startupsStaggerStart = current.length
  const businessStaggerStart = startupsStaggerStart + startups.length
  const projectsStaggerStart = businessStaggerStart + business.length

  return (
    <section className="space-y-6 px-2">
      <div className="flex w-full flex-col space-y-4">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={headingTransition(baseDelaySec, reduceMotion)}
          className="items-centerfont-sans flex text-xs font-bold font-stretch-125%"
        >
          Currently
        </motion.h2>
        {current.map((project, index) => (
          <Project
            key={project.id}
            {...project}
            staggerIndex={index}
            entranceDelayMs={entranceDelayMs}
          />
        ))}
      </div>

      <div className="flex w-full flex-col space-y-4">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={headingTransition(baseDelaySec, reduceMotion)}
          className="flex items-center font-sans text-xs font-bold font-stretch-125%"
        >
          Startups
        </motion.h2>
        {startups.map((project, index) => (
          <Project
            key={project.id}
            {...project}
            staggerIndex={startupsStaggerStart + index}
            entranceDelayMs={entranceDelayMs}
          />
        ))}
      </div>
      <div className="flex w-full flex-col space-y-4">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={headingTransition(baseDelaySec, reduceMotion)}
          className="flex items-center font-sans text-xs font-bold font-stretch-125%"
        >
          Business
        </motion.h2>
        {business.map((project, index) => (
          <Project
            key={project.id}
            {...project}
            staggerIndex={businessStaggerStart + index}
            entranceDelayMs={entranceDelayMs}
          />
        ))}
      </div>
      <div className="flex w-full flex-col space-y-4">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={headingTransition(baseDelaySec, reduceMotion)}
          className="flex items-center font-sans text-xs font-bold font-stretch-125%"
        >
          Projects
        </motion.h2>
        {projects.map((project, index) => (
          <Project
            key={project.id}
            {...project}
            staggerIndex={projectsStaggerStart + index}
            entranceDelayMs={entranceDelayMs}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
