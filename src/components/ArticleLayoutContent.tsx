'use client'

import Template from '@/app/template'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

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

export function ArticleLayoutContent({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  return (
    <Container className="my-16 mb-44">
      {' '}
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/artifacts"
            aria-label="Go back"
            className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs leading-6 font-semibold text-white/80 no-underline shadow-2xl shadow-zinc-900"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center space-x-1 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10">
              <ArrowLeftIcon className="h-4 w-4 stroke-white/80" />
              <span>{`Alchemy`}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-green-300 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-xl font-bold tracking-tight">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-last flex items-center text-base text-[#a0a0a0]"
              >
                {formatDate(article.date)}
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
          <Link
            href="/artifacts"
            aria-label="Go back"
            className="group relative mt-6 inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs leading-6 font-semibold text-white/80 no-underline shadow-2xl shadow-zinc-900"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center space-x-1 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10">
              <ArrowLeftIcon className="h-4 w-4 stroke-white/80" />
              <span>{`Alchemy`}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-green-300 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </Link>
        </div>
      </div>
    </Container>
  )
}
