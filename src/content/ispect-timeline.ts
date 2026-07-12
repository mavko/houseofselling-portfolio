import type { CaseStudyEra, RichParagraph } from '@/content/case-study-types'

export type {
  CaseStudyEra,
  CaseStudyPageMeta,
  EraBlock,
  MediaItem,
  RichParagraph,
  TextSegment,
} from '@/content/case-study-types'

export const ISPECT_PAGE = {
  eyebrow: 'Makings of iSpect',
  title: 'Rebuilding a 12-year inspection product without losing the data',
  description:
    'Design engineer case study: migrating construction inspection software off a brittle stack without losing 12 years of field knowledge.',
  subtitle:
    'Design engineer · construction software · brand → product → platform',
  date: '2024-10-03',
  meta: [
    {
      label: 'Role',
      value: 'Sole designer → design engineer',
    },
    {
      label: 'Scope',
      value: 'UI, product, front-end, migration',
    },
    {
      label: 'Domain',
      value: 'Construction inspection & PM',
    },
    {
      label: 'Status',
      value: 'Rebuild in progress · 2026',
    },
  ],
} as const

/** Scan-pack hook — two sentences max. Archive detail lives in eras below. */
export const ISPECT_FOREWORD: RichParagraph[] = [
  [
    {
      kind: 'text',
      value:
        'Looks like a redesign. The hard problem is twelve years of inspection knowledge locked in .NET, Couchbase, Sync Gateway, and native iOS — while crews still need the same field workflows tomorrow morning.',
    },
  ],
  [
    {
      kind: 'text',
      value:
        'I am rebuilding the product brain (Next.js, Expo, Supabase) so the business keeps its memory without staying trapped in the old stack.',
    },
  ],
]

