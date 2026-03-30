'use client'
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import icontrolHeader from '@/images/craft/icontrol-header.jpg'
import ispectHeader from '@/images/craft/ispect-header.jpg'
import { cn } from '@/lib/utils'
import { shuffleLetters } from '@/lib/shuffleLetters'
import {
  HoverExpand,
  type HoverExpandItem,
} from '@/components/unlumen-ui/hover-expand'

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
/** Last row opacity entrance duration — must match HoverExpand row entrance. */
const ROW_ENTER_DURATION_SEC = 0.5
const INTRO_END_BUFFER_MS = 80

const headingTransition = (delay: number, reduceMotion: boolean) =>
  reduceMotion ? { duration: 0 } : { delay, duration: 0.25, ease: easeOut }

function ScrambleHeading({
  text,
  delaySec,
  reduceMotion,
  className,
}: {
  text: string
  delaySec: number
  reduceMotion: boolean
  className?: string
}) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (reduceMotion || !ref.current) return
    const node = ref.current
    const id = setTimeout(
      () => shuffleLetters(node, { text, iterations: 6, fps: 30 }),
      delaySec * 1000,
    )
    return () => clearTimeout(id)
  }, [reduceMotion, text, delaySec])

  return (
    <motion.h2
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={headingTransition(delaySec, reduceMotion)}
      className={className}
    >
      {text}
    </motion.h2>
  )
}

type ProjectEntry = {
  id: string
  name: string
  description: string
  href: string
  year: (string | number)[]
  image: string | StaticImageData
  imageAlt: string
  hoverMedia?: 'image' | 'heatmap'
  imageClassName?: string
}

const current: ProjectEntry[] = [
  {
    id: 'project-open',
    name: 'Open',
    description: 'Available for opportunities in startups',
    href: 'https://www.linkedin.com/in/sebastianselling/',
    year: [2026, 'ongoing'],
    image: '/images/projects/open.svg',
    imageAlt: 'Open — available for startup opportunities',
    hoverMedia: 'heatmap',
  },
]

const projectsData: ProjectEntry[] = [
  {
    id: 'project-minibrf-se',
    name: 'minibrf.se',
    description: 'Proptech for multi-tenant associations.',
    href: 'https://minibrf.se/',
    year: [2024, 'RETIRED 2026'],
    image: '/images/projects/minibrf-se.svg',
    imageAlt: 'minibrf.se project preview',
  },
  {
    id: 'project-heredium-co',
    name: 'heredium.co',
    description:
      'AI Agent for analyzing real estate markets across cities (in dev)',
    href: 'https://heredium.co/',
    year: [2025, 'RETIRED 2026'],
    image: '/images/projects/heredium-co.svg',
    imageAlt: 'heredium.co project preview',
  },
]

const business: ProjectEntry[] = [
  {
    id: 'project-din-fastighetsforvaltare',
    name: 'din.fastighetsförvaltare',
    description: 'Technical Property Management',
    href: 'https://www.dinfastighetsforvaltare.se/',
    year: [2025, 'ongoing'],
    image: '/images/projects/din-fastighetsforvaltare.png',
    imageAlt: 'din.fastighetsförvaltare project preview',
  },
  {
    id: 'project-besiktningsman-se',
    name: 'besiktningsman.se',
    description: 'Premier construction inspection agency',
    href: 'https://www.besiktningsman.se',
    year: [2017, 'ongoing'],
    image: '/images/projects/besiktningsman-se.png',
    imageAlt: 'besiktningsman.se project preview',
  },
  {
    id: 'project-drykit-co',
    name: 'drykit.co',
    description: 'Sensors that keep You and Your Home safe from Mold.',
    href: 'https://www.drykit.co',
    year: [2023, 2024],
    image: '/images/projects/drykit-co.png',
    imageAlt: 'drykit.co project preview',
  },
]

const startups: ProjectEntry[] = [
  {
    id: 'project-scribbly-ai',
    name: 'scribbly.ai',
    description: 'Bespoke AI transcriptions in seconds',
    href: 'https://scribbly.se/',
    year: [2024, 2025],
    image: '/images/projects/scribbly-hover.png',
    imageAlt: 'scribbly.ai — automated transcriptions in seconds',
    imageClassName: 'object-top',
  },
  {
    id: 'project-icontrol',
    name: 'icontrol',
    description: 'Replace paper with an app on the field',
    href: '/artifacts/archive/makings-of-icontrol',
    year: [2014, 2017],
    image: icontrolHeader,
    imageAlt: 'icontrol banner',
    imageClassName: 'object-center',
  },
  {
    id: 'project-ispect',
    name: 'ispect',
    description: 'The standardized inspection app',
    href: '/artifacts/archive/makings-of-ispect',
    year: [2012, 2024],
    image: ispectHeader,
    imageAlt: 'read: makings of ispect — header',
    imageClassName: 'object-center',
  },
]

