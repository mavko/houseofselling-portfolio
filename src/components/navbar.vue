<template>
	<section
		class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-slate-900/40 bg-white/90"
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
					<span
						class="hidden pt-2 leading-6 text-slate-700 dark:text-slate-50 md:block"
					>
						Sebastian Selling
					</span>
				</router-link>

				<a
					class="items-center hidden px-3 py-1 ml-3 text-xs font-medium leading-5 rounded-full text-slate-900 dark:text-slate-900 xl:flex hover:bg-sky-400/20 bg-slate-400/50 dark:bg-slate-400"
					href="mailto:sebastian.selling@outlook.com"
					><strong class="font-semibold">Job notice</strong
					><svg
						width="2"
						height="2"
						fill="currentColor"
						aria-hidden="true"
						class="ml-2 text-slate-900"
					>
						<circle cx="1" cy="1" r="1"></circle></svg
					><span class="ml-2">Currently available for hire</span
					><svg
						width="3"
						height="6"
						class="ml-3 overflow-visible text-slate-900"
						aria-hidden="true"
					>
						<path
							d="M0 0L3 3L0 6"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path></svg
				></a>
				<div class="relative flex items-center ml-auto">
					<nav
						class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
					>
						<router-link
							to="/"
							:class="open ? '' : 'text-opacity-90'"
							class="inline-flex items-center px-3 py-2 text-xs font-semibold text-black transition-all duration-150 border-2 border-gray-300 rounded-full cursor-pointer md:space-x-1 hover:bg-gray-300 hover:text-black ease dark:text-white dark:hover:text-black"
							data-cursor="-opaque"
							as="div"
						>
							<span class="hidden md:block">Home</span>
							<HomeIcon
								class="w-4 h-4 transition duration-150 ease-in-out"
								aria-hidden="true"
							/>
						</router-link>
					</nav>
					<div
						class="flex items-center pl-6 ml-6 border-l border-slate-300 dark:border-slate-800"
					>
						<theme-switch />
					</div>
				</div>
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
