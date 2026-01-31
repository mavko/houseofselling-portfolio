'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'

const current = [
  {
    id: nanoid(),
    name: 'Open',
    description: 'Available for opportunities in startups',
    href: 'https://www.linkedin.com/in/sebastianselling/',
    year: [2025, 'ongoing'],
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

const shuffleLetters = (element: HTMLSpanElement | null, options = {}) => {
  const defaults = {
    text: '',
    iterations: 8,
    fps: 30,
    onComplete: (element: HTMLSpanElement) => {},
  }

  const settings = { ...defaults, ...options }

  if (!(element && element.nodeType === 1 && element instanceof Element)) {
    throw new TypeError('Expected element to be a valid HTML element.')
  }

  const characters =
    settings.text && typeof settings.text === 'string'
      ? settings.text.split('')
      : element.textContent
        ? element.textContent.split('')
        : [] // Handle potential null

  const characterMap: string[] = [] // Specify the type for characterMap
  const characterIndices: number[] = [] // Specify the type for characterIndices

  characters.forEach((char, index) => {
    if (/\s/.test(char)) {
      characterMap[index] = 'space'
    } else {
      if (/[a-z]/.test(char)) {
        characterMap[index] = 'lowerCase'
      } else if (/[A-Z]/.test(char)) {
        characterMap[index] = 'upperCase'
      } else {
        characterMap[index] = 'symbol'
      }
      characterIndices.push(index)
    }
  })

  element.textContent = ''

  let timeoutId: NodeJS.Timeout | null = null // Declare timeoutId with a specific type

  const animate = (currentIteration: number) => {
    // Specify the type for currentIteration
    const charactersCopy = [...characters]
    const totalCharacters = characterIndices.length

    if (currentIteration > totalCharacters) {
      typeof settings.onComplete === 'function' && settings.onComplete(element)
    } else {
      for (let i = Math.max(currentIteration, 0); i < totalCharacters; i += 1) {
        if (i < currentIteration + settings.iterations) {
          charactersCopy[characterIndices[i]] = getRandomCharacter(
            characterMap[characterIndices[i]],
          )
        } else {
          charactersCopy[characterIndices[i]] = ''
        }
      }

      element.textContent = charactersCopy.join('')

      timeoutId = setTimeout(() => {
        animate(currentIteration + 1)
      }, 1000 / settings.fps)
    }
  }

  animate(-settings.iterations)
  return () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
  }
}

const getRandomCharacter = (characterType: string) => {
  let characters = ''
  switch (characterType) {
    case 'lowerCase':
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
      break
    case 'upperCase':
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      break
    case 'symbol':
      characters = ',.?/\\(^)![]{}*&^%$#\'"'
      break
    default:
      characters = ''
  }
  return characters[Math.floor(Math.random() * characters.length)]
}

const Project: React.FC<{
  id: string
  href: string
  name: string
  description: string
  year: (string | number)[]
  index: number
}> = ({ id, href, name, description, year, index }) => {
  const nameRef = useRef<HTMLSpanElement>(null)
  const descriptionRef = useRef<HTMLSpanElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    shuffleLetters(nameRef.current, { iterations: 10 })
    shuffleLetters(descriptionRef.current, { iterations: 10 })
    shuffleLetters(yearRef.current, { iterations: 10 })
  }, [])

  const delay = 0.1 * index

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      className="relative -m-3 flex w-[calc(100%+2rem)] items-center gap-3 overflow-hidden rounded-2xl p-2 text-base outline-hidden transition-colors hover:bg-white/10 hover:ring-1 hover:ring-white/15 hover:backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span ref={nameRef} className="inline-block pr-3 font-medium text-white">
        {name}
      </span>

      <span
        ref={descriptionRef}
        className="-ml-2 hidden text-white/60 sm:inline-block"
      >
        {description}
      </span>
      <motion.div className="relative flex-1">
        <motion.span
          className="absolute bottom-0 left-0 h-px w-0 bg-white/30"
          animate={{ width: '100%' }}
          transition={{ delay: 0.05 * index, duration: 1, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute bottom-0 left-0 z-10 h-px w-0 bg-white/30"
          animate={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0)' }}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          transition={{ delay, duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>
      <span ref={yearRef} className="justify-end text-[#e8e6e3]">
        {year.length > 1 ? `${year[0]}-${year[year.length - 1]}` : year[0]}
      </span>
    </motion.a>
  )
}

const ProjectsList = () => {
  return (
    <section className="space-y-3">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="-m-3 mt-5 mb-2 flex items-center p-2 text-base font-bold"
      >
        Currently
      </motion.h2>
      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-7">
        {current.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="-m-3 mt-5 mb-2 flex items-center p-2 text-base font-bold"
      >
        Startups
      </motion.h2>

      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-7">
        {startups.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="-m-3 mt-5 mb-2 flex items-center p-2 text-base font-bold"
      >
        Business
      </motion.h2>
      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-7">
        {business.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="-m-3 mt-5 mb-2 flex items-center p-2 text-base font-bold"
      >
        Projects
      </motion.h2>
      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-7">
        {projects.map((project, index) => (
          <Project key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
