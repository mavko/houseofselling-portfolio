import { type Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

import { Providers } from '@/app/providers'
import { ResumeDropdown } from '@/components/ResumeDropdown'
import { VercelAnalytics } from '@/components/VercelAnalytics'

import '@/styles/tailwind.css'

import Link from 'next/link'

const monaSans = Mona_Sans({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-mona-sans',
	display: 'swap',
	// next/font types omit wght for Mona_Sans; both axes are valid per Google Fonts.
	// @ts-expect-error -- wght is a real variable axis for Mona Sans
	axes: ['wdth', 'wght'],
})

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
	),
	title: {
		template: '%s - house of selling',
		default: 'Sebastian Selling - Designer who codes',
	},
	description:
		'Self taught designer and builder. Passionate about taking ideas from zero to one.',
	alternates: {
		types: {
			'application/rss+xml': '/feed.xml',
		},
	},
	openGraph: {
		title: 'sebastian selling - Designer who codes',
		description:
			'Self taught designer and builder. Passionate about taking ideas from zero to one.',
		url: '/',
		siteName: 'sebastianselling.com',
		images: [
			{
				url: '/og.png',
				width: 800,
				height: 600,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'sebastian selling - Designer who codes',
		description:
			'Self taught designer and builder. Passionate about taking ideas from zero to one.',
		images: ['/og.png'],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

function GlassFilter() {
	return (
		<svg className='w-full h-11'>
			<defs>
				<filter
					id='container-glass'
					x='0%'
					y='0%'
					width='100%'
					height='100%'
					colorInterpolationFilters='sRGB'>
					<feTurbulence
						type='fractalNoise'
						baseFrequency='0.05 0.05'
						numOctaves='1'
						seed='1'
						result='turbulence'
					/>
					<feGaussianBlur
						in='turbulence'
						stdDeviation='2'
						result='blurredNoise'
					/>
					<feDisplacementMap
						in='SourceGraphic'
						in2='blurredNoise'
						scale='70'
						xChannelSelector='R'
						yChannelSelector='B'
						result='displaced'
					/>
					<feGaussianBlur in='displaced' stdDeviation='4' result='finalBlur' />
					<feComposite in='finalBlur' in2='finalBlur' operator='over' />
				</filter>
			</defs>
		</svg>
	)
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${GeistSans.className} ${GeistSans.variable} ${monaSans.variable}`}
			suppressHydrationWarning>
			<head>
				<meta name='view-transition' content='same-origin' />
			</head>
			<body className='h-screen w-full bg-black font-sans text-[#f2f2f2] antialiased'>
				<Providers>
					<div className='relative'>
						<main className='px-4 sm:px-6'>
							<header
								className=' font-display z-20   text-xs font-bold tracking-[-0.03em] font-stretch-125% fixed inset-x-0 top-0 
									bg-[rgb(var(--color-page-bg)_/_90%)] 
									
									shadow-[0_25px_50px_rgba(0,0,0,0.25),0_5px_25px_rgba(0,0,0,0.5)] 
									backdrop-saturate-[150%] 
									backdrop-brightness-[120%] 
									backdrop-blur-md rounded-4xl border  border-white/10 mx-auto max-w-5xl mt-3'
								style={
									{
										// Fallback inline style for custom properties
										'--backdrop-filter':
											'saturate(180%) brightness(150%) blur(10px)',
										'--bg': 'rgb(from var(--color-page-bg) r g b / 80%)',
										'--border-color': 'transparent',
										'--shadow':
											'0 25px 50px rgba(0, 0, 0, .25), 0 5px 25px rgba(0, 0, 0, .5)',
									} as React.CSSProperties
								}>
								<div className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0 py-3 px-6'>
									<div className='flex items-center gap-4 sm:gap-5'>
										<Link href='/' className='flex items-center gap-3'>
											Sebastian Selling{' '}
											<svg
												width='39'
												height='22'
												viewBox='0 0 39 22'
												fill='none'
												className='inline-flex'
												xmlns='http://www.w3.org/2000/svg'>
												{' '}
												<path
													d='M0 10.4999H30.4348M30.4348 10.4999H39M30.4348 10.4999L34 14.5M30.4348 10.4999L34 6.49986M30.4348 10.4999V21.5M30.4348 10.4999L25 16.5M30.4348 10.4999V0M30.4348 10.4999L17 5.5M30.4348 10.4999L17 15.5M30.4348 10.4999L25 4.5'
													stroke='currentColor'
													strokeWidth='0.75'></path>{' '}
											</svg>
										</Link>
									</div>
									<div className='flex items-center gap-4'>
										<Link href='/about' className='flex items-center gap-2'>
											About
										</Link>
										<Link href='/visuals' className='flex items-center gap-2'>
											Visuals
										</Link>
										<Link href='/projects' className='flex items-center gap-2'>
											Projects
										</Link>
										<Link
											aria-label='Say hello on GitHub'
											className='flex items-center gap-2'
											href='https://github.com/mavko'>
											Github
										</Link>
										<Link
											aria-label='Say hello on GitHub'
											className='flex items-center gap-2'
											href='https://www.cosmos.so/houseofselling'>
											Cosmos
										</Link>
										<ResumeDropdown />
									</div>
								</div>
							</header>
							<div className='mt-20'>{children}</div>
						</main>
						<footer className='font-display py-42 text-center text-base/12 font-medium text-white max-w-5xl mx-auto'>
							© 2026 // house of selling
						</footer>
						<div
							aria-hidden='true'
							className='pointer-events-none fixed inset-x-0 bottom-0 z-20 h-44 w-full bg-black/20 backdrop-blur-[5px] backdrop-filter [mask-image:linear-gradient(to_top,_rgb(0,_0,_0)_25%,_transparent)]'
						/>
					</div>
				</Providers>
				<VercelAnalytics />
			</body>
		</html>
	)
}
