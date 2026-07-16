'use client'

import { useRouter } from 'next/navigation'
import {
  Code2,
  FileText,
  FolderKanban,
  Globe,
  Home,
  MousePointer2,
  Sparkles,
  User,
} from 'lucide-react'

import FloatingActionMenu from '@/components/ui/floating-action-menu'
import { cn } from '@/lib/utils'

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

type SiteFloatingMenuProps = {
  /** `hero` = inline above page copy; `corner` = fixed bottom-right. */
  placement?: 'hero' | 'corner'
  className?: string
}

/**
 * Site navigation via FAB — replaces the top navbar.
 */
export function SiteFloatingMenu({
  placement = 'corner',
  className,
}: SiteFloatingMenuProps) {
  const router = useRouter()

  return (
    <FloatingActionMenu
      position={placement === 'corner' ? 'corner' : 'anchor'}
      menuPlacement={placement === 'hero' ? 'down' : 'up'}
      className={cn(
        'font-display text-[13px] font-medium tracking-[-0.2px] font-stretch-125%',
        className,
      )}
      options={[
        {
          label: 'Home',
          Icon: <Home className="h-4 w-4" />,
          onClick: () => router.push('/'),
        },
        {
          label: 'About',
          Icon: <User className="h-4 w-4" />,
          onClick: () => router.push('/about'),
        },
        {
          label: 'Visuals',
          Icon: <Sparkles className="h-4 w-4" />,
          onClick: () => router.push('/visuals'),
        },
        {
          label: 'Projects',
          Icon: <FolderKanban className="h-4 w-4" />,
          onClick: () => router.push('/projects'),
        },
        {
          label: 'Cursor',
          Icon: <MousePointer2 className="h-4 w-4" />,
          onClick: () => router.push('/cursor'),
        },
        {
          label: 'Github',
          Icon: <Code2 className="h-4 w-4" />,
          onClick: () => openExternal('https://github.com/mavko'),
        },
        {
          label: 'Cosmos',
          Icon: <Globe className="h-4 w-4" />,
          onClick: () => openExternal('https://www.cosmos.so/houseofselling'),
        },
        {
          label: 'CV (PDF)',
          Icon: <FileText className="h-4 w-4" />,
          onClick: () => {
            const a = document.createElement('a')
            a.href = '/cv.pdf'
            a.download = 'cv.pdf'
            a.click()
          },
        },
      ]}
    />
  )
}
