<template>
	<div>
		<div
			class="relative z-10 col-span-3 -ml-10 shadow-lg bg-slate-100 dark:bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-white/10 ring-1 ring-slate-300"
		>
			<div
				class="relative flex text-lg font-medium leading-6 text-slate-700 dark:text-slate-100"
			>
				<div
					class="flex items-center flex-none px-4 py-3 mt-2 border-t border-b border-t-transparent border-b-slate-300"
				>
					Creative coding
				</div>
				<div class="flex flex-auto pt-4 overflow-hidden rounded-tr-xl">
					<div
						class="flex-auto -mr-px border rounded-tl bg-slate-200 dark:bg-slate-700/50 border-slate-500/30"
					></div>
				</div>
				<div class="absolute right-0 flex items-center h-8 pr-4 top-2">
					<div class="relative flex -mr-2"></div>
				</div>
			</div>
			<div class="relative">
				<ul
					class="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-100 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5 rounded-b-xl"
				>
					<!-- latest -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10"
					>
						<dl
							class="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none"
								>
									<video controls>
										<source
											src="../../assets/graphics/cc_network.mp4"
											type="video/mp4"
										/>
										Your browser does not support the video tag.
									</video>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<p
											class="mt-1 text-sm font-medium dark:text-gray-300 text-slate-900"
										>
											Network - Creative coding - Canvas.js
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- post -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10"
					>
						<dl
							class="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none"
								>
									<video controls>
										<source
											src="../../assets/graphics/gohst_grid.mp4"
											type="video/mp4"
										/>
										Your browser does not support the video tag.
									</video>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<p class="mt-1 text-sm font-medium text-gray-300">
											Grid of ghosts - Creative coding - Canvas.js
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- post -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10"
					>
						<dl
							class="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none"
								>
									<video controls>
										<source
											src="../../assets/graphics/spirals.mp4"
											type="video/mp4"
										/>
										Your browser does not support the video tag.
									</video>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<p
											class="mt-1 text-sm font-medium dark:text-gray-300 text-slate-700"
										>
											Spirals - Creative coding - Canvas.js
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'creativeCoding',
}
</script>
