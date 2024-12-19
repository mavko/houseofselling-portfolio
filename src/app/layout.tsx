import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@/styles/tailwind.css'
import { PortfolioNav } from '@/components/PortfolioNav'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    template: '%s - Sebastian Selling',
    default: 'Sebastian Selling - Designer who Codes.',
  },
  description:
    'Design Engineer with over a Decade of experience building brands and apps.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Sebastian Selling',
    description:
      'Design Engineer with over a Decade of experience building brands and apps.',
    url: '/',
    siteName: 'Sebastian Selling',
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
    title: 'Sebastian Selling',
    description:
      'Design Engineer with over a Decade of experience building brands and apps.',
    siteId: '@houseofselling',
    creator: '@houseofselling',
    creatorId: '1675809229276364802',
    images: ['https://sebastianselling.com/og.png'], // Must be an absolute URL
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
      <body className="w-full bg-neutral-950 font-sans text-[#f2f2f2] antialiased">
        <Providers>
          <Layout>
            {children}
            <PortfolioNav />
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-20 w-full bg-black/20 backdrop-blur-[5px] backdrop-filter [mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)]"
            />
          </Layout>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
