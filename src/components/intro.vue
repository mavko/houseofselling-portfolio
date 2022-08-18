<template>
	<div class="container relative h-screen pt-32 pb-12 mx-auto" id="intro">
		<div class="justify-end pb-5 font-semibold text-md crt site-title">
			<div id="terminal-text">
				<div id="code"></div>
			</div>
			<!-- <div class="mr-3 text-xl">❯ cd welcome / to / houseofselling</div>
			<span class="mr-3 text-xl">> [ hos v2.8.4 running ]</span>
			<br />
			<div class="mr-3 text-xl">
				> Local:
				<span style="color: #3ff0ed !important" class="mr-3">
					3000/sebastianselling
				</span>
				<br />
				> Network:

				<a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer" data-magnetic data-cursor="-opaque" style="color: #3ff0ed !important" class="mr-3">http://linkedin/sebastianselling/</a>

				<br />
				> designer and dev.
			</div>

			<p class="mr-3 text-xl">
				
				I've spent the last 10 years taking ideas from zero to one, <br />
				building products in construction mainly.
			</p>

			<p class="text-lg font-bold">Currently:</p>
			<div data-magnetic data-cursor="-opaque" class="text-lg font-bold"><router-link to="/ispect" class="btn-underlined">	// BUILDING ❯ ISPECT</router-link></div>
			<p class="text-lg font-bold">Previously:</p>
			<div data-magnetic data-cursor="-opaque" class="text-lg font-bold"><router-link to="/icontrol" class="btn-underlined">	// BUILT ❯ ICONTROL</router-link></div> -->
		</div>
	</div>
</template>

<script>
import HeaderBackground from './minor/header-background.vue'
import Typewriter from 'typewriter-effect/dist/core'
export default {
	components: { HeaderBackground },
	name: 'intro',
	mounted() {
		var terminal = document.getElementById('code')

		var typewriter = new Typewriter(terminal, {
			loop: false,
			delay: 0.01,
		})

		typewriter
			.typeString('INITIALISING CONNECTION<br/><br/>')
			.pauseFor(250)
			.typeString('WAITING...................<br>')
			.pauseFor(250)
			.typeString('<br/><br/>[ FOUND CONNECTION : HOUSE OF SELLING ]<br>')
			.typeString('..........................<br>')
			.pauseFor(250)
			.typeString('<br>[ LOCATING NETWORK INFORMATION ]<br>')
			.typeString('..........................<br>')
			.pauseFor(250)
			.typeString(
				'<br>[ LOCAL : 3000 / SEBASTIAN SELLING ]<br><br>[ NETWORK : IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer" data-magnetic data-cursor="-opaque" style="color: #3ff0ed !important" class="mr-3">http://linkedin/sebastianselling/</a> ]<br>'
			)
			.typeString('..........................<br>')
			.pauseFor(250)
			.typeString('<br>[ LOADING BIO DATA ]<br>')
			.typeString('..........................<br>')
			.pauseFor(250)
			.typeString(
				'<br>[ BIO ACCESSED : Designer who codes. 10 years of building and designing products. ]<br>'
			)
			.typeString('<br>[ LOADING ARCHIVE DATA ]<br>')
			.typeString('..........................<br>')
			.typeString(
				'<br>[ CURRENTLY : <a href="/ispect"  rel="noopener noreferrer" data-magnetic data-cursor="-opaque" style="color: #3ff0ed !important" class="mr-3">	// BUILDING ❯ ISPECT</a> ]<br>'
			)
			.typeString(
				'<br>[ PREVIOUSLY : <a href="/icontrol"  rel="noopener noreferrer" data-magnetic data-cursor="-opaque" style="color: #3ff0ed !important" class="mr-3">	// BUILT ❯ ICONTROL</a> ]<br>'
			)
			.start()
	},
}
</script>
<style>
@import '../index.css';
</style>
