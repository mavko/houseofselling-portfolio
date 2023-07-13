<template>
	<div class="font-semibold text-md crt site-title font-mono crt">
		<div class="relative">
			<div class="relative flex rounded-3xl bg-black/60 backdrop-blur ring-2 ring-inset ring-white/20 overflow-hidden">
				<div class="relative flex flex-col w-full">
					<div class="flex-none border-b border-white/30">
						<div class="flex items-center h-8 space-x-1.5 p-5">
							<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
							<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
							<div class="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
						</div>
					</div>
					<div class="relative">
						<div class="flex flex-auto">
							<div class="relative flex-auto w-full h-auto">
								<pre class="flex h-full text-sm leading-6">
											<div aria-hidden="true" class="flex-none hidden pr-4 text-right select-none md:block text-white/20" style="width:50px">
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
                        class="relative flex-auto md:block m-h-[50vh] px-4 text-gray-400 inline-block max-w-xs md:max-w-full pt-6"
                      >
												<div id="terminal-text">
													<div id="code font-mono"></div>
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
		delay: 0.00000000000001,
	})

	typewriter
		.typeString(
			'<span class="text-indigo-400 font-mono">INITIALISING CONNECTION</span><br/>'
		)
		.pauseFor(0.01)
		.typeString('WAITING...................<br>')
		.pauseFor(0.01)
		.typeString(
			'<span class="whitespace-normal font-mono">[ FOUND CONNECTION ] <span class="text-fuchsia-300">HOUSE OF SELLING</span>  </span><br>'
		)
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString('[ LOCATING NETWORK INFORMATION ]<br>')
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString(
			'[ LOCAL ] STOCKHOLM / SWEDEN <br>[ NETWORK ] IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer"  class="mr-3 text-indigo-600 link font-mono">https://linkedin/sebastianselling/</a> <br>'
		)
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString('[ LOADING BIO DATA ]<br>')
		.typeString('..........................<br>')
		.pauseFor(0.01)
		.typeString(
			'<span class="whitespace-normal">[ BIO ACCESSED ] Designer who codes. 10 years of building and designing products. </span><br>'
		)
		.typeString('[ LOADING ARCHIVE DATA ]<br>')
		.typeString('..........................<br>')
		.typeString(
			'[ CURRENTLY ] <a href="https://www.ispect.se" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-indigo-400">	// BUILDING ❯ ISPECT</a><br>'
		)

		.typeString(
			'[ PREVIOUSLY ] <a href="https://www.icontrolapp.se" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-indigo-400">	// BUILT ❯ ICONTROL</a><br>'
		)
		.typeString(
			'[ CONTRIBUTOR ] <a href="https://www.besiktningsman.se" target="_blank"  rel="noopener noreferrer" class="mr-1 text-blue-400">	// BESIKTNINGSMAN.SE ❯ SWEDENS PREMIER B2B INSPECTION SERVICE</a><br>'
		)
		.typeString(
			'[ ALUMNI ] <a href="https://www.crunchbase.com/organization/icontrol-2" target="_blank"  rel="noopener noreferrer"  class="mr-1 text-indigo-400">	// ❯ 500 STARTUPS</a><br>'
		)
		.start()
})
</script>
