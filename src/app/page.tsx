import dynamic from 'next/dynamic'

import { HomeHero } from '@/components/HomeHero'
import { HomeHeroCopy } from '@/components/HeroNavPills'
import ArtifactsContent from './artifacts/ArifactsContent'

const GithubActivityChart = dynamic(
  () =>
    import('@/components/github-activity/GithubActivityChart').then(
      (mod) => mod.GithubActivityChart,
    ),
  { loading: () => <div style={{ height: 440 }} /> },
)

export default function Home() {
  return (
    <>
      <HomeHero>
        <section className="dark w-full pt-8">
          <div className="min-h-[440px]">
            <GithubActivityChart intro={<HomeHeroCopy />} />
          </div>
        </section>
      </HomeHero>
      <ArtifactsContent />
    </>
  )
}
