'use client'

import type { StackCompareRow } from '@/content/case-study-types'

type StackCompareProps = {
  rows: StackCompareRow[]
}

/**
 * Essay figure: two columns, quiet From / strong To.
 * Hairlines only — no shell, no mid-column arrows.
 */
export function StackCompare({ rows }: StackCompareProps) {
  return (
    <figure className="w-full" aria-label="Stack before and after">
      <div className="grid grid-cols-2 gap-x-10 border-b border-white/[0.08] pb-2.5 sm:gap-x-20">
        <p className="text-[12px] font-medium text-zinc-500">From</p>
        <p className="text-[12px] font-medium text-zinc-400">To</p>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li
            key={`${r.before}-${r.after}`}
            className={
              i < rows.length - 1
                ? 'grid grid-cols-2 gap-x-10 border-b border-white/[0.06] py-4 sm:gap-x-20'
                : 'grid grid-cols-2 gap-x-10 py-4 sm:gap-x-20'
            }
          >
            <p className="text-[16px] leading-snug text-zinc-500 text-pretty sm:text-[17px]">
              {r.before}
            </p>
            <p className="text-[16px] leading-snug font-medium text-[#ededed] text-pretty sm:text-[17px]">
              {r.after}
            </p>
          </li>
        ))}
      </ul>
    </figure>
  )
}
