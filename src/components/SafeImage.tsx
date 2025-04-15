'use client'

import Image, { ImageProps } from 'next/image'

export function SafeImage(props: ImageProps) {
  return <Image {...props} suppressHydrationWarning={true} />
}
