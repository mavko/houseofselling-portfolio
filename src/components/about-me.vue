<template>
  <div>
     <!-- component -->
      <div class=" relative">
          <div class="large-container py-10">
              <div class="w-full">
                  <div class="lg:text-8xl md:text-6xl text-5xl pl-0 md:pl-10 lg:pl-10 font-bold brief text-gradient" style="line-height: 1.3;">
                    Hey, <br> I'm Sebastian Selling
                  </div>
                  <div class="lg:text-6xl md:text-5xl text-3xl pl-0 md:pl-10 lg:pl-10 mt-5 md:mt-0 lg:mt-0 brief subtitle-light">
                      <p>
                        A Swedish visual designer and frontend dev.
                        <!-- <br>
                        <br />
                        Curious and a deep thinker. I tend to spend my time exploring topics
                        such as finance, design, history or simply sharpening my existing skills. 
                        <br>
                        When I'm not busy, my free time gets distributed between powerlifting,
                        running, 
                        enjoying the latest video games or simply catching up on shows like Billions. -->
                      </p>
                  </div>
              </div>
              <!-- <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 z-1">
                  <div class="relative">
                      <a
                        href="https://www.instagram.com/sebastian.selling/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class=""
                      >
                          <img src="../assets/maincharacter.jpg" alt="">
                      </a>
                  </div>
              </div> -->
          </div>
          <gradient-orbs />
      </div>
  </div>
</template>
<script>
import gradientOrbs from './gradient-orbs.vue'
export default {
  name: 'aboutMe',
  components: {
    gradientOrbs
  }
}
</script>