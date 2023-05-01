<template>
	<div class="font-semibold text-md crt site-title">
		<div class="relative">
			<div
				class="relative flex *rounded-xl bg-slate-900/70 backdrop-blur ring-1 ring-inset ring-white/10"
			>
				<div class="relative flex flex-col w-full">
					<div class="flex-none border-b border-slate-500/30">
						<div class="flex items-center h-8 space-x-1.5 px-3">
							<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
							<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
							<div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
						</div>
					</div>
					<div class="relative">
						<div class="flex flex-auto">
							<div class="relative flex-auto w-full h-auto">
								<pre class="flex h-full text-sm leading-6">
											<div aria-hidden="true" class="flex-none hidden pr-4 text-right select-none md:block text-slate-600" style="width:50px">
	1
	2
	3
	4
	5
	6
	7
	8
	9
	10
	11
	12
	13
	14
	15
	16
	17
	18
	19
	20
	21
											</div>
											<code   
                        ref="codeRef"
                        class="relative flex-auto md:block m-h-[50vh] px-4  text-slate-50 inline-block max-w-xs md:max-w-full"
                      >
												<div id="terminal-text">
													<div id="code"></div>
												</div>
											</code>
										</pre>
							</div>
						</div>
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
		delay: 0.01,
	})

	typewriter
		.typeString('INITIALISING CONNECTION<br/>')
		.pauseFor(150)
		.typeString('WAITING...................<br>')
		.pauseFor(150)
		.typeString(
			'<span class="whitespace-normal">[ FOUND CONNECTION : HOUSE OF SELLING ]</span><br>'
		)
		.typeString('..........................<br>')
		.pauseFor(150)
		.typeString('[ LOCATING NETWORK INFORMATION ]<br>')
		.typeString('..........................<br>')
		.pauseFor(150)
		.typeString(
			'[ LOCAL : 3000 / SEBASTIAN SELLING ]<br>[ NETWORK : IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer" style="color: #3ff0ed !important" class="mr-3">http://linkedin/sebastianselling/</a> ]<br>'
		)
		.typeString('..........................<br>')
		.pauseFor(150)
		.typeString('[ LOADING BIO DATA ]<br>')
		.typeString('..........................<br>')
		.pauseFor(150)
		.typeString(
			'<span class="whitespace-normal">[ BIO ACCESSED : Designer who codes. 10 years of building and designing products. ]</span><br>'
		)
		.typeString('[ LOADING ARCHIVE DATA ]<br>')
		.typeString('..........................<br>')
		.typeString(
			'CURRENTLY : <a href="https://www.ispect.se"  rel="noopener noreferrer" style="color: #3ff0ed !important" class="mr-3">	// BUILDING ❯ ISPECT</a><br>'
		)
		.typeString(
			'PREVIOUSLY : <a href="https://www.icontrolapp.se"  rel="noopener noreferrer"  style="color: #3ff0ed !important" class="mr-3">	// BUILT ❯ ICONTROL</a><br>'
		)
		.start()
})
</script>
