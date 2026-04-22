'use client'

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SafeImage } from './SafeImage'

const thumbMotion =
  'cursor-pointer rounded-xl ring-1 ring-white/10 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:transition-[transform,box-shadow,border-color] [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-out motion-reduce:hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/30 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-xl [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-black/80'

interface EnlargeableImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  /** Passed to next/image for responsive thumbnail density (gallery layouts). */
  sizes?: string
  /** Above-the-fold / LCP thumbnail: eager fetch + preload (do not set on many images). */
  priority?: boolean
}

export function EnlargeableImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  sizes,
  priority,
}: EnlargeableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  const thumbClass = [thumbMotion, className].filter(Boolean).join(' ')

  return (
    <>
      <SafeImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        role="button"
        aria-label={`Open full size: ${alt}`}
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(true)
          }
        }}
        className={thumbClass}
      />

      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative h-auto max-h-[90vh] w-auto max-w-5xl"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                  <SafeImage
                    src={src}
                    alt={alt}
                    width={1280}
                    height={900}
                    className="h-full w-full rounded-xl border border-white/20 bg-cover"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                >
                  <XMarkIcon className="size-6 fill-black" />
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
