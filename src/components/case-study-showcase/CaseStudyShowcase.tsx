'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import type {
	CaseStudyEra,
	CaseStudyPageMeta,
	RichParagraph,
} from '@/content/case-study-types'

import { CaseStudyEraBlocks } from './CaseStudyEraBlocks'
import { CaseStudyRichParagraph } from './CaseStudyRichParagraph'
import { CaseStudyWideMediaGallery } from './CaseStudyWideMediaGallery'
import { partitionCaseStudyEraBlocks } from './partition-case-study-era-blocks'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
			<path
				d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

const backLinkClass =
	'group relative inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-slate-800 p-px text-xs leading-6 font-semibold text-white/80 no-underline shadow-2xl shadow-zinc-900'

const eraMotion = {
	hidden: { opacity: 0, y: 16 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeOut' as const,
			delay: 0.06 * i,
		},
	}),
}

export type CaseStudyShowcaseProps = {
	page: CaseStudyPageMeta
	foreword: RichParagraph[]
	eras: CaseStudyEra[]
}

export function CaseStudyShowcase({
	page,
	foreword,
	eras,
}: CaseStudyShowcaseProps) {
	const reduceMotion = useReducedMotion()

	return (
		<div className='mx-auto w-full'>
			<div className='w-full border rounded-4xl border-white/20 lg:grid lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start bg-[#111]'>
				<aside className='p-6 lg:sticky lg:top-24 lg:self-start '>
					<header className='max-w-3xl'>
						<h1 className='font-display mt-3 text-3xl font-medium font-stretch-200% tracking-tight text-white sm:text-4xl'>
							{page.title}
						</h1>
					</header>

					<div className='mt-10 space-y-5 border-b border-white/10 pb-12 lg:border-b-0 lg:pb-0'>
						{foreword.map((para, i) => (
							<CaseStudyRichParagraph key={i} paragraph={para} />
						))}
					</div>
				</aside>

				<div className='divide-white/20 divide-y'>
					{eras.map((era, index) => {
						const { leading, wideItems, tail } = partitionCaseStudyEraBlocks(
							era.blocks,
							era.wideMediaGallery
						)
						const useWideGallery = wideItems !== null

						return (
							<motion.section
								key={era.id}
								id={era.id}
								custom={index}
								initial={reduceMotion ? false : 'hidden'}
								whileInView={reduceMotion ? undefined : 'visible'}
								viewport={{ once: true, margin: '-80px' }}
								variants={reduceMotion ? undefined : eraMotion}
								className={`${era.featured ? 'scroll-mt-28 ' : 'scroll-mt-28'} `}>
								<div className='border-l border-white/20 p-8'>
									<div>
										<h2 className='font-display text-xl font-semibold tracking-tight text-white sm:text-2xl'>
											{era.title}
										</h2>
										{era.summary ? (
											<p className='mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400'>
												{era.summary}
											</p>
										) : null}
										<div className='mt-10'>
											<CaseStudyEraBlocks
												blocks={useWideGallery ? leading : era.blocks}
											/>
										</div>
									</div>
									{useWideGallery && wideItems ? (
										<div className='mt-12 w-full min-w-0 lg:col-span-2'>
											<CaseStudyWideMediaGallery
												items={wideItems}
												sectionAriaLabel={era.wideGalleryAriaLabel}
												trackLabelPrefix={era.wideGalleryTrackLabel}
											/>
										</div>
									) : null}
									{useWideGallery && tail.length > 0 ? (
										<div className='mt-10 w-full min-w-0 lg:col-span-2'>
											<CaseStudyEraBlocks blocks={tail} />
										</div>
									) : null}
								</div>
							</motion.section>
						)
					})}
				</div>
			</div>

			<Link
				href='/artifacts'
				className={`${backLinkClass} mt-20`}
				aria-label='Back to artifacts'>
				<span className='absolute inset-0 overflow-hidden rounded-full'>
					<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
				</span>
				<span className='relative z-10 flex items-center gap-1 rounded-full bg-zinc-950 px-4 py-2 ring-1 ring-white/10'>
					<ArrowLeftIcon className='h-4 w-4 stroke-white/80' />
					<span>Artifacts</span>
				</span>
			</Link>
		</div>
	)
}
