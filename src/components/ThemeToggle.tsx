import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/solid' // Ensure you import or define these icons
import { MoonIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/Button'
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const [mounted, setMounted] = useState(false)
  const [toggleKey, setToggleKey] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    setTheme(otherTheme)
    setToggleKey((prevKey) => prevKey + 1) // Force re-render by updating the state
  }

  return (
    <Button
      key={toggleKey}
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className=""
      onClick={handleToggle}
    >
      <SunIcon className="h-6 w-6 fill-white transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-white [@media(prefers-color-scheme:dark)]:fill-white [@media(prefers-color-scheme:dark)]:group-hover:fill-white [@media(prefers-color-scheme:dark)]:group-hover:fill-white" />
      <MoonIcon className="hidden h-6 w-6 fill-white transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:fill-white [@media_not_(prefers-color-scheme:dark)]:fill-white [@media_not_(prefers-color-scheme:dark)]:fill-white" />
    </Button>
  )
}

export default ThemeToggle
