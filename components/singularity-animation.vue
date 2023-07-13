<template>
	<div class="absolute z-20 inset-0 h-screen">
		<svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="stroke-2 w-128 h-128">
			<defs>
				<linearGradient id="aiGrad" x1="513.98" y1="290" x2="479.72" y2="320" gradientUnits="userSpaceOnUse">
					<stop offset="0" stop-color="#FCB7E3" stop-opacity="0" />
					<stop offset=".15" stop-color="#FCB7E3" />
					<stop offset=".4" stop-color="#8C94C5" />
					<stop offset=".6" stop-color="#6F6E8F" />
					<stop offset=".78" stop-color="#F9F7FD" />
					<stop offset="1" stop-color="#FCB7E3" stop-opacity="0" />
				</linearGradient>
			</defs>

			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
			<ellipse class="ell" cx="400" cy="300" rx="80" ry="80" />
		</svg>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
	gsap.config({ trialWarn: false })
	let select = (s) => document.querySelector(s),
		toArray = (s) => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		allEll = toArray('.ell'),
		colorArr = ['#FCB7E3', '#8C94C5', '#fff', '#3b82f6']

	let colorInterp = gsap.utils.interpolate(colorArr)

	gsap.set(mainSVG, {
		visibility: 'visible',
	})

	function animate(el, count) {
		let tl = gsap.timeline({
			defaults: {
				ease: 'sine.inOut',
			},
			repeat: 1,
		})
		gsap.set(el, {
			opacity: 1 - count / allEll.length,
			stroke: colorInterp(count / allEll.length),
		})

		tl.to(el, {
			attr: {
				ry: `-=${count * 2.3}`,
				rx: `+=${count * 1.4}`,
			},
			ease: 'sine.in',
		})
			.to(el, {
				attr: {
					ry: `+=${count * 2.3}`,
					rx: `-=${count * 1.4}`,
				},
				ease: 'sine',
			})
			.to(
				el,
				{
					duration: 1,
					rotation: -180,
					transformOrigin: '50% 50%',
				},
				0
			)
			.timeScale(0.5)
	}
	allEll.forEach((c, i) => {
		gsap.delayedCall(i / (allEll.length - 1), animate, [c, i + 1])
	})
	gsap.to('#aiGrad', {
		duration: 4,
		delay: 0.75,
		attr: {
			x1: '-=1500',
			x2: '-=1500',
		},
		scale: 1.8,
		transformOrigin: '25% 25%',
		repeat: 1,
		ease: 'none',
	})
	gsap.to('#ai', {
		duration: 1,
		scale: 1.6,
		transformOrigin: '25% 25%',
		repeat: 1,
		yoyo: true,
		ease: 'sine.inOut',
	})
})
</script>
<style scoped>
svg {
	width: 100%;
	height: 100%;
	visibility: hidden;
}

.ell,
#ai {
	fill: none;
}
</style>
