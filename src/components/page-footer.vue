<template>
	<div class="container mx-auto">
		<div class="flex flex-col w-full px-4 text-slate-900 dark:text-slate-50">
			<div class="w-full">
				<h1 class="w-full text-4xl font-bold md:w-2/3 sm:pt-20 lg:text-6xl">
					Got a project?
				</h1>
				<br />
				<p class="text-3xl font-light lg:text-4xl">Tell me about it</p>
			</div>
			<div class="flex flex-col mt-8 md:flex-row md:justify-between">
				<div class="pt-6 w-55 md:pt-0">
					<a
						href="mailto:sebastian.selling@outlook.com"
						class="px-10 py-4 font-bold text-center transition-all duration-150 border-2 border-gray-300 rounded-full cursor-pointer hover:bg-gray-300 hover:text-black hover:scale-125 ease"
						data-magnetic
						data-cursor="-opaque"
					>
						Send me a message
					</a>
				</div>
			</div>
			<div class="flex flex-col">
				<div
					class="flex justify-between mt-24 mb-12 md:flex-row sm:flex-inline sm:text-2xl md:text-2xl lg:text-4xl"
				>
					<div
						class="pt-10 space-y-8 text-lg md:flex lg:flex md:flex-row lg:flex-row md:space-x-8 lg:space-x-8 md:pt-0 lg:pt-0 md:space-y-0 lg:space-y-0"
					>
						<div class="text-lg">
							<router-link
								to="/"
								class="flex text-2xl font-bold font-heading"
								data-cursor="-opaque"
							>
								<img
									src="../assets/seb.png"
									className="w-10 h-10 contain mr-2"
								/>
								<span class="pt-2"> Sebastian Selling </span>
							</router-link>
						</div>
						<div data-magnetic data-cursor="-opaque" class="pt-2 text-2xl">
							<a
								href="https://www.dribbble.com/sebastianselling"
								target="_blank"
							>
								Dribbble
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="pt-2 text-2xl">
							<a href="https://www.github.com/mavko" target="_blank">
								Github
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="pt-2 text-2xl">
							<a
								href="https://www.linkedin.com/in/sebastianselling/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="pt-2 text-2xl">
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
				<p class="w-full my-12 text-center text-gray-600">
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
