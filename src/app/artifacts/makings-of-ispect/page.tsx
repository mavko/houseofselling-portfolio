import { type Metadata } from 'next'

import { CaseStudyShowcase } from '@/components/case-study-showcase/CaseStudyShowcase'
import {
	ISPECT_ERAS,
	ISPECT_FOREWORD,
	ISPECT_PAGE,
} from '@/content/ispect-timeline'
import { mediaUrl } from '@/lib/media-url'

const ogImage = mediaUrl('bundled/craft/ispect-header.jpg')

export const metadata: Metadata = {
	title: ISPECT_PAGE.title,
	description: ISPECT_PAGE.description,
	alternates: {
		canonical: '/artifacts/makings-of-ispect',
	},
	openGraph: {
		title: `${ISPECT_PAGE.title} - Sebastian Selling`,
		description: ISPECT_PAGE.description,
		url: '/artifacts/makings-of-ispect',
		type: 'article',
		publishedTime: `${ISPECT_PAGE.date}T12:00:00.000Z`,
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: 'Makings of iSpect',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${ISPECT_PAGE.title} - Sebastian Selling`,
		description: ISPECT_PAGE.description,
		images: [ogImage],
	},
}

export default function MakingsOfIspectPage() {
	return (
		<CaseStudyShowcase
			page={ISPECT_PAGE}
			foreword={ISPECT_FOREWORD}
			eras={ISPECT_ERAS}
		/>
	)
}
