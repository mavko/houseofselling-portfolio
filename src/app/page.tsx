import dynamic from 'next/dynamic'

import { HomeHero } from '@/components/HomeHero'
import ArtifactsContent from './artifacts/ArifactsContent'

const GithubActivityChart = dynamic(
  () =>
    import('@/components/github-activity/GithubActivityChart').then(
      (mod) => mod.GithubActivityChart,
    ),
  { loading: () => <div style={{ height: 220 }} /> },
)

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-8">
        <h2
          className="font-display text-foreground text-lg font-semibold tracking-tight"
          style={{ fontStretch: '125%', letterSpacing: '-0.2px' }}
        >
          Shipping, live
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Commits, pull requests and merges across my GitHub, last 30 days.
          Updates every minute.
        </p>
        <div className="mt-4 min-h-[220px]">
          <GithubActivityChart />
        </div>
      </section>
      <ArtifactsContent />
    </>
  )
}
