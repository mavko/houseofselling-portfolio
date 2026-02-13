import type { Variants } from 'framer-motion'

export const HOME_TIMING = {
  hero: 0.2,
  connect: 0.4,
  artifacts: 0.6,
}

export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.44,
      ease: 'easeOut',
      delay: HOME_TIMING.hero,
    },
  },
}

export const connectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: HOME_TIMING.connect,
    },
  },
}

export const artifactContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: HOME_TIMING.artifacts,
    },
  },
}

export const artifactItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}
