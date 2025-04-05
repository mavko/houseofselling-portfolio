'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BeakerIcon } from '@heroicons/react/24/solid'

import woordwave from '@/images/craft/woordwave.png'
import houseofselling from '@/images/craft/houseofselling-crest-red:black.png'
import scribblyFolder from '@/images/craft/scribbly-folder.png'
import ispectLogo from '@/images/craft/ispect-logo-update.png'
import icontrol from '@/images/craft/icontrol_logo.png'
import dinfastighetsforvaltare from '@/images/craft/dff-landing-page.png'
import solveExtension from '@/images/craft/solve-extension-icon.jpg'
import gradiance from '@/images/craft/gradiance.jpg'
import idStudios from '@/images/craft/idstudios2013.png'
import inspectorAI from '@/images/craft/inspector-ai-icon.png'
import ispectCloseout2020 from '@/images/craft/ispect/ispect-closeout-demo-2020-january.jpg'
import dffPost from '@/images/craft/dff-retro-poster.jpg'
import bmLogo from '@/images/craft/bm-logo.jpg'
import dffLogo from '@/images/craft/dff-card-logo.jpg'
// Define a type for our craft items
type CraftItem = {
  type: 'image' | 'video'
  src: string | StaticImageData
  alt: string
  post: string
}

// Create an array of craft items
const craftItems: CraftItem[] = [
  {
    type: 'image',
    src: houseofselling,
    alt: 'house of selling crest',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/morph-intro.mp4',
    alt: 'retro modern morph intro',
    post: '',
  },
  {
    type: 'image',
    src: bmLogo,
    alt: 'besiktningsman.se logo',
    post: '',
  },
  {
    type: 'image',
    src: dffLogo,
    alt: 'dinfastighetsforvaltare.se logo',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/logo-cloud-glimmer.mp4',
    alt: 'logo cloud glimmer effect',
    post: '',
  },
  {
    type: 'image',
    src: dffPost,
    alt: 'modern retro poster',
    post: 'https://dinfastighetsforvaltare.se',
  },
  {
    type: 'image',
    src: ispectCloseout2020,
    alt: 'ispect closeout mobile 2020',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/canvas-on-hover.mp4',
    alt: 'canvas reveal on hover',
    post: '',
  },
  {
    type: 'image',
    src: dinfastighetsforvaltare,
    alt: 'property management brand',
    post: '',
  },
  {
    type: 'image',
    src: solveExtension,
    alt: 'solve web extension icon',
    post: '',
  },
  {
    type: 'image',
    src: icontrol,
    alt: 'read: makings of icontrol↗',
    post: '/artifacts/archive/makings-of-icontrol',
  },
  {
    type: 'image',
    src: ispectLogo,
    alt: 'read: makings of ispect↗',
    post: '/artifacts/archive/makings-of-ispect',
  },
  {
    type: 'video',
    src: '/videos/subtle-hover-button.mp4',
    alt: 'subtle hover button effect',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/bm-landing-subtle.mp4',
    alt: 'besiktningsman.se above the fold',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/gohst_grid.mp4',
    alt: 'gohst grid animation',
    post: '',
  },
  {
    type: 'image',
    src: woordwave,
    alt: 'Woordwave logotype',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/file-upload-scribbly.mp4',
    alt: 'file upload stagger',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/gallery-anim.mp4',
    alt: 'gallery stagger in',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/terminal-portfolio-intro.mp4',
    alt: 'terminal entry',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/sharedspace-landing-anim.mp4',
    alt: 'sharedspace landing page',
    post: '',
  },
  {
    type: 'video',
    src: '/videos/quick-scribbly-animation.mp4',
    alt: 'scribbly landing page',
    post: '',
  },
  {
    type: 'image',
    src: scribblyFolder,
    alt: 'scribbly logo',
    post: '',
  },
  {
    type: 'image',
    src: gradiance,
    alt: 'personal brand gradiance',
    post: '',
  },
  {
    type: 'image',
    src: idStudios,
    alt: 'id studios 2013',
    post: '',
  },

  // Example of how to add a video item
  // {
  //   type: 'video',
  //   src: exampleVideo,
  //   alt: "Example Video",
  // },
  // Add more items here as needed
]

