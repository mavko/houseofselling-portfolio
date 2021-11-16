<template>
	<div>
		<div class="large-container py-20 lg:py-40 md:py-30 mt-32">
			<h2 class="text-4xl md:text-5xl lg:text-6xl mb-5 font-">Startups</h2>
			<p class="text-2xl md:text-3xl lg:text-4xl font-light">
				Software as a service apps with a focus on the construction industry
			</p>
			<!-- component -->
			<div class="min-w-screen flex relative mt-20">
				<div class="md:flex sm:contents items-center -mx-10">
					<div class="w-full md:w-1/2 pl-10 pr-10">
						<div class="brief mb-10">
							<img
								src="../assets/projects/icontrol/icontrol-logo.svg"
								style="max-width: 240px"
								alt=""
								class="mb-5"
							/>
							<span class="text-lg font-medium"
								>500 Startups Batch 19 Alumni
							</span>
							<hr class="my-6" />
							<p class="brief font-light lg:text-4xl md:text-3xl text-3xl">
								A platform for all your construction documentation.
							</p>
							<span class="brief-responsibility text-2xl mb-5">
								founding member, branding, ui/ux and front-end development
							</span>
							<router-link
								to="/icontrol"
								data-magnetic
								data-cursor="-opaque"
								class="sm:text-2xl md:text-2xl lg:text-2xl mt-5 btn-underlined"
							>
								Read more
							</router-link>
						</div>
					</div>
					<div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 ml-0">
						<div class="relative">
							<router-link
								to="/ispect"
								class="project-link text-black"
								data-magnetic
								data-cursor="-text"
							>
								<img
									src="../assets/projects/icontrol/icontrol-phone.png"
									alt=""
								/>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="large-container py-20 lg:py-40 md:py-30">
			<!-- component -->
			<div class="min-w-screen flex relative my-20">
				<div class="md:flex sm:contents items-center -mx-10">
					<div class="w-full md:w-1/2 pl-10 pr-10">
						<img
							src="../assets/projects/ispect/ispect-logo.svg"
							style="max-width: 160px"
							alt=""
							class="mb-5"
						/>
						<div class="mb-10 brief">
							<p class="brief font-light lg:text-4xl md:text-3xl text-3xl">
								Platform that connects millions of construction defects with
								materials, high risk constructions <br />
								and contractors
							</p>
							<span class="brief-responsibility text-2xl mb-5">
								founding member, branding, ui/ux and front-end development
							</span>
							<router-link
								to="/ispect"
								data-magnetic
								data-cursor="-opaque"
								class="sm:text-2xl md:text-2xl lg:text-2xl mt-5 btn-underlined"
							>
								Read more
							</router-link>
						</div>
					</div>
					<div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 ml-0">
						<div class="relative">
							<router-link
								to="/ispect"
								class="project-link"
								data-magnetic
								data-cursor="-text"
							>
								<img src="../assets/projects/ispect/platform.png" alt="" />
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'projects',
}
</script>
