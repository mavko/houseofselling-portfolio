import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import { PortfolioNav } from '@/components/PortfolioNav'

export const metadata: Metadata = {
  title: {
    template: '%s - Sebastian Selling',
    default: 'Sebastian Selling - Designer who Codes.',
  },
  description:
    'Design Engineer with over a Decade of experience building brands and apps.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Sebastian Selling',
    description: 'Design Engineer with over a Decade of experience building brands and apps.',
    url: 'https://sebastianselling.com',
    siteName: 'Sebastian Selling',
    images: [
      {
        url: 'https://sebastianselling.com/og.png', // Must be an absolute URL
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
    description: 'Design Engineer with over a Decade of experience building brands and apps.',
    siteId: '@houseofselling',
    creator: '@houseofselling',
    creatorId: '1675809229276364802',
    images: ['https://sebastianselling.com/og.png'], // Must be an absolute URL
  },
  robots: {
    index: false,
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
      <body className="w-full bg-[#111213] text-[#f2f2f2] antialiased font-sans">

        <Providers>
          <Layout>
            {children}
            <PortfolioNav />
            <div className='[mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)] bg-black/20 backdrop-filter backdrop-blur-[5px] w-full h-20 bottom-0 pointer-events-none fixed z-30 inset-x-0'></div>
          </Layout>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
