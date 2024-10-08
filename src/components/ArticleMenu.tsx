import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { ForwardIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function ArticleDropdown() {
  return (

    <Menu>
      <MenuButton className="no-underline group cursor-pointer relative rounded-xl p-px text-xs font-semibold leading-6  text-white/80 inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-1 items-center z-10 rounded-xl bg-zinc-950 py-0.5 px-4 ring-1 ring-white/30 h-10">
          <ChevronDownIcon className="size-4 fill-white/60" />
          <span>{`Articles`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-green-300 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-64 origin-top-right rounded-xl border border-white/20 bg-black/30 backdrop-blur-lg p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 mt-3"
      >
        <MenuItem>
          <Link href="/alchemy/makings-of-ispect" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <ForwardIcon className="size-4 fill-white/80" />
            Makings of iSpect

          </Link>
        </MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <Link href="/alchemy/makings-of-icontrol" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <ForwardIcon className="size-4 fill-white/80" />
            Makings of iControl

          </Link>
        </MenuItem>


      </MenuItems>
    </Menu>

  )
}
