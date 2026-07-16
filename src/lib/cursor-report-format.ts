export function formatChartRange(
  points: { date: string }[],
  /** ISO date (YYYY-MM-DD) to treat as “Today” — e.g. snapshot sync day. Avoids wall-clock `new Date()`. */
  asOfDate?: string,
) {
  if (points.length === 0) return { start: '', end: '' }

  const start = points[0]?.date ?? ''
  const end = points[points.length - 1]?.date ?? ''
  const format = (iso: string) => {
    const d = new Date(`${iso}T00:00:00Z`)
    if (Number.isNaN(d.getTime())) return iso
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })
  }

  const endLabel = asOfDate && end === asOfDate.slice(0, 10) ? 'Today' : format(end)

  return { start: format(start), end: endLabel }
}

export function formatSyncedDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
