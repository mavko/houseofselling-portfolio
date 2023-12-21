<template>
	<div class="bg-zinc-950  overflow-hidden">

		<div class="home-bg absolute top-[calc(max(-5rem,40%-98rem)+0rem)] sm:top-[calc(max(2rem,50%-38rem)+0rem)] inset-x-0">
			<div
				class="character border border-white/20 absolute z-10 rounded-full max-w-fit w-full overflow-hidden mx-auto inset-x-0">
				<MainCharacter />
			</div>
			<div class="text-center mx-auto  absolute inset-x-0 bottom-20 sm:bottom-40 terminal-btn z-40 w-full">
				<Commandbar />
			</div>
		</div>

	</div>
</template>

<script setup></script>
<style>
.spotlight {
	background: radial-gradient(50% 50% at 50% 50%, #fff 0, hsla(0, 0%, 100%, 0) 100%);
	opacity: .2;
	transform: rotate(45deg);
	width: 100%;
	top: -80px;
	max-width: 1800px;
}

.home-bg {
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(/rings-bg.svg);
	width: 100%;
	height: 100vh;
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
