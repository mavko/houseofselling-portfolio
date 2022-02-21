<template>
	<div>
		<!-- Dark mode switcher -->
		<button
			id="theme-toggle"
			type="button"
			class="inline-flex items-center px-3 py-2 text-xs font-semibold text-black transition-all duration-150 border-2 border-gray-300 rounded-full cursor-pointer hover:bg-gray-300 hover:text-black ease dark:text-white dark:hover:text-black"
			data-cursor="-opaque"
		>
			<div
				id="theme-toggle-dark-icon"
				class="flex items-center hidden align-middle md:space-x-1"
			>
				<div class="hidden md:block">Dark theme</div>

				<svg
					class="w-4 h-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
					></path>
				</svg>
			</div>
			<div
				id="theme-toggle-light-icon"
				class="flex items-center hidden align-middle md:space-x-1"
			>
				<div class="hidden md:block">Light theme</div>
				<svg
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path>
				</svg>
			</div>
		</button>
		<!-- Dark mode switcher end -->
	</div>
</template>

<script>
import {} from '@heroicons/vue/solid'

export default {
	name: 'themeSwitcher',
	components: {},
	mounted() {},
}
</script>
