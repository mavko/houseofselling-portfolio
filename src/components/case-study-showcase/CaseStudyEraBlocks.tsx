'use client'

import type {
  DiagramVariant,
  EraBlock,
  MediaItem,
} from '@/content/case-study-types'

import { CaseStudyMediaItem } from './CaseStudyMedia'
import { CaseStudyRichParagraph } from './CaseStudyRichParagraph'
import { AgentLoopDiagram } from './diagrams/AgentLoopDiagram'
import { DataPipelineDiagram } from './diagrams/DataPipelineDiagram'
import { CaseStudyDiagram } from './diagrams/CaseStudyDiagram'
import { StackCompare } from './diagrams/StackCompare'

const prose = 'w-full'

/**
 * Essay rhythm: heading sits close to its figure; larger air between beats.
 */
export function CaseStudyEraBlocks({ blocks }: { blocks: EraBlock[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => {
        const prev = blocks[i - 1]?.type
        const next = blocks[i + 1]?.type
        return (
          <div
            key={i}
            className={beatClass(block.type, prev, next)}
          >
            <Block block={block} prevType={prev} />
          </div>
        )
      })}
    </div>
  )
}

/** Spacing between blocks so the era reads as one continuous canvas. */
function beatClass(
  type: EraBlock['type'],
  prev?: EraBlock['type'],
  next?: EraBlock['type'],
) {
  // Section label + figure: tight couple (label belongs to what follows)
  if (type === 'heading') {
    return 'pt-14 first:pt-0'
  }
  if (prev === 'heading') {
    return 'mt-3'
  }
  // Figure → next section: heading already supplies air above
  if (
    (type === 'stack-compare' ||
      type === 'diagram' ||
      type === 'diagram-pair' ||
      type === 'media') &&
    next === 'heading'
  ) {
    return 'mt-1'
  }
  if (type === 'diagram-pair') {
    return prev ? 'mt-12' : ''
  }
  // Takeaway line after a figure — still part of that beat
  // (prev is already narrowed away from 'heading' above)
  if (type === 'plain' && prev) {
    return 'mt-6'
  }
  if (!prev) return ''
  return 'mt-12'
}

function Block({
  block,
  prevType,
}: {
  block: EraBlock
  prevType?: EraBlock['type']
}) {
  const tightAfterHeading = prevType === 'heading'

  switch (block.type) {
    case 'plain':
      return (
        <div
          className={`${prose} space-y-5 ${tightAfterHeading ? '' : ''}`}
        >
          {block.paragraphs.map((p, j) => (
            <p
              key={j}
              className="text-[20px] font-medium leading-[38px] text-[#ededed] text-pretty"
            >
              {p}
            </p>
          ))}
        </div>
      )
    case 'rich':
      return (
        <div className={`${prose} space-y-5`}>
          {block.paragraphs.map((para, j) => (
            <CaseStudyRichParagraph key={j} paragraph={para} />
          ))}
        </div>
      )
    case 'heading':
      return (
        <h3
          className={`${prose} text-[13px] font-medium tracking-[0.04em] text-zinc-500 text-balance`}
        >
          {block.text}
        </h3>
      )
    case 'links':
      return (
        <ul className={`${prose} flex flex-col gap-1.5`}>
          {block.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex min-h-10 items-center text-[15px] text-emerald-300/90 underline decoration-white/15 underline-offset-4 transition-colors duration-150 ease-out active:opacity-80 [@media(hover:hover)_and_(pointer:fine)]:hover:text-emerald-200"
              >
                {link.label}
                {link.external ? (
                  <span className="ml-1 opacity-60" aria-hidden>
                    ↗
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      )
    case 'bullets':
      return (
        <ul className={`${prose} space-y-3`} role="list">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="relative pl-4 text-[17px] font-medium leading-[1.55] text-[#ededed] text-pretty before:absolute before:top-[0.7em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-600 sm:text-[18px] sm:leading-[1.6]"
            >
              {item}
            </li>
          ))}
        </ul>
      )
    case 'media':
      return <CaseStudyMediaGrid items={block.items} />
    case 'stack-compare':
      return <StackCompare rows={block.rows} />
    case 'diagram':
      return (
        <CaseStudyDiagram variant={block.variant} caption={block.caption} />
      )
    case 'diagram-pair':
      return (
        <div className="flex flex-col gap-14">
          <DiagramRow
            heading={block.left.heading}
            variant={block.left.variant}
            caption={block.left.caption}
          />
          <DiagramRow
            heading={block.right.heading}
            variant={block.right.variant}
            caption={block.right.caption}
          />
        </div>
      )
    default: {
      const _exhaustive: never = block
      return _exhaustive
    }
  }
}

function DiagramRow({
  heading,
  variant,
  caption,
}: {
  heading: string
  variant: DiagramVariant
  caption: string
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-[13px] font-medium tracking-[0.04em] text-zinc-400 text-balance">
        {heading}
      </h3>
      <div className="mt-3">
        {variant === 'data-pipeline' ? (
          <DataPipelineDiagram caption={caption} orientation="horizontal" />
        ) : variant === 'agent-loop' ? (
          <AgentLoopDiagram caption={caption} />
        ) : (
          (() => {
            const _exhaustive: never = variant
            return _exhaustive
          })()
        )}
      </div>
    </div>
  )
}

function CaseStudyMediaGrid({ items }: { items: MediaItem[] }) {
  // One piece of media: full measure — no half-width orphan in a 2-col grid
  if (items.length === 1) {
    return (
      <div className="w-full min-w-0">
        <CaseStudyMediaItem item={items[0]!} />
      </div>
    )
  }

  const isFeaturedPair =
    items.length === 2 && items.every((it) => it.kind === 'placeholder')

  if (isFeaturedPair) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item, j) => (
          <CaseStudyMediaItem key={j} item={item} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((item, j) => (
        <CaseStudyMediaItem key={j} item={item} />
      ))}
    </div>
  )
}
