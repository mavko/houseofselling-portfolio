import { type Metadata } from 'next'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { LinkedInIcon, XIcon } from '@/components/SocialIcons'
import ProjectsList from '@/components/ProjectsList'

const linkClass =
  ' p-2 text-white/80 transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:text-white active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected builds, experiments, and client work — design and agentic engineering.',
  openGraph: {
    title: 'Projects',
    description:
      'Selected builds, experiments, and client work — design and agentic engineering.',
    url: '/projects',
    type: 'website',
  },
  twitter: {
    title: 'Projects',
    description:
      'Selected builds, experiments, and client work — design and agentic engineering.',
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-8">
      <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-display text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
          What I&apos;m up to
        </h1>
        <nav
          aria-label="Social links"
          className="flex h-full w-fit shrink-0 items-center gap-1 rounded-full border border-white/15 px-3 sm:gap-2"
        >
          <Link
            className={linkClass}
            href="mailto:houseofselling@proton.me"
            aria-label="Email"
          >
            <EnvelopeIcon className="size-5 fill-current" />
          </Link>

          <Link
            className={`${linkClass} border-x border-white/15 px-2 sm:px-3`}
            href="https://x.com/houseofselling"
            aria-label="X (Twitter)"
          >
            <XIcon className="size-5 fill-current" />
          </Link>

          <Link
            className={linkClass}
            href="https://www.linkedin.com/in/sebastianselling/"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5 fill-current" />
          </Link>
        </nav>
      </header>

      <ProjectsList entranceDelayMs={100} />
    </div>
  )
}
