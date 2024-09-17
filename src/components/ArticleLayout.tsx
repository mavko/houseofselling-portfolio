'use client'

import Template from '@/app/template'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Metadata } from 'next'
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

export function generateMetadata({ article }: { article: ArticleWithSlug }): Metadata {
  // Assuming article.coverImage is the path to the article's cover image
  // If it doesn't exist, fall back to the default image
  const imageUrl = article.coverImage
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${article.coverImage}`
    : 'https://sebastianselling.com/og.png'

  return {
    title: `${article.title} - Sebastian Selling`,
    description: article.description || 'Design Engineer with over a Decade of experience building brands and apps.',
    alternates: {
      types: {
        'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description || 'Design Engineer with over a Decade of experience building brands and apps.',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/craft/${article.slug}`,
      siteName: 'Sebastian Selling',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || 'Design Engineer with over a Decade of experience building brands and apps.',
      siteId: '@houseofselling',
      creator: '@houseofselling',
      creatorId: '1675809229276364802',
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  return (
    <Container className="my-16 mb-44">
      <Template>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/craft"
              aria-label="Go back"
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white/80 inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-1 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <ArrowLeftIcon className="h-4 w-4 stroke-white/80 " />
                <span>{`Craft`}</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[#FFC799] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-xl font-bold tracking-tight">
                  {article.title}
                </h1>
                <time
                  dateTime={article.date}
                  className="order-last flex items-center text-base text-[#a0a0a0]"
                >{formatDate(article.date)}
                </time>
              </header>
              <Prose className="mt-8" data-mdx-content>
                {children}
              </Prose>
            </article>
            <Link
              href="/craft"
              aria-label="Go back"
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white/80 inline-block mt-6">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-1 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <ArrowLeftIcon className="h-4 w-4 stroke-white/80 " />
                <span>{`Craft`}</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[#FFC799] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </Link>
          </div>
        </div>
      </Template>
    </Container>
  )
}
