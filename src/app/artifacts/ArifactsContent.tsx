'use client'

import Link from 'next/link'
import { SafeImage } from '@/components/SafeImage'
import { motion } from 'framer-motion'
import { mediaUrl } from '@/lib/media-url'
import {
  artifactContainerVariants,
  artifactItemVariants,
} from '@/components/animations/homeStagger'

type CraftItem = {
  type: 'image' | 'video'
  src: string
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
          className="h-full w-full overflow-hidden rounded-4xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
          preload
          width={1200}
          height={800}
        />
      </div>
    )
  }
  return (
    <>
      <video
        src={item.src}
        className="hidden h-full w-full rounded-4xl border border-white/10 bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:block"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
      <video
        src={item.src}
        className="block h-full w-full rounded-4xl border border-white/5 bg-[rgba(48,48,48,.3)] bg-cover object-cover [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)] sm:hidden"
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
      <motion.div
        className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
        variants={artifactContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1st item: bmLogo */}
        <motion.div variants={artifactItemVariants}>
          <Link
            href="https://www.besiktningsman.se"
            className="group flex flex-col rounded-4xl"
            target="_blank"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/bm-logo.jpg'),
                alt: 'besiktningsman.se logo',
              }}
            />
          </Link>
        </motion.div>
        {/* 2nd item: isp liquid metal */}
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'video',
              src: mediaUrl('videos/isp-liquid-metal.mp4'),
              alt: 'ISP liquid metal',
            }}
          />
        </motion.div>
        {/* 10th item: ispectLogo with link */}
        <motion.div className="col-span-full" variants={artifactItemVariants}>
          <Link
            href="/artifacts/archive/makings-of-ispect"
            className="group flex flex-col rounded-4xl"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/ispect-header.jpg'),
                alt: 'read: makings of ispect↗',
              }}
            />
          </Link>
        </motion.div>
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'image',
              src: mediaUrl('bundled/craft/B.png'),
              alt: 'inspectionbooker',
            }}
          />
        </motion.div>
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'image',
              src: mediaUrl('bundled/craft/IB.png'),
              alt: 'inspectionbooker',
            }}
          />
        </motion.div>
        {/* 3rd item: solveExtension */}
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'image',
              src: mediaUrl('bundled/craft/solve-extension-icon.jpg'),
              alt: 'solve web extension icon',
            }}
          />
        </motion.div>
        {/* 4th item: gohst grid */}
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'video',
              src: mediaUrl('videos/gohst_grid.mp4'),
              alt: 'file upload stagger',
            }}
          />
        </motion.div>

        {/* 6th item: scribLogo */}
        <motion.div variants={artifactItemVariants}>
          <Link
            href="https://scribbly-landingpage.vercel.app/"
            className="group flex flex-col rounded-xl bg-[rgba(48,48,48,.3)] [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] delay-150 select-none [transition:.12s_var(--ease-out-quad)]"
            target="_blank"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/scribbly-icon.jpg'),
                alt: 'scribbly ai logo',
              }}
            />
          </Link>
        </motion.div>
        {/* 7th item: file-upload-scribbly.mp4 */}
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'video',
              src: mediaUrl('videos/file-upload-scribbly.mp4'),
              alt: 'file upload stagger',
            }}
          />
        </motion.div>
        {/* 8th item: sharedspace-landing-anim.mp4 */}
        <motion.div variants={artifactItemVariants}>
          <Link
            href="https://sharedspace-iteration-page.vercel.app/"
            className="group flex h-full w-full flex-col overflow-hidden bg-[rgba(48,48,48,.3)]"
          >
            <MediaComponent
              item={{
                type: 'video',
                src: mediaUrl('videos/sharedspace-landing-anim.mp4'),
                alt: 'minibrf landing page',
              }}
            />
          </Link>
        </motion.div>
        {/* 9th item: quick-scribbly-animation.mp4 */}
        <motion.div variants={artifactItemVariants}>
          <MediaComponent
            item={{
              type: 'video',
              src: mediaUrl('videos/quick-scribbly-animation.mp4'),
              alt: 'scribbly landing page',
            }}
          />
        </motion.div>
        {/* 5th item: icontrol */}
        <motion.div className="col-span-full" variants={artifactItemVariants}>
          <Link
            href="/artifacts/archive/makings-of-icontrol"
            className="group flex flex-col overflow-hidden bg-[rgba(48,48,48,.3)]"
          >
            <MediaComponent
              item={{
                type: 'image',
                src: mediaUrl('bundled/craft/icontrol-header.jpg'),
                alt: 'icontrol logo',
              }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
