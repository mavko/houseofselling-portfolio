export type CursorReportNarrativeSection = {
  id: string
  title: string
  body?: string
  items?: string[]
}

export const CURSOR_REPORT_NARRATIVE: CursorReportNarrativeSection[] = [
  {
    id: 'one-liner',
    title: 'Design engineer, AI-native',
    body: 'Founder-operator who ships full product surfaces — web and native — with strong taste, systems thinking, and agent-augmented execution. Not specs handoff: own the loop from positioning to deploy.',
  },
  {
    id: 'building',
    title: 'What I build',
    body: 'Primary focus is iSPECT — a massive migration and refactor from legacy iOS/iPad inspection software into a modern Expo monorepo. Ongoing work: field workflows, defect taxonomy and editor, orders, multi-tenant workspaces, and production parity with the iPad app in the field.',
    items: [
      'Heredium — Swedish BRF screening and underwriting (PLG). Side project; much lower activity. Pulls building-risk signal from iSPECT when available.',
      'minibrf.se — Lightweight BRF tooling. Side project; much lower activity.',
    ],
  },
  {
    id: 'breadth',
    title: 'Breadth',
    items: [
      'Product and GTM — vision, ICP, marketing copy, i18n, PLG billing',
      'Web — Next.js App Router, shadcn, motion microinteractions, dashboard and marketing',
      'Backend — Supabase RLS, migrations, Realtime, pg_cron workers; minimal third-party surface',
      'AI and data — Firecrawl pipelines, structured LLM extraction, credit-metered async jobs',
      'Native mobile — Expo Router, iPad field UI, legacy iOS parity, HIG review',
      'Design systems — tokens, concentric radius, reduced-motion, in-code systems not Figma handoff',
      'Agent ops — skills library, AGENTS.md memory, plan → implement → review → ship',
    ],
  },
  {
    id: 'depth',
    title: 'Depth',
    items: [
      'Design engineering as craft — concentric radius, tabular nums, staggered motion, no transition: all',
      'Complex workflow UX — multi-pane workbenches, progressive disclosure, column layouts, export paths',
      'AI-native building — structured agent pipelines, durable workspace memory, production velocity',
      'Architectural judgment — Supabase-first, lock down RPCs, Realtime over fake loading steps',
      'Domain depth — Swedish BRF underwriting, inspection defect taxonomy, multi-tenant workspaces',
    ],
  },
  {
    id: 'how',
    title: 'How I work',
    items: [
      'Plan-first, execute fully — scoped todos, build fixes before ship',
      'High bar — design review and code review on the same diff',
      'Own the narrative — product vision and copy, not just components',
      'Expert-to-expert — tradeoffs over ceremony',
    ],
  },
]
