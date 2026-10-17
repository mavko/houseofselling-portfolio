# Plan 001: Add typecheck script and sync parser fixtures

> **Executor instructions**: Follow step by step. Run every verification command before moving on. STOP if in-scope files changed since `37e93ae` without reconciling excerpts.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `37e93ae`, 2026-06-18

## Why this matters

The cursor report sync script (`scripts/sync-cursor-report.ts`) parses live HTML with cheerio. There is no `typecheck` or `test` script in `package.json`, so parser regressions (e.g. chart dates spanning 2001–2026) ship until someone manually opens `/cursor`.

## Current state

- `package.json` scripts: `lint`, `format`, `build` — no `typecheck`, no `test`.
- `tsconfig.json` has `"strict": true` and `"noEmit": true`.
- Sync output: `src/generated/cursor-report.json` consumed via static import in `src/lib/cursor-report.ts`.
- Parser entry: `parseSnapshot(html)` in `scripts/sync-cursor-report.ts`.

## Commands you will need

| Purpose        | Command                                    | Expected            |
| -------------- | ------------------------------------------ | ------------------- |
| Typecheck      | `pnpm typecheck`                           | exit 0              |
| Lint           | `pnpm lint`                                | exit 0              |
| Build          | `pnpm build`                               | exit 0              |
| Sync (fixture) | `pnpm sync-cursor-report -- --skip-scrape` | writes JSON, exit 0 |

## Steps

1. Add to `package.json` scripts: `"typecheck": "tsc --noEmit"`.
2. Add devDependency `vitest` (or use Node built-in test runner if preferred — pick one, document in plan completion).
3. Export `parseSnapshot` (and helpers if needed) from `scripts/sync-cursor-report.ts` **or** move parser to `scripts/lib/parse-cursor-profile.ts` and import from the CLI script.
4. Commit fixture HTML under `scripts/__fixtures__/cursor-profile.html` copied from `.firecrawl/cursor-profile-scrape.json` `html` field (truncate only if file size is problematic; prefer full fixture).
5. Add tests asserting:
   - `tokensSeries[0].date` and last date are within ~31 days of each other and end near today.
   - `activityHeatmap.cells.length === 159`.
   - `stats.agents > 0`.
   - No fabricated model fallback when HTML contains models section.
6. Add `"test": "vitest run"` (or equivalent) to `package.json`.

## In scope

- `package.json`, `scripts/sync-cursor-report.ts`, new `scripts/__fixtures__/`, new test file(s).

## Out of scope

- Changing chart UI copy (plan 004).
- CI wiring (plan 002).

## Done criteria

- `pnpm typecheck` exits 0.
- `pnpm test` exits 0 with fixture tests for parser.
- `pnpm build` exits 0.

## STOP conditions

- Fixture HTML missing from repo and cannot be generated without Firecrawl credentials — report back; do not commit partial tests.
