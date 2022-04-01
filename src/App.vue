<template>
	<div id="app" class="antialiased bg-slate-50 dark:bg-[#0b0c0d]">
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
@import './index.css';
</style>
