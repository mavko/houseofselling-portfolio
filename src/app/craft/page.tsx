import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import woordwave from '@/images/craft/woordwave.png'
import scribblyFolder from '@/images/craft/scribbly-folder.png'
import ispectLogo from '@/images/craft/ispect-logo-update.png'

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
}

// Create an array of craft items
const craftItems: CraftItem[] = [
  {
    type: 'image',
    src: woordwave,
    alt: "Woordwave",
  },
  {
    type: 'video',
    src: '/videos/gohst_grid.mp4',
    alt: "gohst grid",
  },
  {
    type: 'video',
    src: '/videos/3d-cube-test.mp4',
    alt: "3d cube test",
  },
  {
    type: 'video',
    src: '/videos/file-upload-scribbly.mp4',
    alt: "file upload stagger",
  },
  {
    type: 'video',
    src: '/videos/gallery-anim.mp4',
    alt: "gallery fade",
  },
  {
    type: 'video',
    src: '/videos/terminal-portfolio-intro.mp4',
    alt: "terminal entry",
  },
  {
    type: 'video',
    src: '/videos/globe-intro.mp4',
    alt: "globe intro",
  },
  {
    type: 'video',
    src: '/videos/sharedspace-landing-anim.mp4',
    alt: "sharedspace landing page",
  },
  {
    type: 'video',
    src: '/videos/quick-scribbly-animation.mp4',
    alt: "scribbly landing page",
  },
  {
    type: 'image',
    src: scribblyFolder,
    alt: "Woordwave",
  },
  {
    type: 'image',
    src: ispectLogo,
    alt: "Woordwave",
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
      <Image
        src={item.src}
        alt={item.alt}
        className="bg-cover w-full h-auto rounded-2xl"
        width={400}
        height={400}
      />
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
    <>
      <section className='columns-1 sm:columns-2 md:columns-3 space-y-3 gap-3 px-3 py-6'>
        {craftItems.map((item, index) => (
          <div key={index} className='relative ring-1 ring-white/20 bg-[#1c1c1c] p-1.5 rounded-xl overflow-hidden h-fit w-full'>
            <MediaComponent item={item} />
          </div>
        ))}
      </section>
    </>
  )
}
