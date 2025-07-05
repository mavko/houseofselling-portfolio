import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SafeImage } from '@/components/SafeImage'

import '@/styles/tailwind.css'

import headerBackground from '@/images/planeteria.png'
import textureBackground from '@/images/texture.png'
import Link from 'next/link'
import { CameraIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import { GitHubIcon } from '@/components/SocialIcons'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    template: '%s - house of selling',
    default: 'Sebastian Selling - Designer who codes',
  },
  description:
    'Self taught designer, web artisan and builder. Passionate about taking ideas from zero to one.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'sebastian selling - Designer who codes',
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
    title: 'sebastian selling - Designer who codes',
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
      <body className="h-screen w-full bg-black font-sans text-[#f2f2f2] antialiased">
        <Providers>
          <div className="relative">
            <main className="mx-auto max-w-5xl px-4 sm:px-6">
              <header className="relative">
                <div className="flex w-full flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center sm:gap-0">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <Link
                      href="/"
                      className="font-mono text-xs font-semibold tracking-widest text-white uppercase"
                    >
                      house of selling anno 1990
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/about"
                      className="flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-white uppercase"
                    >
                      About
                    </Link>
                    <Link
                      href="/visuals"
                      className="flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-white uppercase"
                    >
                      Visuals
                    </Link>
                    <Link
                      aria-label="Say hello on GitHub"
                      className="flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-white uppercase"
                      href="https://github.com/mavko"
                    >
                      Github
                    </Link>
                    <Link
                      aria-label="Download resume"
                      className="font-mono text-xs font-semibold tracking-widest text-white uppercase"
                      href="/resume2025.pdf"
                    >
                      Resume
                    </Link>
                  </div>
                </div>
              </header>
              {children}
            </main>
            <footer className="py-42 text-center font-mono text-base/12 font-semibold text-white">
              © 2025 // house of selling
            </footer>
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-20 w-full bg-black/20 backdrop-blur-[5px] backdrop-filter [mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)]"
            />
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
