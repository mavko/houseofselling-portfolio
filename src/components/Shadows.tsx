'use client'

import React, { useRef, useId, useEffect } from 'react'
import type { CSSProperties } from 'react'
import {
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from 'framer-motion'
import Link from 'next/link'

// Type definitions
interface ResponsiveImage {
  src: string
  alt?: string
  srcSet?: string
}

interface AnimationConfig {
  preview?: boolean
  scale: number
  speed: number
}

interface NoiseConfig {
  opacity: number
  scale: number
}

interface ShadowOverlayProps {
  type?: 'preset' | 'custom'
  presetIndex?: number
  customImage?: ResponsiveImage
  sizing?: 'fill' | 'stretch'
  color?: string
  animation?: AnimationConfig
  noise?: NoiseConfig
  style?: CSSProperties
  className?: string
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number,
): number {
  if (fromLow === fromHigh) {
    return toLow
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow)
  return toLow + percentage * (toHigh - toLow)
}

const useInstanceId = (): string => {
  const id = useId()
  const cleanId = id.replace(/:/g, '')
  const instanceId = `shadowoverlay-${cleanId}`
  return instanceId
}

export function Shadows({
  sizing = 'fill',
  color = 'rgba(128, 128, 128, 1)',
  animation,
  noise,
  style,
  className,
}: ShadowOverlayProps) {
  const id = useInstanceId()
  const animationEnabled = animation && animation.scale > 0
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null)
  const hueRotateMotionValue = useMotionValue(180)
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null)

  const displacementScale = animation
    ? mapRange(animation.scale, 1, 100, 20, 100)
    : 0
  const animationDuration = animation
    ? mapRange(animation.speed, 1, 100, 1000, 50)
    : 1

  useEffect(() => {
    if (feColorMatrixRef.current && animationEnabled) {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop()
      }
      hueRotateMotionValue.set(0)
      hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
        duration: animationDuration / 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        ease: 'linear',
        delay: 0,
        onUpdate: (value: number) => {
          if (feColorMatrixRef.current) {
            feColorMatrixRef.current.setAttribute('values', String(value))
          }
        },
      })

      return () => {
        if (hueRotateAnimation.current) {
          hueRotateAnimation.current.stop()
        }
      }
    }
  }, [animationEnabled, animationDuration, hueRotateMotionValue])
  return (
    <div
      className={`relative overflow-hidden px-8 py-24 ${className ?? ''}`}
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <div
        className="z-0"
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(6px)` : 'none',
        }}
      >
        {animationEnabled && (
          <svg style={{ position: 'absolute' }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col space-y-6 text-center">
        <h1 className="font-display text-3xl leading-tight font-bold tracking-[-0.03em] text-white font-stretch-125% md:text-balance">
          Design and agentic engineering. <br />
        </h1>
        <p className="font-sans text-xl leading-tight font-medium tracking-[-0.03em] text-white">
          Decade+ of taking ideas from zero to one.
        </p>
        <div className="flex items-center justify-center gap-4">
          <ProjectsLink />
        </div>
      </div>
    </div>
  )
}

function ProjectsLink() {
  return (
    <Link
      href="/projects"
      className="group relative inline-block cursor-pointer rounded-full bg-transparent p-px text-base/9 leading-6 font-semibold text-white no-underline outline-0 transition-transform duration-200 ease-out active:scale-[0.97]"
    >
      <div className="inner-shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] absolute top-0 left-0 z-0 h-full w-full rounded-full border border-white/15 shadow-sm shadow-white/40 transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
      <div
        className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
        style={{ backdropFilter: 'url("#container-glass")' }}
      />
      <span className="absolute inset-0 overflow-hidden rounded-sm">
        <span className="absolute inset-0 h-1 w-full rounded-full bg-radial-[at_50%_75%] from-orange-300 via-orange-400/5 to-orange-950/5 to-90% opacity-0 transition-opacity duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex h-11 items-center space-x-1 rounded-full px-6">
        <span>What am I up to?</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-0.5 w-[calc(100%-2.25rem)] bg-linear-to-r from-orange-400/0 via-orange-300 to-orange-400/0 opacity-0 transition-opacity duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-40" />
      <GlassFilter />
    </Link>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur
            in="turbulence"
            stdDeviation="2"
            result="blurredNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}
