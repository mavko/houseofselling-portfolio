'use client'

import { LiquidMetal } from '@paper-design/shaders-react'
import { useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'

export type GlassAvatarVariant =
  | 'ispect'
  | 'bm'
  | 'dff'
  | 'about'
  | 'visuals'
  | 'projects'
  | 'cursor'
  | 'github'
  | 'cosmos'
  | 'cv'
  | 'x'

const DISPLAY_PX = 18
/** Render larger than display for sharper downscale. */
const SHADER_PX = 40
const MAX_PIXELS = 8_000
const SPEED = 0.35

type Theme = {
  colorBack: string
  colorTint: string
  shiftRed: number
  shiftBlue: number
  border: string
}

function chromeBorder(a: string, b: string, c: string, d: string) {
  return `conic-gradient(from 0deg, ${a}, ${b}, ${c}, ${d}, ${a})`
}

const THEMES: Record<GlassAvatarVariant, Theme> = {
  ispect: {
    colorBack: '#0a0a0a',
    colorTint: '#ffffff',
    shiftRed: 0.15,
    shiftBlue: 0.2,
    border: chromeBorder('#ffffff', '#a1a1aa', '#fafafa', '#3f3f46'),
  },
  bm: {
    colorBack: '#0B1F4A',
    colorTint: '#3B82F6',
    shiftRed: -0.1,
    shiftBlue: 0.45,
    border: chromeBorder('#93C5FD', '#1D4ED8', '#3B82F6', '#0B1F4A'),
  },
  dff: {
    colorBack: '#3F0A0A',
    colorTint: '#EF4444',
    shiftRed: 0.45,
    shiftBlue: -0.1,
    border: chromeBorder('#FCA5A5', '#B91C1C', '#EF4444', '#3F0A0A'),
  },
  about: {
    colorBack: '#2E1065',
    colorTint: '#A78BFA',
    shiftRed: 0.2,
    shiftBlue: 0.35,
    border: chromeBorder('#DDD6FE', '#6D28D9', '#A78BFA', '#2E1065'),
  },
  visuals: {
    colorBack: '#451A03',
    colorTint: '#F59E0B',
    shiftRed: 0.35,
    shiftBlue: -0.05,
    border: chromeBorder('#FDE68A', '#B45309', '#F59E0B', '#451A03'),
  },
  projects: {
    colorBack: '#022C22',
    colorTint: '#34D399',
    shiftRed: -0.05,
    shiftBlue: 0.15,
    border: chromeBorder('#A7F3D0', '#047857', '#34D399', '#022C22'),
  },
  /**
   * Light graphite + white chrome for masked logos.
   * No near-black stops — darkest stop is mid-grey so marks never sink into the pill.
   */
  cursor: {
    colorBack: '#8b8b92',
    colorTint: '#f4f4f5',
    shiftRed: 0.04,
    shiftBlue: 0.05,
    border: chromeBorder('#fafafa', '#a1a1aa', '#e4e4e7', '#8b8b92'),
  },
  github: {
    colorBack: '#8b8b92',
    colorTint: '#f4f4f5',
    shiftRed: 0.04,
    shiftBlue: 0.05,
    border: chromeBorder('#fafafa', '#a1a1aa', '#e4e4e7', '#8b8b92'),
  },
  cosmos: {
    colorBack: '#8b8b92',
    colorTint: '#f4f4f5',
    shiftRed: 0.04,
    shiftBlue: 0.05,
    border: chromeBorder('#fafafa', '#a1a1aa', '#e4e4e7', '#8b8b92'),
  },
  cv: {
    colorBack: '#1C1917',
    colorTint: '#E7E5E4',
    shiftRed: 0.12,
    shiftBlue: 0.1,
    border: chromeBorder('#FAFAF9', '#A8A29E', '#E7E5E4', '#1C1917'),
  },
  x: {
    colorBack: '#8b8b92',
    colorTint: '#f4f4f5',
    shiftRed: 0.04,
    shiftBlue: 0.05,
    border: chromeBorder('#fafafa', '#a1a1aa', '#e4e4e7', '#8b8b92'),
  },
}

/** Conic chrome ramp for pill border hover (matches LiquidMetal tints). */
export const CHROME_BORDER_GRADIENT: Record<GlassAvatarVariant, string> =
  Object.fromEntries(
    (Object.keys(THEMES) as GlassAvatarVariant[]).map((key) => [
      key,
      THEMES[key].border,
    ]),
  ) as Record<GlassAvatarVariant, string>

type GlassAvatarProps = {
  variant: GlassAvatarVariant
  className?: string
}

function svgMaskUrl(inner: string, evenOdd = false) {
  const rule = evenOdd ? " fill-rule='evenodd'" : ''
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'${rule}>${inner}</svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/** Official brand marks — CSS-masked over LiquidMetal chrome (same treatment as X). */
const LOGO_MASKS: Partial<Record<GlassAvatarVariant, string>> = {
  // X / Twitter
  x: svgMaskUrl(
    "<path fill='black' d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>",
  ),
  // GitHub Octocat (Simple Icons)
  github: svgMaskUrl(
    "<path fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/>",
  ),
  // Cursor (Simple Icons) — evenodd for the cutout facet
  cursor: svgMaskUrl(
    "<path fill='black' d='M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23'/>",
    true,
  ),
  // Cosmos.so — six dots in a ring (from apple-touch mark)
  cosmos: svgMaskUrl(
    [
      "<circle cx='12' cy='4.8' r='2.35' fill='black'/>",
      "<circle cx='18.24' cy='8.4' r='2.35' fill='black'/>",
      "<circle cx='18.24' cy='15.6' r='2.35' fill='black'/>",
      "<circle cx='12' cy='19.2' r='2.35' fill='black'/>",
      "<circle cx='5.76' cy='15.6' r='2.35' fill='black'/>",
      "<circle cx='5.76' cy='8.4' r='2.35' fill='black'/>",
    ].join(''),
  ),
}

/**
 * Tiny always-mounted glass-shell avatar. Size-locked shader (never resizes).
 * `speed={0}` when reduced motion is preferred.
 * Logo variants (`x`, `github`, `cursor`, `cosmos`) mask chrome LiquidMetal into the brand mark.
 */
export function GlassAvatar({ variant, className }: GlassAvatarProps) {
  const reduceMotion = useReducedMotion() ?? false
  const theme = THEMES[variant]
  const logoMask = LOGO_MASKS[variant]
  const isLogo = Boolean(logoMask)
  const speed = reduceMotion ? 0 : isLogo ? SPEED * 0.55 : SPEED

  const metal = (
    <span
      className="pointer-events-none absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 [&_canvas]:block"
      style={{ width: SHADER_PX, height: SHADER_PX }}
    >
      <LiquidMetal
        width={SHADER_PX}
        height={SHADER_PX}
        speed={speed}
        colorBack={theme.colorBack}
        colorTint={theme.colorTint}
        softness={isLogo ? 0.5 : 0.35}
        repetition={isLogo ? 1.5 : 1.6}
        distortion={isLogo ? 0.035 : 0.08}
        contour={isLogo ? 0.25 : 0.2}
        shiftRed={theme.shiftRed}
        shiftBlue={theme.shiftBlue}
        angle={75}
        scale={isLogo ? 1.65 : 1.4}
        shape="none"
        minPixelRatio={1}
        maxPixelCount={MAX_PIXELS}
        className="h-full w-full"
      />
    </span>
  )

  if (logoMask) {
    return (
      <span
        className={cn(
          'relative inline-flex shrink-0 items-center justify-center',
          className,
        )}
        style={{ width: DISPLAY_PX, height: DISPLAY_PX }}
        aria-hidden
      >
        <span
          className="absolute inset-[2px] overflow-hidden"
          style={{
            WebkitMaskImage: logoMask,
            maskImage: logoMask,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        >
          {metal}
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'relative inline-block shrink-0 overflow-hidden rounded-full outline outline-1 outline-white/15',
        'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]',
        className,
      )}
      style={{ width: DISPLAY_PX, height: DISPLAY_PX }}
      aria-hidden
    >
      {metal}
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/25"
        aria-hidden
      />
    </span>
  )
}
