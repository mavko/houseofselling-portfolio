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
