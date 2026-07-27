'use client'

import Link from 'next/link'

import { ChromePillLink } from '@/components/HeroNavPills'
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
            <p className="font-display text-[13px] font-semibold tracking-[-0.2px] text-zinc-400 font-stretch-125%">
              {page.eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-display text-3xl font-semibold tracking-tight text-balance text-white font-stretch-125% sm:text-4xl ${
              page.eyebrow ? 'mt-4' : ''
            }`}
          >
            {page.title}
          </h1>
          {page.subtitle ? (
            <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-zinc-500 text-pretty">
              {page.subtitle}
            </p>
          ) : null}

          {hasMeta ? (
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {page.meta!.map((item) => (
                <div key={item.label} className="min-w-0">
                  <dt className="text-[11px] font-medium tracking-[0.08em] text-zinc-600">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-zinc-200 text-pretty">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {foreword.length > 0 ? (
            <div className="mt-12 max-w-[40rem] space-y-6 text-pretty">
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
                          <ChromePillLink
                            href={era.titleAction.href}
                            external={era.titleAction.external}
                            data-cuelume-hover="tick"
                          >
                            <span>{era.titleAction.label}</span>
                            {era.titleAction.external ? (
                              <span aria-hidden>↗</span>
                            ) : null}
                          </ChromePillLink>
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
