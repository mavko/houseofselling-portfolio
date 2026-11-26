'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import {
  heroContainerVariants,
  heroItemVariants,
} from '@/components/animations/homeStagger'

export function HomeHero({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-8 pt-6 text-left text-xl font-medium sm:gap-10 sm:pt-8"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={heroItemVariants}
        className="pointer-events-auto w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
