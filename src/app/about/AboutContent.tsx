'use client'

import { Container } from '@/components/Container'
import { SafeImage } from '@/components/SafeImage'
import Link from 'next/link'
import portraitImage from '@/images/avatar.png'

export default function AboutContent() {
  return (
    <main className="pb-36 sm:pt-24">
      <section className="prose prose-p:text-[#ededed] prose-a:text-neutral-200 prose-p:text-base/9 max-w-3xl text-pretty">
        <SafeImage
          src={portraitImage}
          alt="picture of sebastian"
          className="size-64 rounded-2xl ring-1 ring-white/20"
          width={160}
          height={160}
        />
        <h2 className="text-[#e8e6e3]">
          Hi, I'm Sebastian — a self taught designer who codes from Sweden.
        </h2>
        <p>
          I've spent the last decade designing and launching software tools in
          real estate, construction, and legacy industries that badly need
          better UX. Along the way, I helped bring two construction SaaS
          products—
          <Link
            href="/artifacts/archive/makings-of-ispect"
            className="text-white"
            target="_blank"
          >
            ispect
          </Link>{' '}
          and{' '}
          <Link
            href="/artifacts/archive/makings-of-icontrol"
            className="text-white"
            target="_blank"
          >
            icontrol
          </Link>
          — to life. I handled everything from branding and product design to
          implementing UI in Vue and CSS.
        </p>
        <p>
          Lately, I've been building with Cursor and Claude Code, letting me
          ship fullstack apps completely solo which has been absolutely
          mindblowing. Currently completely refactoring and migrating our legacy
          codebase of 200k lines of code iSpect from vue 2.7, vuetify and
          graphql to Nuxt 4 and I've reached feature parity in weeks. Something
          that would've taken months just a few years ago.
        </p>

        <p className="font-semibold text-[#e8e6e3]">Highlights:</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>
            <strong className="text-white">Design:</strong> Product design,
            branding, storytelling,{' '}
            <Link href="/visuals" className="text-white">
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
            Cursor, Claude, Antigravity, using Nextjs / Nuxt + Shadcn UI
          </li>
        </ul>
        <p className="font-semibold text-[#e8e6e3]">What I'm Looking For</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>Remote-friendly, EU & U.S.-based companies</li>
          <li>Design-driven teams with conviction and soul</li>
          <li>Products that make the internet fun, useful, and human again</li>
        </ul>
        <p className="text-pretty">
          <strong className="text-white">Outside of work,</strong> I'm a husband
          to
          <Link href="https://www.vheekey.com/" className="px-1">
            Victoria
          </Link>{' '}
          and dad to our daughter Elizabeth. I lift weights, ride bikes, play
          classic games, and dream about building useful technology.
        </p>
        <h3 className="text-[#e8e6e3]">Connect:</h3>
        <div className="flex w-fit flex-col gap-6 text-sm sm:flex-row">
          <Link
            className="text-amber-300!"
            href="mailto:houseofselling@proton.me"
          >
            houseofselling@proton.me
          </Link>

          <Link className="text-amber-300!" href="https://x.com/houseofselling">
            X / @houseofselling
          </Link>

          <Link
            className="text-amber-300!"
            href="https://linkedin/sebastianselling/"
          >
            Linkedin / sebastian.selling
          </Link>
        </div>
      </section>
    </main>
  )
}
