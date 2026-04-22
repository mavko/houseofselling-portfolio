import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { EnlargeableImage } from '@/components/EnlargeableImage'
import type { MediaItem } from '@/content/case-study-types'
import { mediaUrl } from '@/lib/media-url'

import { CaseStudyMediaItem } from './CaseStudyMedia'

const GALLERY_SIZES =
	'(min-width: 1280px) 62vw, (min-width: 768px) 72vw, 94vw'

function WideGalleryFigure({
	src,
	alt,
	caption,
	width,
	height,
	priority,
}: {
	src: string
	alt: string
	caption?: string
	width: number
	height: number
	priority?: boolean
}) {
	return (
		<figure className='space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3'>
			<EnlargeableImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				sizes={GALLERY_SIZES}
				className='aspect-[16/10] w-full object-cover'
				priority={priority}
			/>
			{caption ? (
				<figcaption className='px-1 text-center text-xs font-medium text-zinc-500'>
					{caption}
				</figcaption>
			) : null}
		</figure>
	)
}

export type CaseStudyWideMediaGalleryProps = {
	items: MediaItem[]
	/** Root `section` aria-label; default "Media gallery". */
	sectionAriaLabel?: string
	/** Prefix for the horizontal track label, e.g. "Refactor screenshots"; default "Images". */
	trackLabelPrefix?: string
}

export function CaseStudyWideMediaGallery({
	items,
	sectionAriaLabel = 'Media gallery',
	trackLabelPrefix = 'Images',
}: CaseStudyWideMediaGalleryProps) {
	const imageItems = items.filter(
		(item): item is Extract<MediaItem, { kind: 'image' }> =>
			item.kind === 'image',
	)
	const nonImageItems = items.filter((item) => item.kind !== 'image')
	const hasImageCarousel = imageItems.length > 0
	const showCarouselNav = imageItems.length > 1

	const trackRef = useRef<HTMLUListElement | null>(null)
	const [canPrev, setCanPrev] = useState(false)
	const [canNext, setCanNext] = useState(imageItems.length > 1)

	const slideLabel = useMemo(() => {
		if (imageItems.length === 0) return undefined
		const unit = imageItems.length === 1 ? 'slide' : 'slides'
		return `${trackLabelPrefix} (${imageItems.length} ${unit})`
	}, [imageItems.length, trackLabelPrefix])

	const updateButtons = useCallback(() => {
		const track = trackRef.current
		if (!track) return
		const epsilon = 4
		setCanPrev(track.scrollLeft > epsilon)
		setCanNext(
			track.scrollLeft + track.clientWidth < track.scrollWidth - epsilon,
		)
	}, [])

	const scrollByPage = useCallback((direction: 'prev' | 'next') => {
		const track = trackRef.current
		if (!track) return
		const amount = Math.round(track.clientWidth * 0.9)
		track.scrollBy({
			left: direction === 'next' ? amount : -amount,
			behavior: 'smooth',
		})
	}, [])

	useEffect(() => {
		updateButtons()
		window.addEventListener('resize', updateButtons)
		return () => window.removeEventListener('resize', updateButtons)
	}, [updateButtons, items])

	return (
		<section aria-label={sectionAriaLabel} className='w-full'>
			{hasImageCarousel ? (
				<>
					<div
						className={`mb-4 flex items-center gap-3 ${showCarouselNav ? 'justify-between' : ''}`}>
						<p className='text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase'>
							Gallery
						</p>
						{showCarouselNav ? (
							<div className='flex items-center gap-2'>
								<button
									type='button'
									aria-label='Previous slide'
									onClick={() => scrollByPage('prev')}
									disabled={!canPrev}
									className='inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition-colors enabled:hover:bg-white/[0.08] enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40'>
									<ChevronLeftIcon className='size-4' />
								</button>
								<button
									type='button'
									aria-label='Next slide'
									onClick={() => scrollByPage('next')}
									disabled={!canNext}
									className='inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 transition-colors enabled:hover:bg-white/[0.08] enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40'>
									<ChevronRightIcon className='size-4' />
								</button>
							</div>
						) : null}
					</div>

					<ul
						ref={trackRef}
						aria-label={slideLabel}
						onScroll={updateButtons}
						className='flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
						{imageItems.map((item, index) => {
							const src = mediaUrl(item.srcKey)
							return (
								<li
									key={`${item.srcKey}-${index}`}
									className='w-[92%] shrink-0 snap-center sm:w-[78%] lg:w-[64%]'>
									<WideGalleryFigure
										src={src}
										alt={item.alt}
										caption={item.caption}
										width={item.width ?? 1600}
										height={item.height ?? 1000}
										priority={item.priority}
									/>
								</li>
							)
						})}
					</ul>
				</>
			) : null}

			{nonImageItems.length > 0 ? (
				<div className={hasImageCarousel ? 'mt-8 space-y-6' : 'space-y-6'}>
					{nonImageItems.map((item, index) => (
						<div key={`${item.kind}-${index}`}>
							<CaseStudyMediaItem item={item} />
						</div>
					))}
				</div>
			) : null}
		</section>
	)
}
