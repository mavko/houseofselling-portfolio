'use client'

import { useRef, useEffect } from 'react'

export type ClickOutsideCallback = () => void

function useClickOutside<ElementType extends HTMLElement>(
  containerRef: React.RefObject<ElementType | null>,
  clickOutsideFn: ClickOutsideCallback,
) {
  const callbackRef = useRef<ClickOutsideCallback>(clickOutsideFn)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    callbackRef.current = clickOutsideFn
  }, [clickOutsideFn])

  useEffect(() => {
    if (!mounted.current) return

    const listenerCallback = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        callbackRef.current()
      }
    }

    window.addEventListener('mousedown', listenerCallback)

    return () => {
      window.removeEventListener('mousedown', listenerCallback)
    }
  }, [containerRef, mounted])
}

export default useClickOutside
