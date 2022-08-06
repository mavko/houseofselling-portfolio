<template>
	<div>
		<div class="ripple-background filter-me-daddy">
			<div class="circle small shade5">
				<img src="../../assets/graphics/stripe-1.svg" alt="" srcset="" />
			</div>
			<div class="circle large shade3">
				<img src="../../assets/graphics/stripe-1.svg" alt="" srcset="" />
			</div>
			<div class="circle xlarge shade2">
				<img src="../../assets/graphics/stripe-1.svg" alt="" srcset="" />
			</div>

			<div class="circle xxlarge shade1">
				<img src="../../assets/graphics/stripe-1.svg" alt="" srcset="" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'headerBackground',
}
</script>
<style>
/* landing page graphic and animation */
.filter-me-daddy {
	filter: saturate(100%) blur(20px);
	width: 100%;
	background: rgba(28, 73, 85, 0.1);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	touch-action: none;
	user-select: none;
	z-index: -1;
}

.circle {
	position: relative;
	margin: 0 auto;
	z-index: 0;
	animation: ripple 15s infinite;
}

.small {
	position: absolute;
	top: 25%;
	left: 0;
	width: 100%;
	height: 100%;
	margin-top: -200px;
	margin-left: -300px;
	opacity: 0.3;
}

.large {
	position: absolute;
	top: 35%;
	left: 5%;
	width: 100%;
	height: 100%;
	margin-top: -720px;
	margin-left: -250px;
	opacity: 0.3;
}

.xlarge {
	position: absolute;
	top: 45%;
	left: 15%;
	width: 100%;
	height: 100%;
	margin-top: -640px;
	margin-left: -300px;
	opacity: 0.3;
}

.xxlarge {
	position: absolute;
	top: 55%;
	left: 25%;
	width: 100%;
	height: 100%;
	margin-top: -460px;
	margin-left: -350px;
	opacity: 0.3;
}

/* @keyframes ripple {
	0% {
		transform: scale(0.8);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(0.8);
	}
} */
</style>
