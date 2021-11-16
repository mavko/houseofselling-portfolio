<template>
	<div class="large-container pt-44">
		<!-- component -->
		<div class="relative">
			<div class="w-full h-94">
				<div class="text-center m-auto">
					<h1
						class="
							lg:text-7xl
							md:text-5xl
							text-4xl
							font-semibold
							text-center
							pb-5
						"
					>
						Hey, I'm Sebastian Selling
					</h1>
					<p class="text-2xl lg:text-4xl md:text-3xl font-light text-center">
						Multidisciplinary designer & frontend dev.
					</p>

					<div class="my-10 text-center m-auto">
						<a
							href="mailto:sebastian.selling@outlook.com"
							class="
								rounded-full
								border-2 border-white
								hover:bg-gray-300 hover:text-black
								transition
								duration-300
								ease-in-out
								text-lg
								py-4
								px-12
							"
							data-magnetic
							data-cursor="-opaque"
						>
							Hire me
						</a>
					</div>
				</div>
			</div>
			<header-background />
		</div>
	</div>
</template>
<script>
import headerBackground from './header-background.vue'
export default {
	name: 'landingHeader',
	components: {
		headerBackground,
	},
}
</script>
