<template>
	<div id="app" class="antialiased">
		<navbar />
		<div class="container mx-auto">
			<router-view :key="$route.fullPath" />
		</div>
		<page-footer />
	</div>
</template>

<script>
import pageFooter from './components/page-footer.vue'
import Navbar from './components/navbar.vue'

export default {
	name: 'app',

	components: {
		pageFooter,
		Navbar,
	},
}
</script>
<style>
@import './index.css';
</style>
