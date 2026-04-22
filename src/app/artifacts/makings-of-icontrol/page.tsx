import { type Metadata } from 'next'

import { CaseStudyShowcase } from '@/components/case-study-showcase/CaseStudyShowcase'
import {
	ICONTROL_ERAS,
	ICONTROL_FOREWORD,
	ICONTROL_PAGE,
} from '@/content/icontrol-timeline'
import { mediaUrl } from '@/lib/media-url'

const ogImage = mediaUrl('bundled/craft/icontrol-header.jpg')

export const metadata: Metadata = {
	title: ICONTROL_PAGE.title,
	description: ICONTROL_PAGE.description,
	alternates: {
		canonical: '/artifacts/makings-of-icontrol',
	},
	openGraph: {
		title: `${ICONTROL_PAGE.title} - Sebastian Selling`,
		description: ICONTROL_PAGE.description,
		url: '/artifacts/makings-of-icontrol',
		type: 'article',
		publishedTime: `${ICONTROL_PAGE.date}T12:00:00.000Z`,
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: 'Makings of iControl',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${ICONTROL_PAGE.title} - Sebastian Selling`,
		description: ICONTROL_PAGE.description,
		images: [ogImage],
	},
}

export default function MakingsOfIcontrolPage() {
	return (
		<CaseStudyShowcase
			page={ICONTROL_PAGE}
			foreword={ICONTROL_FOREWORD}
			eras={ICONTROL_ERAS}
		/>
	)
}
