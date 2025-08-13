import React from 'react'
import ArtifactsContent from './artifacts/ArifactsContent'
import DialogComponent from '@/components/Dialog'
import Link from 'next/link'
import { Shadows } from '@/components/Shadows'

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center border border-white/10">
        <Shadows
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      <ArtifactsContent />
    </>
  )
}
