'use client'

import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ProjectsList from './ProjectsList'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function DialogComponent() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="group relative inline-block cursor-pointer rounded-lg p-px text-base/9 leading-6 font-semibold text-white no-underline"
      >
        <span className="absolute inset-0 overflow-hidden rounded-sm">
          <span className="absolute inset-0 h-2 w-full rounded-full bg-radial-[at_50%_75%] from-orange-300 via-orange-400/5 to-orange-950/5 to-90% opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex h-12 items-center space-x-1 rounded-xl px-4 ring-1 ring-white/15">
          <span>{`What am I up to?`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-1 w-[calc(100%-2.25rem)] bg-linear-to-r from-orange-400/0 via-orange-300 to-orange-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </Button>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full w-full max-w-3xl overflow-y-scroll border border-white/20 bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out sm:p-12"
              >
                <DialogTitle className="flex items-center justify-between text-lg font-bold">
                  <span className="font-mono text-sm font-semibold tracking-widest text-white/90 uppercase">
                    My projects and startups since 2012.
                  </span>
                  <button onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="size-6 fill-white/60" />
                  </button>
                </DialogTitle>

                <ProjectsList />
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
