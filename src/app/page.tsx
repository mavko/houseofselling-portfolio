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
        <div className="mt-4 min-h-[220px]">
          <GithubActivityChart />
        </div>
      </section>
      <ArtifactsContent />
    </>
  )
}
