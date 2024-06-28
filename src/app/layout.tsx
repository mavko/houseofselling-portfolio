import { type Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import Image from 'next/image'
import bgNoise from '../images/bg-noise.png'
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
    <html lang="en" className={GeistMono.className} suppressHydrationWarning>
      <body className="flex h-full bg-black antialiased">
        <Image
          src={bgNoise}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full bg-top opacity-[0.03] forced-colors:hidden"
          priority
        />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
