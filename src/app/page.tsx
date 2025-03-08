import React from 'react'
import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/dither.avif'
import houseofselling from '@/images/houseofselling-entry.png'
import ArtifactsContent from './artifacts/ArifactsContent'
import { ForwardIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <>
      <div className="border-t border-white/[7.5%] px-4 sm:px-6">
        <div className="mx-auto max-w-7xl px-2 py-16 lg:py-24">
          <h1 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-[length:clamp(2rem,3.75vw,3rem)]/tight">
            Sebastian Selling - Designer, web artisan and entrepreneur. Decade's
            experience with taking ideas from zero to one.
          </h1>
        </div>
      </div>

      <ArtifactsContent />
    </>
  )
}
