<template>
	<!-- notifications -->
	<div
		class="px-6 py-6 mx-auto text-lg md:flex md:items-center md:justify-between bg-slate-900/70 backdrop-blur ring-1 ring-inset ring-white/10 rounded-b-3xl"
	>
		<div class="flex items-center flex-1">
			<span class="flex p-2 bg-green-400 rounded-lg"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
					class="w-6 h-6 text-slate-900"
					style="--darkreader-inline-stroke: currentColor"
					data-darkreader-inline-stroke=""
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
					></path></svg
			></span>
			<p class="mx-3 font-medium text-white">
				Currently available for hire and am actively looking for a place to call
				home
			</p>
		</div>
		<div class="flex items-center space-x-4 font-semibold align-middle flex-0">
			<a
				href="mailto:sebastian.selling@outlook.com"
				class="flex justify-center align-middle btn-underlined"
				data-magnetic
			>
				sebastian.selling@outlook.com
			</a>

			<a
				href="https://calendly.com/sebastian-selling/30min"
				class="flex justify-center align-middle btn-underlined"
				data-magnetic
			>
				<span>My calendly-link</span>
			</a>
		</div>
	</div>
</template>
<script>
import { SpeakerphoneIcon } from '@heroicons/vue/solid'
export default {
	name: 'announcement',
	components: { SpeakerphoneIcon },
}
</script>
