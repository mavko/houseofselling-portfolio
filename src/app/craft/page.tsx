import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import woordwave from '@/images/craft/woordwave.png'
import scribblyFolder from '@/images/craft/scribbly-folder.png'
import ispectLogo from '@/images/craft/ispect-logo-update.png'
import icontrol from '@/images/craft/icontrol_logo.png'
import dinfastighetsforvaltare from '@/images/craft/dff-landing-page.png'
import solveExtension from '@/images/craft/solve-extension-icon.jpg'

import Template from '../template'
import ArticleDropdown from '@/components/ArticleMenu'

// Import any video files you want to use
// import exampleVideo from '@/videos/example.mp4'

export const metadata: Metadata = {
  title: 'Craft',
  description:
    'Some of my builds, designs, brands or whatever else I happen to work on.',
}

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
    src: dinfastighetsforvaltare,
    alt: 'property management brand',
    post: '',
  },
  {
    type: 'image',
    src: solveExtension,
    alt: 'property management brand',
    post: '',
  },
  {
    type: 'image',
    src: icontrol,
    alt: 'read: makings of icontrol↗',
    post: '/craft/makings-of-icontrol',
  },
  {
    type: 'image',
    src: ispectLogo,
    alt: 'read: makings of ispect↗',
    post: '/craft/makings-of-ispect',
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
    src: '/videos/3d-cube-test.mp4',
    alt: '3d cube test',
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
    src: '/videos/globe-intro.mp4',
    alt: 'globe text intro',
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
    alt: 'scribby logo',
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
          className="h-auto w-full rounded-2xl bg-cover"
          width={400}
          height={400}
        />
      </div>
    )
  } else {
    return (
      <video
        src={item.src as string} // Type assertion here
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

export default function Craft() {
  return (
    <Template>
      <nav className="relative z-20 flex h-auto w-full items-center justify-end px-3 pt-3">
        <ArticleDropdown />
      </nav>
      <section className="columns-1 gap-3 space-y-3 px-3 pb-20 pt-3 sm:columns-2 md:columns-3">
        {craftItems.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full w-full flex-col space-y-1 overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/10"
          >
            <MediaComponent item={item} />
            <Link
              href={item.post}
              className="w-full rounded-lg bg-[#232323] px-4 py-2 text-center ring-1 ring-white/10"
            >
              {item.alt}
            </Link>
          </div>
        ))}
      </section>
    </Template>
  )
}
