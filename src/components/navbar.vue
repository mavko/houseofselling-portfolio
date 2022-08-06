<template>
	<section
		class="sticky top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur lg:z-50"
	>
		<!-- navbar -->
		<div
			class="py-4 mx-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 lg:mx-0"
		>
			<div class="relative flex items-center">
				<router-link
					to="/"
					class="flex justify-center text-xl font-bold align-middle font-heading"
					data-cursor="-opaque"
				>
					<img src="../assets/seb.png" className="w-10 h-10 contain mr-2" />
					<span class="hidden pt-2 leading-6 text-slate-50 md:block">
						Sebastian Selling
					</span>
				</router-link>
			</div>
		</div>
	</section>
</template>
<script>
import themeSwitch from './minor/theme-switch.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { HomeIcon } from '@heroicons/vue/solid'
export default {
	name: 'navbar',
	components: {
		themeSwitch,
		Popover,
		PopoverButton,
		PopoverPanel,
		HomeIcon,
	},
}
</script>

MobileNav
