import { EnlargeableImage } from '@/components/EnlargeableImage'
import type { MediaItem } from '@/content/case-study-types'
import { mediaUrl } from '@/lib/media-url'

export function CaseStudyMediaItem({ item }: { item: MediaItem }) {
	if (item.kind === 'placeholder') {
		return (
			<div className='flex min-h-[220px] flex-col justify-center rounded-4xl border border-dashed border-white/15 bg-white/[0.03] p-8 [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.08)]'>
				<p className='font-display text-lg font-semibold tracking-tight text-white'>
					{item.title}
				</p>
				<p className='mt-2 text-sm leading-relaxed text-zinc-500'>
					{item.description}
				</p>
			</div>
		)
	}

	if (item.kind === 'embed') {
		return (
			<figure className='space-y-3'>
				<div className='overflow-hidden rounded-xl ring-1 ring-white/10'>
					<iframe
						src={item.src}
						title={item.title}
						height={item.height}
						className='aspect-video w-full max-h-[min(70vh,560px)] min-h-[240px]'
						allowFullScreen
					/>
				</div>
				<figcaption className='text-center text-xs font-medium text-zinc-500'>
					{item.title}
				</figcaption>
			</figure>
		)
	}

	if (item.kind === 'video') {
		return (
			<figure className='space-y-3'>
				<div className='overflow-hidden rounded-xl ring-1 ring-white/10'>
					<video
						src={item.src}
						title={item.title}
						className='aspect-video w-full'
						autoPlay
						loop
						muted
						playsInline
						controls
						preload='metadata'
					/>
				</div>
				{item.caption ? (
					<figcaption className='text-center text-xs font-medium text-zinc-500'>
						{item.caption}
					</figcaption>
				) : null}
			</figure>
		)
	}

	const src = mediaUrl(item.srcKey)

	return (
		<figure className='space-y-3'>
			<EnlargeableImage
				src={src}
				alt={item.alt}
				width={item.width ?? 1200}
				height={item.height ?? 800}
				className='w-full object-contain'
				priority={item.priority}
			/>
			{item.caption ? (
				<figcaption className='text-center text-xs font-medium text-zinc-500'>
					{item.caption}
				</figcaption>
			) : null}
		</figure>
	)
}
