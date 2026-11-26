export interface GithubActivityDay {
  date: string
  commits: number
  prsOpened: number
  prsMerged: number
}

export interface GithubActivityTotals {
  commits: number
  prsOpened: number
  prsMerged: number
}

export interface GithubActivityResponse {
  generatedAt: string
  source: 'graphql' | 'public-events'
  days: GithubActivityDay[]
  totals: GithubActivityTotals
  stale?: boolean
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isUnknownArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

function utcDateKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

interface DayRange {
  keys: string[]
  start: Date
  today: Date
}

function buildDayRange(): DayRange {
  const now = new Date()
  const todayUtc = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
  const keys: string[] = []
  for (let i = 29; i >= 0; i -= 1) {
    const day = new Date(todayUtc.getTime() - i * 86_400_000)
    keys.push(utcDateKey(day))
  }
  const start = new Date(todayUtc.getTime() - 29 * 86_400_000)
  return { keys, start, today: now }
}

function emptyCounts(keys: string[]): Map<string, number> {
  const map = new Map<string, number>()
  for (const key of keys) {
    map.set(key, 0)
  }
  return map
}

function totalsFromMaps(
  commits: Map<string, number>,
  prsOpened: Map<string, number>,
  prsMerged: Map<string, number>,
  keys: string[],
): { days: GithubActivityDay[]; totals: GithubActivityTotals } {
  const days: GithubActivityDay[] = keys.map((date) => ({
    date,
    commits: commits.get(date) ?? 0,
    prsOpened: prsOpened.get(date) ?? 0,
    prsMerged: prsMerged.get(date) ?? 0,
  }))
  const totals: GithubActivityTotals = {
    commits: days.reduce((sum, day) => sum + day.commits, 0),
    prsOpened: days.reduce((sum, day) => sum + day.prsOpened, 0),
    prsMerged: days.reduce((sum, day) => sum + day.prsMerged, 0),
  }
  return { days, totals }
}

let lastGood: GithubActivityResponse | null = null

async function graphqlRequest(
  token: string,
  query: string,
  variables: Record<string, unknown>,
): Promise<Record<string, unknown> | null> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'sebastianselling-portfolio',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`GitHub GraphQL HTTP ${response.status}`)
  }

  const json: unknown = await response.json()
  if (!isRecord(json)) {
    throw new Error('GitHub GraphQL invalid JSON')
  }
  if (isUnknownArray(json.errors) && json.errors.length > 0) {
    throw new Error('GitHub GraphQL error')
  }
  const data = isRecord(json.data) ? json.data : null
  return data
}

