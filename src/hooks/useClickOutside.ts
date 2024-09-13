import { useRef, useEffect } from 'react'

export type ClickOutsideCallback = () => void

function useClickOutside<ElementType extends HTMLElement>(
  containerRef: React.RefObject<ElementType>,
  clickOutsideFn: ClickOutsideCallback,
) {
  const callbackRef = useRef<ClickOutsideCallback>(clickOutsideFn)

  useEffect(() => {
    callbackRef.current = clickOutsideFn
  }, [clickOutsideFn])

  useEffect(() => {
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
  }, [containerRef])
}

export default useClickOutside
