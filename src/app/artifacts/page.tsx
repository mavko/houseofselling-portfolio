import { type Metadata } from 'next'
import { Suspense } from 'react'
import { Loading } from '@/components/Loading'
import ArtifactsContent from './ArifactsContent'

export const metadata: Metadata = {
  title: 'Artifacts',
  description: 'Digital artifacts and experiments',
}

export default function ArtifactsPage() {
  return <ArtifactsContent />
}
