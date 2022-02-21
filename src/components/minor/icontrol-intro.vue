<template>
	<div>
		<div class="max-w-full min-w-full shadow-xl sm:rounded-xl">
			<div class="sm:rounded-xl ring-1 ring-slate-900/5">
				<div
					class="sm:rounded-t-xl bg-gradient-to-b from-white to-[#FBFBFB] dark:bg-none dark:bg-slate-700 dark:highlight-white/10"
				>
					<div class="py-2.5 grid items-center px-4 gap-8 grid-cols-3">
						<div class="flex items-center">
							<div class="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
							<div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
							<div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
							<svg
								width="24"
								height="24"
								fill="none"
								class="flex-none hidden ml-4 text-slate-400 dark:text-slate-500 md:flex-none"
							>
								<path
									d="m15 7-5 5 5 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path></svg
							><svg
								width="24"
								height="24"
								fill="none"
								class="flex-none hidden ml-2 text-slate-900 dark:text-slate-500 md:flex-none"
							>
								<path
									d="m10 7 5 5-5 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</div>
						<div>
							<div
								class="flex flex-wrap items-center justify-center py-1 mx-auto text-xs font-medium leading-6 rounded-md bg-slate-100 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500 text-slate-900"
							>
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									class="text-slate-900 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
								>
									<path
										fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd"
									></path></svg
								>icontrolapp.se
							</div>
						</div>
						<div class="flex justify-end">
							<svg
								width="24"
								height="24"
								fill="none"
								class="text-slate-900 dark:text-slate-500"
							>
								<path
									d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</div>
					</div>
					<div class="grid overflow-hidden text-xs leading-5">
						<div
							class="pointer-events-none select-none text-slate-900 font-medium px-4 py-1.5 flex items-center justify-center space-x-2 dark:text-slate-200 text-center"
						>
							<div class="truncate">
								iControl | All construction documentation right in your pocket
							</div>
						</div>
					</div>
				</div>
				<div
					class="relative pb-8 -mb-8 text-white bg-white border-t border-slate-200 rounded-b-xl dark:bg-slate-800 dark:border-slate-900/50"
				>
					<router-link to="/ispect">
						<div class="relative">
							<div
								data-magnetic
								data-cursor="-opaque"
								class="absolute z-10 w-full h-full p-4 space-y-4 md:p-12 md:space-y-8 bg-slate-900/60 hover:bg-slate-900/70"
							>
								<div
									class="flex items-center space-x-2 text-lg font-medium align-middle"
								>
									<div>
										<img
											src="../../assets/projects/icontrol/icontrol-logo-w.svg"
											style="max-width: 160px"
											alt=""
											class=""
										/>
									</div>
									<div class="flex items-center pt-1">
										<svg
											width="6"
											height="6"
											fill="currentColor"
											aria-hidden="true"
											class="text-white"
										>
											<circle cx="3" cy="3" r="3"></circle>
										</svg>
									</div>
									<div class="flex items-center pt-2 text-xs font-bold">
										500 Startups Batch 19 Alumni
									</div>
								</div>
								<p class="text-2xl font-light">
									A platform for all your construction documentation.
								</p>
								<div class="flex flex-wrap justify-start gap-2 my-5 text-sm">
									<span
										class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
									>
										founding member
									</span>
									<span
										class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
										>branding</span
									>
									<span
										class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
										>ui/ux</span
									>
									<span
										class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
										>front-end development</span
									>
								</div>
								<p class="text-lg">Click to read more</p>
							</div>

							<img
								src="../../assets/projects/icontrol/screens/icontrol_dashboard_blueprint.png"
								class="object-cover object-center w-full bg-transparent md:h-auto h-96"
								alt=""
							/>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'icontrolIntro',
}
</script>
