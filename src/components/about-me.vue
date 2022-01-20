<template>
	<div>
		<div class="large-container py-20 lg:py-40 md:py-30 mt-32">
			<h2 class="text-4xl md:text-5xl lg:text-6xl">About me</h2>
			<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
				<div>
					<p class="text-2xl font-light leading-relaxed max-w-lg">
						<br />
						<span class="font-bold">Background</span>
						<br />
						Grew up spending the majority of my time either gaming, dabbling in
						graphic design or riding bikes in all shapes, bmx, mountain bikes,
						motocross, you name it. Never really thought of design as a career
						path until much later in life and I'm very grateful to be where I am
						- to make things for a living.
					</p>
					<p class="text-2xl font-light leading-relaxed max-w-xl mt-5">
						<span class="font-bold">Career</span>
						<br />
						I've spent the last 10 years building products for the construction
						industry and my main focus areas over the years have been in
						business, product, branding and front-end development.
					</p>
					<p class="text-2xl font-light leading-relaxed max-w-xl mt-5">
						<span class="font-bold">Going forward</span>
						<br />
						I'm currently a free agent and looking for a new home. I thrive in
						the startup enviroment and love taking ideas from zero to one.
						<br />
            <div class="mt-5">
              <a
                href="https://calendly.com/sebastian-selling/30min"
                class="rounded-full border-2 border-white hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out text-lg py-2 px-4 font-medium"
                target="_blank"
                data-magnetic
                data-cursor="-opaque"
                >Let's have a chat!</a
              >

            </div>
					</p>
				</div>
				<div>
					<img
						src="../assets/maincharacter.jpg"
						alt=""
						class="my-8 rounded-xl"
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
