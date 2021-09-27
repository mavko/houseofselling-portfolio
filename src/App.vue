<template>
	<div>
		<!-- Header -->
			<div style="border-bottom: 1px solid rgb(39, 55, 76);" class="hp-banner overflow-hidden ">
				<div class="">
					<about-me />
				</div>
			</div>
			<div class="hp-banner">
					<!-- Main Projects -->
					<projects />
					<!-- General design work -->
					<general-work />

			</div>
			<page-footer />
	</div>
</template>

<script>
import pageTitle from './components/page-title.vue'
import aboutMe from './components/about-me.vue'
import projects from './components/projects.vue'
import themeSwitch from './components/theme-switch.vue'
import pageFooter from './components/page-footer.vue'
import generalWork from './components/work.vue'


import jQuery from "jquery";
const $ = jQuery;
window.$ = $;


// jQuery(document).ready(function ($) {

// 	//mouseover
// 	var mouseX = 0, mouseY = 0;
// 	var xp = 0, yp = 0;
	
// 	$('.hp-banner').mousemove(function(e){
// 		mouseX = e.pageX;
// 		mouseY = e.pageY; 
// 	});
		
// 	setInterval(function(){
// 		xp += ((mouseX - xp)/6);
// 		yp += ((mouseY - yp)/6);
// 		$("#circle-hover").css({left: xp +'px', top: yp +'px'});
// 	}, 20);


// });
 

export default {
	name: 'landing',
	components: {
		pageTitle,
		aboutMe,
		projects,
		themeSwitch,
		pageFooter,
		generalWork
	},

	mounted() {

	}
}
</script>

<style>
  @import './styles/custom.css';
</style>
