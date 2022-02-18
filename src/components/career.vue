<template>
	<div class="container mx-auto" id="career">
		<div
			class="relative z-10 pb-10 my-auto overflow-hidden shadow-xl bg-white/90 max-w-8xl rounded-2xl xl:mt-18 dark:bg-slate-900/70 backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10"
		>
			<section>
				<header
					class="p-4 space-y-4 border-b rounded-t-xl sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 border-slate-500/30 dark:text-slate-50 text-slate-700"
				>
					<h2 class="mb-5 text-3xl font-">Career</h2>
					<p class="text-xl font-medium">
						My startups in Saas, focused on the construction industry
					</p>
				</header>
				<ul class="p-4 py-10 space-y-24">
					<!-- ispect section -->
					<li class="">
						<ispect-intro />
					</li>
					<!-- icontrol section -->
					<li>
						<icontrol-intro />
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>
<script>
import IcontrolIntro from './minor/icontrol-intro.vue'
import ispectIntro from './minor/ispect-intro.vue'
export default {
	components: { ispectIntro, IcontrolIntro },
	name: 'career',
}
</script>
