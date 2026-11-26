export interface GithubActivityDay {
  date: string
  contributions: number
  prsOpened: number
  prsMerged: number
}

export interface GithubActivityTotals {
  contributions: number
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
  contributions: Map<string, number>,
  prsOpened: Map<string, number>,
  prsMerged: Map<string, number>,
  keys: string[],
): { days: GithubActivityDay[]; totals: GithubActivityTotals } {
  const days: GithubActivityDay[] = keys.map((date) => ({
    date,
    contributions: contributions.get(date) ?? 0,
    prsOpened: prsOpened.get(date) ?? 0,
    prsMerged: prsMerged.get(date) ?? 0,
  }))
  const totals: GithubActivityTotals = {
    contributions: days.reduce((sum, day) => sum + day.contributions, 0),
    prsOpened: days.reduce((sum, day) => sum + day.prsOpened, 0),
    prsMerged: days.reduce((sum, day) => sum + day.prsMerged, 0),
  }
  return { days, totals }
}

let lastGood: GithubActivityResponse | null = null

const GITHUB_LOGIN = 'mavko'

function aliasKey(date: string): string {
  return date.replace(/-/g, '')
}

function readIssueCount(data: Record<string, unknown>, alias: string): number {
  const node = data[alias]
  return isRecord(node) && typeof node.issueCount === 'number'
    ? node.issueCount
    : 0
}

const CALENDAR_QUERY = `query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar { weeks { contributionDays { date contributionCount } } }
    }
  }
}`

/** GitHub times out (502) on ~60 aliased searches in one query; 10 days (20 searches) per request is fast. */
const DAYS_PER_SEARCH_REQUEST = 10

function buildPrSearchQuery(keys: string[]): string {
  const searches = keys.flatMap((key) => {
    const alias = aliasKey(key)
    return [
      `o_${alias}: search(type: ISSUE, query: "author:${GITHUB_LOGIN} is:pr created:${key}", first: 0) { issueCount }`,
      `m_${alias}: search(type: ISSUE, query: "author:${GITHUB_LOGIN} is:pr is:merged merged:${key}", first: 0) { issueCount }`,
    ]
  })
  return `query {\n  ${searches.join('\n  ')}\n}`
}

async function postGraphQL({
  token,
  query,
  variables,
}: {
  token: string
  query: string
  variables?: Record<string, string>
}): Promise<Record<string, unknown>> {
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
  if (!isRecord(json) || !isRecord(json.data)) {
    throw new Error('GitHub GraphQL missing data')
  }
  return json.data
}

function readCalendar(
  data: Record<string, unknown>,
  contributionMap: Map<string, number>,
): void {
  const user = isRecord(data.user) ? data.user : null
  const collection =
    user && isRecord(user.contributionsCollection)
      ? user.contributionsCollection
      : null
  const calendar =
    collection && isRecord(collection.contributionCalendar)
      ? collection.contributionCalendar
      : null
  const weeks = calendar && isUnknownArray(calendar.weeks) ? calendar.weeks : []
  for (const week of weeks) {
    const days =
      isRecord(week) && isUnknownArray(week.contributionDays)
        ? week.contributionDays
        : []
    for (const day of days) {
      if (
        isRecord(day) &&
        typeof day.date === 'string' &&
        typeof day.contributionCount === 'number' &&
        contributionMap.has(day.date)
      ) {
        contributionMap.set(day.date, day.contributionCount)
      }
    }
  }
}

async function fetchGraphQL(token: string): Promise<GithubActivityResponse> {
  const range = buildDayRange()
  const contributionMap = emptyCounts(range.keys)
  const openedMap = emptyCounts(range.keys)
  const mergedMap = emptyCounts(range.keys)

  const chunks: string[][] = []
  for (let i = 0; i < range.keys.length; i += DAYS_PER_SEARCH_REQUEST) {
    chunks.push(range.keys.slice(i, i + DAYS_PER_SEARCH_REQUEST))
  }

  const [calendarData, ...searchData] = await Promise.all([
    postGraphQL({
      token,
      query: CALENDAR_QUERY,
      variables: {
        login: GITHUB_LOGIN,
        from: range.start.toISOString(),
        to: range.today.toISOString(),
      },
    }),
    ...chunks.map((chunk) =>
      postGraphQL({ token, query: buildPrSearchQuery(chunk) }),
    ),
  ])

  readCalendar(calendarData, contributionMap)
  for (const data of searchData) {
    for (const key of range.keys) {
      const alias = aliasKey(key)
      if (`o_${alias}` in data) {
        openedMap.set(key, readIssueCount(data, `o_${alias}`))
        mergedMap.set(key, readIssueCount(data, `m_${alias}`))
      }
    }
  }

  const { days, totals } = totalsFromMaps(
    contributionMap,
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
      const commitsArr = isUnknownArray(payload?.contributions)
        ? payload.contributions
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
