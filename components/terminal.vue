<template>
	<div
		class="relative flex bg-neutral-900/90 backdrop-blur-lg border border-white/20 overflow-hidden shadow-2xl shadow-neutral-500/10  rounded-2xl max-w-2xl">
		<div class="relative flex flex-col w-full">
			<div class="flex-none border-b border-white/20">
				<div class="flex items-center h-8 space-x-1.5 p-5">
					<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
					<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
					<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
				</div>
			</div>
			<div class="relative">
				<div class="flex flex-auto">
					<div class="relative flex-auto w-full h-auto max-w-xs md:max-w-full">
						<pre class="flex h-full text-sm leading-6">
							<code   
								ref="codeRef"
								class="relative flex-auto md:block m-h-[50vh] pl-1.5 pr-3 text-white/80 inline-block  py-6 ml-3 text-sm leading-relaxed"
							>
								<div id="terminal-text" class="whitespace-normal">
									<div id="code" class="whitespace-normal"></div>
								</div>
							</code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'

const codeRef = ref(null)

onMounted(() => {
	if (!codeRef.value) return

	const typewriter = new Typewriter(codeRef.value, {
		loop: false,
		delay: 0.000000000000000001,
	})

	typewriter
		.typeString(
			'<span class="text-rose-400 font-mono">INITIALISING CONNECTION</span><br/>'
		)
		.pauseFor(0.01)
		.typeString('WAITING...................<br>')
		.pauseFor(0.01)
		.typeString(
			'<span class="whitespace-normal font-mono">[ FOUND CONNECTION ] <span class="text-white">House of Selling</span>  </span><br>'
		)
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString('[ LOCATING NETWORK INFORMATION ]<br>')
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString(
			'[ LOCAL ] <span class="whitespace-normal text-white">Stockholm / Sweden</span> <br>[ NETWORK ] IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer"  class="mr-3 text-rose-400 link font-mono whitespace-normal">https://linkedin/sebastianselling/</a> <br>'
		)
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString('[ LOADING BIO DATA ]<br>')
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString(
			'[ BIO ACCESSED ]<span class="whitespace-normal text-white"> Designer who codes. Over a decade of building and designing products. </span><br>'
		)
		.typeString('[ LOADING ARCHIVE DATA ]<br>')
		.typeString('..........................<br>')
		.typeString(
			'[ STARTING UP ] <a href="https://www.drykit.co" target="_blank"  rel="noopener noreferrer" class="mr-1 text-rose-400 whitespace-normal">	// drykit.co ❯ Revolutionary moisture detection sensor that keeps you and your home safe from mold. </a><br>'
		)
		.typeString(
			'[ CONTRIBUTOR ] <a href="https://www.besiktningsman.se" target="_blank"  rel="noopener noreferrer" class="mr-1 text-rose-400 whitespace-normal">	// besiktningsman.se ❯ Swedens premier construction inspection agency</a><br>'
		)
		.typeString(
			'[ MAINTAINING ] <a href="https://www.ispect.se" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-rose-400 whitespace-normal">	// ispect.se ❯ The standardized inspection app</a><br>'
		)

		.typeString(
			'[ PREVIOUSLY ] <a href="https://www.icontrolapp.se" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-rose-400 whitespace-normal">	// icontrol ❯ replaces paper with an app out on the field </a><br>'
		)
		.typeString(
			'[ ALUMNI ] <a href="https://www.crunchbase.com/organization/icontrol-2" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-rose-400 whitespace-normal">	// ❯ 500 STARTUPS</a><br>'
		)
		.start()
})
</script>
