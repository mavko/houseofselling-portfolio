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
          <span className="absolute inset-0 h-1 w-full rounded-full bg-radial-[at_50%_75%] from-orange-300 via-orange-400/5 to-orange-950/5 to-90% opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex h-11 items-center space-x-1 rounded-xl px-4 ring-1 ring-white/15">
          <span>{`What am I up to?`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-0.5 w-[calc(100%-2.25rem)] bg-linear-to-r from-orange-400/0 via-orange-300 to-orange-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
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
              className="fixed inset-0 z-10 bg-black/50"
            />
            <div className="fixed inset-0 z-20 flex w-screen items-center justify-center p-20">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex h-full w-full max-w-4xl flex-col overflow-y-scroll rounded-2xl border border-white/20 bg-[linear-gradient(259deg,rgba(0,0,0,0.4)_40.8115%,rgba(28,28,28,0.6)_98%)] p-12 shadow-[rgba(255,255,255,0.2)_2px_0px_10px_-2px_inset,rgba(255,255,255,0.04)_0px_-3px_8px_3px_inset,rgba(255,255,255,0.08)_-4px_-5px_3px_-4px_inset,rgba(255,255,255,0.4)_2px_4px_2px_-3px_inset,rgba(255,255,255,0.7)_3px_3px_1.5px_-4px_inset,rgba(0,0,0,0.9)_0px_20px_30px_5px] backdrop-blur-md duration-300 ease-out"
              >
                <DialogTitle className="flex items-center justify-between text-lg font-bold">
                  <span className="font-sans text-base font-medium tracking-normal text-white/90">
                    My projects and startups since 2012.
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ring-1 ring-white/20"
                  >
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
