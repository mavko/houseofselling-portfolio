import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visuals by Sebastian',
  description: 'Capturing moments in time from every day life.',
}

export default function VisualsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="border-t border-white/[7.5%] px-4 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-6 px-2 py-16 lg:py-24">
          <h1 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-[length:clamp(2rem,3.75vw,3rem)]/tight">
            Photography from moments in time
          </h1>
        </div>
      </div>
      {children}
    </>
  )
}
