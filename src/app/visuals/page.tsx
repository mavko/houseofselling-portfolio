'use client'

import { type Metadata } from 'next'
import { StaticImageData } from 'next/image'
import { SafeImage } from '@/components/SafeImage'
import { useState } from 'react'
import VisualsDialog, { VisualItem } from '@/components/VisualsDialog'

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
import sharedspaceHeaderPlaceholder from '@/images/photos/sharedspace-header-placeholder.jpg'

const photoItems: VisualItem[] = [
  {
    type: 'image',
    src: sharedspaceHeaderPlaceholder,
    alt: 'Sharedspace Landing Page',
  },
  { type: 'image', src: bussStation, alt: 'Cyber dusk bus station' },
  { type: 'video', src: '/videos/subwayMorning.mp4', alt: 'The dusk train' },
  { type: 'image', src: laptop, alt: 'Laptop' },
  { type: 'image', src: codingEvening, alt: 'Evening of coding' },
  { type: 'image', src: cyberTullen, alt: 'Hornstull walkway cyberwave style' },
  { type: 'image', src: danderydDystopia, alt: 'Danderyd dystopia' },
  { type: 'image', src: drowsyLangholmen, alt: 'Drowsy Langholmen' },
  { type: 'image', src: duskofSummer, alt: 'Dusk of summer' },
  { type: 'image', src: dystopianStairway, alt: 'Dystopian stairway' },
  { type: 'image', src: fragmentsOfSelf, alt: 'Fragments of self' },
  { type: 'image', src: gardetsunset, alt: 'Gardet sunset' },
  { type: 'image', src: hornstulldimman, alt: 'Hornstull dimman' },
  { type: 'image', src: lift, alt: 'Lift' },
  { type: 'image', src: lonelyDawn, alt: 'Lonely dawn' },
  { type: 'image', src: midnightFog, alt: 'Midnight fog' },
  { type: 'image', src: midsommarNatten, alt: 'Midsommar natten' },
  { type: 'image', src: midsommarWinter, alt: 'Midsommar winter' },
  { type: 'image', src: midsummarMorning, alt: 'Midsummer morning' },
  { type: 'image', src: midsummerDusk, alt: 'Midsummer dusk' },
  { type: 'image', src: midwinterRailroad, alt: 'Midwinter railroad' },
  { type: 'image', src: nightHUD, alt: 'Night HUD' },
  { type: 'image', src: pathwaytoNowhere, alt: 'Pathway to nowhere' },
  { type: 'image', src: saturdayLights, alt: 'Saturday lights' },
  { type: 'image', src: september, alt: 'September' },
  { type: 'image', src: sleepylangholmen, alt: 'Sleepy Langholmen' },
  { type: 'image', src: subwayDystopia, alt: 'Subway dystopia' },
  { type: 'image', src: summerDream, alt: 'Summer dream' },
  { type: 'image', src: sunsetPov, alt: 'Sunset POV' },
  { type: 'image', src: swedishMidsummer, alt: 'Swedish midsummer' },
  { type: 'image', src: telefonplanApt, alt: 'Telefonplan apartment' },
  { type: 'image', src: templeWarrior, alt: 'Temple warrior' },
  { type: 'image', src: vasterhaningeApril, alt: 'Vasterhaninge April' },
  { type: 'image', src: vasterhaningeShops, alt: 'Vasterhaninge shops' },
  { type: 'image', src: wanderingHorse, alt: 'Wandering horse' },
  { type: 'image', src: windowIntoSummer, alt: 'Window into summer' },
  { type: 'image', src: winteryCity, alt: 'Wintery city' },
]

const MediaComponent = ({ item }: { item: VisualItem }) => {
  if (item.type === 'image') {
    return (
      <SafeImage
        src={item.src}
        alt={item.alt}
        className="h-auto w-full rounded-2xl bg-cover"
        width={400}
        height={400}
      />
    )
  } else {
    return (
      <video
        src={item.src as string}
        className="h-auto w-full rounded-2xl object-cover"
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
  const [selectedItem, setSelectedItem] = useState<VisualItem | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="relative z-10 columns-1 gap-3 space-y-3 rounded-[2.5rem] border-t border-white/30 bg-black/70 px-3 py-6 pt-6 pb-36 sm:columns-2 sm:px-6 sm:pt-24 md:columns-3">
        {photoItems.map((item, index) => (
          <div
            key={`photo-${index}`}
            onClick={() => {
              setSelectedItem(item)
              setIsOpen(true)
            }}
            className="relative h-fit w-full cursor-pointer overflow-hidden rounded-xl bg-[#1c1c1c] p-1.5 ring-1 ring-white/20"
          >
            <MediaComponent item={item} />
          </div>
        ))}
      </section>

      <VisualsDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={selectedItem}
      />
    </>
  )
}
