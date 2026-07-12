import { EnlargeableImage } from '@/components/EnlargeableImage'
import type { MediaItem } from '@/content/case-study-types'
import { mediaUrl } from '@/lib/media-url'

export function CaseStudyMediaItem({ item }: { item: MediaItem }) {
  if (item.kind === 'placeholder') {
    return (
      <div className="flex min-h-[180px] flex-col justify-center rounded-xl border border-dashed border-white/12 bg-black/20 p-6">
        <p className="font-display text-base font-semibold tracking-tight text-white">
          {item.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          {item.description}
        </p>
      </div>
    )
  }

  if (item.kind === 'embed') {
    return (
      <figure className="space-y-3">
        <div className="overflow-hidden rounded-lg outline outline-1 -outline-offset-1 outline-white/10">
          <iframe
            src={item.src}
            title={item.title}
            height={item.height}
            className="aspect-video max-h-[min(70vh,560px)] min-h-[240px] w-full"
            allowFullScreen
          />
        </div>
        <figcaption className="text-left text-[12px] text-zinc-500">
          {item.title}
        </figcaption>
      </figure>
    )
  }

  if (item.kind === 'video') {
    return (
      <figure className="space-y-3">
        <div className="w-full overflow-hidden rounded-lg outline outline-1 -outline-offset-1 outline-white/10">
          <video
            src={item.src}
            title={item.title}
            className="aspect-video w-full"
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
          />
        </div>
        {item.caption ? (
          <figcaption className="text-left text-[12px] text-zinc-500">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  const src = mediaUrl(item.srcKey)

  return (
    <figure className="space-y-3">
      <EnlargeableImage
        src={src}
        alt={item.alt}
        width={item.width ?? 1200}
        height={item.height ?? 800}
        className="w-full object-contain"
        priority={item.priority}
      />
      {item.caption ? (
        <figcaption className="text-left text-[12px] text-zinc-500">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
