<template>
	<div id="app" class="overflow-x-hidden">
		<navbar />
		<router-view :key="$route.fullPath" />
		<page-footer />
	</div>
</template>

<script>
import navbar from './components/navbar.vue'
import pageFooter from './components/page-footer.vue'

export default {
	name: 'app',

	components: {
		pageFooter,
		navbar,
	},
}
</script>

<style>
@import './styles/custom.css';
</style>
