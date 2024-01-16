<script setup lang="ts">
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';

const el = ref();
const phi = ref(0);

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 800 * 2,
    height: 800 * 2,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 12000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.1, 1],
    glowColor: [0.5, 0.5, 0.5],
    markers: [
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.03 },
      { location: [59.334591, 18.063240], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.005;
    },
  });
});
</script>

<template>
  <canvas :style="{ width: '100%', height: '100%' }" ref="el"
    class="h-full w-full  transition-opacity duration-500"></canvas>
</template>

