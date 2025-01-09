'use client'

import { ArticleLayoutContent } from './ArticleLayoutContent'
import { type ArticleWithSlug } from '@/lib/articles'
import { Metadata } from 'next'

export function generateMetadata({
  article,
}: {
  article: ArticleWithSlug
}): Metadata {
  const imageUrl = article.coverImage
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${article.coverImage}`
    : 'https://sebastianselling.com/og.png'

  return {
    title: `${article.title} - Sebastian Selling`,
    description: `${article.description}`,
    alternates: {
      types: {
        'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      title: `${article.title} - Sebastian Selling`,
      description: `${article.description}`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/artifacts/${article.slug}`,
      siteName: `${article.title} - Alchemy by Sebastian`,
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
      title: `${article.title} - Sebastian Selling`,
      description: `${article.description}`,
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
    <ArticleLayoutContent article={article}>{children}</ArticleLayoutContent>
  )
}