// Component to render either an image or a video
const MediaComponent = ({ item }: { item: CraftItem }) => {
  if (item.type === 'image') {
    return (
      <div className="">
        <Image
          src={item.src}
          alt={item.alt}
          className="h-auto w-full bg-cover"
          width={400}
          height={400}
          priority
          blurDataURL={item.src.toString()}
        />
      </div>
    )
  } else {
    return (
      <>
        <video
          src={item.src as string}
          className="hidden h-auto w-full object-cover sm:block"
          autoPlay
          muted
          playsInline
          loop
        >
          <track kind="captions" />
        </video>
        <video
          src={item.src as string}
          className="block h-auto w-full object-cover sm:hidden"
          autoPlay
          muted
          playsInline
          controls
        >
          <track kind="captions" />
        </video>
      </>
    )
  }
}

export default function ArtifactsContent() {
  return (
    <main className="rounded-[2.5rem] border-t border-white/30 bg-gradient-to-b from-neutral-950/70 via-neutral-950 to-neutral-950/90 px-4 pb-12 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2">
        <div>
          <h2 className="font-mono text-xs font-semibold tracking-widest text-white/50 uppercase">
            Artifacts{' '}
            <span className="hidden sm:block">:: design and experiments</span>
          </h2>
        </div>
        <div className="flex gap-4 py-8">
          <Link
            className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white/90 hover:bg-white/5 hover:text-white/75"
            href="/artifacts/archive/makings-of-ispect"
          >
            Makings of iSpect
          </Link>
          <Link
            className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white/90 hover:bg-white/5 hover:text-white/75"
            href="/artifacts/archive/makings-of-icontrol"
          >
            Makings of iControl
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-2 pb-8">
          <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-8">
              {craftItems.slice(0, 7).map((item, index) => (
                <div key={`col1-${index}`}>
                  <Link href={item.post} className="group flex flex-col">
                    <div className="relative bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
                      <div className="overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                        <MediaComponent item={item} />
                      </div>
                    </div>

                    <div className="mx-auto mt-4 w-fit justify-end truncate rounded-full bg-white/[4%] px-4 py-2 text-center text-sm font-semibold text-white ring-white/20">
                      {item.alt}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              {craftItems.slice(7, 14).map((item, index) => (
                <div key={`col2-${index}`}>
                  <Link href={item.post} className="group flex flex-col">
                    <div className="relative bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
                      <div className="overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                        <MediaComponent item={item} />
                      </div>
                    </div>

                    <div className="mx-auto mt-4 w-fit justify-end truncate rounded-full bg-white/[4%] px-4 py-2 text-center text-sm font-semibold text-white ring-white/20">
                      {item.alt}
                    </div>
                  </Link>
                </div>
              ))}
              <div key="terminal-entry">
                <Link
                  href={craftItems[15].post}
                  className="group flex flex-col"
                >
                  <div className="relative bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
                    <div className="overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                      <MediaComponent item={craftItems[15]} />
                    </div>
                  </div>

                  <div className="mx-auto mt-4 w-fit justify-end truncate rounded-full bg-white/[4%] px-4 py-2 text-center text-sm font-semibold text-white ring-white/20">
                    {craftItems[15].alt}
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {craftItems
                .slice(14, 15)
                .concat(craftItems.slice(16))
                .map((item, index) => (
                  <div key={`col3-${index}`}>
                    <Link href={item.post} className="group flex flex-col">
                      <div className="relative bg-white/[4%] transition-colors group-hover:bg-white/[6%] group-focus-visible:ring-1 group-focus-visible:ring-white">
                        <div className="overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10">
                          <MediaComponent item={item} />
                        </div>
                      </div>

                      <div className="mx-auto mt-4 w-fit justify-end truncate rounded-full bg-white/[4%] px-4 py-2 text-center text-sm font-semibold text-white ring-white/20">
                        {item.alt}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
