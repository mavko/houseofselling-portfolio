# Plan 003: Harden Cursor profile scraper

## Status

- **Priority**: P2
- **Effort**: L
- **Risk**: MED
- **Depends on**: 001
- **Category**: tech-debt
- **Planned at**: commit `37e93ae`, 2026-06-18

## Why this matters

`scripts/sync-cursor-report.ts` depends on fragile CSS class selectors, inline style sniffing, and a global `firecrawl` CLI not declared in `package.json`. Cursor markup changes break sync silently or with opaque exit 1.

## Fix sketch

1. Pin Firecrawl as devDependency and call SDK instead of `execSync('firecrawl scrape …')`.
2. Centralize selectors in `scripts/lib/cursor-selectors.ts` with comments linking to cursor.com profile DOM.
3. On parse failure, write debug artifact to `.firecrawl/parse-failure.html` snippet.
4. Remove unused first scrape (`cursor-profile-branding.json`) if branding output is never consumed.

## Done criteria

- Sync works with `pnpm sync-cursor-report -- --skip-scrape` on committed fixture.
- Fresh scrape documented with env var name only (no secret values).
- Plan 001 tests still pass.
