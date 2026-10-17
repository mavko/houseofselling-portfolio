# Plan 004: Clarify relative chart data vs live counts

## Status

- **Priority**: P3
- **Effort**: M
- **Risk**: MED
- **Depends on**: 001
- **Category**: correctness
- **Planned at**: commit `37e93ae`, 2026-06-18

## Why this matters

Token and agent time series are derived from SVG geometry (bar heights, path Y coordinates), not numeric API data. Agent chart tooltips show values like "local 38" that are percentage heights, not agent counts. Token subtitle shows real total (`3.2B tokens`) but the line chart is relative activity shape.

## Fix sketch (pick one with maintainer)

**Option A — Honest UI**: Rename sections to "Activity (relative)", remove misleading tooltips, add footnote on charts.

**Option B — Better scrape**: Investigate whether Cursor embeds JSON in page; extract real series if available.

## Done criteria

- No UI copy implies daily token/agent counts unless data supports it.
- `pnpm build` exit 0.
