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
    template: '%s - HeadlessUI',
    default: 'sebastian selling - Entreprenurial Design Engineer',
  },
  description:
    'Self taught designer, web artisan, and entrepreneur. Passionate about taking ideas from zero to one.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'sebastian selling',
    description:
      'Self taught designer, web artisan, and entrepreneur. Passionate about taking ideas from zero to one.',
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
      'Self taught designer, web artisan, and entrepreneur. Passionate about taking ideas from zero to one.',
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
      <body className="w-full bg-neutral-950 font-sans text-[#f2f2f2] antialiased">
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
                  <Link
                    href="/about"
                    className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase"
                  >
                    About
                  </Link>
                </div>
                <Link
                  aria-label="Say hello on GitHub"
                  href="https://github.com/mavko"
                >
                  <svg
                    className="h-6 fill-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"></path>
                  </svg>
                </Link>
              </div>
            </header>
            <Image
              src={headerBackground}
              alt="Background"
              priority
              className="absolute inset-x-0 top-0 -z-10 h-[43rem] w-full forced-colors:hidden"
            />
            <Image
              src={textureBackground}
              alt="Background"
              priority
              className="absolute inset-x-0 top-0 -z-5 h-full w-full opacity-50 mix-blend-screen forced-colors:hidden"
            />

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
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
