'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogTrigger,
  DialogContainer,
  DialogContent,
  DialogClose,
} from './Dialog'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface EnlargeableImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function EnlargeableImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
}: EnlargeableImageProps) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <DialogTrigger>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-xl transition-all delay-300 hover:-translate-y-1 hover:border hover:border-white/30 hover:shadow-xl hover:shadow-black ${className}`}
        />
      </DialogTrigger>
      <DialogContainer>
        <DialogContent className="relative">
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={900}
            className="h-full w-full rounded-xl border border-white/20 bg-cover"
          />
        </DialogContent>
        <DialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XMarkIcon className="size-6 fill-black" />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  )
}
