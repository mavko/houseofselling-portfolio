<template>
	<div class="container mx-auto py-28">
		<div
			class="relative z-10 my-auto overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-slate-900/5 xl:mt-18 dark:bg-slate-800 dark:ring-1 dark:ring-white/10"
		>
			<section>
				<header
					class="p-4 space-y-4 rounded-t-xl sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 dark:highlight-white/10"
				>
					<div class="flex items-center justify-between">
						<h2 class="text-lg font-semibold text-slate-900 dark:text-white">
							Side Projects
							<span class="font-medium">| For fun and practice</span>
						</h2>
						<div class="pt-6 w-55 md:pt-0">
							<a
								href="mailto:sebastian.selling@outlook.com"
								class="px-6 py-2 font-medium text-center transition-all duration-150 border-2 rounded-full cursor-pointer border-slate-300 text-slate-700 dark:text-slate-50 dark:hover:text-black hover:bg-gray-300 hover:text-black hover:scale-125 ease"
								data-magnetic
								data-cursor="-opaque"
							>
								Let's build a project together
							</a>
						</div>
					</div>
				</header>
				<div class="p-4 space-y-12 dark:bg-slate-900 bg-slate-100">
					<div><development /></div>
					<div><graphic-design /></div>
					<div><creative-coding /></div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
import creativeCoding from './minor/creative-coding.vue'
import development from './minor/development.vue'
import graphicDesign from './minor/graphic-design.vue'
export default {
	components: { creativeCoding, graphicDesign, development },
	name: 'sideProjects',
}
</script>
