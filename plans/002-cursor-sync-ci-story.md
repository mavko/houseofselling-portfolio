# Plan 002: Align cursor report sync story with deployment

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: 001
- **Category**: dx
- **Planned at**: commit `37e93ae`, 2026-06-18

## Why this matters

`AGENTS.md` describes build-time sync, but `pnpm build` only runs `next build`. Production serves committed `src/generated/cursor-report.json` until someone manually runs `pnpm sync-cursor-report` and commits.

## Current state

- Manual script: `pnpm sync-cursor-report` (requires Firecrawl CLI + key for full scrape).
- `src/app/sitemap.ts` uses `new Date()` for `/cursor` instead of snapshot `syncedAt`.

## Steps

1. Document in README or AGENTS.md: **committed snapshot is source of truth**; refresh workflow is `pnpm sync-cursor-report` then commit JSON.
2. Update `src/app/sitemap.ts` `/cursor` entry to use `getCursorReportSnapshot().syncedAt` for `lastModified` (may require importing snapshot in sitemap — use static JSON import like `src/lib/cursor-report.ts`).
3. Optional: add GitHub Action (manual `workflow_dispatch`) that runs sync with secrets and opens PR — only if repo has Actions enabled.

## Done criteria

- Docs match actual deploy behavior.
- Sitemap `/cursor` `lastModified` reflects snapshot sync time.
- `pnpm build` exit 0.

## STOP conditions

- Cannot read `syncedAt` at sitemap build time without architectural change — report options (static import vs build script).
