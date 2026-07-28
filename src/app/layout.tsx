import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/app/providers'
import { SubpageBioNavGate } from '@/components/HeroNavPills'
import { VercelAnalytics } from '@/components/VercelAnalytics'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    template: '%s - house of selling',
    default: 'Sebastian Selling - Designer who codes',
  },
  description:
    'Self taught designer and builder. Passionate about taking ideas from zero to one.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'sebastian selling - Designer who codes',
    description:
      'Self taught designer and builder. Passionate about taking ideas from zero to one.',
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
      'Self taught designer and builder. Passionate about taking ideas from zero to one.',
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
    <html
      lang="en"
      className={`${inter.className} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className="h-screen w-full bg-black font-sans text-[#f2f2f2] antialiased">
        <Providers>
          <div className="relative">
            {/* Nav scrim only — dark gradient + blur, no chrome/text */}
            <div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-0 z-20 h-42 [--header-scrim:#000000]"
            >
              <div
                className="absolute inset-0 bg-black/20 backdrop-blur-[5px] backdrop-filter motion-reduce:backdrop-blur-none [mask-image:linear-gradient(to_bottom,_rgb(0,_0,_0)_30%,_transparent)]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, var(--header-scrim) 0%, var(--header-scrim) 15%, color-mix(in srgb, var(--header-scrim) 92%, transparent) 26%, color-mix(in srgb, var(--header-scrim) 78%, transparent) 36%, color-mix(in srgb, var(--header-scrim) 60%, transparent) 46%, color-mix(in srgb, var(--header-scrim) 42%, transparent) 55%, color-mix(in srgb, var(--header-scrim) 26%, transparent) 64%, color-mix(in srgb, var(--header-scrim) 13%, transparent) 73%, color-mix(in srgb, var(--header-scrim) 5%, transparent) 82%, transparent 100%)',
                }}
              />
            </div>
            <main className="px-4 sm:px-6">
              <div className="pt-36">
                <SubpageBioNavGate />
                {children}
              </div>
            </main>
            <footer className="font-display mx-auto max-w-5xl py-42 text-center text-base/12 font-medium text-white">
              © 2026 // house of selling
            </footer>
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-44 w-full bg-black/20 backdrop-blur-[5px] backdrop-filter [mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)]"
            />
          </div>
        </Providers>
        <VercelAnalytics />
      </body>
    </html>
  )
}
