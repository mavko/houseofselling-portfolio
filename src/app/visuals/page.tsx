import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from '@/components/Dialog'
import { XMarkIcon } from '@heroicons/react/24/solid'
// content
import bussStation from '@/images/photos/bussStation.jpg'
import codingEvening from '@/images/photos/codingEvening.jpeg'
import cyberTullen from '@/images/photos/cyberTullen.jpg'
import danderydDystopia from '@/images/photos/danderydDystopia.jpg'
import drowsyLangholmen from '@/images/photos/drowsyLangholmen.jpg'
import duskofSummer from '@/images/photos/duskofSummer.jpg'
import dystopianStairway from '@/images/photos/dystopianStairway.jpg'
import fragmentsOfSelf from '@/images/photos/fragmentsOfSelf.jpg'
import gardetsunset from '@/images/photos/gardetsunset.jpeg'
import hornstulldimman from '@/images/photos/hornstulldimman.jpeg'
import laptop from '@/images/photos/laptop.jpg'
import lift from '@/images/photos/lift.jpg'
import lonelyDawn from '@/images/photos/lonelyDawn.jpg'
import midnightFog from '@/images/photos/midnightFog.jpg'
import midsommarNatten from '@/images/photos/midsommarnatten.jpeg'
import midsommarWinter from '@/images/photos/midsommarwinter.jpg'
import midsummarMorning from '@/images/photos/midsummarMorning.jpg'
import midsummerDusk from '@/images/photos/midsummerDusk.jpg'
import midwinterRailroad from '@/images/photos/midwinter-raildroad.jpg'
import nightHUD from '@/images/photos/nightHUD.jpg'
import pathwaytoNowhere from '@/images/photos/pathwaytoNowhere.jpg'
import saturdayLights from '@/images/photos/saturdayLights.jpg'
import september from '@/images/photos/september.jpg'
import sleepylangholmen from '@/images/photos/sleepylangholmen.jpg'
import subwayDystopia from '@/images/photos/subwayDystopia.jpg'
import summerDream from '@/images/photos/summerDream.jpg'
import sunsetPov from '@/images/photos/sunsetPov.jpg'
import swedishMidsummer from '@/images/photos/swedishMidsummer.jpg'
import telefonplanApt from '@/images/photos/telefonplanapt.jpg'
import templeWarrior from '@/images/photos/templeWarrior.jpg'
import vasterhaningeApril from '@/images/photos/vasterhaningeApril.jpg'
import vasterhaningeShops from '@/images/photos/vasterhaningeShops.jpg'
import wanderingHorse from '@/images/photos/wanderingHorse.jpg'
import windowIntoSummer from '@/images/photos/windowIntoSummer.jpg'
import winteryCity from '@/images/photos/winteryCity.jpg'


export const metadata: Metadata = {
  title: 'Visuals by Sebastian',
  description: 'Capturing moments in time from every day life.',
}

type PhotoItem = {
  type: 'image' | 'video'
  src: string | StaticImageData
  alt: string
}

const photoItems: PhotoItem[] = [
  { type: 'image', src: bussStation, alt: "Cyber dusk bus station" },
  { type: 'video', src: '/videos/subwayMorning.mp4', alt: "The dusk train" },
  { type: 'image', src: laptop, alt: "Laptop" },
  { type: 'image', src: codingEvening, alt: "Evening of coding" },
  { type: 'image', src: cyberTullen, alt: "Hornstull walkway cyberwave style" },
  { type: 'image', src: danderydDystopia, alt: "Danderyd dystopia" },
  { type: 'image', src: drowsyLangholmen, alt: "Drowsy Langholmen" },
  { type: 'image', src: duskofSummer, alt: "Dusk of summer" },
  { type: 'image', src: dystopianStairway, alt: "Dystopian stairway" },
  { type: 'image', src: fragmentsOfSelf, alt: "Fragments of self" },
  { type: 'image', src: gardetsunset, alt: "Gardet sunset" },
  { type: 'image', src: hornstulldimman, alt: "Hornstull dimman" },
  { type: 'image', src: lift, alt: "Lift" },
  { type: 'image', src: lonelyDawn, alt: "Lonely dawn" },
  { type: 'image', src: midnightFog, alt: "Midnight fog" },
  { type: 'image', src: midsommarNatten, alt: "Midsommar natten" },
  { type: 'image', src: midsommarWinter, alt: "Midsommar winter" },
  { type: 'image', src: midsummarMorning, alt: "Midsummer morning" },
  { type: 'image', src: midsummerDusk, alt: "Midsummer dusk" },
  { type: 'image', src: midwinterRailroad, alt: "Midwinter railroad" },
  { type: 'image', src: nightHUD, alt: "Night HUD" },
  { type: 'image', src: pathwaytoNowhere, alt: "Pathway to nowhere" },
  { type: 'image', src: saturdayLights, alt: "Saturday lights" },
  { type: 'image', src: september, alt: "September" },
  { type: 'image', src: sleepylangholmen, alt: "Sleepy Langholmen" },
  { type: 'image', src: subwayDystopia, alt: "Subway dystopia" },
  { type: 'image', src: summerDream, alt: "Summer dream" },
  { type: 'image', src: sunsetPov, alt: "Sunset POV" },
  { type: 'image', src: swedishMidsummer, alt: "Swedish midsummer" },
  { type: 'image', src: telefonplanApt, alt: "Telefonplan apartment" },
  { type: 'image', src: templeWarrior, alt: "Temple warrior" },
  { type: 'image', src: vasterhaningeApril, alt: "Vasterhaninge April" },
  { type: 'image', src: vasterhaningeShops, alt: "Vasterhaninge shops" },
  { type: 'image', src: wanderingHorse, alt: "Wandering horse" },
  { type: 'image', src: windowIntoSummer, alt: "Window into summer" },
  { type: 'image', src: winteryCity, alt: "Wintery city" },

]

const MediaComponent = ({ item }: { item: PhotoItem }) => {
  if (item.type === 'image') {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        className="bg-cover w-full h-auto rounded-2xl"
        width={400}
        height={400}
      />
    )
  } else {
    return (
      <video
        src={item.src as string}
        className="w-full h-auto rounded-2xl object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <track kind="captions" />
      </video>
    )
  }
}

export default function Visuals() {
  return (
    <>
      <section className='columns-1 sm:columns-2 md:columns-3 space-y-3 gap-3 px-3 py-6'>
        {photoItems.map((item, index) => (
          <Dialog
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <DialogTrigger>
              <div key={index} className='relative ring-1 ring-white/20 bg-[#1c1c1c] p-1.5 rounded-xl overflow-hidden h-fit w-full'>
                <MediaComponent item={item} />
              </div>
            </DialogTrigger>
            <DialogContainer>
              <DialogContent className='relative'>
                <div key={index} className='relative ring-1 ring-white/10 bg-[#1c1c1c] p-1.5 rounded-xl overflow-hidden h-full w-full'>
                  <MediaComponent item={item} />
                </div>
              </DialogContent>
              <DialogClose
                className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.1 },
                  },
                  exit: { opacity: 0, transition: { duration: 0 } },
                }}
              >
                <XMarkIcon className='size-6 fill-black' />
              </DialogClose>
            </DialogContainer>
          </Dialog>
        ))}
      </section>
    </>
  )
}
