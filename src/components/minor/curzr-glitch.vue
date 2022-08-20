<template>
	<div class="curzr crt" ref="curzr"></div>
</template>

<script>
export default {
	name: 'GlitchEffect',
	data() {
		return {
			distanceX: 0,
			distanceY: 0,
			pointerX: 0,
			pointerY: 0,
			previousPointerX: 0,
			previousPointerY: 0,
			moving: false,
			glitchColorB: '#00feff',
			glitchColorR: '#ff4f71',
		}
	},
	computed: {
		cursorStyle() {
			return this.$refs.curzr.style
		},
	},
	mounted() {
		if (
			!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			this.cursorSize = Number(
				getComputedStyle(this.$refs.curzr)
					.getPropertyValue('--size')
					.slice(0, -2)
			)
			this.$refs.curzr.removeAttribute('hidden')
			document.body.addEventListener('mousemove', (event) => {
				this.move(event, document.body)
			})
			document.body.addEventListener('click', () => {
				this.click()
			})
		} else {
			this.$destroy()
			this.$el.parentNode.removeChild(this.$el)
		}
	},
	methods: {
		move(event, root) {
			this.previousPointerX = this.pointerX
			this.previousPointerY = this.pointerY
			this.pointerX = event.pageX + root.getBoundingClientRect().x
			this.pointerY = event.pageY + root.getBoundingClientRect().y
			this.distanceX = Math.min(
				Math.max(this.previousPointerX - this.pointerX, -10),
				10
			)
			this.distanceY = Math.min(
				Math.max(this.previousPointerY - this.pointerY, -10),
				10
			)

			if (
				event.target.localName === 'button' ||
				event.target.localName === 'a' ||
				event.target.onclick !== null ||
				event.target.className.includes('curzr-hover')
			) {
				this.hover()
			} else {
				this.hoverout()
			}

			this.cursorStyle.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
			this.cursorStyle.boxShadow = `
          ${+this.distanceX}px ${+this.distanceY}px 0 ${this.glitchColorB}, 
          ${-this.distanceX}px ${-this.distanceY}px 0 ${this.glitchColorR}`

			this.stop()
		},
		hover() {},
		hoverout() {},
		click() {
			this.cursorStyle.transform += ` scale(0.75)`
			setTimeout(() => {
				this.cursorStyle.transform = this.cursorStyle.transform.replace(
					` scale(0.75)`,
					''
				)
			}, 35)
		},
		stop() {
			if (!this.moving) {
				this.moving = true
				setTimeout(() => {
					this.cursorStyle.boxShadow = ''
					this.moving = false
				}, 50)
			}
		},
	},
}
</script>

<style scoped>
.curzr {
	--size: 25px;
	--delay: 100ms;
	--filter-invert: invert(1);

	box-sizing: border-box;
	position: fixed;
	top: calc(var(--size) / -2);
	left: calc(var(--size) / -2);
	z-index: 2147483647;
	width: var(--size);
	height: var(--size);
	background-color: #222;
	border-radius: 50%;
	transition: 100ms, transform var(--delay);
	user-select: none;
	pointer-events: none;
}

@supports (backdrop-filter: invert(1)) {
	.curzr {
		background-color: #fff0;
		backdrop-filter: var(--filter-invert);
	}
}

@supports not (backdrop-filter: invert(1)) {
	.curzr {
		background-color: #222;
	}
}
</style>
