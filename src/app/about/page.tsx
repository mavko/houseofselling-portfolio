import { type Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Seb Selling. I live in Stockholm, where I scale tech in properties in hopes of raising the bar of quality in this ancient industry.",
}

export default function About() {
  return <AboutContent />
}
