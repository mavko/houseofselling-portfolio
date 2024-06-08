import { Header } from '@/components/Header'
import { Container } from './Container'
import { Navbar, NavbarItem, NavbarSection } from './NavBar'
import { Link } from './link'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from './Dropdown'
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import avatarImage from '@/images/dither.avif'
const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Events', url: '/events' },
  { label: 'Orders', url: '/orders' },
  { label: 'Broadcasts', url: '/broadcasts' },
  { label: 'Settings', url: '/settings' },
]
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Container className="my-9">
          <div className="absolute inset-[20%] block rounded-full bg-white/5 blur-2xl"></div>
          <section className="relative mx-auto h-full  min-h-screen w-full max-w-7xl overflow-hidden rounded-xl pb-96 shadow-2xl shadow-white/5 ring-1 ring-white/20 backdrop-blur-sm sm:min-h-[38rem] sm:pb-40 md:pb-60 lg:h-[calc(100vh_-_70px)]">
            <div className="flex text-sm leading-6 text-white/90">
              {/* <span className="relative isolate block overflow-hidden sm:hidden">
                <Image
                  src={avatarImage}
                  alt=""
                  className="player_dither__2ctrc absolute left-0 top-0 h-full w-16 rotate-180 -scale-y-150 opacity-50 brightness-100 invert"
                />
                <Dropdown>
                  <DropdownButton
                    as={NavbarItem}
                    aria-label="Account menu"
                    className=" flex items-center space-x-2 overflow-hidden border-b border-t border-b-white/30 border-t-transparent px-4 py-2 text-white"
                  >
                    <svg
                      width="76"
                      height="65"
                      viewBox="0 0 76 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                    >
                      <path
                        d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                        fill="#ffffff"
                      />
                    </svg>
                    Menu
                    <ChevronDownIcon />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="bottom start">
                    <DropdownItem href="/teams/1/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/1">
                      <DropdownLabel>Tailwind Labs</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/teams/2">
                      <DropdownLabel>Workcation</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/teams/create">
                      <PlusIcon />
                      <DropdownLabel>New team&hellip;</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </span> */}
              <Link
                href="/"
                className="relative flex items-center space-x-2 overflow-hidden border-b border-t border-b-white/30 border-t-transparent px-4 py-2 text-white hover:bg-white/5 group-hover:opacity-10"
              >
                <Image
                  src={avatarImage}
                  alt=""
                  className="player_dither__2ctrc absolute left-0 top-0 h-full w-16 rotate-180 -scale-y-150 opacity-50 brightness-100 invert"
                />
                <svg
                  width="76"
                  height="65"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>
                <span className="pt-1.5">01_home</span>
              </Link>
              <div className="mt-2 flex flex-auto items-center rounded-tl border-y border-l border-r-0 border-white/10 bg-neutral-900 lg:rounded-tr">
                <Link
                  href="/about"
                  className="border-r border-white/5 px-4 py-2"
                >
                  02_about
                </Link>
                {/* <Link
                  href="/articles"
                  className="hidden border-r border-white/5 px-4 py-2 sm:block"
                >
                  03_articles
                </Link>
                <Link
                  href="/setup"
                  className="hidden border-r border-white/5 px-4 py-2 sm:block"
                >
                  04_setup
                </Link> */}
                <div className="flex flex-auto items-center justify-end space-x-4 px-4">
                  <svg width="12" height="2" fill="currentColor">
                    <circle cx="1" cy="1" r="1"></circle>
                    <circle cx="6" cy="1" r="1"></circle>
                    <circle cx="11" cy="1" r="1"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="noise opacity-[0.02]"></div>
            <div className="overlay bg-[repeating-linear-gradient(_180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_0.3)_50%,_rgba(0,_0,_0,_0)_100%_)] ">
              <div className="relative max-h-full overflow-y-scroll overscroll-none p-4 sm:p-8">
                {children}
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  )
}
