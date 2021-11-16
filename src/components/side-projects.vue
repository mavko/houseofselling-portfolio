<template>
	<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
	<div class="large-container py-20 lg:py-40 md:py-30">
		<div class="max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="lg:text-5xl md:text-4xl text-2xl font-light mb-20">
				Projects for fun
			</h2>

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
				<div
					class="group relative project-link"
					data-magnetic
					data-cursor="-opaque"
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
							"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-3xl">
								<a href="https://netflix-clone-d8976.web.app/">
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
