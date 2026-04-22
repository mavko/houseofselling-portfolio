import type { CaseStudyEra, RichParagraph } from '@/content/case-study-types'

export type {
	CaseStudyEra,
	CaseStudyPageMeta,
	EraBlock,
	MediaItem,
	RichParagraph,
	TextSegment,
} from '@/content/case-study-types'

export const ISPECT_PAGE = {
	title: 'Makings of iSpect',
	description:
		'An overview of how we laid the foundation of ispect from the perspective of the sole designer, little old me.',
	date: '2024-10-03',
} as const

/** Foreword — archive framing (same intent as the old “Note from 2024”). */
export const ISPECT_FOREWORD: RichParagraph[] = [
	[
		{
			kind: 'text',
			value:
				'Quite a lot has happened over the years in the journey of iSpect, and this page is an archive in motion — not a frozen case study.',
		},
	],
	[
		{
			kind: 'text',
			value:
				'My role started in 2012 with brand and UI in Photoshop (with custom scripts to export assets to Xcode). Thank goodness Sketch showed up. I quickly grew dissatisfied with implementation and moved into Xcode front-end work — ',
		},
		{
			kind: 'link',
			href: 'https://x.com/MengTo',
			label: 'Meng To',
			external: true,
		},
		{
			kind: 'text',
			value: ' and ',
		},
		{
			kind: 'link',
			href: 'https://designcode.io/',
			label: 'designcode.io',
			external: true,
		},
		{
			kind: 'text',
			value: ' were a huge help.',
		},
	],
	[
		{
			kind: 'text',
			value: 'We later put the iOS app on maintenance to build ',
		},
		{
			kind: 'link',
			href: '/artifacts/makings-of-icontrol',
			label: 'iControl',
		},
		{
			kind: 'text',
			value: ', and my focus shifted toward the web: CSS, React, Vue, Vuetify.',
		},
	],
	[
		{
			kind: 'text',
			value:
				'In 2020 we scaled iSpect into a full project-management and order-flow web app. COVID paused momentum in 2021. Since then it has been a grind to keep the lights on — so below you will see older work, newer work, and space reserved for what ships next.',
		},
	],
]

