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
  return <>{children}</>
}
