'use client'

import { motion } from 'framer-motion'
import {
  heroContainerVariants,
  heroItemVariants,
} from '@/components/animations/homeStagger'
import { HomeHeroCopy } from '@/components/HeroNavPills'

export function HomeHero() {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-8 pt-6 pb-16 text-left text-xl font-medium sm:gap-10 sm:pt-8 sm:pb-20"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={heroItemVariants}>
        <HomeHeroCopy />
      </motion.div>
    </motion.div>
  )
}
