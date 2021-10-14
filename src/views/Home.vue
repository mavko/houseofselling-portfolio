<template>
	<div id="app">
		<!-- Header -->
			<div class="overflow-hidden hp-banner" style="border-bottom: 1px solid rgb(39, 55, 76);">
					<about-me />
			</div>
			<div class="" style="border-bottom: 1px solid rgb(39, 55, 76);" >
					<!-- Main Projects -->
					<projects />
					<!-- General design work -->
					<general-work />
			</div>
			<page-footer />
	</div>
</template>

<script>
import pageTitle from '../components/page-title.vue'
import aboutMe from '../components/about-me.vue'
import projects from '../components/projects.vue'
import themeSwitch from '../components/theme-switch.vue'
import generalWork from '../components/work.vue'

import jQuery from 'jquery'
const $ = jQuery
window.$ = $

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


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
		generalWork
	},

	mounted() {
	}
}
</script>

