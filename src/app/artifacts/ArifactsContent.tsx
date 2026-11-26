'use client'

import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { SafeImage } from '@/components/SafeImage'
import { LinkPreview } from '@/components/LinkPreview'
import { motion } from 'framer-motion'
import { PROJECT_PILLS, type ProjectPill } from '@/content/project-pills'
import { mediaUrl } from '@/lib/media-url'
import {
  artifactContainerVariants,
  artifactItemVariants,
} from '@/components/animations/homeStagger'
import { cn } from '@/lib/utils'

/**
 * Tile radius. Larger than the older `rounded-4xl` so the frame's corners sit
 * closer to the curvature of the app icons inside it.
 */
const TILE_RADIUS = 'rounded-[3rem]'

function DividerLine({ side }: { side: 'left' | 'right' }) {
  return (
    <span
      aria-hidden
      className="h-px flex-1"
      style={{
        background:
          side === 'left'
            ? 'linear-gradient(to right, transparent, rgba(255,255,255,0.85) 55%, transparent)'
            : 'linear-gradient(to left, transparent, rgba(255,255,255,0.85) 55%, transparent)',
      }}
    />
  )
}

function SectionTitle() {
  return (
    <div className="mb-[4.8rem] flex w-full items-center gap-6 sm:mb-[6.4rem]">
      <DividerLine side="left" />
      <h2 className="shrink-0 text-center text-sm leading-[1.6] font-medium text-pretty text-[#ededed]">
        What I&apos;m working on
      </h2>
      <DividerLine side="right" />
    </div>
  )
}

type CraftItem = {
  type: 'image' | 'video'
  src: string
  alt: string
  post?: string
  /** Above-the-fold LCP candidate — hint the browser to fetch it first. */
  lcp?: boolean
}

type ArtifactTile = {
  href: string
  external?: boolean
  title: string
  caption: string
  item: CraftItem
  fullWidth?: boolean
  /** Domain pill overlaid in the bottom-left corner of the tile. */
  pill?: ProjectPill
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
          loading={item.lcp ? 'eager' : 'lazy'}
          fetchPriority={item.lcp ? 'high' : 'auto'}
          width={1200}
          height={800}
          sizes="(min-width: 1024px) 508px, (min-width: 640px) 50vw, 100vw"
          quality={70}
        />
      </div>
    )
  }
  return <DeferredVideo src={item.src} />
}

const ARTIFACT_TILES: ArtifactTile[] = [
  {
    href: 'https://ispect.se',
    external: true,
    title: 'iSpect',
    caption: 'Construction inspection — live product',
    pill: PROJECT_PILLS[0],
    item: {
      type: 'image',
      src: '/images/ispect-icon-iteration4.jpg',
      alt: 'ispect app icon',
      lcp: true,
    },
  },
  {
    href: 'https://www.besiktningsman.se',
    external: true,
    title: 'Besiktningsman.se',
    caption: 'Family inspection firm — live site',
    pill: PROJECT_PILLS[1],
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
    pill: PROJECT_PILLS[2],
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
    pill: PROJECT_PILLS[3],
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
    <main className="mx-auto max-w-5xl pt-[4.8rem] sm:pt-[6.4rem]">
      <SectionTitle />
      <motion.div
        className="grid grid-cols-1 gap-2 sm:grid-cols-2"
        variants={artifactContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {ARTIFACT_TILES.map((tile, index) => (
          <motion.div
            key={tile.href}
            className={cn(
              'relative',
              tile.fullWidth ? 'col-span-full' : undefined,
            )}
            // The first tile holds the LCP image — leave it painted so it is
            // never gated behind the intro animation. The rest still stagger.
            variants={index === 0 ? undefined : artifactItemVariants}
          >
            <Link
              href={tile.href}
              className={cn('group flex flex-col', TILE_RADIUS)}
              {...(tile.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              // Video tiles have no text/alt child, so give the link a name.
              {...(tile.item.type === 'video'
                ? { 'aria-label': tile.title }
                : {})}
            >
              <MediaComponent item={tile.item} />
            </Link>
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
