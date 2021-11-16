<template>
	<div id="app">
		<!-- Header -->
		<div class="py-20">
			<landing-header />
		</div>
		<div class="pt-20 mt-20" style="border-bottom: 1px solid rgb(39, 55, 76)">
			<!-- Main Projects -->
			<projects />
			<!-- General design work -->
			<drib />
			<!-- gallery of hobby projects -->
			<sideProjects />
		</div>
	</div>
</template>

<script>
import landingHeader from '../components/landing-header.vue'
import projects from '../components/projects.vue'
import drib from '../components/dribbble.vue'
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
		landingHeader,
		projects,
		drib,
		sideProjects,
	},

	mounted() {},
}
</script>
