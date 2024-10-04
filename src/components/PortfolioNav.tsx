

import { Dock, DockIcon, DockItem, DockLabel } from './Dock';
import { BeakerIcon, CameraIcon, FaceSmileIcon, HomeIcon, Square3Stack3DIcon, SwatchIcon } from '@heroicons/react/24/solid';
import { GitHubIcon } from './SocialIcons';
import Link from 'next/link';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/',
  },
  {
    title: 'Alchemy',
    icon: (
      <BeakerIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/alchemy',
  },
  {
    title: 'Photos',
    icon: (
      <CameraIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/photos',
  },
  {
    title: 'Essentials',
    icon: (
      <Square3Stack3DIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/essentials',
  },
  {
    title: 'About',
    icon: (
      <FaceSmileIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/about',
  },
  {
    title: 'Github',
    icon: (
      <GitHubIcon className='h-full w-full fill-neutral-300' />
    ),
    href: 'https://github.com/mavko',
  },
];

export function PortfolioNav() {
  return (
    <div className='fixed bottom-6 inset-x-0 w-full z-30'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link href={item.href}>
            <DockItem
              key={idx}
              href={item.href}
              className='aspect-square rounded-full backdrop-blur-3xl bg-transparent'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
