import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Image from 'next/image'

import '@/styles/tailwind.css'

import headerBackground from '@/images/planeteria.png'
import textureBackground from '@/images/texture.png'
import Link from 'next/link'
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    template: '%s - house of selling',
    default: 'sebastian selling - Entreprenurial Design Engineer',
  },
  description:
    'Self taught designer, web artisan and builder. Passionate about taking ideas from zero to one.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'sebastian selling',
    description:
      'Self taught designer, web artisan and builder. Passionate about taking ideas from zero to one.',
    url: '/',
    siteName: 'sebastianselling.com',
    images: [
      {
        url: '/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sebastian selling',
    description:
      'Self taught designer, web artisan and builder. Passionate about taking ideas from zero to one.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className="h-screen w-full bg-neutral-950 font-sans text-[#f2f2f2] antialiased">
        <Providers>
          <div className="relative">
            <header className="relative px-4 sm:px-6">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-6">
                <div className="flex items-center gap-4 px-2 sm:gap-5">
                  <Link
                    href="/"
                    className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase"
                  >
                    house of selling anno 1990
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/about"
                    className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase"
                  >
                    About
                  </Link>
                  <Link
                    href="/visuals"
                    className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase"
                  >
                    Visuals
                  </Link>
                  <Link
                    aria-label="Say hello on GitHub"
                    className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase"
                    href="https://github.com/mavko"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </header>

            <div
              className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-6"
              aria-hidden="true"
            >
              <div className="mx-auto flex h-full max-w-7xl gap-[14px]">
                <div className="flex-1 border-x border-white/[7.5%]"></div>
                <div className="hidden flex-1 border-x border-white/[7.5%] sm:block"></div>
                <div className="hidden flex-1 border-x border-white/[7.5%] lg:block"></div>
              </div>
            </div>

            {children}
            <footer className="py-12 text-center text-sm/6 text-white">
              © 2025 house of selling.
            </footer>
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-20 w-full bg-black/20 backdrop-blur-[5px] backdrop-filter [mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)]"
            />
          </div>
          <Image
            src={headerBackground}
            alt="Background"
            priority
            className="absolute inset-x-0 top-0 -z-10 h-screen w-full forced-colors:hidden"
          />
          <Image
            src={textureBackground}
            alt="Background"
            priority
            className="absolute inset-x-0 top-0 -z-5 h-screen w-full opacity-50 mix-blend-screen forced-colors:hidden"
          />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
