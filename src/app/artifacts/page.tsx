import { type Metadata } from 'next'
import ArtifactsContent from './ArifactsContent'

export const metadata: Metadata = {
  title: 'Artifacts',
  description: 'Digital artifacts and experiments',
}

export default function ArtifactsPage() {
  return <ArtifactsContent />
}
