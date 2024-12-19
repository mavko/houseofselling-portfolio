import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'
import houseofselling from '@/images/houseofselling-entry.png'

const header = [
  {
    type: 'video',
    src: '/videos/alchemist.mp4',
    alt: 'subtle customer glimmer',
    post: '',
    id: 'header-1', // Added a unique id to each header item
  },
]
export default async function Home() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-6 pb-44 sm:px-10 sm:pt-24">
        <div className="shadow-lg shadow-neutral-900 drop-shadow-lg">
          <header className="relative -mx-2 mb-8 min-h-80 overflow-hidden bg-white/5 ring-1 ring-[#3e3e44]">
            <div className="overlay z-40"></div>
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute top-0 left-0 z-50 h-10 w-24 -scale-y-150 rotate-180 opacity-20 brightness-100 invert"
            />
            <Image
              src={houseofselling}
              alt="house of selling crest"
              className="absolute inset-0 z-0 h-full w-full object-cover"
              priority
              placeholder="blur"
            />
            {/* <video
              src={header[0].src}
              className="h-full w-full object-cover absolute inset-0 z-0 overlay"
              autoPlay
              muted
              playsInline
              loop
              key={header[0].id} // Assuming each header item has a unique id
            >
              <track kind="captions" />
            </video> */}
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute right-0 bottom-0 z-50 h-10 w-24 -scale-y-150 opacity-20 brightness-100 invert"
            />
          </header>
        </div>

        <ProjectsList />
      </section>
    </>
  )
}
