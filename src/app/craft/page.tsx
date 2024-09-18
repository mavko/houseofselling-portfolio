import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import woordwave from '@/images/craft/woordwave.png'
import scribblyFolder from '@/images/craft/scribbly-folder.png'
import ispectLogo from '@/images/craft/ispect-logo-update.png'
import icontrol from '@/images/craft/icontrol_logo.png'
import Template from '../template'



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
    src: woordwave,
    alt: "Woordwave",
    post: ""
  },
  {
    type: 'image',
    src: icontrol,
    alt: "read: makings of icontrol↗",
    post: "/craft/makings-of-icontrol"
  },
  {
    type: 'image',
    src: ispectLogo,
    alt: "read: makings of ispect↗",
    post: "/craft/makings-of-ispect"
  },
  {
    type: 'video',
    src: '/videos/gohst_grid.mp4',
    alt: "gohst grid animation",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/3d-cube-test.mp4',
    alt: "3d cube test",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/file-upload-scribbly.mp4',
    alt: "file upload stagger",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/gallery-anim.mp4',
    alt: "gallery stagger in",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/terminal-portfolio-intro.mp4',
    alt: "terminal entry",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/globe-intro.mp4',
    alt: "globe text intro",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/sharedspace-landing-anim.mp4',
    alt: "sharedspace landing page",
    post: ""
  },
  {
    type: 'video',
    src: '/videos/quick-scribbly-animation.mp4',
    alt: "scribbly landing page",
    post: ""
  },
  {
    type: 'image',
    src: scribblyFolder,
    alt: "scribby logo",
    post: ""
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
      <div className=''>

        <Image
          src={item.src}
          alt={item.alt}
          className="bg-cover w-full h-auto rounded-2xl"
          width={400}
          height={400}
        />
      </div>
    )
  } else {
    return (
      <video
        src={item.src as string}  // Type assertion here
        className="w-full h-auto rounded-2xl object-cover"
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
      <section className='columns-1 sm:columns-2 md:columns-3 space-y-3 gap-3 px-3 py-6'>
        {craftItems.map((item, index) => (
          <div key={index} className='relative ring-1 ring-white/10 bg-[#1c1c1c] p-1.5 space-y-1 rounded-xl overflow-hidden h-full w-full flex flex-col'>
            <MediaComponent item={item} />
            <Link href={item.post} className='bg-[#232323] w-full px-4 py-2 ring-1 ring-white/10 text-center rounded-lg'>
              {item.alt}
            </Link>
          </div>

        ))}
      </section>
    </Template>
  )
}
