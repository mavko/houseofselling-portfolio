'use client'

import Link from 'next/link'

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
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function yearDateTime(yearRange: string): string | undefined {
  const match = yearRange.match(/\d{4}/)
  return match?.[0]
}

/**
 * Open long-form — scan pack first (title, meta, hook), then eras as depth.
 */
export function CaseStudyShowcase({
  page,
  foreword,
  eras,
}: {
  page: CaseStudyPageMeta
  foreword: RichParagraph[]
  eras: CaseStudyEra[]
}) {
  const hasMeta = page.meta && page.meta.length > 0

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <article>
        <header>
          {page.eyebrow ? (
            <p className="text-[13px] font-medium text-zinc-500">
              {page.eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-display text-2xl font-semibold tracking-tight text-balance text-white sm:text-[1.75rem] ${
              page.eyebrow ? 'mt-3' : ''
            }`}
          >
            {page.title}
          </h1>
          {page.subtitle ? (
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400 text-pretty">
              {page.subtitle}
            </p>
          ) : null}

          {hasMeta ? (
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {page.meta!.map((item) => (
                <div key={item.label} className="min-w-0">
                  <dt className="text-[11px] font-medium tracking-[0.04em] text-zinc-600">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-snug text-zinc-300 text-pretty">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {foreword.length > 0 ? (
            <div
              className={`space-y-5 text-pretty ${
                hasMeta || page.subtitle ? 'mt-10' : 'mt-10'
              }`}
            >
              {foreword.map((para, i) => (
                <CaseStudyRichParagraph key={i} paragraph={para} />
              ))}
            </div>
          ) : null}
        </header>

        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
          {eras.map((era) => {
            const { leading, wideItems, tail } = partitionCaseStudyEraBlocks(
              era.blocks,
              era.wideMediaGallery,
            )
            const useWideGallery = wideItems !== null
            const yearLabel = era.yearRange.trim()
            const dateTime = yearDateTime(yearLabel)

            return (
              <section key={era.id} id={era.id} className="scroll-mt-28">
                <header>
                  <p className="text-[13px] text-zinc-500">
                    <span className="font-medium text-zinc-400">
                      {era.label}
                    </span>
                    <span className="mx-1.5 text-zinc-700" aria-hidden>
                      ·
                    </span>
                    {dateTime ? (
                      <time
                        dateTime={dateTime}
                        className="font-mono tabular-nums"
                      >
                        {yearLabel}
                      </time>
                    ) : (
                      <span className="font-mono tabular-nums">
                        {yearLabel}
                      </span>
                    )}
                  </p>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-white text-balance sm:text-[1.35rem] sm:leading-snug">
                    {era.title}
                  </h2>
                </header>

                {era.summary ? (
                  <p className="mt-6 text-[20px] font-medium leading-[38px] text-[#ededed] text-pretty">
                    {era.summary}
                  </p>
                ) : null}

                <div className="mt-10">
                  <CaseStudyEraBlocks
                    blocks={useWideGallery ? leading : era.blocks}
                  />
                </div>

                {useWideGallery && wideItems ? (
                  <div className="mt-12 w-full min-w-0">
                    <CaseStudyWideMediaGallery
                      items={wideItems}
                      sectionAriaLabel={era.wideGalleryAriaLabel}
                      trackLabelPrefix={era.wideGalleryTrackLabel}
                    />
                  </div>
                ) : null}

                {useWideGallery && tail.length > 0 ? (
                  <div className="mt-12 w-full min-w-0">
                    <CaseStudyEraBlocks blocks={tail} />
                  </div>
                ) : null}
              </section>
            )
          })}
        </div>
      </article>

      <Link
        href="/artifacts"
        className="mt-20 inline-flex min-h-11 items-center gap-1.5 text-sm text-zinc-500 no-underline transition-colors duration-150 ease-out active:opacity-80 [@media(hover:hover)_and_(pointer:fine)]:hover:text-zinc-300"
        aria-label="Back to artifacts"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-current" />
        Artifacts
      </Link>
    </div>
  )
}
