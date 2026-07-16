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

export type StackCompareRow = {
  before: string
  after: string
}

export type DiagramVariant = 'data-pipeline' | 'agent-loop'

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
  | { type: 'stack-compare'; rows: StackCompareRow[] }
  | {
      type: 'diagram'
      variant: DiagramVariant
      caption: string
    }
  | {
      type: 'diagram-pair'
      left: {
        heading: string
        variant: DiagramVariant
        caption: string
      }
      right: {
        heading: string
        variant: DiagramVariant
        caption: string
      }
    }

export type CaseStudyMetaItem = {
  label: string
  value: string
}

export type CaseStudyPageMeta = {
  title: string
  description: string
  date: string
  /** Project name / series label above the headline. */
  eyebrow?: string
  /** One-line positioning under the title. */
  subtitle?: string
  /** Scan strip: Role, Scope, Domain, Status, etc. */
  meta?: readonly CaseStudyMetaItem[]
}

export type CaseStudyEra = {
  id: string
  /** Era name in the label · year line. Omit with yearRange to hide that line. */
  label?: string
  yearRange?: string
  /** Era headline. Omit when the era is figure-only (e.g. diagram pair). */
  title?: string
  /** Button opposite the title (space-between). */
  titleAction?: {
    label: string
    href: string
    external?: boolean
  }
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
