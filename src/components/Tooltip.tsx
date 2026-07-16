'use client'

import React, { useState } from 'react'

/**
 * Tooltip component.
 *
 * @param {React.ReactNode} children - The children to display.
 * @param {string} text - The text to display in the tooltip.
 * @returns {JSX.Element} The Tooltip component.
 */
const Tooltip: React.FC<{
  children: React.ReactNode
  text: string
}> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    setIsVisible(true)
  }

  const handleMouseLeave = (): void => {
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        role="tooltip"
        aria-hidden={!isVisible}
        className={`pointer-events-none absolute bottom-10 left-1/2 z-10 mb-4 -translate-x-1/2 rounded-lg border border-white/20 bg-zinc-600/80 px-2.5 py-0.5 text-xs font-medium text-white/90 transition-opacity duration-150 ease-out motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default Tooltip