async function fetchCommits(
  token: string,
  from: string,
  to: string,
  commitMap: Map<string, number>,
): Promise<void> {
  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          commitContributionsByRepository(maxRepositories: 100) {
            contributions(first: 100) {
              nodes {
                occurredAt
                commitCount
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      }
    }
  `
  const data = await graphqlRequest(token, query, {
    login: 'mavko',
    from,
    to,
  })
  if (!data) {
    return
  }
  const user = isRecord(data.user) ? data.user : null
  const collection =
    user && isRecord(user.contributionsCollection)
      ? user.contributionsCollection
      : null
  if (!collection) {
    return
  }
  const repos = isUnknownArray(collection.commitContributionsByRepository)
    ? collection.commitContributionsByRepository
    : []
  for (const repo of repos) {
    if (!isRecord(repo)) {
      continue
    }
    const contributions = isRecord(repo.contributions)
      ? repo.contributions
      : null
    if (!contributions) {
      continue
    }
    const nodes = isUnknownArray(contributions.nodes) ? contributions.nodes : []
    for (const node of nodes) {
      if (!isRecord(node)) {
        continue
      }
      const occurredAt =
        typeof node.occurredAt === 'string' ? node.occurredAt : null
      const commitCount =
        typeof node.commitCount === 'number' ? node.commitCount : 0
      if (!occurredAt) {
        continue
      }
      const date = occurredAt.slice(0, 10)
      if (commitMap.has(date)) {
        commitMap.set(date, (commitMap.get(date) ?? 0) + commitCount)
      }
    }
  }
}

async function fetchOpenedPRs(
  token: string,
  from: string,
  to: string,
  openedMap: Map<string, number>,
): Promise<void> {
  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!, $after: String) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          pullRequestContributions(first: 100, after: $after) {
            nodes {
              occurredAt
              pullRequest {
                createdAt
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
  `
  let cursor: string | null = null
  for (;;) {
    const data = await graphqlRequest(token, query, {
      login: 'mavko',
      from,
      to,
      after: cursor,
    })
    if (!data) {
      break
    }
    const user = isRecord(data.user) ? data.user : null
    const collection =
      user && isRecord(user.contributionsCollection)
        ? user.contributionsCollection
        : null
    const prContributions =
      collection && isRecord(collection.pullRequestContributions)
        ? collection.pullRequestContributions
        : null
    if (!prContributions) {
      break
    }
    const nodes = isUnknownArray(prContributions.nodes)
      ? prContributions.nodes
      : []
    for (const node of nodes) {
      if (!isRecord(node)) {
        continue
      }
      const pullRequest = isRecord(node.pullRequest) ? node.pullRequest : null
      const createdAt =
        typeof pullRequest?.createdAt === 'string'
          ? pullRequest.createdAt
          : typeof node.occurredAt === 'string'
            ? node.occurredAt
            : null
      if (!createdAt) {
        continue
      }
      const date = createdAt.slice(0, 10)
      if (openedMap.has(date)) {
        openedMap.set(date, (openedMap.get(date) ?? 0) + 1)
      }
    }
    const pageInfo = isRecord(prContributions.pageInfo)
      ? prContributions.pageInfo
      : null
    const hasNextPage =
      pageInfo && typeof pageInfo.hasNextPage === 'boolean'
        ? pageInfo.hasNextPage
        : false
    const endCursor =
      pageInfo && typeof pageInfo.endCursor === 'string'
        ? pageInfo.endCursor
        : null
    if (!hasNextPage || !endCursor) {
      break
    }
    cursor = endCursor
  }
}

async function fetchMergedPRs(
  token: string,
  mergedSince: string,
  mergedMap: Map<string, number>,
): Promise<void> {
  const query = `
    query($q: String!, $after: String) {
      search(type: ISSUE, query: $q, first: 100, after: $after) {
        nodes {
          ... on PullRequest {
            mergedAt
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `
  let cursor: string | null = null
  for (;;) {
    const data = await graphqlRequest(token, query, {
      q: `author:mavko is:pr merged:>=${mergedSince}`,
      after: cursor,
    })
    if (!data) {
      break
    }
    const search = isRecord(data.search) ? data.search : null
    if (!search) {
      break
    }
    const nodes = isUnknownArray(search.nodes) ? search.nodes : []
    for (const node of nodes) {
      if (!isRecord(node)) {
        continue
      }
      const mergedAt = typeof node.mergedAt === 'string' ? node.mergedAt : null
      if (!mergedAt) {
        continue
      }
      const date = mergedAt.slice(0, 10)
      if (mergedMap.has(date)) {
        mergedMap.set(date, (mergedMap.get(date) ?? 0) + 1)
      }
    }
    const pageInfo = isRecord(search.pageInfo) ? search.pageInfo : null
    const hasNextPage =
      pageInfo && typeof pageInfo.hasNextPage === 'boolean'
        ? pageInfo.hasNextPage
        : false
    const endCursor =
      pageInfo && typeof pageInfo.endCursor === 'string'
        ? pageInfo.endCursor
        : null
    if (!hasNextPage || !endCursor) {
      break
    }
    cursor = endCursor
  }
}

async function fetchGraphQL(token: string): Promise<GithubActivityResponse> {
  const range = buildDayRange()
  const commitMap = emptyCounts(range.keys)
  const openedMap = emptyCounts(range.keys)
  const mergedMap = emptyCounts(range.keys)

  const from = range.start.toISOString()
  const to = range.today.toISOString()
  const mergedSince = range.keys[0] ?? ''

  await fetchCommits(token, from, to, commitMap)
  await fetchOpenedPRs(token, from, to, openedMap)
  await fetchMergedPRs(token, mergedSince, mergedMap)

  const { days, totals } = totalsFromMaps(
    commitMap,
    openedMap,
    mergedMap,
    range.keys,
  )

  return {
    generatedAt: new Date().toISOString(),
    source: 'graphql',
    days,
    totals,
  }
}

async function fetchPublicEvents(): Promise<GithubActivityResponse> {
  const range = buildDayRange()
  const commitMap = emptyCounts(range.keys)
  const openedMap = emptyCounts(range.keys)
  const mergedMap = emptyCounts(range.keys)

  const events: unknown[] = []
  for (let page = 1; page <= 3; page += 1) {
    const url = `https://api.github.com/users/mavko/events/public?per_page=100&page=${page}`
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'sebastianselling-portfolio',
      },
    })
    if (!response.ok) {
      throw new Error(`GitHub events HTTP ${response.status}`)
    }
    const json: unknown = await response.json()
    if (!isUnknownArray(json)) {
      break
    }
    events.push(...json)
    if (json.length < 100) {
      break
    }
  }

  for (const event of events) {
    if (!isRecord(event)) {
      continue
    }
    const type = typeof event.type === 'string' ? event.type : ''
    const createdAt =
      typeof event.created_at === 'string' ? event.created_at : ''
    const date = createdAt.slice(0, 10)
    if (type === 'PushEvent') {
      const payload = isRecord(event.payload) ? event.payload : null
      const size = typeof payload?.size === 'number' ? payload.size : null
      const commitsArr = isUnknownArray(payload?.commits)
        ? payload.commits
        : null
      const count = size !== null ? size : commitsArr ? commitsArr.length : 0
      if (commitMap.has(date)) {
        commitMap.set(date, (commitMap.get(date) ?? 0) + count)
      }
    } else if (type === 'PullRequestEvent') {
      const payload = isRecord(event.payload) ? event.payload : null
      const action = typeof payload?.action === 'string' ? payload.action : ''
      const pr = isRecord(payload?.pull_request) ? payload.pull_request : null
      const merged = pr?.merged === true
      if (action === 'opened' && openedMap.has(date)) {
        openedMap.set(date, (openedMap.get(date) ?? 0) + 1)
      }
      if (action === 'closed' && merged && mergedMap.has(date)) {
        mergedMap.set(date, (mergedMap.get(date) ?? 0) + 1)
      }
    }
  }

  const { days, totals } = totalsFromMaps(
    commitMap,
    openedMap,
    mergedMap,
    range.keys,
  )

  return {
    generatedAt: new Date().toISOString(),
    source: 'public-events',
    days,
    totals,
  }
}

export async function getGithubActivity(): Promise<GithubActivityResponse> {
  const token = process.env.GITHUB_ACTIVITY_TOKEN || process.env.GITHUB_TOKEN
  try {
    const result = token ? await fetchGraphQL(token) : await fetchPublicEvents()
    lastGood = result
    return result
  } catch {
    if (lastGood) {
      return { ...lastGood, stale: true }
    }
    const range = buildDayRange()
    const commitMap = emptyCounts(range.keys)
    const openedMap = emptyCounts(range.keys)
    const mergedMap = emptyCounts(range.keys)
    const { days, totals } = totalsFromMaps(
      commitMap,
      openedMap,
      mergedMap,
      range.keys,
    )
    return {
      generatedAt: new Date().toISOString(),
      source: token ? 'graphql' : 'public-events',
      days,
      totals,
      stale: true,
    }
  }
}
