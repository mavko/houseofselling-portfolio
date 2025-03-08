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
          Love of the craft since I first laid my hands on Photoshop back in
          2001, where I spent my days designing forum signatures and gaming
          wallpapers. As I grew older I competed in e-sports, mostly
          counter-strike 1.6 (dating myself here) but also world of warcraft -
          during this time I found that I loved creating compilation videos of
          my matches, and of my team mates / friends.
        </p>
        <p>
          As time went on I wondered if I could ever make a living using my
          creative side, but it seemed far off and not realistic at all. Growing
          up less well off it was hammered into you to pursue practicalities,
          "college and stable jobs".
        </p>
        <p>
          However, that mentality never sat right with me, so in my early
          twenties I tried all kinds of business ideas. I still look back at
          those days as the golden days where the brutal reality of
          entrepreneurship still hadn't set in quite yet. More than anything, it
          set the spark in me - to keep pushing and aim higher - who knows what
          awaits?
        </p>
        <p>
          Finally in 2012, my brother came to me with the very beginnings of
          what later became
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
          Fast forward to today and I spend my days contributing and helping my
          parents with
          <span>
            <Link href="https://www.besiktningsman.se" className="px-1">
              their business
            </Link>
          </span>
          so that they may get a nest-egg to retire with, whilst also running an
          <span>
            <Link href="https://gcorp-landingpage.vercel.app/" className="px-1">
              app studio
            </Link>{' '}
            to build niche micro apps.
          </span>
        </p>
        <p>
          My spare time is spent with my
          <span>
            <Link href="https://www.vheekey.com/" className="px-1">
              beautiful wife Victoria
            </Link>{' '}
            and our little newborn daughter Elizabeth. Very much into lifting,
            bikes and gaming as well.
          </span>
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
