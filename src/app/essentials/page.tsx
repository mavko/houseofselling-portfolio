import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { TextEffectPerLine } from '@/components/TextPerLine'
import { SafeImage } from '@/components/SafeImage'
import avatarImage from '@/images/dither.avif'
import { type Metadata } from 'next'
import { ArticleLayout } from '@/components/ArticleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Essentials',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Essentials() {
  return (
    <section className="mx-auto max-w-3xl p-4 pb-24 sm:py-24">
      <div className="space-y-8">
        <section className="relative mx-auto h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 shadow-white/5 ring-white/20 backdrop-blur-xs">
          <div className="relative flex leading-6">
            <div className="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-white px-4 py-1">
              <SafeImage
                src={avatarImage}
                alt=""
                className="player_dither__2ctrc absolute top-0 left-0 h-full w-16 -scale-y-150 rotate-180 opacity-50 brightness-100 invert"
              />
              <span className="pt-1.5 text-base font-medium text-white/80">
                01_setup
              </span>
            </div>
            <div className="mt-2 flex flex-auto items-center rounded-tl border-y border-r-0 border-l border-white/10 bg-neutral-900 lg:rounded-tr"></div>
          </div>

          <div className="space-y-6 p-4 sm:p-8">
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-200">
                16" MacBook Pro, Intel Core i7, 16GB RAM (2017)
              </h2>
              <p className="text-sm font-medium text-pretty text-neutral-300">
                Use it every single day, and all these years later it's still
                kicking.
                <br />
                Can't say I'm not eyeing that M-series Macbooks, though...
              </p>
              <h2 className="text-base font-semibold text-neutral-200">
                Sony WH-1000XM5
              </h2>
              <p className="text-sm font-medium text-pretty text-neutral-300">
                Might as well build these into my head and become a cyborg at
                this point, that's how much I've used them since purchase. Worth
                every penny times 2.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Samsung UltraWide 49"
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Complete immersion. Complete overkill. And used exlusively at
                the office.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Apple Magic Keyboard
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                I'm sure there's plenty of really cool hipster premium keyboards
                out there but at the end of the day, it just works.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Apple Magic Mouse
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Same as above, but also the macOS touch features are hard to
                beat.
              </p>
            </section>
          </div>
        </section>
        <section className="relative mx-auto h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 shadow-white/5 ring-white/20 backdrop-blur-xs">
          <div className="relative flex leading-6">
            <div className="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-white px-4 py-1">
              <SafeImage
                src={avatarImage}
                alt=""
                className="player_dither__2ctrc absolute top-0 left-0 h-full w-16 -scale-y-150 rotate-180 opacity-50 brightness-100 invert"
              />
              <span className="pt-1.5 text-base font-medium text-white/80">
                02_Tools
              </span>
            </div>
            <div className="mt-2 flex flex-auto items-center rounded-tl border-y border-r-0 border-l border-white/10 bg-neutral-900 lg:rounded-tr"></div>
          </div>

          <div className="space-y-6 p-4 sm:p-8">
            <section className="mb-3 border-b border-white/20 pb-3">
              <h2 className="text-base font-semibold text-neutral-200">
                Cursor.ai but eyeing Zed
              </h2>
              <p className="text-sm font-medium text-pretty text-neutral-300">
                Cursor having integreated AI feature that let's me cookup
                components and minor features in minutes is hard to beat.Zed
                however, flaunts native performance and minimal clean ui - gets
                out of the way completely. But, needs more maturity.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Warp Terminal
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Making the AI feature describe errors for me as someone who
                spends minimal time on backend is golden.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Tailwindcss
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Not an app or tool necessarily but it fundamentally changed my
                frontend work to where I now rarely feel like there isn't
                something I can cookup in css that I envision in my designs. So,
                it deserves a mention just based on that.
              </p>
            </section>
          </div>
        </section>
        <section className="relative mx-auto h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 shadow-white/5 ring-white/20 backdrop-blur-xs">
          <div className="relative flex leading-6">
            <div className="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-white px-4 py-1">
              <SafeImage
                src={avatarImage}
                alt=""
                className="player_dither__2ctrc absolute top-0 left-0 h-full w-16 -scale-y-150 rotate-180 opacity-50 brightness-100 invert"
              />
              <span className="pt-1.5 text-base font-medium text-white/80">
                02_Design
              </span>
            </div>
            <div className="mt-2 flex flex-auto items-center rounded-tl border-y border-r-0 border-l border-white/10 bg-neutral-900 lg:rounded-tr"></div>
          </div>

          <div className="space-y-6 p-4 sm:p-8">
            <section className="">
              <h2 className="text-base font-semibold text-neutral-200">
                Figma
              </h2>
              <p className="text-sm font-medium text-pretty text-neutral-300">
                Wasn't the easiest choice to let go of Sketch as I've used it
                since the early beta days, with its superior native performance,
                vector tooling etc - but as time goes on and I mostly work on
                branding and graphics for my projects, Figma fills my needs just
                fine.
              </p>
            </section>
          </div>
        </section>
        <section className="relative mx-auto h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 shadow-white/5 ring-white/20 backdrop-blur-xs">
          <div className="relative flex leading-6">
            <div className="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-white px-4 py-1">
              <SafeImage
                src={avatarImage}
                alt=""
                className="player_dither__2ctrc absolute top-0 left-0 h-full w-16 -scale-y-150 rotate-180 opacity-50 brightness-100 invert"
              />
              <span className="pt-1.5 text-base font-medium text-white/80">
                02_Productivity
              </span>
            </div>
            <div className="mt-2 flex flex-auto items-center rounded-tl border-y border-r-0 border-l border-white/10 bg-neutral-900 lg:rounded-tr"></div>
          </div>
          <div className="space-y-6 p-4 sm:p-8">
            <section className="">
              <h2 className="text-base font-semibold text-neutral-200">
                Raycast
              </h2>
              <p className="text-sm font-medium text-pretty text-neutral-300">
                I don't use even close to what this powerhouse of a tool gives
                you, but snippets and scripts right in the Spotlight search is
                increadible. Doesn't hurt the team behind it has a killer brand
                and design ;)
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Linear
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Document and execute on every single project in Linear today. I
                unironically use it as a source of inspiration for my projects,
                too. Much like Raycast, the Linear team has done a phenomenal
                job.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Discord
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Not necessarily the best, but until something more streamlined
                comes along that doesn't break the bank - it is the go to
                communications app.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Cleanshot X
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                Use it every single day, constantly, to share work or create
                marketing posts. Killer app, worth every penny.
              </p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-neutral-200">
                Apple Notes
              </h2>
              <p className="text-sm font-medium text-neutral-300">
                I've tried all kinds of notes app over the years but decided to
                simply stick to the native apple app. Gets the job done and I
                can easily invite my wife to document things together. Any
                serious ideas or projects later gets imported into Linear.
              </p>
              <span className="max-w-sm text-xs font-bold text-pretty text-neutral-300">
                side note: found myself using Bear app to document work-related
                subjects more and more as it uses markdown.
              </span>
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}
