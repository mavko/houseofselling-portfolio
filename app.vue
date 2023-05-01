<template>
	<div class="bg-slate-950 h-screen">
		<div class="relative isolate crt">
			<div class="absolute inset-0 top-[calc(max(2rem,50%-38rem)+17rem)] z-30">
				<img
					src="/seb.jpg"
					alt=""
					class="rounded-full w-52 h-52 text-center mx-auto"
				/>
				<div class="text-center mx-auto mt-24">
					<Commandbar />
				</div>
			</div>
			<SingularityAnimation />

			<div
				class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-0 lg:flex lg:px-0"
			>
				<div
					class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+38rem)] lg:min-w-[32rem]"
				>
					<svg
						class="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
						aria-hidden="true"
					>
						<defs>
							<radialGradient id=":R1d6:-desktop" cx="100%">
								<stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
								<stop
									offset="53.95%"
									stop-color="rgba(0, 71, 255, 0.09)"
								></stop>
								<stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
							</radialGradient>
							<radialGradient id=":R1d6:-mobile" cy="100%">
								<stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
								<stop
									offset="53.95%"
									stop-color="rgba(0, 71, 255, 0.09)"
								></stop>
								<stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
							</radialGradient>
						</defs>
						<rect
							width="100%"
							height="100%"
							fill="url(#:R1d6:-desktop)"
							class="hidden lg:block"
						></rect>
						<rect
							width="100%"
							height="100%"
							fill="url(#:R1d6:-mobile)"
							class="lg:hidden"
						></rect>
					</svg>
					<div
						class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"
					></div>
				</div>
			</div>
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
