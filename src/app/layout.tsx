import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sebastian Selling',
    default: 'Sebastian Selling - Designer who Codes.',
  },
  description:
    'I’m Seb, a designer based in Stockholm, Sweden. Hoping to leave the world slightly more beautiful than I found it.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
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
      <body className="flex h-full bg-[#1a1a1a] text-[#f2f2f2] antialiased font-sans">

        <Providers>
          <div className="flex w-full">
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute left-0 top-0 h-12 w-16 rotate-180 -scale-y-150 opacity-50 brightness-100 invert z-50"
            />
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
