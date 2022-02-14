<template>
	<div>
		<div class="py-20 mt-32 large-container lg:py-40 md:py-30">
			<h2 class="text-4xl md:text-5xl lg:text-6xl">About me</h2>
			<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
				<div>
					<p class="max-w-lg text-2xl font-light leading-relaxed">
						<br />
						<span class="font-bold">Background</span>
						<br />
						Grew up spending the majority of my time either gaming, dabbling in
						graphic design or riding bikes in all shapes, bmx, mountain bikes,
						motocross, you name it. Never really thought of design as a career
						path until much later in life and I'm very grateful to be where I am
						- to make things for a living.
					</p>
					<p class="max-w-xl mt-5 text-2xl font-light leading-relaxed">
						<span class="font-bold">Career</span>
						<br />
						I've spent the last 10 years building products for the construction
						industry and my main focus areas over the years have been in
						business, product, branding and front-end development.
					</p>
					<span class="max-w-xl mt-5 text-2xl font-light leading-relaxed">
						<div class="mt-5">
							<a
								href="https://calendly.com/sebastian-selling/30min"
								class="px-4 py-2 text-lg font-medium transition duration-300 ease-in-out border-2 border-white rounded-full hover:bg-gray-300 hover:text-black"
								target="_blank"
								data-magnetic
								data-cursor="-opaque"
								>Let's have a chat!</a
							>
						</div>
					</span>
				</div>
				<div className="relative overflow-hidden">
					<img
						src="../assets/maincharacter.jpg"
						alt=""
						class="my-8 rounded-xl bg-gradient-to-t from-slate-900 to-transparent h-3/4"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'aboutMe',
}
</script>
