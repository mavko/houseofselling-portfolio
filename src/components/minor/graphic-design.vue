<template>
	<div>
		<div
			class="relative z-10 col-span-3 shadow-lg lg:-ml-10 bg-slate-100 dark:bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-white/10 ring-1 ring-slate-300"
		>
			<div
				class="relative flex text-lg font-medium leading-6 text-slate-700 dark:text-slate-100"
			>
				<div
					class="flex items-center flex-none px-4 py-3 mt-2 border-t border-b border-t-transparent border-b-slate-300"
				>
					Graphics
				</div>
				<div class="flex flex-auto pt-4 overflow-hidden rounded-tr-xl">
					<div
						class="flex-auto -mr-px border rounded-tl bg-slate-200 dark:bg-slate-700/50 border-slate-500/30"
					></div>
				</div>
				<div class="absolute right-0 flex items-center h-8 pt-1 pr-4 top-5">
					<div class="relative flex -mr-2">
						<a
							href="https://www.dribbble.com/sebastianselling"
							target="_blank"
							data-magnetic
							class="text-sm font-bold btn-underlined dark:text-slate-50 text-slate-900"
						>
							More on Dribbble
						</a>
					</div>
				</div>
			</div>
			<div class="relative">
				<ul
					class="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-100 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5"
				>
					<!-- latest -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
					>
						<div class="relative group">
							<div
								class="w-full overflow-hidden rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
							>
								<img
									src="../../assets/graphics/sebastian_selling_logotype1080.png"
									alt=""
									srcset=""
								/>
							</div>
							<div class="flex justify-between mt-4">
								<div>
									<h3 class="font-bold text-gray-100 font-2xl">
										<a href="#" target="_blank">
											<span aria-hidden="true" class="absolute inset-3"
												>Personal logo iterations</span
											>
										</a>
									</h3>
									<p
										class="mt-1 text-sm font-medium dark:text-gray-300 text-slate-700"
									>
										Minimal approach to my name branding though it didn't find
										much use
									</p>
								</div>
							</div>
						</div>
					</li>
					<!-- posts -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-blue-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
					>
						<div class="relative group">
							<div
								class="w-full overflow-hidden rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
							>
								<img
									src="../../assets/graphics/gradiancelogo.png"
									alt=""
									srcset=""
								/>
							</div>
							<div class="flex justify-between mt-4">
								<div>
									<h3 class="font-bold text-gray-100 font-2xl">
										<a href="#" target="_blank">
											<span aria-hidden="true" class="absolute inset-3"
												>Gradiance</span
											>
										</a>
									</h3>
									<p
										class="mt-1 text-sm font-medium dark:text-gray-300 text-slate-700"
									>
										Minimal logo for my internet profiles
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'graphicDesign',
}
</script>
