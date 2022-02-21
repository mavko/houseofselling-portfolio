<template>
	<div class="container mx-auto" id="intro">
		<!-- component -->
		<div class="relative z-10">
			<div class="w-full md:py-12 lg:py-28">
				<div
					class="w-full h-full bg-transparent shadow-3xl shadow-slate-900 rounded-3xl"
				>
					<div
						class="relative flex overflow-hidden bg-slate-900 ring-1 ring-inset ring-white/10 dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 rounded-t-3xl"
					>
						<div class="relative flex flex-col justify-center w-full mx-auto">
							<div
								class="flex justify-between px-8 py-2 border-b border-slate-500/30"
							>
								<div class="flex items-center h-12 space-x-1.5">
									<div class="px-3 text-white rounded-full bg-slate-600">
										local://houseofselling.script
									</div>
									<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
									<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
								</div>
							</div>
							<div class="relative flex flex-col flex-auto min-h-0">
								<div class="flex flex-auto w-full">
									<div class="relative flex-auto w-full p-12">
										<div
											class="items-center justify-center block align-middle lg:flex xl:flex"
										>
											<div>
												<img
													src="../assets/maincharacter.jpg"
													alt=""
													class="object-cover object-center w-full h-full max-w-sm mb-5 mr-5 lg:max-w-md rounded-xl"
												/>
											</div>
											<div
												class="justify-end pb-5 space-y-3 text-xl font-semibold md:text-4xl lg:pl-10 dark:text-slate-50"
											>
												Hey, I'm Sebastian Selling. <br />
												Designer and front-end dev from Sweden.
												<p class="text-lg font-light md:text-2xl">
													I've spent the last 10 years taking ideas from zero to
													one, <br />
													building products in construction mainly.
													<span
														class="flex flex-wrap justify-start gap-2 my-5 text-sm"
													>
														<span
															class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
															>business / entrepreneurial</span
														>
														<span
															class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
															>ui/ux</span
														>
														<span
															class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
															>product</span
														>
														<span
															class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
															>branding</span
														>
														<span
															class="flex px-3 py-1 font-medium leading-5 rounded-full text-slate-50 bg-slate-400/30 hover:bg-sky-400/20"
															>react / vue / vuetify / css</span
														>
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- set latest updates -->
					<announcement />
				</div>
			</div>
		</div>
		<div
			class="absolute inset-0 top-0 z-0 h-auto bg-bottom bg-no-repeat bottom-10 bg-slate-50 dark:bg-slate-900"
		>
			<img
				src="../assets/herobg.jpg"
				alt=""
				srcset=""
				class="hidden dark:block"
			/>
			<img
				src="../assets/herobg-light.jpg"
				alt=""
				srcset=""
				class="dark:hidden"
			/>
		</div>
	</div>
</template>

<script>
import announcement from './minor/announcement.vue'

export default {
	components: { announcement },
	name: 'intro',
}
</script>
<style>
@import '../index.css';
</style>
