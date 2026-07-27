import { type Metadata } from 'next'

import { CaseStudyShowcase } from '@/components/case-study-showcase/CaseStudyShowcase'
import {
  SITESNAP_ERAS,
  SITESNAP_FOREWORD,
  SITESNAP_PAGE,
} from '@/content/sitesnap-timeline'

const ogImage = '/images/sitesnap-icon.png'

export const metadata: Metadata = {
  title: SITESNAP_PAGE.title,
  description: SITESNAP_PAGE.description,
  alternates: {
    canonical: '/artifacts/makings-of-sitesnap',
  },
  openGraph: {
    title: `${SITESNAP_PAGE.title} - Sebastian Selling`,
    description: SITESNAP_PAGE.description,
    url: '/artifacts/makings-of-sitesnap',
    type: 'article',
    publishedTime: `${SITESNAP_PAGE.date}T12:00:00.000Z`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Makings of SiteSnap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITESNAP_PAGE.title} - Sebastian Selling`,
    description: SITESNAP_PAGE.description,
    images: [ogImage],
  },
}

export default function MakingsOfSitesnapPage() {
  return (
    <CaseStudyShowcase
      page={SITESNAP_PAGE}
      foreword={SITESNAP_FOREWORD}
      eras={SITESNAP_ERAS}
    />
  )
}
