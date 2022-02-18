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
					<span class="pt-2 leading-6 text-slate-700 dark:text-slate-50">
						Sebastian Selling
					</span>
				</router-link>

				<a
					class="items-center hidden px-3 py-1 ml-3 text-xs font-medium leading-5 rounded-full text-slate-900 dark:text-slate-900 xl:flex hover:bg-sky-400/20 bg-slate-400/50 dark:bg-slate-400"
					href="_target:sebastian.selling@outlook.com"
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
				<div class="relative items-center hidden ml-auto lg:flex">
					<nav
						class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
					>
						<ul class="flex space-x-8">
							<li>
								<router-link to="/" data-cursor="-opaque"> Home </router-link>
							</li>
							<li>
								<router-link to="/#intro" data-cursor="-opaque">
									Intro
								</router-link>
							</li>
							<li>
								<router-link to="/#career" data-cursor="-opaque">
									Career
								</router-link>
							</li>
							<li>
								<router-link to="/#sideprojects" data-cursor="-opaque">
									Side-projects
								</router-link>
							</li>
						</ul>
					</nav>
					<div
						class="flex items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800"
					>
						<theme-switch />
					</div>
				</div>

				<div class="ml-2 -my-1 lg:hidden">
					<button
						type="button"
						class="flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
					>
						<span class="sr-only">Navigation</span
						><svg width="24" height="24" fill="none" aria-hidden="true">
							<path
								d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import themeSwitch from './minor/theme-switch.vue'

export default {
	name: 'navbar',
	components: { themeSwitch },
}
</script>
