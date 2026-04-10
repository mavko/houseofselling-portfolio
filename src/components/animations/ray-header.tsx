'use client'

import { GodRays } from '@paper-design/shaders-react'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const RAY_COLORS: string[] = ['#121212', '#212121', '#fff']

const RAY_SPEED = 1.3

export function RayHeader() {
	const reduceMotion = useReducedMotion() ?? false
	const [tabHidden, setTabHidden] = useState(false)

	useEffect(() => {
		const onVisibility = () => setTabHidden(document.hidden)
		onVisibility()
		document.addEventListener('visibilitychange', onVisibility)
		return () => document.removeEventListener('visibilitychange', onVisibility)
	}, [])

	const speed = reduceMotion || tabHidden ? 0 : RAY_SPEED

	return (
		<GodRays
			width={1280}
			height={720}
			colors={RAY_COLORS}
			colorBack='#000000'
			colorBloom='#000000'
			bloom={100}
			intensity={0.44}
			density={0.1}
			spotty={1}
			midSize={0}
			midIntensity={0}
			speed={speed}
			scale={0.02}
			offsetX={1}
			offsetY={2}
			className='absolute inset-0 z-0'
			aria-hidden
		/>
	)
}
