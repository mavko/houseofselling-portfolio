'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ResumeDropdown } from '@/components/ResumeDropdown'

const NAV_ITEMS: { label: string; href: string; external?: boolean }[] = [
  { label: 'About', href: '/about' },
  { label: 'Visuals', href: '/visuals' },
  { label: 'Projects', href: '/projects' },
]

const RIGHT_LINKS: { label: string; href: string; external?: boolean }[] = [
  {
    label: 'Github',
    href: 'https://github.com/mavko',
    external: true,
  },
  {
    label: 'Cosmos',
    href: 'https://www.cosmos.so/houseofselling',
    external: true,
  },
]

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      width="39"
      height="22"
      viewBox="0 0 39 22"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 10.4999H30.4348M30.4348 10.4999H39M30.4348 10.4999L34 14.5M30.4348 10.4999L34 6.49986M30.4348 10.4999V21.5M30.4348 10.4999L25 16.5M30.4348 10.4999V0M30.4348 10.4999L17 5.5M30.4348 10.4999L17 15.5M30.4348 10.4999L25 4.5"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  )
}

function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="-m-1.5 flex items-center gap-3 p-1.5"
    >
      <span className="text-xl font-semibold tracking-[-0.2px] text-white font-stretch-125%">
        Sebastian Selling
      </span>
      <BrandMark className="inline-flex shrink-0" />
    </Link>
  )
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 [--header-scrim:#000000]"
      role="banner"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-42"
        style={{
          background:
            'linear-gradient(180deg, var(--header-scrim) 0%, var(--header-scrim) 15%, color-mix(in srgb, var(--header-scrim) 92%, transparent) 26%, color-mix(in srgb, var(--header-scrim) 78%, transparent) 36%, color-mix(in srgb, var(--header-scrim) 60%, transparent) 46%, color-mix(in srgb, var(--header-scrim) 42%, transparent) 55%, color-mix(in srgb, var(--header-scrim) 26%, transparent) 64%, color-mix(in srgb, var(--header-scrim) 13%, transparent) 73%, color-mix(in srgb, var(--header-scrim) 5%, transparent) 82%, transparent 100%)',
        }}
      />
      <nav
        className="pointer-events-auto flex w-full items-center justify-between px-3 py-6 font-display text-sm font-medium tracking-[-0.2px] text-white font-stretch-125% lg:px-6"
        aria-label="Main"
      >
        <div className="flex lg:flex-1">
          <BrandLink />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-white ring-1 ring-white/20"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          {RIGHT_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="transition-colors hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
          <ResumeDropdown />
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={mobileMenuOpen ? 'lg:hidden' : 'hidden lg:hidden'}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div
          className="fixed inset-0 z-0 bg-black/50 backdrop-blur-sm"
          aria-hidden
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-x-0 top-0 z-50 w-full overflow-y-auto rounded-b-2xl border-b border-white/10 bg-black p-6 sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <BrandLink onClick={() => setMobileMenuOpen(false)} />
            <button
              type="button"
              className="-m-2.5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-zinc-400"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white transition-colors hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 py-6">
                {RIGHT_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white transition-colors hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="-mx-3 px-3 py-2.5 text-base font-semibold leading-7 text-white">
                  <ResumeDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
