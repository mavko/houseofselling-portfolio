<template>
	<div class="bg-black h-screen  overflow-hidden">
		<div class="relative isolate   h-screen">
			<div class="home-bg absolute top-40 inset-x-0">
				<div class="character-bg character ring-2 ring-white/20 absolute z-10"></div>
				<div
					class="character-base ring-1 ring-inset ring-white ring-white/20 rounded-full w-96 h-96 absolute z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-neutral-100 to-neutral-900 opacity-20 ">

				</div>


				<div aria-hidden="true" class="spotlight absolute z-0 h-full top-[15rem]"></div>

				<div class="text-center mx-auto  absolute inset-x-0 bottom-40 terminal-btn">
					<Commandbar />
				</div>
			</div>
			<footer class="w-full overflow-hidden absolute bottom-0">
				<div
					class="translate-y-12 mx-auto relative bottom-0 text-[100%] w-full flex align-center justify-center -z-[1] inset-x-0">
					<h1
						class="text-4xl font-bold tracking-tight bg-gradient-to-r from-white/10 via-white/40 to-white/10 bg-clip-text text-transparent sm:text-[10rem] py-12 font-outline">

						house of selling
					</h1>

				</div>
				<div class="flex py-16 bg-black/70 backdrop-blur-2xl h-10 w-full relative z-[2]">
					<div aria-hidden='true'
						class='absolute top-0 w-full z-10 h-px  bg-gradient-to-r from-slate-400/10 via-white/60 to-slate-400/10'>
					</div>
				</div>
			</footer>

			<!-- <div class="py-24 sm:py-32 lg:pb-40 relative z-20">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-4xl text-center">
						<h1
							class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
						>
							Designer that codes and intrapreneur. Occassional janitor.
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-300">
							I’m Sebastian, a designer and intrapreneur based in Stockholm,
							Sweden. I’ve co-founded the construction apps ispect & icontrol,
							where we enable both 3rd party inspections of construction
							projects in ispect, as well as the in-house checks by the
							contractors of projects via icontrol.
						</p>
						<div
							class="mt-10 flex-row row-auto text-slate-200 max-w-3xl mx-auto divide-y divide-slate-400 border-spacing-1"
						>
							<div class="flex justify-between py-6">
								<div class="font-bold">Currently building:</div>
								<div class="text-indigo-400">
									ispect - the fingerprint of construction
								</div>
							</div>
							<div class="flex justify-between py-6">
								<div class="font-bold">Active in:</div>
								<div class="text-indigo-400">
									Besiktningsman.se - the premier inspector service in Sweden
								</div>
							</div>
							<div class="flex justify-between py-6">
								<div class="font-bold">Previously:</div>
								<div class="text-indigo-400">
									iControl - Never write another report
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script setup></script>
<style>
.spotlight {
	background: radial-gradient(50% 50% at 50% 50%, #fff 0, hsla(0, 0%, 100%, 0) 100%);
	opacity: .1;
	transform: rotate(45deg);
	width: 100%;
	top: -80px;
	max-width: 1800px;
}

.character-bg {
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(/maincharacter.jpg);
	width: 100%;
	height: 100vh;
	max-width: 300px;
	max-height: 300px;
	background-size: contain;
	position: relative;
	background-repeat: no-repeat;
	background-position: 50%;
	border-radius: 100%;

}

.home-bg {
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(/rings-bg.svg);
	width: 100%;
	height: 100vh;
	max-height: 900px;
	background-size: cover;
	position: relative;
	background-repeat: no-repeat;
	background-position: 50%;
}

@keyframes fade1 {
	to {
		opacity: 1;
		filter: blur(0px);
	}
}

@keyframes fade2 {
	to {
		opacity: 0.2;
		filter: blur(0px);
	}
}

.character-base {
	opacity: 0;
	filter: blur(2px);
	animation: fade2 5s ease forwards;
}

.character {
	opacity: 0;
	filter: blur(2px);
	animation: fade1 5s ease forwards;
}

.terminal-btn {
	opacity: 0;
	filter: blur(6px);
	animation: fade1 6s ease forwards;
}

/* CRT text effects */
@keyframes flicker {
	0% {
		opacity: 0.27861;
	}

	5% {
		opacity: 0.34769;
	}

	10% {
		opacity: 0.23604;
	}

	15% {
		opacity: 0.90626;
	}

	20% {
		opacity: 0.18128;
	}

	25% {
		opacity: 0.83891;
	}

	30% {
		opacity: 0.65583;
	}

	35% {
		opacity: 0.67807;
	}

	40% {
		opacity: 0.26559;
	}

	45% {
		opacity: 0.84693;
	}

	50% {
		opacity: 0.96019;
	}

	55% {
		opacity: 0.08594;
	}

	60% {
		opacity: 0.20313;
	}

	65% {
		opacity: 0.71988;
	}

	70% {
		opacity: 0.53455;
	}

	75% {
		opacity: 0.37288;
	}

	80% {
		opacity: 0.71428;
	}

	85% {
		opacity: 0.70419;
	}

	90% {
		opacity: 0.7003;
	}

	95% {
		opacity: 0.36108;
	}

	100% {
		opacity: 0.24387;
	}
}

.crt::after {
	content: ' ';
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(18, 16, 16, 0.1);
	opacity: 0;
	z-index: 2;
	pointer-events: none;
	animation: flicker 0.55s infinite;
}
</style>
