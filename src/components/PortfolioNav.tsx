import { Dock, DockIcon, DockItem, DockLabel } from './Dock'
import {
  BeakerIcon,
  CameraIcon,
  FaceSmileIcon,
  HomeIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from '@heroicons/react/24/solid'
import { GitHubIcon } from './SocialIcons'
import Link from 'next/link'

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className="h-full w-full" />,
    href: '/',
  },
  {
    title: 'Alchemy',
    icon: <BeakerIcon className="h-full w-full" />,
    href: '/alchemy',
  },
  {
    title: 'Visuals',
    icon: <CameraIcon className="h-full w-full" />,
    href: '/visuals',
  },
  {
    title: 'Essentials',
    icon: <Square3Stack3DIcon className="h-full w-full" />,
    href: '/essentials',
  },
  {
    title: 'About',
    icon: <FaceSmileIcon className="h-full w-full" />,
    href: '/about',
  },
  {
    title: 'Github',
    icon: <GitHubIcon className="h-full w-full " />,
    href: 'https://github.com/mavko',
  },
]

export function PortfolioNav() {
  return (
    <div className="fixed inset-x-0 bottom-6 z-30 w-full">
      <Dock className="items-end pb-3">
        {data.map((item) => (
          <Link key={item.title} href={item.href}>
            <DockItem
              href={item.href}
              className="aspect-square rounded-xl bg-neutral-950  ring-1 ring-inset ring-neutral-700 backdrop-blur-xs  "
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className="fill-neutral-100 text-neutral-100 hover:fill-white hover:brightness-150 focus:fill-[#FE0303] active:fill-[#FE0303]">
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  )
}
