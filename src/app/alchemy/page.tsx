import { type Metadata } from 'next'
import AlchemyContent from './AlchemyContent'

export const metadata: Metadata = {
  title: 'Alchemy by Sebastian',
  description:
    'Some of my apps, designs, brands or whatever else I happen to work on.',
}

export default function Craft() {
  return <AlchemyContent />
}
