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
        'Contractors know they should document the day: photos, crew, weather, delays. By 5pm in the truck, it lands in the camera roll, a text thread, or a notebook that never becomes a report.',
    },
  ],
  [
    {
      kind: 'text',
      value:
        'SiteSnap gets that log done in about sixty seconds. Snap photos, add a voice note, tag what matters, send a branded PDF or share link.',
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
          'Enterprise tools are overkill for a 1–15 person crew. Thin alternatives are flaky or opaque. SiteSnap does not do punch lists or full project management. It does the construction daily log.',
          'Pricing stayed simple. Free on a single job. Pro at $19.99/mo for unlimited projects, seats, and branded PDFs. No fake social proof. Waitlist until the App Store goes live.',
        ],
      },
      {
        type: 'media',
        items: [
          {
            kind: 'video',
            src: '/sitesnap-landing.mp4',
            title: 'SiteSnap product overview',
            caption: 'Photos and notes become a client-ready report',
          },
        ],
      },
      {
        type: 'bullets',
        items: [
          'Built for Mike the GC: iPhone in the truck, not a “tech person”',
          'The fear underneath it: no proof when a dispute shows up',
          'Free + Pro only. The PRD had four tiers; we cut them.',
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
          'One thumb. Dirty screen. Offline before pretty. Rapid shutter, then compose (photos, note, details), then weather / crew / delays / safety tags, then send.',
          'Every share link a client opens is also a demo. Free exports stay watermarked. Pro ships branded PDFs.',
        ],
      },
      {
        type: 'bullets',
        items: [
          'Offline queue uploads photos before the log write, with clear terminal errors',
          'Voice notes transcribe when the network is there; the log still works when it is not',
          'Public viewer and sample report so prospects see the output without installing',
        ],
      },
      {
        type: 'links',
        links: [
          {
            label: 'Sample report',
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
          'sitesnap.cc got the same care as the app: clean marketing layout, blueprint phone mocks, staggered hero. If the site looks half-baked, nobody trusts the field tool.',
          'Stack is boring on purpose. Expo on the phone, Next on the web, Supabase for auth, media, and RLS. MVP product work is done. Left: App Store ops (IAP, TestFlight sign-off).',
        ],
      },
      {
        type: 'bullets',
        items: [
          'Messy field input still has to produce a report you’d send a client',
          'A share link beats “download our app” as the first impression',
          'Waitlist is live. Store wiring is in progress. No invented traction numbers.',
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
