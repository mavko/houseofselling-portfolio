import { type Metadata } from 'next'
import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'
import BlurFade from '@/components/BlurFade'
import AboutText from '@/components/ShuffleLettersAboutPage'
import Description from '@/components/ShuffleLettersAboutPage'
import Link from 'next/link'
import { LinkPreview } from '@/components/LinkPreview'



export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Seb Selling. I live in Stockholm, where I scale tech in properties in hopes of raising the bar of quality in this ancient industry.',
}

export default function About() {
  return (
    <main className='max-w-3xl mx-auto px-6 sm:px-10 py-24 '>
      <header className='relative ring-1 ring-white/10 bg-white/5  -mx-2 rounded-xl overflow-hidden'>
        <Image
          src={avatarImage}
          alt=""
          className="player_dither__2ctrc absolute left-0 top-0 h-6 w-16 rotate-180 -scale-y-150 opacity-50 brightness-100 invert z-50"
        />
        <h1 className="text-base font-sans font-medium text-center px-2 py-3">❯ About me</h1>
        <Image
          src={avatarImage}
          alt=""
          className="player_dither__2ctrc absolute right-0 bottom-0 h-6 w-16  -scale-y-150 opacity-50 brightness-100 invert z-50"
        />
      </header>
      <section className='prose prose-p:text-[#ededed]/80 prose-a:text-[#FFC799]'>
        <h2 className='text-[#e8e6e3]'>Hello there, I'm Sebastian Selling</h2>
        <p >Love of the craft since I first laid my hands on Photoshop back in 2001, where I spent my days designing forum signatures and gaming wallpapers. As I grew older I competed in e-sports, mostly counter-strike 1.6 (dating myself here) but also world of warcraft - during this time I found that I loved creating compilation videos of my matches, and of my team mates / friends. </p>
        <p>
          As time went on I wondered if I could ever make a living using my creative side, but it seemed far off and not realistic at all. Growing up in a lower class status makes these sorts of things seem foolish.
        </p>
        <p>
          However! In my early twenties I tried all kinds of business ideas, which gave me ample fuel to keep pushing, until finally in 2012, my brother got the opportunity to build the very beginnings of what was to become
          <LinkPreview
            url="https://www.ispect.se"
            className="mx-1"
            appName="ispect app"
          >ispect</LinkPreview>,
          he showed me the prototype one day and I responded, in a typical cocky youngster fashion: "That looks like shit, nobody is gonna use that." - and he simply replied "Well, prove that you can do better."
        </p>
        <p className=''>
          The rest is history as they say. We spent the next decade building out not only
          ispect
          but
          <LinkPreview
            url="https://www.icontrolapp.se"
            className="px-1"
            appName="icontrol app"
          >icontrol</LinkPreview>
          as well
          <LinkPreview
            url="https://www.crunchbase.com/organization/icontrol-2"
            className="px-1"
            appName="icontrol app"
          >(icontrol also got picked up by 500 startups)</LinkPreview>
          .
        </p>
        <p>
          Fast forward to today and I spend my days contributing and helping my parents with
          <LinkPreview
            url="https://www.besiktningsman.se"
            className="px-1"
            appName="construction inspection agency"
          >their business</LinkPreview>
          so that they may get a nest-egg to retire with, whilst also running an
          <LinkPreview
            url="https://gcorp-landingpage.vercel.app/"
            className="px-1"
            appName="g:corp app studio"
          >app studio</LinkPreview> to build micro services.
        </p>
        <p>
          My spare time is spent with my
          <LinkPreview
            url="https://www.vheekey.com/"
            className="px-1"
            appName="Victoria Essien Selling"
          >beautiful wife Victoria</LinkPreview> and our little newborn daughter Elizabeth.
          Our sights have recently been set on Seoul, South Korea and are looking to relocate over coming year or two.
          If you happen to be in tech scene in korea, by all means get in touch!
        </p>
        <h3 className='text-[#e8e6e3]'>Contact:</h3>

        <div className='border border-white/10 bg-[#1c1c1c] rounded-xl flex flex-col sm:flex-row w-fit px-6 py-3 gap-6 text-sm'>

          <a href="mailto:houseofselling@proton.me">houseofselling@proton.me</a>


          <Link href="https://x.com/houseofselling">X / @houseofselling</Link>


          <Link href="https://linkedin/sebastianselling/">Linkedin / sebastian.selling</Link>

        </div>




      </section>

    </main>
  )
}
