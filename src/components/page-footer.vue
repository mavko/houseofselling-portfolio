<template>
	<div class="container mx-auto">
		<div
			class="flex flex-col w-full text-lg font-semibold text-slate-50 crt site-title"
		>
			<div class="flex flex-col">
				<div class="flex justify-between mb-12 md:flex-row sm:flex-inline">
					<div
						class="pt-10 space-y-8 text-lg md:flex lg:flex md:flex-row lg:flex-row md:space-x-8 lg:space-x-8 md:pt-0 lg:pt-0 md:space-y-0 lg:space-y-0"
					>
						<div class="text-lg">Find me around the web:</div>
						<div data-magnetic data-cursor="-opaque" class="text-xl">
							<a
								href="https://www.dribbble.com/sebastianselling"
								target="_blank"
							>
								Dribbble
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="text-xl">
							<a href="https://www.github.com/mavko" target="_blank">
								Github
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="text-xl">
							<a
								href="https://www.linkedin.com/in/sebastianselling/"
								target="_blank"
							>
								Linkedin
							</a>
						</div>
						<div data-magnetic data-cursor="-opaque" class="text-xl">
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
				<p class="w-full my-12 text-lg text-gray-600">
					❯ [ © 2022 House of Selling ]
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
