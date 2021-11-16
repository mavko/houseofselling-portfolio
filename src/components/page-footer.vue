<template>
	<div
		class="
			w-full
			min-h-screen
			flex
			items-center
			justify-center
			py-20
			large-container
			lg:py-40
			md:py-30
		"
	>
		<div class="w-full px-4 text-white flex flex-col">
			<div class="w-full">
				<h1 class="w-full md:w-2/3 sm:pt-20 text-4xl lg:text-7xl font-bold">
					Got a project?
				</h1>
				<br />
				<p class="text-3xl lg:text-5xl font-bold">Tell me about it</p>
			</div>
			<div class="flex mt-8 flex-col md:flex-row md:justify-between">
				<div class="w-55 pt-6 md:pt-0">
					<a
						href="mailto:sebastian.selling@outlook.com"
						class="
							font-bold
							text-center
							rounded-full
							border-2 border-gray-300
							hover:bg-gray-300 hover:text-black
							cursor-pointer
							hover:scale-125
							transition-all
							duration-150
							ease
							px-10
							py-4
						"
						data-magnetic
						data-cursor="-opaque"
					>
						Send me a message
					</a>
				</div>
			</div>
			<div class="flex flex-col">
				<div
					class="
						flex
						mt-24
						mb-12
						md:flex-row
						sm:flex-inline
						justify-between
						sm:text-2xl
						md:text-2xl
						lg:text-4xl
					"
				>
					<div
						class="
							flex flex-row
							space-x-8
							justify-between
							pt-10
							md:pt-0
							lg:pt-0
							text-lg
						"
					>
						<div class="text-lg">House of Selling</div>
						<div data-magnetic data-cursor="-opaque">
							<a
								href="https://www.dribbble.com/sebastianselling"
								target="_blank"
							>
								Dribbble
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque">
							<a
								href="https://www.linkedin.com/in/sebastianselling/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque">
							<a
								href="https://www.instagram.com/sebastian.selling"
								target="_blank"
							>
								Instagram
							</a>
						</div>
					</div>
				</div>
				<hr class="border-gray-600" />
				<p class="w-full text-center my-12 text-gray-600">
					Copyright © 2021 House of Selling
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'pageFooter',
}
</script>
