import type { MDXComponents } from 'mdx/types'
import { ArticleLayout } from '@/components/ArticleLayout'
import { EnlargeableImage } from '@/components/EnlargeableImage'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: EnlargeableImage,
    ArticleLayout,
    Prose,
    a: ({ href = '', ...props }) => {
      if (href.startsWith('http')) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
        )
      }
      return <Link href={href} {...props} />
    },
    img: ({ src, alt, ...props }) => (
      <EnlargeableImage src={src} alt={alt || ''} {...props} />
    ),
  }
}
