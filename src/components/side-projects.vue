<template>
	<!--
		TO DO:
		ENABLE SIDE SCROLL + TOUCH SCROLL LIKE CUBERTO
		NEED TO MAKE THESE INTO COMPONENTS
-->
	<div class="large-container">
		<div class="w-100 pb-40">
			<h2 class="lg:text-5xl md:text-4xl text-2xl font-light">Side projects</h2>
			<p class="text-lg py-5">These projects are mostly for fun and practice</p>
			<div
				class="
					mt-6
					grid grid-cols-1
					gap-y-10 gap-x-6
					sm:grid-cols-2
					lg:grid-cols-4
					xl:gap-x-8
					overflow-y-hidden overflow-x-scroll
				"
			>
				<!-- first post -->
				<div
					class="group relative project-link"
					data-magnetic
					data-cursor="-text"
				>
					<div
						class="
							w-full
							min-h-80
							bg-gray-200
							aspect-w-1 aspect-h-1
							rounded-lg
							overflow-hidden
							lg:h-80 lg:aspect-none
						"
					>
						<img
							src="../assets/projects/hobby/netflix_clone_cover.png"
							alt="Netflix Clone"
							class="
								w-full
								h-full
								object-center object-cover
								lg:w-full lg:h-full
								rounded-1xl
							"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-3xl">
								<a href="https://netflix-clone-d8976.web.app/" target="_blank">
									<span aria-hidden="true" class="absolute inset-0"></span>
									Netflix Clone
								</a>
							</h3>
							<p class="mt-1 text-lg">
								Can currently press a title and import trailers (albeit a bit
								random)
							</p>
						</div>
					</div>
				</div>
				<!-- second post -->
				<div
					class="group relative project-link"
					data-magnetic
					data-cursor="-text"
				>
					<div
						class="
							w-full
							min-h-80
							bg-gray-200
							aspect-w-1 aspect-h-1
							rounded-lg
							overflow-hidden
							lg:h-80 lg:aspect-none
						"
					>
						<img
							src="../assets/projects/hobby/igclone.jpg"
							alt="Netflix Clone"
							class="
								w-full
								h-full
								object-center object-cover
								lg:w-full lg:h-full
								rounded-1xl
							"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-3xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-0"></span>
									IG 2.0 Clone
								</a>
							</h3>
							<p class="mt-1 text-lg">Coming soon! :)</p>
						</div>
					</div>
				</div>
			</div>
			<!-- More products... -->
		</div>
	</div>
</template>
<script>
export default {
	name: 'sideProjects',
}
</script>
