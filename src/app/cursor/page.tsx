import { type Metadata } from 'next'

import { CursorReportPage } from '@/components/cursor-report/CursorReportPage'
import { getCursorReportSnapshot } from '@/lib/cursor-report'

export const metadata: Metadata = {
  title: 'Cursor report',
  description:
    'AI-native design engineering report — Cursor agent stats, activity graphs, and the breadth of work behind sebastianselling.com.',
  alternates: {
    canonical: '/cursor',
  },
  openGraph: {
    title: 'Cursor report — Sebastian Selling',
    description:
      'AI-native design engineering report with Cursor agent stats and activity graphs.',
    url: '/cursor',
    type: 'article',
    images: [{ url: '/og.png', width: 800, height: 600 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor report — Sebastian Selling',
    description:
      'AI-native design engineering report with Cursor agent stats and activity graphs.',
    images: ['/og.png'],
  },
}

export default function CursorReportRoute() {
  const snapshot = getCursorReportSnapshot()
  return (
    <main className="mx-auto max-w-5xl pb-24 pt-8 sm:pt-16">
      <CursorReportPage snapshot={snapshot} />
    </main>
  )
}
