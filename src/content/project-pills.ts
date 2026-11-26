import type { GlassAvatarVariant } from '@/components/GlassAvatar'

export interface ProjectPill {
  url: string
  avatar: GlassAvatarVariant
  label: string
}

export const PROJECT_PILLS: readonly ProjectPill[] = [
  { url: 'https://ispect.se', avatar: 'sky', label: 'ispect.se' },
  {
    url: 'https://www.besiktningsman.se',
    avatar: 'bm',
    label: 'besiktningsman.se',
  },
  { url: 'https://icontrolapp.se', avatar: 'about', label: 'icontrolapp.se' },
  {
    url: 'https://www.dinfastighetsforvaltare.se/',
    avatar: 'dff',
    label: 'dinfastighetsforvaltare.se',
  },
]
