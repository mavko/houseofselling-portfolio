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
      <section className="dark mx-auto w-full max-w-5xl py-8">
        <h2 className="font-display text-base leading-[1.05] font-semibold tracking-[-0.2px] text-white [font-stretch:125%]">
          Shipping, live
        </h2>
        <p className="mt-1 text-sm text-white/70">
          Contributions, pull requests and merges across my GitHub, last 30
          days. Updates every minute.
        </p>
        <div className="mt-4 min-h-[220px]">
          <GithubActivityChart />
        </div>
      </section>
      <ArtifactsContent />
    </>
  )
}
