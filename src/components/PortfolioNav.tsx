

import { Dock, DockIcon, DockItem, DockLabel } from './Dock';
import { BeakerIcon, CameraIcon, FaceSmileIcon, HomeIcon, Square3Stack3DIcon, SwatchIcon } from '@heroicons/react/24/solid';
import { GitHubIcon } from './SocialIcons';
import Link from 'next/link';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full' />
    ),
    href: '/',
  },
  {
    title: 'Alchemy',
    icon: (
      <BeakerIcon className='h-full w-full' />
    ),
    href: '/alchemy',
  },
  {
    title: 'Visuals',
    icon: (
      <CameraIcon className='h-full w-full' />
    ),
    href: '/visuals',
  },
  {
    title: 'Essentials',
    icon: (
      <Square3Stack3DIcon className='h-full w-full' />
    ),
    href: '/essentials',
  },
  {
    title: 'About',
    icon: (
      <FaceSmileIcon className='h-full w-full' />
    ),
    href: '/about',
  },
  {
    title: 'Github',
    icon: (
      <GitHubIcon className='h-full w-full' />
    ),
    href: 'https://github.com/mavko',
  },
];

export function PortfolioNav() {
  return (
    <div className='fixed bottom-6 inset-x-0 w-full z-30'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link href={item.href} className=''>
            <DockItem
              key={idx}
              href={item.href}
              className='aspect-square rounded-lg bg-neutral-950 backdrop-blur-sm ring-1 ring-inset ring-neutral-800 fill-neutral-300 hover:fill-white active:fill-green-300 focus:fill-green-300 hover:brightness-150'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className=''>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
