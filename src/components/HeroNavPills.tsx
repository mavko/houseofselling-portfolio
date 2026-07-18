'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { CHROME_BORDER_GRADIENT } from '@/components/GlassAvatar'
import { LinkPreview } from '@/components/LinkPreview'
import { cn } from '@/lib/utils'

const sectionClass =
  'max-w-[42rem] text-xl font-medium leading-[2.45] text-[#ededed] text-pretty'

/** Black / white chrome — same ramp as github / ispect pills. */
const BACK_CHROME = CHROME_BORDER_GRADIENT.github

const backShellClass =
  'group relative z-0 inline-flex h-10 max-w-full align-middle rounded-full p-px no-underline transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:hover:scale-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02]'

const backInnerClass =
  'relative z-10 inline-flex h-full max-w-full items-center gap-2 rounded-full bg-[#141417] px-3.5 text-base font-medium leading-none text-white'

function HeroNavShell({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(sectionClass, className)}>{children}</div>
}

/** Home: work bio + destination pills. */
export function HomeBioNav({ className }: { className?: string }) {
  return (
    <HeroNavShell className={className}>
      Currently rebuilding ispect into a modern inspection platform{' '}
      <LinkPreview url="/artifacts/makings-of-ispect" avatar="ispect">
        Makings of ispect
      </LinkPreview>{' '}
      and help run the family business{' '}
      <LinkPreview
        url="https://www.besiktningsman.se"
        avatar="bm"
        external
      >
        Besiktningsman.se
      </LinkPreview>{' '}
      &amp;{' '}
      <LinkPreview
        url="https://www.dinfastighetsforvaltare.se/"
        avatar="dff"
        external
      >
        Dinfastighetsforvaltare.se
      </LinkPreview>
    </HeroNavShell>
  )
}

/** Home: site nav woven into a sentence, same pill + orb pattern. */
export function HomeSiteNav({ className }: { className?: string }) {
  return (
    <HeroNavShell className={className}>
      Can read{' '}
      <LinkPreview url="/about" avatar="about">
        About me
      </LinkPreview>{' '}
      check{' '}
      <LinkPreview url="/projects" avatar="projects">
        Projects
      </LinkPreview>{' '}
      or catch my{' '}
      <LinkPreview url="/visuals" avatar="visuals">
        Visuals
      </LinkPreview>{' '}
      Active on{' '}
      <LinkPreview url="https://x.com/houseofselling" avatar="x" external>
        houseofselling
      </LinkPreview>{' '}
      <LinkPreview
        url="https://www.cosmos.so/houseofselling"
        avatar="cosmos"
        external
      >
        Cosmos
      </LinkPreview>{' '}
      Nerd stats{' '}
      <LinkPreview url="/cursor" avatar="cursor">
        Cursor
      </LinkPreview>{' '}
      &amp;{' '}
      <LinkPreview url="https://github.com/mavko" avatar="github" external>
        Github
      </LinkPreview>
    </HeroNavShell>
  )
}

export function HomeHeroCopy() {
  return (
    <div className="flex w-full max-w-[42rem] flex-col gap-8 sm:gap-10">
      <p className={cn(sectionClass, 'text-white/80')}>
        Sebastian Selling - Designer who builds
      </p>
      <HomeBioNav />
      <HomeSiteNav />
    </div>
  )
}

/** Subpages: back home — chrome border + cuelume tick, no frost. */
export function SubpageBackNav({ className }: { className?: string }) {
  return (
    <HeroNavShell className={className}>
      <Link
        href="/"
        data-cuelume-hover="tick"
        className={cn(backShellClass, className)}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-white/30 transition-opacity duration-150 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-0"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-0 transition-opacity duration-150 ease-out motion-reduce:hidden [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
          aria-hidden
        >
          <span
            className="absolute top-1/2 left-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2 [@media(hover:hover)_and_(pointer:fine)]:group-hover:animate-[spin_1.8s_linear_infinite]"
            style={{ background: BACK_CHROME }}
          />
        </span>
        <span
          className="pointer-events-none absolute inset-0 hidden rounded-full opacity-0 transition-opacity duration-150 ease-out motion-reduce:block [@media(hover:hover)_and_(pointer:fine)]:motion-reduce:group-hover:opacity-100"
          style={{ background: BACK_CHROME }}
          aria-hidden
        />
        <span className={backInnerClass}>
          <ArrowLeft className="size-4 shrink-0" strokeWidth={2} aria-hidden />
          <span>Home</span>
        </span>
      </Link>
    </HeroNavShell>
  )
}

/** Renders back nav on every route except `/`. */
export function SubpageBioNavGate() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <div className="mx-auto w-full max-w-5xl pt-2 pb-10 sm:pt-4 sm:pb-12">
      <SubpageBackNav />
    </div>
  )
}
