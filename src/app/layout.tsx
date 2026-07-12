import { type Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { SiteHeader } from '@/components/SiteHeader'
import { VercelAnalytics } from '@/components/VercelAnalytics'

import '@/styles/tailwind.css'

const monaSans = Mona_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mona-sans',
  display: 'swap',
  // next/font types omit wght for Mona_Sans; both axes are valid per Google Fonts.
  // @ts-expect-error -- wght is a real variable axis for Mona Sans
  axes: ['wdth', 'wght'],
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
      className={`${GeistSans.className} ${GeistSans.variable} ${monaSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className="h-screen w-full bg-black font-sans text-[#f2f2f2] antialiased">
        <Providers>
          <div className="relative">
            <SiteHeader />
            <main className="px-4 sm:px-6">
              <div className="mt-24">{children}</div>
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
