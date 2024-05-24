import Image, { type ImageProps } from 'next/image'
import { MDXComponents } from '@mdx-js/react'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
  }
}
