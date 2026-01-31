import glob from 'fast-glob'
import fs from 'fs/promises'
import path from 'path'

interface Article {
  title: string
  description: string
  author: string
  date: string
  coverImage?: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/artifacts/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  // Read the MDX file content
  const fullPath = path.join(
    process.cwd(),
    'src',
    'app',
    'artifacts',
    'archive',
    articleFilename,
  )
  const fileContent = await fs.readFile(fullPath, 'utf8')

  // Extract the first image from the MDX content
  const imageMatch = fileContent.match(/!\[.*?\]\((.*?)\)/)
  const coverImage = imageMatch ? imageMatch[1] : undefined

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
    coverImage,
  }
}

export async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/artifacts/archive',
  })

  const articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.toSorted((a, z) => +new Date(z.date) - +new Date(a.date))
}
