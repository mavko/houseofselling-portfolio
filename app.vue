<template>
	<div class="bg-neutral-950 w-full h-screen overflow-y-scroll   isolate">
		<div
			class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)]  [background-size:16px_16px]">
		</div>

		<div class=" max-w-screen flex flex-col items-center   p-8 md:p-16 space-y-8 mb-8">
			<div
				class="relative flex h-full w-full min-h-[20rem] max-w-2xl items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-neutral-800 pb-96 sm:pb-40 shadow-2xl md:pb-60">

				<div
					class="pointer-events-none text-neutral-100 sm:pt-6 absolute left-0 bottom-0 p-6 z-10 font-display font-medium tracking-widest text-xl ">
					sebastian
					selling
				</div>

				<div class="absolute inset-0  mx-auto h-full w-full  z-0">
					<Globe />
				</div>
				<div
					class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]">
				</div>
			</div>
			<Terminal />
		</div>
	</div>
</template>

<script setup>

</script>
<style>
html,
body {
	@apply bg-neutral-950 h-full w-full overflow-x-hidden;
	font-family: 'Mona Sans';
	scroll-behavior: auto;
}

@font-face {
	font-family: 'Mona Sans';
	font-weight: 200 900;
	font-display: block;
	font-style: normal;
	font-stretch: 75% 125%;
	src: url('/fonts/Mona-Sans.var.woff2') format('woff2');
}

.text-black-narrow {
	font-weight: 900;
	font-stretch: 75%;
	font-family: 'Mona Sans';
	font-feature-settings: 'pnum' on, 'lnum' on, 'ordn' on, 'rvrn' on, 'salt' on,
		'ss01' on, 'ss03' on;
}

.bm-logo-lowercap {
	font-family: 'Mona Sans';
	font-style: normal;
	font-weight: 900;
	letter-spacing: -0.05em;
}

html {
	font-family: 'Mona Sans';
	scroll-behavior: auto;
}
</style>
