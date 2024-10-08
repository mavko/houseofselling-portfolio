
import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'

export default async function Home() {
  return (
    <>
      <section className='max-w-3xl mx-auto px-6 pb-32 pt-6 sm:px-10 sm:py-24 '>
        <div className='drop-shadow-lg shadow-lg shadow-white/5'>
          <header className='relative ring-1 ring-[#3e3e44] bg-white/5  -mx-2 rounded-xl overflow-hidden mb-8'>
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute left-0 top-0 h-6 w-16 rotate-180 -scale-y-150 opacity-50 brightness-100 invert z-50"
            />
            <h1 className="text-sm sm:text-base font-sans font-medium sm:text-center px-3 py-4 text-[#f7f8f8] text-pretty">❯ Designer who codes. <br className='block sm:hidden' /> Over a decade of building and designing products.</h1>
            <Image
              src={avatarImage}
              alt=""
              className="player_dither__2ctrc absolute right-0 bottom-0 h-6 w-16  -scale-y-150 opacity-50 brightness-100 invert z-50"
            />
          </header>
        </div>
        <ProjectsList />

      </section>

    </>
  )
}