export const ISPECT_ERAS: CaseStudyEra[] = [
  {
    id: 'now',
    label: 'Now',
    yearRange: '2026–',
    title: 'Field workflows stay. The brain does not.',
    featured: true,
    blocks: [
      {
        type: 'bullets',
        items: [
          'Problem — Domain knowledge lived in a brittle stack; a reskin would still fail in the field.',
          'Decision — Keep workflows; change the brain. Legacy becomes a data donor; live writes move to Supabase.',
          'Operating loop — Study → Migrate → Prove parity → Cut. Agents amplify judgment; they do not replace it.',
        ],
      },
      {
        type: 'heading',
        text: 'Stack: from donor to live path',
      },
      {
        type: 'stack-compare',
        rows: [
          {
            before: 'Vue 2.7 / Nuxt portal',
            after: 'Next.js portal',
          },
          {
            before: 'ispect-api (.NET + GraphQL)',
            after: 'Supabase + thin REST',
          },
          {
            before: 'Native iOS (Swift / Obj-C)',
            after: 'Expo / React Native',
          },
          {
            before: 'Couchbase as the brain',
            after: 'Supabase as the brain',
          },
        ],
      },
      {
        type: 'plain',
        paragraphs: [
          'Same business. Different brain — legacy becomes the data donor; live writes move to Supabase.',
        ],
      },
      {
        type: 'heading',
        text: 'Proof',
      },
      {
        type: 'bullets',
        items: [
          '12+ years of product and domain knowledge at stake — cutover cannot freeze inspections.',
          'Swedish Construction Innovation grant 2012–15 (~$180k); Innovation of the year 2014; IT Project of the year 2013.',
          'Early 2026 rebuild — proof today is architecture, parity discipline, and shipped UI direction, not post-cutover conversion numbers.',
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'video',
            src: '/ispect-landing-new.mp4',
            title: 'iSpect landing header animation (2026)',
            caption: 'Landing header direction — craft under the rebuild',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Migration path',
      },
      {
        type: 'diagram',
        variant: 'data-pipeline',
        caption:
          'Raw donor JSON is kept. Product tables are projected and gated for parity.',
      },
      {
        type: 'heading',
        text: 'Operating loop',
      },
      {
        type: 'diagram',
        variant: 'agent-loop',
        caption: 'Agents amplify judgment. They do not replace it.',
      },
    ],
  },
  {
    id: 'refactor-2023',
    label: 'Refactor',
    yearRange: '2023',
    title: 'Cut jank, less noise, more automatic UI',
    wideMediaGallery: true,
    wideGalleryAriaLabel: '2023 refactor screenshots',
    wideGalleryTrackLabel: 'Refactor screenshots',
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'Vue 2 / Vuetify 2 → Vue 2.7 + Tailwind. Vuetify stayed for complex tables but styles were stripped — effectively headless. Goal: modernize the design, reduce jank, show less information so the product feels more automatic.',
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'iSpect landing page (2023 edition)',
            href: 'https://ispect-landing-page.vercel.app/',
            external: true,
          },
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/login.png',
            alt: 'iSpect login view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/projects.png',
            alt: 'iSpect projects view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/projects-darkmode.png',
            alt: 'iSpect projects view 2023 (dark mode)',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/utilization.png',
            alt: 'iSpect utilization view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/orders.png',
            alt: 'iSpect orders view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/project-info.png',
            alt: 'iSpect project info view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/issues.png',
            alt: 'iSpect issues view 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/issues-darkmode.png',
            alt: 'iSpect issues view 2023 (dark mode)',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/share-report.png',
            alt: 'iSpect share report modal 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/project-activities.png',
            alt: 'iSpect project activity modal 2023',
            width: 1200,
            height: 800,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/2023-refactor/verdict-editor.png',
            alt: 'iSpect verdict editor view 2023',
            width: 1200,
            height: 800,
          },
        ],
      },
    ],
  },
  {
    id: 'scale-2020',
    label: 'Scale',
    yearRange: '2020–2021',
    title: 'Why iSpect exists: transparency in construction',
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'With a decade of industry statistics, the web platform lets contractors and sub-contractors see project health in real time — issue counts, average completion time, who is performing before contracts are renegotiated.',
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'iSpect landing page',
            href: 'https://ispect-landing-page.vercel.app/',
            external: true,
          },
          {
            label: 'Nominated for Innovation of the year 2013 (Swedish)',
            href: 'https://www.sbuf.se/Om-SBUF/Aretsinnovation/Nyhetsbrev11/',
            external: true,
          },
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/ispect_web.jpg',
            alt: 'iSpect web interface',
            caption: 'iSpect dashboard and landing page from 2020',
            width: 1200,
            height: 600,
          },
          {
            kind: 'image',
            srcKey:
              'bundled/craft/ispect/ispect-closeout-demo-2020-january.jpg',
            alt: 'iSpect closeout 2020',
            caption:
              'Closeout (2020 beta — later merged into the dashboard) for subcontractors to remedy assigned issues',
            width: 1200,
            height: 600,
          },
        ],
      },
      {
        type: 'heading',
        text: 'Product surfaces',
      },
      {
        type: 'media',
        items: [
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/dashboard_total_issues.png',
            alt: 'Total project issues',
            caption:
              'A completed Stockholm project — total issues across the build',
            width: 600,
            height: 400,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/dashboard_total_location.png',
            alt: 'Issues by location',
            caption: 'Areas that need the most attention',
            width: 600,
            height: 400,
          },
          {
            kind: 'embed',
            src: 'https://www.loom.com/embed/799cba8301b048d2b524b7c55505b486?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
            title: 'Loom — categories deep dive (titles in Swedish)',
            height: 400,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/dashboard_avg_time.png',
            alt: 'Average time to remedy issues',
            caption:
              'Average remedy time per sub-contractor, including self-regulation reporting',
            width: 600,
            height: 400,
          },
        ],
      },
    ],
  },
  {
    id: 'brand-origins',
    label: 'Brand',
    yearRange: '2012–',
    title: 'Identity that had to travel',
    wideMediaGallery: true,
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'Started 2012 in brand and UI; moved into implementation when craft alone was not enough. The logotype grew around the search mark and had to work on hard hats, people, and product screens — not just a marketing site.',
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/logotype_800x600.png',
            alt: 'iSpect logotype',
            caption: 'Logotype with the search mark used since the beginning',
            width: 800,
            height: 600,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/ispect_hard_hat.jpg',
            alt: 'iSpect on hard hat',
            caption:
              'Hard hats usually cannot change color — branding works within the rules',
            width: 600,
            height: 400,
          },
          {
            kind: 'image',
            srcKey: 'bundled/craft/ispect/ispect_plattform_logo.jpg',
            alt: 'iSpect platform logo application',
            width: 800,
            height: 600,
          },
        ],
      },
    ],
  },
]
