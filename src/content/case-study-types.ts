import type { BlobMediaKey } from '@/generated/blob-media'

export type TextSegment =
	| { kind: 'text'; value: string }
	| { kind: 'link'; href: string; label: string; external?: boolean }

export type RichParagraph = TextSegment[]

export type MediaItem =
	| {
			kind: 'image'
			srcKey: BlobMediaKey
			alt: string
			caption?: string
			width?: number
			height?: number
			/** Hint LCP: pass to next/image `priority` on the thumbnail (use sparingly, one per route). */
			priority?: boolean
	  }
	| {
			kind: 'embed'
			src: string
			title: string
			height: number
	  }
	| {
			kind: 'video'
			src: string
			title: string
			caption?: string
	  }
	| {
			kind: 'placeholder'
			title: string
			description: string
	  }

export type EraBlock =
	| { type: 'rich'; paragraphs: RichParagraph[] }
	| { type: 'plain'; paragraphs: string[] }
	| { type: 'heading'; text: string }
	| {
			type: 'links'
			links: { label: string; href: string; external?: boolean }[]
	  }
	| { type: 'bullets'; items: string[] }
	| { type: 'media'; items: MediaItem[] }

export type CaseStudyPageMeta = {
	title: string
	description: string
	date: string
}

export type CaseStudyEra = {
	id: string
	label: string
	yearRange: string
	title: string
	summary?: string
	featured?: boolean
	/** First `media` block spans full era width (both timeline columns). */
	wideMediaGallery?: boolean
	/** Overrides default aria-label on the wide gallery region. */
	wideGalleryAriaLabel?: string
	/** Overrides default aria-label on the horizontal image track (image-only slides). */
	wideGalleryTrackLabel?: string
	blocks: EraBlock[]
}
