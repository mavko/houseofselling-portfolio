'use client'

import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { SafeImage } from '@/components/SafeImage'

import scribblyFolder from '@/images/craft/scribbly-folder.png'
import ispectLogo from '@/images/craft/ispect-header.jpg'
import icontrol from '@/images/craft/icontrol-header.jpg'
import solveExtension from '@/images/craft/solve-extension-icon.jpg'
import bmLogo from '@/images/craft/bm-logo.jpg'
import scribLogo from '@/images/craft/scribbly-icon.jpg'
import wordwaveLogo from '@/images/craft/wordwave.jpg'

type CraftItem = {
  type: 'image' | 'video'
  src: string | StaticImageData
  alt: string
  post?: string
}

const MediaComponent = ({ item }: { item: CraftItem }) => {
  if (item.type === 'image') {
    return (
      <div>
        <SafeImage
          src={item.src}
          alt={item.alt}
          className="h-full w-full rounded-xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
          priority
          blurDataURL={item.src.toString()}
        />
      </div>
    )
  }
  return (
    <>
      <video
        src={item.src as string}
        className="hidden h-full w-full rounded-xl border border-white/10 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:block"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
      <video
        src={item.src as string}
        className="block h-full w-full rounded-xl border border-white/5 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:hidden"
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

export default function ArtifactsContent() {
  return (
    <main>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {/* 1st item: bmLogo */}
        <div>
          <Link
            href="https://www.besiktningsman.se"
            className="group flex flex-col rounded-xl bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
            target="_blank"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: bmLogo,
                alt: 'besiktningsman.se logo',
              }}
            />
          </Link>
        </div>
        {/* 2nd item: scribLogo */}
        <div>
          <Link
            href="https://www.scribbly.se"
            className="group flex flex-col rounded-xl bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
            target="_blank"
          >
            <MediaComponent
              item={{ type: 'image', src: scribLogo, alt: 'scribbly ai logo' }}
            />
          </Link>
        </div>
        {/* 10th item: ispectLogo with link */}
        <div className="col-span-full">
          <Link
            href="/artifacts/archive/makings-of-ispect"
            className="group flex flex-col rounded-xl bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: ispectLogo,
                alt: 'read: makings of ispect↗',
              }}
            />
          </Link>
        </div>
        {/* 3rd item: solveExtension */}
        <div>
          <MediaComponent
            item={{
              type: 'image',
              src: solveExtension,
              alt: 'solve web extension icon',
            }}
          />
        </div>
        {/* 4th item: gohst grid */}
        <div>
          <MediaComponent
            item={{
              type: 'video',
              src: '/videos/gohst_grid.mp4',
              alt: 'file upload stagger',
            }}
          />
        </div>

        {/* 6th item: wordwaveLogo */}
        <div>
          <MediaComponent
            item={{
              type: 'image',
              src: wordwaveLogo,
              alt: 'Woordwave logotype',
            }}
          />
        </div>
        {/* 7th item: file-upload-scribbly.mp4 */}
        <div>
          <MediaComponent
            item={{
              type: 'video',
              src: '/videos/file-upload-scribbly.mp4',
              alt: 'file upload stagger',
            }}
          />
        </div>
        {/* 8th item: sharedspace-landing-anim.mp4 */}
        <div>
          <MediaComponent
            item={{
              type: 'video',
              src: '/videos/sharedspace-landing-anim.mp4',
              alt: 'minibrf landing page',
            }}
          />
        </div>
        {/* 9th item: quick-scribbly-animation.mp4 */}
        <div>
          <MediaComponent
            item={{
              type: 'video',
              src: '/videos/quick-scribbly-animation.mp4',
              alt: 'scribbly landing page',
            }}
          />
        </div>
        {/* 5th item: icontrol */}
        <div className="col-span-full">
          <Link
            href="/artifacts/archive/makings-of-icontrol"
            className="group flex flex-col bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
          >
            <MediaComponent
              item={{ type: 'image', src: icontrol, alt: 'icontrol logo' }}
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
