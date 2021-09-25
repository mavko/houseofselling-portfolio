<template>
	<div class="">
		<!-- Header -->
		<!-- <div 
			class="overlay-inner flex justify-center relative z-1"
		>
			<div class="w-full m-auto py-28" style="max-width: 1080px;">
				<page-title />
				<hire-btn />
			</div>
			<div class="bg-top-planet"></div>
			<div class="bg-middle-planet"></div>

		</div> -->
		<div class="w-full p-20">
			<div class="" style="width: 100%; max-width: 1080px; margin: 0 auto">
					<div class="bg-top-planet"></div>
					<div class="bg-middle-planet"></div>
					<!-- Moi -->
					<about-me />
					<!-- Main Projects -->
					<h2 class="text-5xl ">My projects</h2>
					<projects />
					<!-- General design work -->
					<general-work />

			</div>
		</div>
		<page-footer />
	</div>
</template>

<script>
import gradientOrbs from './components/gradient-orbs.vue'
import hireBtn from './components/hire-btn.vue'
import pageTitle from './components/page-title.vue'
import aboutMe from './components/about-me.vue'
import projects from './components/projects.vue'
import themeSwitch from './components/theme-switch.vue'
import pageFooter from './components/page-footer.vue'
import generalWork from './components/work.vue'

export default {
	name: 'landing',
	components: {
		hireBtn,
		pageTitle,
		aboutMe,
		projects,
		themeSwitch,
		gradientOrbs,
		pageFooter,
		generalWork
	},
}
</script>

<style>
  @import './styles/custom.css';
</style>
