'use client'

import {
  motion,
  MotionValue,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion'
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const DOCK_HEIGHT = 128
const DEFAULT_MAGNIFICATION = 50
const DEFAULT_DISTANCE = 150
const DEFAULT_PANEL_HEIGHT = 64

type DockProps = {
  children: React.ReactNode
  className?: string
  distance?: number
  panelHeight?: number
  magnification?: number
  spring?: SpringOptions
}
type DockItemProps = {
  className?: string
  children: React.ReactNode
  href: string // Add this new prop
}
type DockLabelProps = {
  className?: string
  children: React.ReactNode
}
type DockIconProps = {
  className?: string
  children: React.ReactNode
}

type DocContextType = {
  mouseX: MotionValue
  spring: SpringOptions
  magnification: number
  distance: number
}
type DockProviderProps = {
  children: React.ReactNode
  value: DocContextType
}

const DockContext = createContext<DocContextType | undefined>(undefined)

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>
}

function useDock() {
  const context = useContext(DockContext)
  if (!context) {
    throw new Error('useDock must be used within an DockProvider')
  }
  return context
}

// Add interface for child props
interface DockItemWithProps extends React.ReactElement {
  props: {
    width?: number
    isHovered?: boolean
  }
}

function Dock({
  children,
  className,
  spring = { mass: 0.5, stiffness: 250, damping: 24 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity)
  const isHovered = useMotionValue(0)

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4)
  }, [magnification])

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight])
  const height = useSpring(heightRow, spring)

  return (
    <motion.div
      style={{
        height: height,
        scrollbarWidth: 'none',
      }}
      className="mx-2 flex max-w-full items-end overflow-x-auto"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1)
          mouseX.set(pageX)
        }}
        onMouseLeave={() => {
          isHovered.set(0)
          mouseX.set(Infinity)
        }}
        className={cn(
          'mx-auto flex w-fit gap-4 rounded-xl border border-white/25 bg-neutral-950/0 px-3 py-0 shadow-xl backdrop-blur-lg',
          className,
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  )
}

function DockItem({ children, className, href }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const { distance, magnification, mouseX, spring } = useDock()

  const isHovered = useMotionValue(0)
  const isActive = pathname === href

  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - domRect.x - domRect.width / 2
  })

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40],
  )

  const width = useSpring(widthTransform, spring)

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child as DockItemWithProps, {
          width: width.get(),
          isHovered: isHovered.get() === 1,
        }),
      )}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          transition={spring}
          className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-4 rounded-full bg-white transition-opacity duration-500 group-hover:opacity-40"
        ></motion.div>
      )}
    </motion.div>
  )
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>
  const isHovered = restProps['isHovered'] as MotionValue<number>
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isHovered && typeof isHovered.on === 'function') {
      return isHovered.on('change', (latest) => {
        setIsVisible(latest === 1)
      })
    }
  }, [isHovered])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute -top-6 left-1/2 z-30 w-fit border border-white/50 bg-black/70 px-2 py-0.5 text-xs font-semibold whitespace-pre text-white mix-blend-plus-darker backdrop-blur-md',
            className,
          )}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>
  const widthValue =
    typeof restProps['width'] === 'number' ? restProps['width'] : 0
  const width = useMotionValue<number>(widthValue)

  const widthTransform = useTransform(width, (val: number) => val / 2.5)

  return (
    <motion.div
      style={{ width: widthTransform }}
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon, DockItem, DockLabel }
