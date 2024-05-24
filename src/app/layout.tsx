import { type Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sebastian Selling',
    default: 'Sebastian Selling - Designer who Codes.',
  },
  description:
    'I’m Seb, a designer and entrepreneur based in Stockholm, Sweden. Hoping to leave the world slightly more beautiful than I found it.',
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
      <body className="flex h-full bg-neutral-50  antialiased dark:bg-neutral-950">
        {/* <Image
          src={bgNoise}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full bg-top opacity-5 dark:opacity-[0.01] forced-colors:hidden"
          priority
        /> */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#00000022_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
