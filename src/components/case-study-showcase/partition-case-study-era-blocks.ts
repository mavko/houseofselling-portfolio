import type { EraBlock, MediaItem } from '@/content/case-study-types'

export function partitionCaseStudyEraBlocks(
	blocks: EraBlock[],
	wideMediaGallery: boolean | undefined,
): { leading: EraBlock[]; wideItems: MediaItem[] | null; tail: EraBlock[] } {
	if (!wideMediaGallery) {
		return { leading: blocks, wideItems: null, tail: [] }
	}
	const idx = blocks.findIndex((b) => b.type === 'media')
	if (idx === -1) {
		return { leading: blocks, wideItems: null, tail: [] }
	}
	const mediaBlock = blocks[idx]
	if (mediaBlock.type !== 'media') {
		return { leading: blocks, wideItems: null, tail: [] }
	}
	return {
		leading: blocks.slice(0, idx),
		wideItems: mediaBlock.items,
		tail: blocks.slice(idx + 1),
	}
}
