# Improvement plans

Generated at commit `37e93ae` on 2026-06-18. Scope: cursor report feature + portfolio DX gaps surfaced by `/improve`.

## Recommended order

| Plan                                        | Title                                      | Priority | Effort | Depends on | Status |
| ------------------------------------------- | ------------------------------------------ | -------- | ------ | ---------- | ------ |
| [001](./001-typecheck-and-sync-fixtures.md) | Add typecheck + sync parser fixtures       | P1       | S      | none       | TODO   |
| [002](./002-cursor-sync-ci-story.md)        | Align deploy sync story with docs          | P2       | S      | 001        | TODO   |
| [003](./003-scraper-resilience.md)          | Harden Cursor profile scraper              | P2       | L      | 001        | TODO   |
| [004](./004-chart-semantics.md)             | Clarify relative chart data vs live counts | P3       | M      | 001        | TODO   |

## Dependency graph

```
001 ─┬─► 002
     ├─► 003
     └─► 004
```

## Considered and rejected

- **Remove shadcn scaffold entirely** — `Separator` now in use; keep config for incremental adoption.
- **Wire `prebuild` sync unconditionally** — risks blocking Vercel deploy without Firecrawl key; plan 002 covers explicit CI/manual story instead.
