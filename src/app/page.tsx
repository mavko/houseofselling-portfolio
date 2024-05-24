import { Container } from '@/components/Container'

import Globe from '@/components/Globe'
import Terminal from '@/components/Terminal'

export default async function Home() {
  return (
    <>
      <Container className="my-9">
        <div className="absolute inset-[20%] block rounded-full bg-white/50 blur-2xl dark:bg-white/10"></div>
        <div className="relative h-full min-h-screen  w-full overflow-hidden overflow-y-scroll rounded-3xl bg-white/35 pb-96 shadow-2xl  ring-2 ring-black/20 backdrop-blur-sm sm:min-h-[38rem] sm:pb-40 md:pb-60 lg:min-h-[34rem] dark:bg-black/55 dark:ring-white/20 ">
          <div className="noise opacity-[0.02] dark:opacity-[0.01]"></div>
          <div className="overlay bg-[repeating-linear-gradient(_180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_0.3)_50%,_rgba(0,_0,_0,_0)_100%_)] dark:bg-[repeating-linear-gradient(_180deg,_rgba(225,_225,_225,_0)_0,_rgba(225,_225,_225,_0.3)_50%,_rgba(225,_225,_225,_0)_100%_)]">
            <div className="absolute right-0 top-0 z-0 h-full w-full max-w-5xl sm:-right-[20rem] lg:-right-[36rem]">
              <Globe />
            </div>
            <section className="absolute inset-x-0 bottom-0 z-10 bg-black/30 sm:bg-transparent dark:bg-black/50 sm:dark:bg-transparent">
              <Terminal />
            </section>
          </div>
          {/* <div className="pointer-events-none absolute inset-0 h-full overflow-hidden  dark:bg-[radial-gradient(126.42%_76.60%_at_50.00%_32.26%,_rgba(84,_95,_102,_0.20),_rgba(0,_36,_69,_0.13))]"></div> */}
        </div>
      </Container>
    </>
  )
}
