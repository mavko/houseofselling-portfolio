import Link from 'next/link'

import type { RichParagraph, TextSegment } from '@/content/case-study-types'

function Segment({ segment }: { segment: TextSegment }) {
	if (segment.kind === 'text') {
		return <>{segment.value}</>
	}
	if (segment.external) {
		return (
			<a
				href={segment.href}
				target='_blank'
				rel='noopener noreferrer'
				className='font-medium text-emerald-300/90 underline decoration-white/20 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300/50'>
				{segment.label}
			</a>
		)
	}
	return (
		<Link
			href={segment.href}
			className='font-medium text-emerald-300/90 underline decoration-white/20 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300/50'>
			{segment.label}
		</Link>
	)
}

export function CaseStudyRichParagraph({
	paragraph,
}: {
	paragraph: RichParagraph
}) {
	return (
		<p className='text-base leading-relaxed text-zinc-300'>
			{paragraph.map((segment, i) => (
				<Segment key={i} segment={segment} />
			))}
		</p>
	)
}
