'use client'

import { Button, Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { StaticImageData } from 'next/image'
import { SafeImage } from './SafeImage'

export type VisualItem = {
  type: 'image' | 'video'
  src: string | StaticImageData
  alt: string
}

type VisualsDialogProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  item: VisualItem | null
}

const MediaComponent = ({ item }: { item: VisualItem }) => {
  if (item.type === 'image') {
    return (
      <SafeImage
        src={item.src}
        alt={item.alt}
        className="h-auto w-full rounded-2xl bg-cover"
        width={800}
        height={800}
      />
    )
  } else {
    return (
      <video
        src={item.src as string}
        className="h-auto w-full rounded-2xl object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
    )
  }
}

export default function VisualsDialog({
  isOpen,
  setIsOpen,
  item,
}: VisualsDialogProps) {
  if (!item) return null

  return (
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
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative h-auto max-h-[90vh] w-auto max-w-5xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                <MediaComponent item={item} />
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
              >
                <XMarkIcon className="size-6 fill-black" />
              </Button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
