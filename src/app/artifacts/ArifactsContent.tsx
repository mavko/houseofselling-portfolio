'use client'

import { useCallback, useRef, useState } from 'react'
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

type ArtifactTile = {
  href: string
  external?: boolean
  title: string
  caption: string
  item: CraftItem
  fullWidth?: boolean
}

function DeferredVideo({ src }: { src: string }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setContainerRef = useCallback(
    (el: HTMLDivElement | null) => {
      observerRef.current?.disconnect()
      observerRef.current = null
      if (!el || shouldLoad) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
            observerRef.current = null
          }
        },
        { rootMargin: '200px' },
      )
      observer.observe(el)
      observerRef.current = observer
    },
    [shouldLoad],
  )

  const videoSrc = shouldLoad ? src : undefined

  return (
    <div ref={setContainerRef}>
      <video
        src={videoSrc}
        className="hidden h-full w-full rounded-4xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:block"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
      <video
        src={videoSrc}
        className="block h-full w-full rounded-4xl border border-white/5 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:hidden"
        autoPlay
        muted
        playsInline
        controls
      >
        <track kind="captions" />
      </video>
    </div>
  )
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
  return <DeferredVideo src={item.src} />
}

const ARTIFACT_TILES: ArtifactTile[] = [
  {
    href: 'https://www.besiktningsman.se',
    external: true,
    title: 'Besiktningsman.se',
    caption: 'Family inspection firm — live site',
    item: {
      type: 'image',
      src: mediaUrl('bundled/craft/bm-logo.jpg'),
      alt: 'besiktningsman.se logo',
    },
  },
  {
    href: 'https://ispect.app',
    external: true,
    title: 'iSpect',
    caption: 'Construction inspection — live product',
    item: {
      type: 'image',
      src: '/images/ispect-icon-iteration4.jpg',
      alt: 'ispect app icon',
    },
  },
  {
    href: '/artifacts/makings-of-ispect',
    title: 'Makings of iSpect',
    caption: '12-year product rebuild — case study',
    fullWidth: true,
    item: {
      type: 'video',
      src: '/ispect-landing-new.mp4',
      alt: 'Makings of iSpect landing craft',
    },
  },
  {
    href: '/artifacts/makings-of-sitesnap',
    title: 'Makings of SiteSnap',
    caption: '60-second construction daily log',
    fullWidth: true,
    item: {
      type: 'video',
      src: '/sitesnap-landing.mp4',
      alt: 'Makings of SiteSnap product overview',
    },
  },
  {
    href: '/artifacts/makings-of-icontrol',
    title: 'Makings of iControl',
    caption: 'Sole designer — from pitch to field',
    fullWidth: true,
    item: {
      type: 'image',
      src: mediaUrl('bundled/craft/icontrol-header.jpg'),
      alt: 'icontrol logo',
    },
  },
]

export default function ArtifactsContent() {
  return (
    <main className="mx-auto max-w-5xl">
      <motion.div
        className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
        variants={artifactContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {ARTIFACT_TILES.map((tile) => (
          <motion.div
            key={tile.href}
            className={tile.fullWidth ? 'col-span-full' : undefined}
            variants={artifactItemVariants}
          >
            <Link
              href={tile.href}
              className="group flex flex-col rounded-4xl"
              {...(tile.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <MediaComponent item={tile.item} />
              <div className="mt-3 px-1.5 pb-1">
                <p className="font-display text-[15px] font-semibold tracking-tight text-[#e8e6e3]">
                  {tile.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-zinc-500">
                  {tile.caption}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
