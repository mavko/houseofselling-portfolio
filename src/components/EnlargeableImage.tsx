'use client'

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SafeImage } from './SafeImage'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SafeImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer rounded-xl transition-all hover:-translate-y-1 hover:border hover:border-white/30 hover:shadow-xl hover:shadow-black ${className}`}
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
