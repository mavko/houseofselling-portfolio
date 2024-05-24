'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import createGlobe from 'cobe'

const Globe = () => {
  const canvasRef = useRef(null)
  const phiRef = useRef(0)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const darkMode = resolvedTheme === 'dark' ? 1 : 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0,
      dark: darkMode,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.7, 0.7, 0.7],
      markerColor: [0.1, 0.1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [59.334591, 18.06324], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phiRef.current
        phiRef.current += 0.005
      },
    })

    return () => {
      globe.destroy()
    }
  }, [resolvedTheme])

  return (
    <canvas
      style={{ width: '100%', height: '100%' }}
      ref={canvasRef}
      className="h-full w-full transition-opacity duration-500"
    />
  )
}

export default Globe
