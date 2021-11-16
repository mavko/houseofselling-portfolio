<template>
	<div class="large-container py-20 lg:py-40 md:py-30">
		<!-- component -->
		<div class="min-w-screen flex relative my-20">
			<div class="md:flex sm:contents items-center -mx-10">
				<div class="w-full md:w-1/2 pl-10 pr-10">
					<div class="mb-10">
						<p class="lg:text-4xl md:text-3xl text-3xl font-light brief">
							A selection of my work from over the years
						</p>
						<span class="brief-responsibility text-2xl">
							illustrations, branding and UIs
						</span>
						<div
							class="sm:text-2xl md:text-2xl lg:text-2xl mt-5"
							data-magnetic
							data-cursor="-opaque"
						>
							<a
								href="https://www.dribbble.com/sebastianselling"
								target="_blank"
								rel="noopener noreferrer"
								class="btn-underlined"
							>
								Go to Dribbble
							</a>
						</div>
					</div>
				</div>
				<div
					class="w-full md:w-1/2 px-10 mb-10 md:mb-10 ml-0"
					data-magnetic
					data-cursor="-text"
				>
					<div class="relative">
						<a
							href="https://dribbble.com/sebastianselling"
							target="_blank"
							rel="noopener noreferrer"
							class="project-link"
						>
							<img src="../assets/drib.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'drib',
}
</script>
