'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

import {
  CHROME_BORDER_GRADIENT,
  GlassAvatar,
  type GlassAvatarVariant,
} from '@/components/GlassAvatar'
import { cn } from '@/lib/utils'

type LinkPreviewProps = {
  children: ReactNode
  url: string
  avatar: GlassAvatarVariant
  className?: string
  /** Open in a new tab (external destinations). */
  external?: boolean
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url) || url.startsWith('//')
}

const shellClass =
  'group relative z-0 mx-1 inline-flex max-w-full align-middle rounded-full p-px no-underline transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:hover:scale-100 [@media(hover:hover)_and_(pointer:fine)]:hover:z-10 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03]'

const innerClass =
  'relative z-10 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#141417] py-1 pr-2.5 pl-1 text-[length:inherit] font-medium leading-none text-white'

/**
 * Inline pill link with a brand-colored glass avatar (no hover screenshot card).
 * Hover: chrome conic border spins in the avatar tint.
 */
export function LinkPreview({
  children,
  url,
  avatar,
  className,
  external,
}: LinkPreviewProps) {
  const openExternal = external ?? isExternalUrl(url)

  const content = (
    <>
      {/* Idle border */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-white/30 transition-opacity duration-150 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-0"
        aria-hidden
      />
      {/* Chrome gradient border — spins on hover */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-0 transition-opacity duration-150 ease-out motion-reduce:hidden [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
        aria-hidden
      >
        <span
          className="absolute top-1/2 left-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2 [@media(hover:hover)_and_(pointer:fine)]:group-hover:animate-[spin_1.8s_linear_infinite]"
          style={{ background: CHROME_BORDER_GRADIENT[avatar] }}
        />
      </span>
      {/* Reduced motion: static chrome wash, no spin */}
      <span
        className="pointer-events-none absolute inset-0 hidden rounded-full opacity-0 transition-opacity duration-150 ease-out motion-reduce:block [@media(hover:hover)_and_(pointer:fine)]:motion-reduce:group-hover:opacity-100"
        style={{ background: CHROME_BORDER_GRADIENT[avatar] }}
        aria-hidden
      />

      <span className={innerClass}>
        <GlassAvatar variant={avatar} className="relative" />
        <span className="relative min-w-0 truncate">{children}</span>
      </span>
    </>
  )

  if (openExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-cuelume-hover="tick"
        className={cn(shellClass, className)}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={url}
      data-cuelume-hover="tick"
      className={cn(shellClass, className)}
    >
      {content}
    </Link>
  )
}