export const ISPECT_ERAS: CaseStudyEra[] = [
	{
		id: 'now',
		label: 'Now',
		yearRange: '2026-*',
		title: 'Next chapter',
		summary:
			'Two parallel reworks: refreshed brand and the product rebuilt from the ground up using nextjs and react native - migrating off Vue and iOS. Visuals will land here as they are ready to share.',
		featured: true,
		wideMediaGallery: true,
		blocks: [
			{
				type: 'plain',
				paragraphs: ['This section is the front of the timeline'],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'video',
						src: '/ispect-landing-new.mp4',
						title: 'iSpect landing header animation (2026)',
						caption: 'New landing header animation direction',
					},
				],
			},
		],
	},
	{
		id: 'refactor-2023',
		label: 'Refactor',
		yearRange: '2023',
		title: 'Vue 2 / Vuetify → streamlined UI (2023)',
		wideMediaGallery: true,
		wideGalleryAriaLabel: '2023 refactor screenshots',
		wideGalleryTrackLabel: 'Refactor screenshots',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					'Highlights from refactoring the app from Vue 2 / Vuetify 2 toward Vue 2.7 (Vue 3 was the plan; time said otherwise) with Tailwind CSS. Vuetify stayed for complex tables, but its styles were stripped — effectively headless.',
					'Goal: modernize the design, reduce jank, improve performance, and show less information so the experience feels more automatic. Many pages look similar; this is a distilled set.',
				],
			},
			{
				type: 'links',
				links: [
					{
						label: 'iSpect landing page (2023 edition)',
						href: 'https://ispect-landing-page.vercel.app/',
						external: true,
					},
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/login.png',
						alt: 'iSpect login view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/projects.png',
						alt: 'iSpect projects view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/projects-darkmode.png',
						alt: 'iSpect projects view 2023 (dark mode)',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/utilization.png',
						alt: 'iSpect utilization view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/orders.png',
						alt: 'iSpect orders view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/project-info.png',
						alt: 'iSpect project info view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/issues.png',
						alt: 'iSpect issues view 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/issues-darkmode.png',
						alt: 'iSpect issues view 2023 (dark mode)',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/share-report.png',
						alt: 'iSpect share report modal 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/project-activities.png',
						alt: 'iSpect project activity modal 2023',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/2023-refactor/verdict-editor.png',
						alt: 'iSpect verdict editor view 2023',
						width: 1200,
						height: 800,
					},
				],
			},
		],
	},
	{
		id: 'scale-2020',
		label: 'Scale',
		yearRange: '2020 - 2021 ',
		title: 'The original pitch and beta launch (2020)',
		blocks: [
			{
				type: 'heading',
				text: 'Make informed decisions during procurement with real-time data',
			},
			{
				type: 'links',
				links: [
					{
						label: 'iSpect landing page',
						href: 'https://ispect-landing-page.vercel.app/',
						external: true,
					},
					{
						label: 'Nominated for Innovation of the year 2013 (Swedish)',
						href: 'https://www.sbuf.se/Om-SBUF/Aretsinnovation/Nyhetsbrev11/',
						external: true,
					},
				],
			},
			{
				type: 'bullets',
				items: [
					'Winner of Swedish Construction Innovation grant for three consecutive years 2012–2015 ($180k total)',
					'Swedish Construction Innovation of the year 2014',
					'Swedish IT Project of the year 2013',
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/ispect_web.jpg',
						alt: 'iSpect web interface',
						caption: 'iSpect dashboard and landing page from 2020',
						width: 1200,
						height: 600,
					},
					{
						kind: 'image',
						srcKey:
							'bundled/craft/ispect/ispect-closeout-demo-2020-january.jpg',
						alt: 'iSpect closeout 2020',
						caption:
							'Closeout (2020 beta - later merged into the dashboard) — aimed at subcontractors to see assigned issues and remedy them',
						width: 1200,
						height: 600,
					},
				],
			},
			{
				type: 'heading',
				text: 'Why?',
			},
			{
				type: 'plain',
				paragraphs: [
					'iSpect exists to create transparency in construction — through data and statistics, and through clear communication between contractors, sub-contractors, stakeholders and clients (you and I buying a home).',
				],
			},
			{
				type: 'heading',
				text: 'How?',
			},
			{
				type: 'plain',
				paragraphs: [
					'With over a decade of industry statistics, the web platform lets contractors and sub-contractors see project health: issue counts over time and average completion time, in real time. See who is performing well before negotiating contracts.',
				],
			},
			{
				type: 'heading',
				text: 'Features',
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/dashboard_total_issues.png',
						alt: 'Total project issues',
						caption:
							'A completed Stockholm project — total issues across the build',
						width: 600,
						height: 400,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/dashboard_total_location.png',
						alt: 'Issues by location',
						caption: 'Areas that need the most attention',
						width: 600,
						height: 400,
					},
					{
						kind: 'embed',
						src: 'https://www.loom.com/embed/799cba8301b048d2b524b7c55505b486?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
						title: 'Loom — categories deep dive (titles in Swedish)',
						height: 400,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/dashboard_avg_time.png',
						alt: 'Average time to remedy issues',
						caption:
							'Average remedy time per sub-contractor, including self-regulation reporting',
						width: 600,
						height: 400,
					},
				],
			},
		],
	},
	{
		id: 'brand-origins',
		label: 'Brand',
		yearRange: '2012 —',
		title: 'Identity that had to travel',
		wideMediaGallery: true,
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					'The brand first took shape in 2012 and evolved many times into a minimal logotype built around the search icon. As iSpect grew beyond the app, the identity had to work across people, product, and surfaces.',
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/logotype_800x600.png',
						alt: 'iSpect logotype',
						caption: 'Logotype with the search mark used since the beginning',
						width: 800,
						height: 600,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/ispect_hard_hat.jpg',
						alt: 'iSpect on hard hat',
						caption:
							'Hard hats usually cannot change color — branding works within the rules',
						width: 600,
						height: 400,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/ispect/ispect_plattform_logo.jpg',
						alt: 'iSpect platform logo application',
						width: 800,
						height: 600,
					},
				],
			},
		],
	},
]
