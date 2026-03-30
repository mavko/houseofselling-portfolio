'use client'

import { SafeImage } from '@/components/SafeImage'
import { useState } from 'react'
import VisualsDialog, { VisualItem } from '@/components/VisualsDialog'
import { mediaUrl } from '@/lib/media-url'

const photoItems: VisualItem[] = [
  {
    type: 'image',
    src: mediaUrl('bundled/photos/sharedspace-header-placeholder.jpg'),
    alt: 'Sharedspace Landing Page',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/bussStation.jpg'),
    alt: 'Cyber dusk bus station',
  },
  {
    type: 'video',
    src: mediaUrl('videos/subwayMorning.mp4'),
    alt: 'The dusk train',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/laptop.jpg'),
    alt: 'Laptop',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/codingEvening.jpeg'),
    alt: 'Evening of coding',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/cyberTullen.jpg'),
    alt: 'Hornstull walkway cyberwave style',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/danderydDystopia.jpg'),
    alt: 'Danderyd dystopia',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/drowsyLangholmen.jpg'),
    alt: 'Drowsy Langholmen',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/duskofSummer.jpg'),
    alt: 'Dusk of summer',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/dystopianStairway.jpg'),
    alt: 'Dystopian stairway',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/fragmentsOfSelf.jpg'),
    alt: 'Fragments of self',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/gardetsunset.jpeg'),
    alt: 'Gardet sunset',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/hornstulldimman.jpeg'),
    alt: 'Hornstull dimman',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/lift.jpg'),
    alt: 'Lift',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/lonelyDawn.jpg'),
    alt: 'Lonely dawn',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midnightFog.jpg'),
    alt: 'Midnight fog',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midsommarnatten.jpeg'),
    alt: 'Midsommar natten',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midsommarwinter.jpg'),
    alt: 'Midsommar winter',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midsummarMorning.jpg'),
    alt: 'Midsummer morning',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midsummerDusk.jpg'),
    alt: 'Midsummer dusk',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/midwinter-raildroad.jpg'),
    alt: 'Midwinter railroad',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/nightHUD.jpg'),
    alt: 'Night HUD',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/pathwaytoNowhere.jpg'),
    alt: 'Pathway to nowhere',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/saturdayLights.jpg'),
    alt: 'Saturday lights',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/september.jpg'),
    alt: 'September',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/sleepylangholmen.jpg'),
    alt: 'Sleepy Langholmen',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/subwayDystopia.jpg'),
    alt: 'Subway dystopia',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/summerDream.jpg'),
    alt: 'Summer dream',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/sunsetPov.jpg'),
    alt: 'Sunset POV',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/swedishMidsummer.jpg'),
    alt: 'Swedish midsummer',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/telefonplanapt.jpg'),
    alt: 'Telefonplan apartment',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/templeWarrior.jpg'),
    alt: 'Temple warrior',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/vasterhaningeApril.jpg'),
    alt: 'Vasterhaninge April',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/vasterhaningeShops.jpg'),
    alt: 'Vasterhaninge shops',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/wanderingHorse.jpg'),
    alt: 'Wandering horse',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/windowIntoSummer.jpg'),
    alt: 'Window into summer',
  },
  {
    type: 'image',
    src: mediaUrl('bundled/photos/winteryCity.jpg'),
    alt: 'Wintery city',
  },
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
        src={item.src}
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
      <section className="relative z-0 columns-1 gap-2 space-y-3 pb-36 sm:columns-2 md:columns-3">
        {photoItems.map((item, index) => (
          <div
            key={`photo-${index}`}
            onClick={() => {
              setSelectedItem(item)
              setIsOpen(true)
            }}
            className="relative h-fit w-full cursor-pointer overflow-hidden rounded-xl border border-white/10"
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
