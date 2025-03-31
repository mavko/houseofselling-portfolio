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
          I'm a Design Engineer with over a decade of experience crafting
          user-centric digital products and building brands from the ground up.
          I specialize in bridging the gap between design and front-end
          development, particularly within startup environments.
        </p>
        <p>
          Love of the craft since I first laid my hands on Photoshop back in
          2001, where I spent my days designing forum signatures and gaming
          wallpapers. As I grew older, this drive led me later to co-found and
          contribute to several ventures over the years.
        </p>
        <p>
          - 2012, my brother came to me with the very beginnings of what later
          became
          <span>
            <Link href="https://www.ispect.se" className="mx-1">
              ispect
            </Link>
            ,
          </span>
          where he showed me the prototype and I responded, in a typical cocky
          youngster fashion: "That looks like shit, nobody is gonna use that." -
          and he simply replied "Well, prove that you can do better."
        </p>
        <p className="">
          The rest is history as they say. We spent the next decade building out
          not only ispect but
          <span>
            <Link href="https://www.icontrolapp.se" className="px-1">
              icontrol
            </Link>
          </span>
          as well.
        </p>
        <p>
          Currently I spend my days contributing and helping my parents with
          <span>
            <Link href="https://www.besiktningsman.se" className="px-1">
              their business
            </Link>
          </span>
          so that they get a nest-egg to retire with. Also building
          <span>
            <Link href="https://sharedspace.se/" className="px-1">
              sharedspace.se
            </Link>
          </span>
          and other projects in proptech.
        </p>
        <p className="text-[#e8e6e3]">+ Core Skills:</p>
        <ul className="list-disc pl-5 text-[#ededed]">
          <li>Branding & Visual Identity</li>
          <li>Product Design</li>
          <li>UI/UX Design & Prototyping (Figma, Sketch)</li>
          <li>
            Front-End Design ( React, Next.js, Vue, Tailwind CSS, Shadcn/ui,
            Astrojs)
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
