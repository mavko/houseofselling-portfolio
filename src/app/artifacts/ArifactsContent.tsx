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
import { LinkPreview } from '@/components/LinkPreview'
import type { GlassAvatarVariant } from '@/components/GlassAvatar'
import { cn } from '@/lib/utils'

/**
 * Tile radius. Larger than the older `rounded-4xl` so the frame's corners sit
 * closer to the curvature of the app icons inside it.
 */
const TILE_RADIUS = 'rounded-[3rem]'

type CraftItem = {
  type: 'image' | 'video'
  src: string
  alt: string
  post?: string
}

type ArtifactPill = {
  url: string
  avatar: GlassAvatarVariant
  label: string
}

type ArtifactTile = {
  href: string
  external?: boolean
  title: string
  caption: string
  item: CraftItem
  fullWidth?: boolean
  /** Domain pill overlaid in the bottom-left corner of the tile. */
  pill?: ArtifactPill
  /** Field-service category label overlaid in the top-left corner. */
  field?: string
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
        className={cn(
          'hidden h-full w-full border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:block',
          TILE_RADIUS,
        )}
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
      <video
        src={videoSrc}
        className={cn(
          'block h-full w-full border border-white/5 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:hidden',
          TILE_RADIUS,
        )}
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
          className={cn(
            'h-full w-full overflow-hidden border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]',
            TILE_RADIUS,
          )}
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
    href: 'https://ispect.app',
    external: true,
    title: 'iSpect',
    caption: 'Construction inspection — live product',
    field: 'enterprise inspection app',
    pill: {
      url: 'https://ispect.se',
      avatar: 'sky',
      label: 'ispect.se',
    },
    item: {
      type: 'image',
      src: '/images/ispect-icon-iteration4.jpg',
      alt: 'ispect app icon',
    },
  },
  {
    href: 'https://www.besiktningsman.se',
    external: true,
    title: 'Besiktningsman.se',
    caption: 'Family inspection firm — live site',
    field: 'certified house inspections',
    pill: {
      url: 'https://www.besiktningsman.se',
      avatar: 'bm',
      label: 'besiktningsman.se',
    },
    item: {
      type: 'image',
      src: mediaUrl('bundled/craft/bm-logo.jpg'),
      alt: 'besiktningsman.se logo',
    },
  },
  {
    href: 'https://icontrolapp.se',
    external: true,
    title: 'iControl',
    caption: 'Quality control — live product',
    field: 'enterprise quality assurance app',
    pill: {
      url: 'https://icontrolapp.se',
      avatar: 'about',
      label: 'icontrolapp.se',
    },
    item: {
      type: 'image',
      src: '/images/icontrol.png',
      alt: 'icontrol app icon',
    },
  },
  {
    href: 'https://www.dinfastighetsforvaltare.se/',
    external: true,
    title: 'Din Fastighetsförvaltare',
    caption: 'Property management — live site',
    field: 'technical property management',
    pill: {
      url: 'https://www.dinfastighetsforvaltare.se/',
      avatar: 'dff',
      label: 'dinfastighetsforvaltare.se',
    },
    item: {
      type: 'image',
      src: '/images/dff-icon.png',
      alt: 'din fastighetsförvaltare app icon',
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
            className={cn(
              'relative',
              tile.fullWidth ? 'col-span-full' : undefined,
            )}
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
            </Link>
            {tile.field ? (
              <div className="pointer-events-none absolute top-5 left-1/2 z-10 w-max max-w-[calc(100%-2.5rem)] -translate-x-1/2 text-center font-mono text-[11px] font-medium tracking-[0.12em] text-white/55 uppercase">
                {tile.field}
              </div>
            ) : null}
            {tile.pill ? (
              <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
                <LinkPreview
                  url={tile.pill.url}
                  avatar={tile.pill.avatar}
                  external
                  className="pointer-events-auto"
                >
                  {tile.pill.label}
                </LinkPreview>
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
