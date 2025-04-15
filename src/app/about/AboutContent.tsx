'use client'

import { Container } from '@/components/Container'
import { SafeImage } from '@/components/SafeImage'
import Link from 'next/link'
import portraitImage from '@/images/avatar.png'

export default function AboutContent() {
  return (
    <main className="rounded-[2.5rem] border-t border-white/30 bg-black/70 px-6 pt-6 pb-36 sm:px-10 sm:pt-24">
      <section className="prose prose-p:text-[#ededed] prose-a:text-neutral-200 mx-auto max-w-3xl text-pretty">
        <SafeImage
          src={portraitImage}
          alt="picture of sebastian"
          className="size-64 rounded-2xl ring-1 ring-white/20"
          width={160}
          height={160}
        />
        <h2 className="text-[#e8e6e3]">
          Hi, I'm Sebastian — a creative technologist, product designer, and
          self-taught builder from Sweden.
        </h2>
        <p>
          I've spent the last decade designing and launching software tools in
          real estate, construction, and legacy industries that badly need
          better UX. Along the way, I helped bring two construction SaaS
          products—
          <Link
            href="/artifacts/archive/makings-of-ispect"
            className="text-green-300!"
            target="_blank"
          >
            ispect
          </Link>{' '}
          and{' '}
          <Link
            href="/artifacts/archive/makings-of-icontrol"
            className="text-green-300!"
            target="_blank"
          >
            icontrol
          </Link>
          — to life. I handled everything from branding and product design to
          implementing UI in Vue and CSS.
        </p>
        <p>
          Lately, I've been building with Next.js, Tailwind CSS, shadcn/ui, and
          Cursor.ai (they're changing the game). One outcome has been —
          <a
            href="https://sharedspace.se"
            className="text-green-300!"
            target="_blank"
          >
            sharedspace.se
          </a>
          — a proptech page builder. The speed at which you can launch new ideas
          now is phenomenal and I'm loving it.
        </p>

        <p>
          Right now I'm based in Sweden, with family in Texas. I'm open to
          <strong className="pl-1 text-white">
            remote U.S.-based opportunities
          </strong>{' '}
          , especially teams building with conviction, taste, and a vision for a
          better web.
        </p>
        <p>
          I'm also quietly building a personal creative brand called Merchant of
          Nostalgia — inspired by Diablo II, the golden age of web, and the kind
          of timeless design that still sparks joy.
        </p>
        <p className="font-semibold text-[#e8e6e3]">Highlights:</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>
            <strong className="text-white">Design:</strong> Product design,
            branding, storytelling,{' '}
            <Link href="/visuals" className="text-green-300!">
              visuals
            </Link>
            , and good old sketch/figma — (also eyeing{' '}
            <Link href="https://paper.design/" className="underline">
              Paper
            </Link>
            )
          </li>
          <li>
            <strong className="text-white">Product:</strong> UX, copywriting,
            launch strategy, research
          </li>
          <li>
            <strong className="pr-1 text-white">UI Engineering:</strong>
            React, Vue, Tailwind, Astro, Shadcn/ui, Framer Motion
          </li>
        </ul>
        <p className="font-semibold text-[#e8e6e3]">What I'm Looking For</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>Remote-friendly, U.S.-based companies</li>
          <li>Design-driven teams with conviction and soul</li>
          <li>Products that make the internet fun, useful, and human again</li>
          <li>
            <Link href="https://www.allmight.us/" className="text-green-300!">
              Next-generation Americana Builders
            </Link>
          </li>
        </ul>
        <p className="text-pretty">
          <strong className="text-white">Outside of work,</strong> I'm a husband
          to
          <Link href="https://www.vheekey.com/" className="px-1">
            Victoria
          </Link>{' '}
          and dad to our daughter Elizabeth. I lift weights, ride bikes, play
          classic games, and dream about building digital worlds that make
          people feel something.
        </p>
        <h3 className="text-[#e8e6e3]">Connect:</h3>
        <div className="flex w-fit flex-col gap-6 text-sm sm:flex-row">
          <Link
            className="text-green-300!"
            href="mailto:houseofselling@proton.me"
          >
            houseofselling@proton.me
          </Link>

          <Link className="text-green-300!" href="https://x.com/houseofselling">
            X / @houseofselling
          </Link>

          <Link
            className="text-green-300!"
            href="https://linkedin/sebastianselling/"
          >
            Linkedin / sebastian.selling
          </Link>
        </div>
      </section>
    </main>
  )
}
