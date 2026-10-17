'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { CHROME_BORDER_GRADIENT } from '@/components/GlassAvatar'
import { LinkPreview } from '@/components/LinkPreview'
import { cn } from '@/lib/utils'

const sectionClass =
  'max-w-[42rem] text-[15px] font-medium leading-[1.6] text-[#ededed] text-pretty'

/** Black / white chrome — same ramp as github / ispect pills. */
const BACK_CHROME = CHROME_BORDER_GRADIENT.github

const chromeShellClass =
  'group relative z-0 inline-flex h-10 max-w-full shrink-0 align-middle rounded-full p-px no-underline transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:hover:scale-100 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02]'

const chromeInnerClass =
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

/** Pill chrome used by Home back nav and case-study title actions. */
export function ChromePillLink({
  href,
  children,
  className,
  external = false,
  'data-cuelume-hover': cuelumeHover,
}: {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  'data-cuelume-hover'?: string
}) {
  const classNames = cn(chromeShellClass, className)
  const inner = (
    <>
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
      <span className={chromeInnerClass}>{children}</span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cuelume-hover={cuelumeHover}
        className={classNames}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} data-cuelume-hover={cuelumeHover} className={classNames}>
      {inner}
    </Link>
  )
}

/** Home: work bio + destination pills. */
export function HomeBioNav({ className }: { className?: string }) {
  return (
    <HeroNavShell className={className}>
      Currently capturing the full flow of field service industries developing:
      <br />
      inspections enterprise app:{' '}
      <LinkPreview url="https://ispect.se" avatar="sky" external>
        ispect.se
      </LinkPreview>
      <br />
      quality control enterprise app:{' '}
      <LinkPreview url="https://icontrolapp.se" avatar="about" external>
        icontrolapp.se
      </LinkPreview>{' '}
      (overhaul coming)
      <br />
      real estate inspections services:{' '}
      <LinkPreview url="https://www.besiktningsman.se" avatar="bm" external>
        besiktningsman.se
      </LinkPreview>
      <br />
      property management services:{' '}
      <LinkPreview
        url="https://www.dinfastighetsforvaltare.se/"
        avatar="dff"
        external
      >
        dinfastighetsforvaltare.se
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
    <div className="flex w-full max-w-[42rem] flex-col gap-6 sm:gap-8">
      <h1 className="font-display text-base font-semibold leading-[1.05] tracking-[-0.2px] text-white [font-stretch:125%]">
        Sebastian Selling
        <span className="mt-1 block text-sm font-medium leading-[1.2] text-white/70">
          Designer who builds
        </span>
      </h1>
      <div className={cn(sectionClass, 'space-y-4')}>
        <p>I’m a designer and builder from Stockholm, Sweden.</p>
        <p>
          Been in one way or another a designer since childhood and always wanted
          outlets to express myself — from esports gaming videos, to forum
          signatures, to graphic design.
        </p>
        <p>
          Today, I’m busy building and capturing the full flow of the traditional
          field service industries, going on about 14 years now. Using my sense of
          craft and taste in industries who get very little of it.
        </p>
      </div>
    </div>
  )
}

/** Subpages: back home — chrome border + cuelume tick, no frost. */
export function SubpageBackNav({ className }: { className?: string }) {
  return (
    <HeroNavShell className={className}>
      <ChromePillLink href="/" data-cuelume-hover="tick" className={className}>
        <ArrowLeft className="size-4 shrink-0" strokeWidth={2} aria-hidden />
        <span>Home</span>
      </ChromePillLink>
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
