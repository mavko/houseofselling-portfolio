import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { ForwardIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function ArticleDropdown() {
  return (
    <Menu>
      <MenuButton className="group relative inline-block cursor-pointer rounded-xl p-px text-xs leading-6 font-semibold text-white/80 no-underline">
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex h-10 items-center space-x-1 rounded-xl bg-zinc-950 px-4 py-0.5 ring-1 ring-white/30">
          <ChevronDownIcon className="size-4 fill-white/60" />
          <span>{`Articles`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-green-300 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="mt-3 w-64 origin-top-right rounded-xl border border-white/20 bg-black/30 p-1 text-sm/6 text-white backdrop-blur-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-hidden data-closed:scale-95 data-closed:opacity-0"
      >
        <MenuItem></MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem></MenuItem>
      </MenuItems>
    </Menu>
  )
}
