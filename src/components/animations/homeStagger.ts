import type { Variants } from 'framer-motion'

export const HOME_TIMING = {
  hero: 0.2,
  connect: 0.4,
  artifacts: 0.6,
}

/** Split hero: stagger name → role → body (critically damped). */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: HOME_TIMING.hero,
    },
  },
}

export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
      bounce: 0,
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
