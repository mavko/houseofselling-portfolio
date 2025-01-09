import { Dock, DockIcon, DockItem, DockLabel } from './Dock'
import {
  CameraIcon,
  FaceSmileIcon,
  HomeIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from '@heroicons/react/24/solid'
import { GitHubIcon } from './SocialIcons'
import Link from 'next/link'
import Tooltip from './Tooltip'

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className="h-full w-full" />,
    href: '/',
  },
  {
    title: 'Artifacts',
    icon: <SwatchIcon className="h-full w-full" />,
    href: '/artifacts',
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
    icon: <GitHubIcon className="h-full w-full" />,
    href: 'https://github.com/mavko',
  },
]

export function PortfolioNav() {
  return (
    <div className="fixed inset-x-0 bottom-6 z-30 w-full">
      <Dock className="items-end pb-3">
        {data.map((item) => (
          <Tooltip key={item.title} text={item.title}>
            <Link href={item.href}>
              <DockItem
                href={item.href}
                className="aspect-square rounded-xl bg-neutral-950 ring-1 ring-neutral-700 backdrop-blur-xs ring-inset"
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon className="fill-neutral-100 text-neutral-100 hover:fill-white hover:brightness-150 focus:fill-[#FE0303] active:fill-[#FE0303]">
                  {item.icon}
                </DockIcon>
              </DockItem>
            </Link>
          </Tooltip>
        ))}
      </Dock>
    </div>
  )
}
