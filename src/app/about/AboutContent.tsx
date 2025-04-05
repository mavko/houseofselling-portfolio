'use client'

import Image from 'next/image'
import Link from 'next/link'
import seb from '@/images/avatar.png'

export default function AboutContent() {
  return (
    <main className="rounded-[2.5rem] border-t border-white/30 bg-black/70 px-6 pt-6 pb-36 sm:px-10 sm:pt-24">
      <section className="prose prose-p:text-[#ededed] prose-a:text-neutral-200 mx-auto max-w-3xl text-pretty">
        <Image
          src={seb}
          alt="picture of sebastian"
          className="size-64 rounded-2xl ring-1 ring-white/20"
          width={160}
          height={160}
        />
        <h2 className="text-[#e8e6e3]">
          Hello there, I&apos;m Sebastian Selling
        </h2>
        <p>
          Designer with 13+ years of experience building brands and digital
          products. I've spent my career at the intersection of visual design
          and front-end development—what some now call a “design engineer.” From
          early Photoshop experiments in the 2000s to building enterprise apps
          from scratch, I’ve always chased that perfect balance between beauty
          and usability.
        </p>
        <p>
          Over the past decade, I helped bring two construction SaaS products—
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
          implementing UI in Vue and CSS. More recently, I’ve been working with
          Next.js, Tailwind CSS, shadcn/ui, and Astro on newer projects like{' '}
          <a
            href="https://sharedspace.se"
            className="text-green-300!"
            target="_blank"
          >
            sharedspace.se
          </a>
          , a proptech page builder.
        </p>

        <p>
          Right now, I’m open to new opportunities—especially at the
          intersection of tech, crypto, AI and product design. I’m excited to
          bring both craft and conviction to teams building the future.
        </p>
        <p className="text-[#e8e6e3]">Highlights:</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>Branding & Visual Identity</li>
          <li>Product Design</li>
          <li>UI Design</li>
          <li>
            Front-End Design ( React, Next.js, Vue, Tailwind CSS, Shadcn/ui,
            Astrojs)
          </li>
          <li>
            Strong interest in blockchain, bitcoin, esports, gaming and
            business/startups.
          </li>
        </ul>
        <p className="text-pretty">
          My spare time is spent with my beautiful
          <Link href="https://www.vheekey.com/" className="px-1">
            beautiful wife Victoria
          </Link>{' '}
          and our little newborn daughter Elizabeth. Very much into lifting,
          biking, gaming and building side projects.
        </p>
        <h3 className="text-[#e8e6e3]">Contact:</h3>
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
