import type { CaseStudyEra, RichParagraph } from '@/content/case-study-types'

export const ICONTROL_PAGE = {
	title: 'Makings of iControl',
	description:
		'An overview of how we laid the foundation of icontrol from the perspective of the sole designer, little old me.',
	date: '2024-09-17',
} as const

export const ICONTROL_FOREWORD: RichParagraph[] = [
	[
		{
			kind: 'text',
			value:
				'iControl was the next chapter after iOS work on iSpect — a field app and web dashboard for construction quality, born out of 500 Startups and real sites in Sweden.',
		},
	],
	[
		{
			kind: 'text',
			value:
				'This page mirrors the iSpect archive format: same layout, same intent — a living slice of how the product and brand came together, not a polished case study deck.',
		},
	],
]

export const ICONTROL_ERAS: CaseStudyEra[] = [
	{
		id: 'pitch',
		label: 'Pitch',
		yearRange: '2017',
		title: 'The Pitch',
		wideMediaGallery: true,
		wideGalleryAriaLabel: 'iControl pitch video',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					"Have a listen to our co-founder Anton Fagerberg's 2 min pitch at 500 startups to get a good grasp of why we created iControl.",
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'embed',
						src: 'https://www.youtube-nocookie.com/embed/9Q6iwRgAejE',
						title: '500 Global iControl pitch',
						height: 400,
					},
				],
			},
			{
				type: 'bullets',
				items: ['500 Startups Batch 19 $150k seed round spring of 2017'],
			},
			{
				type: 'links',
				links: [
					{
						label: '500 Demo Day Batch 19: iControl Slideshare',
						href: 'https://www.slideshare.net/500startups/500-demo-day-batch-19-icontrol',
						external: true,
					},
					{
						label: 'iControl landing page',
						href: 'https://icontrolapp.se/en/',
						external: true,
					},
				],
			},
		],
	},
	{
		id: 'zero-to-one',
		label: 'Design',
		yearRange: 'Foundation',
		title: 'Zero to One',
		wideMediaGallery: true,
		wideGalleryTrackLabel: 'Sketches',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					'Setting the foundation with tons of sketching, brand & voice outlining and UI iteration.',
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/sketches/ideation1.jpg',
						alt: 'Early ideation sketch for iControl',
						caption: 'Setting a branding tone of voice',
						width: 1200,
						height: 900,
						priority: true,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/icontrol_iphone_sketches.jpg',
						alt: 'iPhone feature sketch exploration',
						caption: 'Initial outlines of iControl iPhone features',
						width: 1200,
						height: 900,
					},
				],
			},
			{
				type: 'plain',
				paragraphs: [
					"Obviously a ton of more work than shown here but for the sake of brevity I've chosen the pictures and screens that convey the core rather than blasting you with dozens and dozens of images.",
				],
			},
		],
	},
	{
		id: 'implementations',
		label: 'Ship',
		yearRange: 'Product',
		title: 'Actual implementations',
		wideMediaGallery: true,
		wideGalleryTrackLabel: 'Screens',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					'With a rather rapid build, deploy and iterate cycle once customers have gotten their hands on the app we went through quite a large number of versions of the app over the years. During my time there we built the app on iOS for iPhone and iPad, later adding in a web dashboard to accomodate the ever increasing project sizes.',
					"I'll try and highlight some of the finished screens from the app(s).",
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey:
							'bundled/craft/icontrol/screens/icontrol_dashboard_blueprint.png',
						alt: 'Dashboard and blueprint feature mockup',
						caption: 'Dashboard and blueprint feature mockup',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/screens/icontrol_dashboard_modals.png',
						alt: 'Invite onboarding upon team creation',
						caption: 'Invite onboarding upon team creation',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/screens/icontrol-ipad-blueprint.png',
						alt: 'iPad blueprint issue feature',
						caption:
							'We later scaled the app to iPad — greatly appreciated for the blueprint issue feature',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/icontrol_iphone_photo.jpg',
						alt: 'iPhone communication in the app',
						caption: 'Communication on the iPhone version',
						width: 1200,
						height: 800,
					},
				],
			},
		],
	},
	{
		id: 'on-the-field',
		label: 'Field',
		yearRange: 'Adoption',
		title: 'On the field',
		wideMediaGallery: true,
		wideGalleryTrackLabel: 'Field photos',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					"We landed quite a few projects rather rapidly. We tried every approach: From the CEO's to the boots on the ground carpenters, and quickly realized it was the project managers who made sure something like iControl got widespread adoption. They lived in the real world day to day headaches of both the construction workers but also the money constrains - so to them, shining the light on issues early on meant not only saving time, but the budget didn't get crushed.",
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/onthefield.jpg',
						alt: 'iControl on a construction site',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey:
							'bundled/craft/icontrol/icontrol_constructionsite_inspection.jpg',
						alt: 'Site inspection with iControl',
						width: 1200,
						height: 800,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/icontrol-jm.jpg',
						alt: 'Team member using iControl on site',
						width: 1200,
						height: 800,
					},
				],
			},
		],
	},
	{
		id: 'mascot-logo',
		label: 'Brand',
		yearRange: 'Identity',
		title: 'Mascot & Logo',
		wideMediaGallery: true,
		wideGalleryTrackLabel: 'Brand',
		blocks: [
			{
				type: 'plain',
				paragraphs: [
					'Building out the iControl brand was done in a rather typical startup touch-n-go process. As I got to know the market, its customers and what we as a team valued I worked in iterative phases whenever there was space to do so.',
					'As a sidenote: I still approach most of my branding work this way - branding is so hard to get right and everyone has their own reaction to it. It is best to not get married to whatever you first produce, and consistently iterate on it as you grow in experience and know more.',
				],
			},
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/icontrol_logo.png',
						alt: 'iControl logo',
						caption: 'Somewhat finalized logo',
						width: 800,
						height: 600,
					},
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/mascot_bobbythebuilder.png',
						alt: 'Bobby the builder mascot',
						caption:
							'Our diligent mascot Bobby who loves to eat reports — a fun way to illustrate features, used sparingly',
						width: 800,
						height: 600,
					},
				],
			},
		],
	},
	{
		id: 'original-team',
		label: 'Team',
		yearRange: 'People',
		title: 'Original team',
		wideMediaGallery: true,
		wideGalleryTrackLabel: 'Team photo',
		blocks: [
			{
				type: 'media',
				items: [
					{
						kind: 'image',
						srcKey: 'bundled/craft/icontrol/team-icontrol.jpg',
						alt: 'Original iControl team photo',
						width: 1200,
						height: 800,
					},
				],
			},
			{
				type: 'rich',
				paragraphs: [
					[
						{ kind: 'text', value: 'From left: ' },
						{
							kind: 'link',
							href: 'https://se.linkedin.com/in/johan-hörnkvist-692a134a',
							label: 'Johan Hörnkvist — Developer',
							external: true,
						},
						{ kind: 'text', value: ', ' },
						{
							kind: 'link',
							href: 'https://se.linkedin.com/in/aejfager',
							label: 'Anton Fagerberg — CFO',
							external: true,
						},
						{ kind: 'text', value: ', ' },
						{
							kind: 'link',
							href: 'https://se.linkedin.com/in/sebastianselling',
							label: 'Yours truly — Design',
							external: true,
						},
						{ kind: 'text', value: ', ' },
						{
							kind: 'link',
							href: 'https://se.linkedin.com/in/yones-khalili-sadaghiani-a8454277',
							label: 'Yones K. Sadaghiani — Sales',
							external: true,
						},
						{ kind: 'text', value: ', ' },
						{
							kind: 'link',
							href: 'https://www.linkedin.com/in/marcus-folkeryd-2a5a3a66/',
							label: 'Marcus Folkeryd — Developer',
							external: true,
						},
						{ kind: 'text', value: ', ' },
						{
							kind: 'link',
							href: 'https://www.linkedin.com/in/alexanderselling/',
							label: 'Alexander Selling — Founder',
							external: true,
						},
					],
				],
			},
		],
	},
]
