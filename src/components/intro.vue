<template>
	<div
		class="container relative pt-32 pb-12 mx-auto"
		id="intro"
		style="min-height: 600px"
	>
		<div
			class="justify-end pb-5 space-y-5 text-xl font-semibold crt site-title"
		>
			<div class="mr-3 text-xl">❯ cd welcome / to / houseofselling</div>
			<span class="mr-3 text-xl">> [ hos v2.8.4 running ]</span>
			<br />
			<div class="mr-3 text-xl">
				> Local:
				<span style="color: #3ff0ed !important" class="mr-3">
					3000/sebastianselling
				</span>
				<br />
				> Network:

				<a
					href="https://www.linkedin.com/in/sebastianselling/"
					target="_blank"
					rel="noopener noreferrer"
					data-magnetic
					data-cursor="-opaque"
					style="color: #3ff0ed !important"
					class="mr-3"
					>http://linkedin/sebastianselling/</a
				>

				<br />
				> designer and dev.
			</div>

			<p class="mr-3 text-xl">
				I've spent the last 10 years taking ideas from zero to one, <br />
				building products in construction mainly.
			</p>

			<p class="text-lg font-bold">Currently:</p>
			<div data-magnetic data-cursor="-opaque" class="text-lg font-bold">
				<router-link to="/ispect" class="btn-underlined">
					// BUILDING ❯ ISPECT
				</router-link>
			</div>
			<p class="text-lg font-bold">Previously:</p>
			<div data-magnetic data-cursor="-opaque" class="text-lg font-bold">
				<router-link to="/icontrol" class="btn-underlined">
					// BUILT ❯ ICONTROL
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderBackground from './minor/header-background.vue'

export default {
	components: { HeaderBackground },
	name: 'intro',
}
</script>
<style>
@import '../index.css';
</style>
