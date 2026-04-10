'use client'

import ArtifactsContent from './artifacts/ArifactsContent'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { heroVariants } from '@/components/animations/homeStagger'

const RayHeader = dynamic(
	() =>
		import('@/components/animations/ray-header').then((m) => m.RayHeader),
	{
		ssr: false,
		loading: () => (
			<div className='absolute inset-0 z-0 bg-black' aria-hidden />
		),
	}
)

export default function Home() {
	return (
		<>
			<motion.div
				className='flex h-96 w-full overflow-hidden rounded-4xl border border-white/25 [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] brightness-125 [transition-property:transform,filter] select-none [transition:.12s_var(--ease-out-quad)]'
				variants={heroVariants}
				initial='hidden'
				animate='visible'>
				<div className='relative z-10 flex flex-col space-y-6 text-center size-full items-center justify-center bg-black/80'>
					<h1 className='font-display text-[2.5rem] leading-tight font-semibold tracking-[-0.03em] text-white font-stretch-200% md:text-balance'>
						Design and agentic engineering. <br />
					</h1>
					<p className='font-sans text-xl leading-tight font-medium tracking-[-0.03em] text-white/70'>
						Decade+ of taking ideas from zero to one.
					</p>
					<div className='flex items-center justify-center gap-4'>
						<ProjectsLink />
					</div>
				</div>
				<RayHeader />
			</motion.div>

			<ArtifactsContent />
		</>
	)
}
function ProjectsLink() {
	return (
		<Link
			href='/projects'
			className='group relative inline-block cursor-pointer font-display rounded-full bg-transparent p-px text-base/9 leading-6 font-semibold text-white no-underline outline-0 transition-transform duration-200 ease-out active:scale-[0.97]'>
			<div className='inner-shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] absolute top-0 left-0 z-0 h-full w-full rounded-full border border-white/25 shadow-sm shadow-white/90 transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]' />
			<div
				className='absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full'
				style={{ backdropFilter: 'url("#container-glass")' }}
			/>
			<div className='relative z-10 flex h-11 items-center space-x-1 rounded-full px-6'>
				<span>What am I up to?</span>
			</div>
			<span className='absolute -bottom-0 left-[1.125rem] h-1 brightness-200 w-[calc(100%-2.25rem)] bg-linear-to-r from-orange-400/0 via-white to-orange-400/0 opacity-0 transition-opacity duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-40' />
			<GlassFilter />
		</Link>
	)
}

function GlassFilter() {
	return (
		<svg className='hidden'>
			<defs>
				<filter
					id='container-glass'
					x='0%'
					y='0%'
					width='100%'
					height='100%'
					colorInterpolationFilters='sRGB'>
					<feTurbulence
						type='fractalNoise'
						baseFrequency='0.05 0.05'
						numOctaves='1'
						seed='1'
						result='turbulence'
					/>
					<feGaussianBlur
						in='turbulence'
						stdDeviation='2'
						result='blurredNoise'
					/>
					<feDisplacementMap
						in='SourceGraphic'
						in2='blurredNoise'
						scale='70'
						xChannelSelector='R'
						yChannelSelector='B'
						result='displaced'
					/>
					<feGaussianBlur in='displaced' stdDeviation='4' result='finalBlur' />
					<feComposite in='finalBlur' in2='finalBlur' operator='over' />
				</filter>
			</defs>
		</svg>
	)
}
