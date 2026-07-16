'use client'

import Link from 'next/link'
import { SafeImage } from '@/components/SafeImage'
import { motion } from 'framer-motion'
import { mediaUrl } from '@/lib/media-url'
import {
  artifactContainerVariants,
  artifactItemVariants,
} from '@/components/animations/homeStagger'
type CraftItem = {
  type: 'image' | 'video'
  src: string
  alt: string
  post?: string
}

const MediaComponent = ({ item }: { item: CraftItem }) => {
  if (item.type === 'image') {
    return (
      <div>
        <SafeImage
          src={item.src}
          alt={item.alt}
          className="h-full w-full overflow-hidden rounded-4xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
          preload
          width={1200}
          height={800}
        />
      </div>
    )
  }
  return (
    <>
      <video
        src={item.src}
        className="hidden h-full w-full rounded-4xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:block"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
      <video
        src={item.src}
        className="block h-full w-full rounded-4xl border border-white/5 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:hidden"
        autoPlay
        muted
        playsInline
        controls
      >
        <track kind="captions" />
      </video>
    </>
  )
}

export default function ArtifactsContent() {
  return (
    <main className="mx-auto max-w-5xl">
      <motion.div
        className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
        variants={artifactContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1st item: bmLogo */}
        <motion.div variants={artifactItemVariants}>
          <Link
            href="https://www.besiktningsman.se"
            className="group flex flex-col rounded-4xl"
            target="_blank"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/bm-logo.jpg'),
                alt: 'besiktningsman.se logo',
              }}
            />
          </Link>
        </motion.div>
        {/* 2nd item: ispect app icon */}
        <motion.div variants={artifactItemVariants}>
          <Link
            href="https://ispect.app"
            className="group flex flex-col rounded-4xl"
            target="_blank"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: '/images/ispect-icon-iteration4.jpg',
                alt: 'ispect app icon',
              }}
            />
          </Link>
        </motion.div>
        {/* 10th item: ispectLogo with link */}
        <motion.div className="col-span-full" variants={artifactItemVariants}>
          <Link
            href="/artifacts/makings-of-ispect"
            className="group flex flex-col rounded-4xl"
          >
            <MediaComponent
              item={{
                type: 'video',
                src: '/ispect-landing-new.mp4',
                alt: 'read: makings of ispect↗',
              }}
            />
          </Link>
        </motion.div>
        {/* 5th item: icontrol */}
        <motion.div className="col-span-full" variants={artifactItemVariants}>
          <Link
            href="/artifacts/makings-of-icontrol"
            className="group flex flex-col overflow-hidden bg-[rgba(48,48,48,.3)]"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/icontrol-header.jpg'),
                alt: 'icontrol logo',
              }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
