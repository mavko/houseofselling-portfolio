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
		<div className='min-h-screen py-8'>
			<ProjectsList entranceDelayMs={100} />
		</div>
	)
}
