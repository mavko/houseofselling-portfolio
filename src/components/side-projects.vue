<template>
	<!--
		TO DO:
		ENABLE SIDE SCROLL + TOUCH SCROLL LIKE CUBERTO
		NEED TO MAKE THESE INTO COMPONENTS
-->
	<div class="large-container">
		<div class="py-16 sm:py-24">
			<h2 class="brief font-light lg:text-5xl md:text-3xl text-3xl">
				Side projects
			</h2>
			<p class="text-lg py-5">Some work for fun or practice</p>

			<div
				class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
			>
				<!-- post 0 -->
				<div class="group relative">
					<div
						class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 lg:aspect-none"
					>
						<img
							src="../assets/projects/hobby/globularexpirement.png"
							alt="Netflix Clone"
							class="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-1xl"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a
									href="https://vigorous-lumiere-acf9a2.netlify.app/"
									target="_blank"
								>
									<span aria-hidden="true" class="absolute inset-3"
										>Globe 3D and animated text expirement</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">
								ThreeJS landing page
							</p>
						</div>
					</div>
				</div>
				<!-- post 1 -->
				<div class="group relative">
					<div
						class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 lg:aspect-none"
					>
						<img
							src="../assets/projects/hobby/netflix_clone_cover.png"
							alt="Netflix Clone"
							class="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-1xl"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="https://netflix-clone-d8976.web.app/" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Netflix Clone</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">
								Can currently press a title and import trailers (albeit a bit
								random)
							</p>
						</div>
					</div>
				</div>
				<!-- post 2 -->
				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
					>
						<video controls autoplay>
							<source
								src="../assets/graphics/cc_network.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Creative coding - Network</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">Canvas.js</p>
						</div>
					</div>
				</div>
				<!-- post 3 -->
				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
					>
						<video controls autoplay>
							<source
								src="../assets/graphics/gohst_grid.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Creative coding - Grid of ghosts</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">Canvas.js</p>
						</div>
					</div>
				</div>
				<!-- post 4 -->
				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
					>
						<video controls autoplay>
							<source src="../assets/graphics/spirals.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Creative coding - Spirals</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">Canvas.js</p>
						</div>
					</div>
				</div>
				<!-- post 5 -->
				<div class="group relative">
					<div
						class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
					>
						<img
							src="../assets/graphics/sebastian_selling_logotype1080.png"
							alt=""
							srcset=""
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Personal logo iterations</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">
								Tried my best to stay very minimal with my brand and let my
								content/work take center stage
							</p>
						</div>
					</div>
				</div>
				<!-- post 5 -->
				<div class="group relative">
					<div
						class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
					>
						<img src="../assets/graphics/gradiancelogo.png" alt="" srcset="" />
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-gray-100 font-bold font-2xl">
								<a href="#" target="_blank">
									<span aria-hidden="true" class="absolute inset-3"
										>Gradiance</span
									>
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-300 font-medium">
								Something that I worked on a friday evening that ended up as my
								brand base and landing page header √
							</p>
						</div>
					</div>
				</div>
				<!-- More products... -->
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'sideProjects',
}
</script>
