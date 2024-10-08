import { type Metadata } from 'next'
import ProjectsList from '@/components/ShuffleLetters'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'
import BlurFade from '@/components/BlurFade'
import AboutText from '@/components/ShuffleLettersAboutPage'
import Description from '@/components/ShuffleLettersAboutPage'
import Link from 'next/link'
import { LinkPreview } from '@/components/LinkPreview'
import seb from '@/images/avatar.png'


export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Seb Selling. I live in Stockholm, where I scale tech in properties in hopes of raising the bar of quality in this ancient industry.',
}

export default function About() {
  return (
    <main className='max-w-3xl mx-auto px-6 pt-6 sm:px-10 sm:pt-24 pb-36'>

      <section className='prose prose-p:text-[#ededed] prose-a:text-neutral-200 text-pretty'>
        <Image src={seb} alt='picture of sebastian' className='size-40 rounded-2xl ring-1 ring-white/20' width={160} height={160} />
        <h2 className='text-[#e8e6e3]'>
          Hello there, I'm Sebastian Selling
        </h2>
        <p>
          Love of the craft since I first laid my hands on Photoshop back in 2001, where I spent my days designing forum signatures and gaming wallpapers. As I grew older I competed in e-sports, mostly counter-strike 1.6 (dating myself here) but also world of warcraft - during this time I found that I loved creating compilation videos of my matches, and of my team mates / friends.
        </p>
        <p>
          As time went on I wondered if I could ever make a living using my creative side, but it seemed far off and not realistic at all. Growing up less well off it was hammered into you to pursue practicalities, "college and stable jobs".
        </p>
        <p>
          However, that mentality never sat right with me, so in my early twenties I tried all kinds of business ideas. I still look back at those days as the golden days where the brutal reality of entrepreneurship still hadn't set in quite yet. More than anything, it set the spark in me - to keep pushing and aim higher - who knows what awaits?
        </p>
        <p>
          Finally in 2012, my brother came to me with the very beginnings of what later became
          <LinkPreview
            url="https://www.ispect.se"
            className="mx-1"
            appName="ispect app"
          >ispect</LinkPreview>,
          where he showed me the prototype and I responded, in a typical cocky youngster fashion: "That looks like shit, nobody is gonna use that." - and he simply replied "Well, prove that you can do better."
        </p>

        <p className=''>
          The rest is history as they say. We spent the next decade building out not only
          ispect
          but
          <LinkPreview
            url="https://www.icontrolapp.se"
            className="px-1"
            appName="icontrol app"
          >icontrol</LinkPreview> aswell.
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
          >app studio</LinkPreview> to build niche micro apps.
        </p>
        <p>
          My spare time is spent with my
          <LinkPreview
            url="https://www.vheekey.com/"
            className="px-1"
            appName="Victoria Essien Selling"
          >beautiful wife Victoria</LinkPreview> and our little newborn daughter Elizabeth. Very much into lifting, bikes and gaming as well.
        </p>
        <p>
          Our sights have recently been set on Seoul, South Korea and are looking to relocate over coming year or two.
          If you happen to be in tech scene in korea, by all means get in touch!
        </p>
        <h3 className='text-[#e8e6e3]'>Contact:</h3>

        <div className='flex flex-col sm:flex-row w-fit gap-6 text-sm'>

          <Link className='!text-green-300' href="mailto:houseofselling@proton.me">houseofselling@proton.me</Link>


          <Link className='!text-green-300' href="https://x.com/houseofselling">X / @houseofselling</Link>


          <Link className='!text-green-300' href="https://linkedin/sebastianselling/">Linkedin / sebastian.selling</Link>

        </div>




      </section>

    </main>
  )
}
