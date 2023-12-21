<template>
  <div class="Loader max-w-xs w-full max-h-96 overflow-hidden m-3 p-1 rounded-full relative">
    <span class="Loader__Circle"></span>
    <span class="Loader__Circle"></span>
    <span class="Loader__Circle"></span>
    <span class="Loader__Circle"></span>
    <img src="/maincharacter.jpg" alt="picture of sebastian" class="rounded-full">
  </div>
</template>
<style>
:root {
  --loader-size: 150px;
  /* Fill data-text */
  --color-one: #e11d48;
  --color-two: #fda4af;
  --color-three: #e11d48;
  --color-four: #ffe4e6;
  --light-size: 6px;
}

/* █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ */



.Loader {}



.Loader::after {
  content: attr(data-text);
  color: #CECECE;
  color: var(--text-color, #CECECE);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}



.Loader {

  /* Keep ratio on resize*/
}



.Loader::before {
  content: '';
  float: left;
  padding-top: 100%;
}



.Loader__Circle {
  display: block;
  position: absolute;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  mix-blend-mode: screen;
  filter: brightness(120%);
  -webkit-animation-name: SpinAround;
  animation-name: SpinAround;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear
}



.Loader__Circle:nth-of-type(1) {
  box-shadow:
    inset 1px 0 0 1px #2979FF,
    3px 0 0 3px #2979FF;
  box-shadow:
    inset 1px 0 0 1px var(--color-one, #2979FF),
    var(--light-size, 4px) 0 0 var(--light-size, 4px) var(--color-one, #2979FF);
  animation-direction: reverse;
  transform-origin: 49.6% 49.8%;
}



.Loader__Circle:nth-of-type(2) {
  box-shadow:
    inset 1px 0 0 1px #FF1744,
    3px 0px 0 3px #FF1744;
  box-shadow:
    inset 1px 0 0 1px var(--color-two, #FF1744),
    var(--light-size, 4px) 0px 0 var(--light-size, 4px) var(--color-two, #FF1744);
  transform-origin: 49.5% 49.8%;
}



.Loader__Circle:nth-of-type(3) {
  box-shadow:
    inset 1px 0 0 1px #FFFF8D,
    0 3px 0 3px #FFFF8D;
  box-shadow:
    inset 1px 0 0 1px var(--color-three, #FFFF8D),
    0 var(--light-size, 4px) 0 var(--light-size, 4px) var(--color-three, #FFFF8D);
  transform-origin: 49.8% 49.8%;
}



.Loader__Circle:nth-of-type(4) {
  box-shadow:
    inset 1px 0 0 1px #B2FF59,
    0 3px 0 3px #B2FF59;
  box-shadow:
    inset 1px 0 0 1px var(--color-four, #B2FF59),
    0 var(--light-size, 4px) 0 var(--light-size, 4px) var(--color-four, #B2FF59);
  transform-origin: 49.7% 49.7%;
}



@-webkit-keyframes SpinAround {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}



@keyframes SpinAround {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
