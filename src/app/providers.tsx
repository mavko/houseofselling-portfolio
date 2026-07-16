'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function usePrevious<T>(value: T) {
  let ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  useEffect(() => {
    // Arms on first pointer/key/touch — no need to press "1" (cuelume demo habit).
    // Cold-load hover still needs one browser gesture (Web Audio autoplay policy).
    void import('@/lib/ui-sounds').then(({ bindUiSounds }) => bindUiSounds())
  }, [])

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  )
}
