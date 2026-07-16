'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from './Dropdown'

export function ResumeDropdown() {
  return (
    <Dropdown>
      <DropdownButton
        as="button"
        aria-label="Download resume or CV"
        className="font-inherit group flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-inherit"
      >
        Resume
        <ChevronDownIcon className="size-3 transition-transform duration-150 ease-out group-aria-expanded:rotate-180 motion-reduce:transition-none motion-reduce:group-aria-expanded:rotate-0" />
      </DropdownButton>
      <DropdownMenu
        anchor="bottom end"
        className="w-40 rounded-md bg-[rgba(48,48,48,.6)] text-sm font-medium ring-1 [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] ring-white backdrop-blur-sm"
      >
        <DropdownItem href="/cv.pdf" download className="text-white">
          CV (PDF)
        </DropdownItem>
        <DropdownItem href="/cv.md" download className="text-white">
          CV (Markdown)
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