const TOTAL_ROW_COUNT =
  current.length + startups.length + business.length + projectsData.length

function yearLabel(year: (string | number)[]): string {
  return year.length > 1 ? `${year[0]}-${year[year.length - 1]}` : `${year[0]}`
}

function toHoverExpandItem(
  project: ProjectEntry,
  globalStaggerIndex: number,
  entranceDelayMs: number,
): HoverExpandItem {
  const baseDelaySec = entranceDelayMs / 1000
  const rowStaggerSec = globalStaggerIndex * ROW_STAGGER_SEC
  return {
    id: project.id,
    label: project.name,
    description: project.description,
    sublabel: yearLabel(project.year),
    image: project.image,
    imageAlt: project.imageAlt,
    href: project.href,
    entranceDelaySec: baseDelaySec + rowStaggerSec,
    hoverMedia: project.hoverMedia,
    imageClassName: project.imageClassName,
  }
}

type ProjectsListProps = {
  /** Wait for shell (e.g. dialog panel) before list entrance + line stagger. */
  entranceDelayMs?: number
}

const ProjectsList = ({ entranceDelayMs = 350 }: ProjectsListProps) => {
  const reduceMotion = usePrefersReducedMotion()
  const baseDelaySec = entranceDelayMs / 1000
  const [interactionEnabled, setInteractionEnabled] = useState(reduceMotion)

  const startupsStaggerStart = current.length
  const businessStaggerStart = startupsStaggerStart + startups.length
  const projectsStaggerStart = businessStaggerStart + business.length

  useEffect(() => {
    if (reduceMotion) {
      setInteractionEnabled(true)
      return
    }
    setInteractionEnabled(false)
    const lastRowDelaySec =
      entranceDelayMs / 1000 + (TOTAL_ROW_COUNT - 1) * ROW_STAGGER_SEC
    const ms =
      (lastRowDelaySec + ROW_ENTER_DURATION_SEC) * 1000 + INTRO_END_BUFFER_MS
    const id = window.setTimeout(() => setInteractionEnabled(true), ms)
    return () => clearTimeout(id)
  }, [entranceDelayMs, reduceMotion])

  const hoverCommon = {
    interactionEnabled,
    reduceMotion,
    collapsedHeight: 64,
    expandedHeight: 260,
    className: 'text-white/[0.93]',
  } as const

  return (
    <section className={cn('space-y-6 px-2')}>
      <div className="flex w-full flex-col space-y-3">
        <ScrambleHeading
          text="Currently"
          delaySec={baseDelaySec}
          reduceMotion={reduceMotion}
          className="font-display flex items-center text-xs font-bold font-stretch-125%"
        />
        <HoverExpand
          {...hoverCommon}
          indexOffset={0}
          items={current.map((project, index) => ({
            ...toHoverExpandItem(project, index, entranceDelayMs),
            alwaysExpanded: true,
          }))}
        />
      </div>

      <div className="flex w-full flex-col space-y-3">
        <ScrambleHeading
          text="Startups"
          delaySec={baseDelaySec}
          reduceMotion={reduceMotion}
          className="font-display flex items-center text-xs font-bold font-stretch-125%"
        />
        <HoverExpand
          {...hoverCommon}
          indexOffset={startupsStaggerStart}
          items={startups.map((project, index) =>
            toHoverExpandItem(
              project,
              startupsStaggerStart + index,
              entranceDelayMs,
            ),
          )}
        />
      </div>
      <div className="flex w-full flex-col space-y-3">
        <ScrambleHeading
          text="Business"
          delaySec={baseDelaySec}
          reduceMotion={reduceMotion}
          className="font-display flex items-center text-xs font-bold font-stretch-125%"
        />
        <HoverExpand
          {...hoverCommon}
          indexOffset={businessStaggerStart}
          items={business.map((project, index) =>
            toHoverExpandItem(
              project,
              businessStaggerStart + index,
              entranceDelayMs,
            ),
          )}
        />
      </div>
      <div className="flex w-full flex-col space-y-3">
        <ScrambleHeading
          text="Projects"
          delaySec={baseDelaySec}
          reduceMotion={reduceMotion}
          className="font-display flex items-center text-xs font-bold font-stretch-125%"
        />
        <HoverExpand
          {...hoverCommon}
          indexOffset={projectsStaggerStart}
          items={projectsData.map((project, index) =>
            toHoverExpandItem(
              project,
              projectsStaggerStart + index,
              entranceDelayMs,
            ),
          )}
        />
      </div>
    </section>
  )
}

export default ProjectsList
