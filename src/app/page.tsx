'use client'

import ArtifactsContent from './artifacts/ArifactsContent'
import { motion } from 'framer-motion'

import Link from 'next/link'

import { heroVariants } from '@/components/animations/homeStagger'

export default function Home() {
  return (
    <>
      <motion.div
        className="mx-auto flex h-44 w-full max-w-5xl flex-col justify-center gap-4 text-center [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="font-display mx-auto flex justify-items-stretch text-center text-3xl leading-tight font-medium tracking-[-0.03em] text-white/70">
          Design and agentic engineering. <br /> Decade+ of taking ideas from
          zero to one.
        </p>
      </motion.div>

      <ArtifactsContent />
    </>
  )
}
