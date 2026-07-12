import Link from 'next/link'

import type { RichParagraph, TextSegment } from '@/content/case-study-types'

const linkClass =
  'text-emerald-300/90 underline decoration-white/15 underline-offset-4 transition-colors duration-150 ease-out active:opacity-80 [@media(hover:hover)_and_(pointer:fine)]:hover:text-emerald-200'

function Segment({ segment }: { segment: TextSegment }) {
  if (segment.kind === 'text') {
    return <>{segment.value}</>
  }
  if (segment.external) {
    return (
      <a
        href={segment.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {segment.label}
      </a>
    )
  }
  return (
    <Link href={segment.href} className={linkClass}>
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
    <p className="text-[20px] font-medium leading-[38px] text-[#ededed] text-pretty">
      {paragraph.map((segment, i) => (
        <Segment key={i} segment={segment} />
      ))}
    </p>
  )
}
