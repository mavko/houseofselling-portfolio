import dynamic from 'next/dynamic'

import { HomeHero } from '@/components/HomeHero'

const ArtifactsContent = dynamic(() => import('./artifacts/ArifactsContent'), {
  loading: () => <main className="mx-auto min-h-[40vh] max-w-5xl" />,
})

export default function Home() {
  return (
    <>
      <HomeHero />
      <ArtifactsContent />
    </>
  )
}
