'use client'

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ProjectsList from './ProjectsList'
import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { LinkedInIcon, XIcon } from './SocialIcons'

const backdropEase: [number, number, number, number] = [0.23, 1, 0.32, 1]
const backdropExitEase: [number, number, number, number] = [0.4, 0, 1, 1]

const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.22, ease: backdropExitEase },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: backdropEase },
  },
}

const panelVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 10,
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      bounce: 0.12,
      duration: 0.52,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.98,
    y: 6,
    transition: { duration: 0.22, ease: backdropExitEase },
  },
}

const linkClass =
  ' p-2 text-white/80 transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:text-white active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none'

export default function DialogComponent() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="group relative inline-block cursor-pointer rounded-full bg-transparent p-px text-base/9 leading-6 font-semibold text-white no-underline outline-0 transition-transform duration-200 ease-out active:scale-[0.97]"
      >
        <div className="inner-shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] absolute top-0 left-0 z-0 h-full w-full rounded-full border border-white/15 shadow-sm shadow-white/40 transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
          style={{ backdropFilter: 'url("#container-glass")' }}
        />
        <span className="absolute inset-0 overflow-hidden rounded-sm">
          <span className="absolute inset-0 h-1 w-full rounded-full bg-radial-[at_50%_75%] from-orange-300 via-orange-400/5 to-orange-950/5 to-90% opacity-0 transition-opacity duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex h-11 items-center space-x-1 rounded-full px-6">
          <span>{`What am I up to?`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-0.5 w-[calc(100%-2.25rem)] bg-linear-to-r from-orange-400/0 via-orange-300 to-orange-400/0 opacity-0 transition-opacity duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-40" />
        <GlassFilter />
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
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-10 bg-black/70 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-20 flex w-screen items-center justify-center p-2">
              <DialogPanel
                as={motion.div}
                variants={panelVariants}
                initial="initial"
                animate="open"
                exit="closed"
                className="mx-auto flex h-full w-full max-w-4xl flex-col"
              >
                <DialogTitle className="font-title flex items-center justify-between py-4 text-lg font-bold">
                  <div className="flex h-full w-fit items-center gap-1 rounded-full border border-white/15 px-3 sm:gap-2">
                    <Link
                      className={linkClass}
                      href="mailto:houseofselling@proton.me"
                      aria-label="Email"
                    >
                      <EnvelopeIcon className="size-5 fill-current" />
                    </Link>

                    <Link
                      className={`${linkClass} border-x border-white/15 px-2 sm:px-3`}
                      href="https://x.com/houseofselling"
                      aria-label="X (Twitter)"
                    >
                      <XIcon className="size-5 fill-current" />
                    </Link>

                    <Link
                      className={linkClass}
                      href="https://www.linkedin.com/in/sebastianselling/"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="size-5 fill-current" />
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                    className="rounded-full p-2 text-white/70 ring-1 ring-white/20 transition-[color,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none active:scale-[0.94] [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
                  >
                    <XMarkIcon className="size-5 fill-current" />
                  </button>
                </DialogTitle>

                <ProjectsList entranceDelayMs={420} />
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />

          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur
            in="turbulence"
            stdDeviation="2"
            result="blurredNoise"
          />

          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />

          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />

          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}
