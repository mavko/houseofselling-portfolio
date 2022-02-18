<template>
	<div id="app">
		<!-- Header -->
		<section id="intro"><intro /></section>

		<!-- Main Projects -->
		<section id="career">
			<career />
		</section>
		<!-- gallery of hobby projects -->
		<section id="sideprojects">
			<sideProjects />
		</section>
	</div>
</template>

<script>
import intro from '../components/intro.vue'
import career from '../components/career.vue'
import sideProjects from '../components/side-projects.vue'

import jQuery from 'jquery'
const $ = jQuery
window.$ = $

if (history.scrollRestoration) {
	history.scrollRestoration = 'manual'
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0)
	}
}

export default {
	name: 'landing',
	components: {
		intro,
		career,
		sideProjects,
	},

	mounted() {
		var section = this.$router.currentRoute.value.hash.replace('#', '')
		if (section)
			this.$nextTick(() =>
				window.document.getElementById(section).scrollIntoView()
			)
	},
}
</script>
<style>
@import '../index.css';
</style>
