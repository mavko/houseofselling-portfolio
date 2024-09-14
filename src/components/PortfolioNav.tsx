

import { Dock, DockIcon, DockItem, DockLabel } from './Dock';
import { CameraIcon, FaceSmileIcon, HomeIcon, SwatchIcon } from '@heroicons/react/24/solid';
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
    title: 'Craft',
    icon: (
      <SwatchIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/craft',
  },
  {
    title: 'Photos',
    icon: (
      <CameraIcon className='h-full w-full text-neutral-300' />
    ),
    href: '/photos',
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
    <div className='fixed bottom-6 inset-x-0 w-full z-40'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <Link href={item.href}>
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-neutral-800'
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
