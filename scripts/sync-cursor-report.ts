/**
 * Sync public Cursor profile stats into src/generated/cursor-report.json.
 * Requires FIRECRAWL_API_KEY in .env or .env.local (or firecrawl CLI auth).
 *
 * Usage: pnpm sync-cursor-report
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

import * as cheerio from 'cheerio'
import { config } from 'dotenv'

import type {
  CursorReportSnapshot,
  HeatmapLevel,
} from '../src/content/cursor-report-types'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const PROFILE_URL = 'https://cursor.com/@sebastian'
const FIRECRAWL_DIR = join(root, '.firecrawl')
const SCRAPE_PATH = join(FIRECRAWL_DIR, 'cursor-profile-scrape.json')
const OUTPUT_PATH = join(root, 'src/generated/cursor-report.json')

config({ path: join(root, '.env.local') })
config({ path: join(root, '.env') })

function runFirecrawlScrapes() {
  mkdirSync(FIRECRAWL_DIR, { recursive: true })
  console.log('Scraping Cursor profile via Firecrawl…')
  execSync(
    `firecrawl scrape "${PROFILE_URL}" --format branding,images -o "${join(FIRECRAWL_DIR, 'cursor-profile-branding.json')}" --pretty`,
    { stdio: 'inherit', cwd: root },
  )
  execSync(
    `firecrawl scrape "${PROFILE_URL}" --format markdown,html -o "${SCRAPE_PATH}" --pretty`,
    { stdio: 'inherit', cwd: root },
  )
}

function loadHtml(): string {
  const raw = readFileSync(SCRAPE_PATH, 'utf8')
  if (!raw) {
    throw new Error('Missing scrape output')
  }
  const payload = JSON.parse(raw) as {
    html?: string
  }
  if (!payload.html) {
    throw new Error('Scrape JSON missing html field')
  }
  return payload.html
}

function parseDurationDays(raw: string): number {
  const match = raw.match(/(\d+)/)
  return match ? Number.parseInt(match[1], 10) : 0
}

function parseJoinedDays(text: string): number {
  const match = text.match(/Joined\s+(\d+)/i)
  return match ? Number.parseInt(match[1], 10) : 0
}

function bgStyleToLevel(style: string): HeatmapLevel {
  if (
    style.includes('var(--bg-tertiary)') ||
    style.includes('background-color:transparent')
  ) {
    return 0
  }
  if (style.includes('var(--color-theme-accent)') && !style.includes('color-mix')) {
    return 4
  }
  const pctMatch = style.match(/var\(--color-theme-accent\)\s+(\d+)%/)
  if (!pctMatch) return 1
  const pct = Number.parseInt(pctMatch[1], 10)
  if (pct >= 76) return 4
  if (pct >= 58) return 3
  if (pct >= 40) return 2
  return 1
}

function parseSvgPathPoints(pathD: string): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []
  const tokens = pathD.trim().split(/\s+/)
  let i = 0
  while (i < tokens.length) {
    const cmd = tokens[i]
    if (cmd === 'M' || cmd === 'L') {
      const x = Number.parseFloat(tokens[i + 1])
      const y = Number.parseFloat(tokens[i + 2])
      if (!Number.isNaN(x) && !Number.isNaN(y)) points.push({ x, y })
      i += 3
    } else if (cmd === 'Z' || cmd === 'z') {
      i += 1
    } else {
      i += 1
    }
  }
  return points
}

function buildDateRange(count: number): string[] {
  return Array.from({ length: count }, (_, idx) => {
    const d = new Date()
    d.setDate(d.getDate() - (count - 1 - idx))
    return d.toISOString().slice(0, 10)
  })
}

function parseProfile($: cheerio.CheerioAPI): CursorReportSnapshot['profile'] {
  const displayName =
    $('h1').first().text().trim() || 'Sebastian Selling'
  const handle = 'sebastian'
  const joinedText = $('body').text()
  const avatarUrl =
    $('img[alt="Sebastian Selling"]').attr('src') ||
    $('img').first().attr('src') ||
    undefined

  return {
    handle,
    displayName,
    joinedDaysAgo: parseJoinedDays(joinedText),
    cursorUrl: PROFILE_URL,
    avatarUrl,
  }
}

function parseStats($: cheerio.CheerioAPI): CursorReportSnapshot['stats'] {
  const stats: Record<string, string> = {}
  $('span.text-sm.font-semibold.text-tertiary').each((_, el) => {
    const label = $(el).text().trim()
    const value = $(el).next('span').text().trim()
    if (label && value) stats[label] = value
  })

  const bodyText = $('body').text()
  const localMatch = bodyText.match(/Local\s*\((\d+)\)/)
  const cloudMatch = bodyText.match(/Cloud\s*\((\d+)\)/)

  return {
    agents: Number.parseInt(stats.Agents?.replace(/\D/g, '') || '0', 10),
    longestAgentDays: parseDurationDays(stats['Longest Agent'] || '0'),
    longestStreakDays: parseDurationDays(stats['Longest Streak'] || '0'),
    currentStreakDays: parseDurationDays(stats['Current Streak'] || '0'),
    totalTokens: stats.Tokens?.includes('tokens')
      ? stats.Tokens
      : `${$('p:contains("tokens")').last().text().trim() || '0 tokens'}`,
    localAgents: localMatch ? Number.parseInt(localMatch[1], 10) : undefined,
    cloudAgents: cloudMatch ? Number.parseInt(cloudMatch[1], 10) : undefined,
  }
}

function parseHeatmap($: cheerio.CheerioAPI): CursorReportSnapshot['activityHeatmap'] {
  const months: string[] = []
  $('span.select-none.text-xs.leading-none.text-tertiary').each((_, el) => {
    const t = $(el).text().trim()
    if (t.length === 1) months.push(t)
  })

  const weekdays = ['M', 'W', 'F']
  const cellEls: { level: HeatmapLevel }[] = []

  $('div[style*="width:10px;height:10px"]').each((_, el) => {
    const style = $(el).attr('style') || ''
    if (!style.includes('background-color')) return
    cellEls.push({ level: bgStyleToLevel(style) })
  })

  // Grid is 3 weekday rows × ~53 week columns; filter to data cells only
  const cols = 53
  const rows = 3
  const expected = cols * rows
  const trimmed = cellEls.slice(0, expected)

  const end = new Date()
  const start = new Date(end)
  start.setDate(start.getDate() - (expected - 1))

  const cells = trimmed.map((cell, index) => {
    const d = new Date(start)
    d.setDate(start.getDate() + index)
    return { date: d.toISOString().slice(0, 10), level: cell.level }
  })

  return {
    months: months.length ? months : ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    weekdays,
    cells,
  }
}

function parseTokensSeries(
  html: string,
): CursorReportSnapshot['tokensSeries'] {
  const marker = 'aria-label="Line chart showing tokens used per day"'
  const sectionStart = html.indexOf(marker)
  if (sectionStart === -1) return []

  const section = html.slice(sectionStart, sectionStart + 8000)
  const pathMatch = section.match(
    /<path d="([^"]+)" fill="none" stroke="var\(--color-theme-accent\)"/,
  )
  if (!pathMatch) return []

  const points = parseSvgPathPoints(pathMatch[1]).filter((p) => p.x <= 99)
  const dates = buildDateRange(points.length)

  return points.map((p, i) => ({
    date: dates[i] ?? dates[dates.length - 1] ?? new Date().toISOString().slice(0, 10),
    value: Math.max(0, Math.round(100 - p.y)),
  }))
}

function parseAgentsSeries(
  html: string,
): CursorReportSnapshot['agentsSeries'] {
  const marker =
    'aria-label="Stacked bar chart showing local and cloud agents per day"'
  const sectionStart = html.indexOf(marker)
  if (sectionStart === -1) return []

  const section = html.slice(sectionStart, sectionStart + 120_000)
  const $section = cheerio.load(section)

  const columns: { local: number; cloud: number }[] = []
  $section('.group.relative.flex.h-full.min-w-0.flex-1.flex-col.justify-end').each(
    (_, col) => {
      let local = 0
      let cloud = 0
      $section(col)
        .find('div[style*="height:"]')
        .each((__, bar) => {
          const style = $section(bar).attr('style') || ''
          const heightMatch = style.match(/height:([\d.]+)%/)
          if (!heightMatch) return
          const h = Number.parseFloat(heightMatch[1])
          if (style.includes('oklab') || style.includes('34%')) {
            local += h
          } else if (
            style.includes('var(--color-theme-accent)') &&
            !style.includes('color-mix')
          ) {
            cloud += h
          } else if (style.includes('var(--bg-tertiary)')) {
            // empty day
          }
        })
      columns.push({ local: Math.round(local), cloud: Math.round(cloud) })
    },
  )

  const dates = buildDateRange(columns.length)

  return columns.map((col, i) => ({
    date: dates[i] ?? dates[dates.length - 1] ?? new Date().toISOString().slice(0, 10),
    local: col.local,
    cloud: col.cloud,
  }))
}

function parseModels($: cheerio.CheerioAPI): CursorReportSnapshot['models'] {
  const models: CursorReportSnapshot['models'] = []
  const section = $('section').filter((_, el) => {
    return $(el).text().includes('Models')
  }).first()

  section.find('p.truncate.text-lg.font-medium').each((i, el) => {
    const name = $(el).attr('title') || $(el).text().trim()
    if (name) {
      models.push({ rank: i + 1, name })
    }
  })

  if (models.length === 0) {
    console.warn('Warning: no models parsed from profile HTML')
  }

  return models
}

function parseSnapshot(html: string): CursorReportSnapshot {
  const $ = cheerio.load(html)

  const snapshot: CursorReportSnapshot = {
    syncedAt: new Date().toISOString(),
    profile: parseProfile($),
    stats: parseStats($),
    activityHeatmap: parseHeatmap($),
    tokensSeries: parseTokensSeries(html),
    agentsSeries: parseAgentsSeries(html),
    models: parseModels($),
  }

  return snapshot
}

function validate(snapshot: CursorReportSnapshot) {
  const errors: string[] = []
  if (!snapshot.stats.agents) errors.push('Missing agents stat')
  if (!snapshot.tokensSeries.length) errors.push('Missing tokens time series')
  if (!snapshot.agentsSeries.length) errors.push('Missing agents time series')
  if (!snapshot.activityHeatmap.cells.length) errors.push('Missing heatmap cells')
  if (!snapshot.models.length) errors.push('Missing models list')

  if (errors.length) {
    console.error('Validation failed:\n', errors.map((e) => `  - ${e}`).join('\n'))
    process.exit(1)
  }
}

function main() {
  const skipScrape = process.argv.includes('--skip-scrape')
  if (!skipScrape) {
    runFirecrawlScrapes()
  }

  const html = loadHtml()
  const snapshot = parseSnapshot(html)
  validate(snapshot)

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${OUTPUT_PATH}`)
  console.log(
    `  agents: ${snapshot.stats.agents}, tokens points: ${snapshot.tokensSeries.length}, heatmap: ${snapshot.activityHeatmap.cells.length} cells`,
  )
}

main()
