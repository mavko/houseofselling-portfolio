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
    <div className="mx-auto w-full max-w-[1000px] pt-12 sm:pt-20">
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
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/[0.06] pt-6">
              {page.meta!.map((item) => (
                <div
                  key={item.label}
                  className="min-w-[10.5rem] flex-1 basis-[calc(50%-1.25rem)] sm:min-w-0 sm:basis-[calc(25%-1.875rem)]"
                >
                  <dt className="text-[11px] font-medium tracking-[0.06em] text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-[1.35] text-zinc-200 text-pretty tabular-nums">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {foreword.length > 0 ? (
            <div className="mt-10 space-y-5 text-pretty">
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
            const eraLabel = era.label?.trim() ?? ''
            const yearLabel = era.yearRange?.trim() ?? ''
            const showEraMeta = Boolean(eraLabel || yearLabel)
            const dateTime = yearLabel
              ? yearDateTime(yearLabel)
              : undefined

            const eraTitle = era.title?.trim() ?? ''
            const showEraHeader = showEraMeta || Boolean(eraTitle)

            return (
              <section key={era.id} id={era.id} className="scroll-mt-28">
                {showEraHeader ? (
                  <header>
                    {showEraMeta ? (
                      <p className="text-[13px] text-zinc-500">
                        {eraLabel ? (
                          <span className="font-medium text-zinc-400">
                            {eraLabel}
                          </span>
                        ) : null}
                        {eraLabel && yearLabel ? (
                          <span className="mx-1.5 text-zinc-700" aria-hidden>
                            ·
                          </span>
                        ) : null}
                        {yearLabel ? (
                          dateTime ? (
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
                          )
                        ) : null}
                      </p>
                    ) : null}
                    {eraTitle ? (
                      <div
                        className={`${showEraMeta ? 'mt-3' : ''} flex items-center justify-between gap-4`}
                      >
                        <h2 className="min-w-0 text-xl font-medium tracking-tight text-white text-balance sm:text-[1.35rem] sm:leading-snug">
                          {eraTitle}
                        </h2>
                        {era.titleAction ? (
                          <a
                            href={era.titleAction.href}
                            {...(era.titleAction.external
                              ? {
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                }
                              : {})}
                            className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-[13px] font-medium text-zinc-200 transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/25 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.08] [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
                          >
                            {era.titleAction.label}
                            {era.titleAction.external ? (
                              <span className="opacity-60" aria-hidden>
                                ↗
                              </span>
                            ) : null}
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </header>
                ) : null}

                {era.summary ? (
                  <p className="mt-6 text-[20px] font-medium leading-[38px] text-[#ededed] text-pretty">
                    {era.summary}
                  </p>
                ) : null}

                <div className={showEraHeader || era.summary ? 'mt-10' : ''}>
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
