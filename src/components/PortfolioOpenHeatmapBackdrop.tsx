'use client'

import * as React from 'react'
import { Heatmap } from '@paper-design/shaders-react'
import useMeasure from 'react-use-measure'

import { cn } from '@/lib/utils'

/** Same asset as Paper’s demo, hosted locally for same-origin load + no CORS path. */
const HEATMAP_IMAGE = '/images/shaders/diamond.svg'

/** Stable reference — avoids new array identity on parent re-renders. */
const HEATMAP_COLORS: string[] = [
  '#ffffff',
  '#121212',
  '#121212',
  '#121212',
  '#121212',
  '#121212',
  '#ffffff',
]

/** Paper default is ~20M pixels; cap keeps fill-rate predictable on hover. */
const HEATMAP_MAX_PIXELS = 280_000

export type PortfolioOpenHeatmapBackdropProps = {
  className?: string
  reduceMotion?: boolean
  /** When true the shader animates; when false it pauses (speed=0). */
  active?: boolean
  /**
   * Fixed backing resolution height (expanded row px). Must not track the spring —
   * otherwise canvas resizes every frame and tanks the GPU.
   */
  expandedHeight: number
}

/**
 * Paper Design heatmap shader — stays mounted so WebGL context + compiled shader
 * are warm. Parent controls visibility via opacity; `active` toggles the rAF loop.
 */
function PortfolioOpenHeatmapBackdropImpl({
  className,
  reduceMotion = false,
  active = true,
  expandedHeight,
}: PortfolioOpenHeatmapBackdropProps) {
  const [ref, bounds] = useMeasure({
    debounce: { resize: 120, scroll: 0 },
  })

  const width = Math.max(1, Math.floor(bounds.width))
  const height = Math.max(1, Math.floor(expandedHeight))
  const ready = bounds.width > 0

  return (
    <div
      ref={ref}
      className={cn('pointer-events-none absolute inset-0', className)}
      aria-hidden
    >
      {ready ? (
        <Heatmap
          width={width}
          height={height}
          image={HEATMAP_IMAGE}
          colors={HEATMAP_COLORS}
          colorBack="#000000"
          contour={0.5}
          angle={0}
          noise={0}
          innerGlow={0.4}
          outerGlow={0.05}
          speed={reduceMotion || !active ? 0 : 1}
          scale={0.9}
          minPixelRatio={1}
          maxPixelCount={HEATMAP_MAX_PIXELS}
          className="h-full w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full"
        />
      ) : null}
    </div>
  )
}

export const PortfolioOpenHeatmapBackdrop = React.memo(
  PortfolioOpenHeatmapBackdropImpl,
)
