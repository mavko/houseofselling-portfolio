<template>
	<section class="relative mx-auto large-container">
		<!-- navbar -->
		<nav class="flex text--black w-screen">
			<div class="px-30 py-6 flex w-full">
				<router-link
					to="/"
					class="text-2xl font-bold font-heading flex"
					data-cursor="-opaque"
				>
					<img src="../assets/seb.png" className="w-10 h-10 contain mr-2" />
					<span class="pt-1"> Sebastian Selling </span>
				</router-link>
			</div>
		</nav>
	</section>
</template>
<script>
export default {
	name: 'navbar',
}
</script>
