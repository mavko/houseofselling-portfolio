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
					Front-end
				</div>
				<div class="flex flex-auto pt-4 overflow-hidden rounded-tr-xl">
					<div
						class="flex-auto -mr-px border rounded-tl bg-slate-200 dark:bg-slate-700/50 border-slate-500/30"
					></div>
				</div>
				<div class="absolute right-0 flex items-center h-8 pt-1 pr-4 top-5">
					<div class="relative flex -mr-2">
						<a
							href="https://github.com/mavko"
							target="_blank"
							class="flex ml-6 space-x-2 text-slate-900 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 center-items"
						>
							<span class="text-sm font-semibold">Sebastian on GitHub</span>
							<svg
								viewBox="0 0 16 16"
								class="w-5 h-5"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div class="relative">
				<ul
					class="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-50 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5"
				>
					<!-- latest post -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<!-- post 0 -->
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/uniswap-clone.png"
										alt="Uniswap Clone"
										class="object-cover object-center w-full rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3 class="font-bold text-slate-100 font-2xl">
											<a
												href="https://uniswapclonery.vercel.app/"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>Functional uniswap clone</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-400"
										>
											Built w/ Solidity | Next.js | Sanity.io | tailwindcss +
											vercal deploy (Rinkeby Test Network)
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- latest post -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<!-- post 0 -->
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/seedvault.png"
										alt="Netflix Clone"
										class="object-cover object-center w-full rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3 class="font-bold text-slate-100 font-2xl">
											<a
												href="https://tender-ritchie-77beda.netlify.app/"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>Quick modern login page prototype</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-400"
										>
											Built w/ react + tailwind
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- everything else -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/globularexpirement.png"
										alt="Netflix Clone"
										class="object-cover object-center w-full rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3 class="font-bold text-slate-100 font-2xl">
											<a
												href="https://vigorous-lumiere-acf9a2.netlify.app/"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>Globe 3D and animated text expirement</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium dark:text-slate-300 text-slate-700"
										>
											ThreeJS landing page
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- post 2 -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/netflix_clone_cover.png"
										alt="Netflix Clone"
										class="object-cover object-center w-full rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3 class="font-bold text-slate-100 font-2xl">
											<a
												href="https://netflix-clone-d8976.web.app/"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>Netflix Clone</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-50"
										>
											Can currently press a title and import trailers (albeit a
											bit random)
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- post 2 -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/bracket-tourney-bg.png"
										alt="Netflix Clone"
										class="w-full object-fit rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3
											class="font-bold text-slate-100 font-2xl bg-slate-900/80 hover:bg-slate-900/70"
										>
											<a
												href="https://festive-pike-dcb008.netlify.app/"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>esports tourney bracket</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-50"
										>
											responsive esports tourney bracket in vue + tailwind
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>
					<!-- post 2 -->
					<li
						class="p-3 bg-white shadow-sm cursor-pointer rounded-xl group ring-1 ring-slate-200 hover:bg-slate-700 hover:ring-slate-500 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-slate-700"
						data-cursor="-text"
					>
						<dl
							class="grid md:grid-cols-2 md:grid-rows-2 sm:block lg:grid xl:block"
						>
							<div class="relative group">
								<div
									class="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
								>
									<img
										src="../../assets/projects/hobby/datadashboard.png"
										alt="Netflix Clone"
										class="w-full object-fit rounded-2xl h-96"
									/>
								</div>
								<div class="flex justify-between mt-4">
									<div>
										<h3
											class="font-bold text-slate-100 font-2xl bg-slate-900/80 hover:bg-slate-900/70"
										>
											<a
												href="https://gallant-poitras-371fc4.netlify.app/login"
												target="_blank"
											>
												<span aria-hidden="true" class="absolute inset-3"
													>iOS Gaming Data Collection Dashboard</span
												>
											</a>
										</h3>
										<p
											class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-50"
										>
											- Tailwind CSS - [Windmill React
											UI](https://windmillui.com/react-ui) - Dark / Light mode
										</p>
									</div>
								</div>
							</div>
						</dl>
					</li>

					<li class="flex">
						<div
							class="flex flex-col items-center justify-center w-full py-3 text-sm font-medium leading-6 border-2 border-dashed rounded-md cursor-pointer group border-slate-300 text-slate-900 hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 dark:border-slate-700 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500"
						>
							<svg
								width="20"
								height="20"
								fill="currentColor"
								class="mb-1 text-slate-400 group-hover:text-blue-500"
							>
								<path
									d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
								></path></svg
							>New project
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'development',
}
</script>
