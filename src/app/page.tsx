'use client'

import React from 'react'
import ArtifactsContent from './artifacts/ArifactsContent'
import DialogComponent from '@/components/Dialog'
import Link from 'next/link'
import { Shadows } from '@/components/Shadows'
import { LinkedInIcon, XIcon } from '@/components/SocialIcons'
import { motion } from 'framer-motion'
import {
  connectVariants,
  heroVariants,
} from '@/components/animations/homeStagger'

export default function Home() {
  return (
    <>
      <motion.div
        className="flex h-96 w-full items-center justify-center overflow-hidden rounded-4xl border border-white/25 [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] brightness-125 [transition-property:transform,filter] select-none [transition:.12s_var(--ease-out-quad)]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <Shadows
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 70 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </motion.div>

      <ArtifactsContent />
    </>
  )
}
