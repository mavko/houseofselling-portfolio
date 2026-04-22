import type { EraBlock, MediaItem } from '@/content/case-study-types'

import { CaseStudyMediaItem } from './CaseStudyMedia'
import { CaseStudyRichParagraph } from './CaseStudyRichParagraph'

export function CaseStudyEraBlocks({ blocks }: { blocks: EraBlock[] }) {
	return (
		<div className='space-y-10'>
			{blocks.map((block, i) => (
				<Block key={i} block={block} />
			))}
		</div>
	)
}

function Block({ block }: { block: EraBlock }) {
	switch (block.type) {
		case 'plain':
			return (
				<div className='max-w-3xl space-y-4'>
					{block.paragraphs.map((p, j) => (
						<p
							key={j}
							className='text-base leading-relaxed text-zinc-300'>
							{p}
						</p>
					))}
				</div>
			)
		case 'rich':
			return (
				<div className='max-w-3xl space-y-4'>
					{block.paragraphs.map((para, j) => (
						<CaseStudyRichParagraph key={j} paragraph={para} />
					))}
				</div>
			)
		case 'heading':
			return (
				<h3 className='font-display text-lg font-semibold tracking-tight text-white'>
					{block.text}
				</h3>
			)
		case 'links':
			return (
				<ul className='flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6'>
					{block.links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								{...(link.external
									? { target: '_blank', rel: 'noopener noreferrer' }
									: {})}
								className='text-sm font-medium text-emerald-300/90 underline decoration-white/15 underline-offset-4 transition-colors hover:text-emerald-200'>
								{link.label}
								{link.external ? ' ↗' : ''}
							</a>
						</li>
					))}
				</ul>
			)
		case 'bullets':
			return (
				<ul className='max-w-3xl list-disc space-y-2 pl-5 text-sm text-zinc-400 marker:text-zinc-600'>
					{block.items.map((item, j) => (
						<li key={j}>{item}</li>
					))}
				</ul>
			)
		case 'media':
			return <CaseStudyMediaGrid items={block.items} />
		default:
			return null
	}
}

function CaseStudyMediaGrid({ items }: { items: MediaItem[] }) {
	const isFeaturedPair =
		items.length === 2 && items.every((it) => it.kind === 'placeholder')

	if (isFeaturedPair) {
		return (
			<div className='grid gap-4 sm:grid-cols-2 lg:gap-6'>
				{items.map((item, j) => (
					<CaseStudyMediaItem key={j} item={item} />
				))}
			</div>
		)
	}

	return (
		<div className='grid max-w-6xl gap-8 sm:grid-cols-2 lg:gap-10'>
			{items.map((item, j) => (
				<CaseStudyMediaItem key={j} item={item} />
			))}
		</div>
	)
}
