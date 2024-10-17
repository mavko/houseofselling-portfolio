import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'

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
      <section className='max-w-3xl mx-auto px-6 pb-44 pt-6 sm:px-10 sm:pt-24 '>
        <div className='drop-shadow-lg shadow-lg shadow-neutral-800'>
          <header className='relative ring-1 ring-[#3e3e44] bg-white/5  -mx-2 rounded-xl overflow-hidden mb-8 min-h-80'>

            <div className='overlay z-40'></div>
            <div className='absolute inset-0 bg-black/50 z-40'></div>
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute left-0 top-0 h-10 w-24 rotate-180 -scale-y-150 opacity-50 brightness-100 invert z-50"
            />
            <video
              src={header[0].src}
              className="h-full w-full object-cover absolute inset-0 z-0 overlay"
              autoPlay
              muted
              playsInline
              loop
              key={header[0].id} // Assuming each header item has a unique id
            >
              <track kind="captions" />
            </video>

            <p className='text-xs font-sans font-medium sm:text-center p-3 py-4 text-[#f7f8f8]/80 text-pretty absolute bottom-0 inset-x-0 z-50'>here he can be seen in his natural habitat ranting about the product vision</p>
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute right-0 bottom-0 h-10 w-24  -scale-y-150 opacity-50 brightness-100 invert z-50"
            />
          </header>
        </div>

        <ProjectsList />

      </section>

    </>
  )
}
