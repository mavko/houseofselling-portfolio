import type { CaseStudyEra, RichParagraph } from '@/content/case-study-types'

export type {
  CaseStudyEra,
  CaseStudyPageMeta,
  EraBlock,
  MediaItem,
  RichParagraph,
  TextSegment,
} from '@/content/case-study-types'

export const SITESNAP_PAGE = {
  title: 'A 60-second construction daily log for the truck at 5pm',
  description:
    'Photo-first daily logs for small crews: capture on site, send a client-ready report before you leave the curb.',
  date: '2026-07-27',
  eyebrow: 'SiteSnap',
  subtitle: 'iPhone daily logs built for the end of the workday, not the office.',
  meta: [
    {
      label: 'Role',
      value: 'designer who builds',
    },
    {
      label: 'Scope',
      value: 'product · marketing · field UX',
    },
    {
      label: 'Domain',
      value: 'construction daily logs',
    },
    {
      label: 'Status',
      value: 'product ready · App Store pending',
    },
  ],
} as const

export const SITESNAP_FOREWORD: RichParagraph[] = [
  [
    {
      kind: 'text',
      value:
        'Contractors know they should document the day. By 5pm in the truck, it lands in the camera roll or a text thread that never becomes a report.',
    },
  ],
  [
    {
      kind: 'text',
      value:
        'I built SiteSnap solo — product, design, and engineering. Snap photos, add a voice note, tag what matters, send a branded PDF or share link in about sixty seconds.',
    },
  ],
]

export const SITESNAP_ERAS: CaseStudyEra[] = [
  {
    id: 'product-bet',
    label: 'Bet',
    yearRange: '2026',
    title: 'One job, done hard',
    titleAction: {
      label: 'sitesnap.cc',
      href: 'https://www.sitesnap.cc',
      external: true,
    },
    featured: true,
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'Not punch lists. Not full PM. Just the construction daily log for a 1–15 person crew. Free on one job; Pro at $19.99/mo. Waitlist until the App Store goes live — no invented traction.',
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'video',
            src: '/sitesnap-landing.mp4',
            title: 'SiteSnap product overview',
            caption: 'Marketing site + product walkthrough — photos become a client-ready report',
          },
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'SiteSnap marketing site',
            href: 'https://www.sitesnap.cc',
            external: true,
          },
          {
            label: 'Join the waitlist',
            href: 'https://tally.so/r/J9ZL8X',
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: 'field-craft',
    label: 'Field',
    yearRange: 'Craft',
    title: 'Designed for muddy boots',
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'One thumb. Dirty screen. Offline before pretty. Capture → compose → tag weather/crew/delays → send. Every share link is also a demo — the sample report is the craft proof until App Store screens ship.',
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'Sample report (live output)',
            href: 'https://www.sitesnap.cc/sample-report',
            external: true,
          },
          {
            label: 'What is a construction daily log?',
            href: 'https://www.sitesnap.cc/guides/construction-daily-log',
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: 'brand-ship',
    label: 'Ship',
    yearRange: 'Launch',
    title: 'Marketing site first, App Store last',
    blocks: [
      {
        type: 'plain',
        paragraphs: [
          'sitesnap.cc got the same care as the app. Stack is boring on purpose: Expo, Next, Supabase. MVP product work is done; left is App Store ops.',
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'sitesnap.cc',
            href: 'https://www.sitesnap.cc',
            external: true,
          },
          {
            label: 'Pricing',
            href: 'https://www.sitesnap.cc/pricing',
            external: true,
          },
        ],
      },
    ],
  },
]
