<template>
	<div class="">
		<theme-switch />
		<!-- Header -->
		<div 
			class="overlay-inner flex justify-center relative z-1"
		>
			<div class="w-full m-auto py-28" style="max-width: 1080px;">
				<!-- Title -->
				<page-title />
				<!-- available -->
				<hire-btn />
			</div>
			<!-- animated orbs bg -->
			<gradient-orbs />
		</div>
		<div class="w-full p-20">
			<div class="" style="width: 100%; max-width: 1080px; margin: 0 auto">
				<div>
					<!-- Moi -->
					<h2 class="text-5xl ">Background</h2>
					<about-me />
					<!-- Main Projects -->
					<h2 class="text-5xl ">My projects</h2>
					<projects />
				</div>
				<div id="availability">
					<button class="overlay__btn overlay__btn--transparent">
						<a href="https://dribbble.com/sebastianselling" target="_blank">
							👨‍💻 Selection of my work on Dribbble
						</a>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import gradientOrbs from './components/gradient-orbs.vue'
import hireBtn from './components/hire-btn.vue'
import pageTitle from './components/page-title.vue'
import aboutMe from './components/about-me.vue'
import projects from './components/projects.vue'
import themeSwitch from './components/theme-switch.vue'

export default {
	name: 'landing',
	components: {
		hireBtn,
		pageTitle,
		aboutMe,
		projects,
		themeSwitch,
		gradientOrbs
	},
}
</script>

<style>
  @import './styles/custom.css';
</style>
