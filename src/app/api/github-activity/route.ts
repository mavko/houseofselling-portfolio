import { cacheLife } from 'next/cache'

import { getGithubActivity } from '@/lib/github-activity'

export async function GET(): Promise<Response> {
  const data = await getCachedGithubActivity()
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
    },
  })
}

async function getCachedGithubActivity() {
  'use cache'
  cacheLife({ revalidate: 300, stale: 300, expire: 600 })
  return getGithubActivity()
}
