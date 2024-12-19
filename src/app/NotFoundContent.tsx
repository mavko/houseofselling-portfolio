'use client'

import Link from 'next/link'

export default function NotFoundContent() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex h-full items-center pt-16 sm:pt-32">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Page not found
          </h1>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <Link
            href="/"
            className="mt-4 rounded-lg bg-zinc-800 px-4 py-2 text-center ring-1 ring-white/50"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}
