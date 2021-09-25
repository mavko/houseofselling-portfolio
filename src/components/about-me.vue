<template>
  <div>
     <!-- component -->
      <div class="min-w-screen min-h-screen flex items-center lg:p-10 relative">

              <div class="md:flex items-center -mx-10">
                  <div class="w-full md:w-1/2 pr-10">
                      <h1 class="text-5xl font-bold brief">
                        Hey, <br> I'm Sebastian Selling
                      </h1>
                      <div class="mb-10 brief brief-responsibility">
                          <p>
                            A Swedish visual designer and frontend dev.
                            <br />
                            Curious and a deep thinker. I tend to spend my time exploring topics
                            such as finance, design, history or simply sharpening my existing skills. 
                            <br>
                            <br>
                            When I'm not busy, my free time gets distributed between powerlifting,
                            running, 
                            enjoying the latest video games or simply catching up on shows like Billions.
                          </p>
                          <hire-btn />
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                      <div class="relative">
                          <a
                            href="https://www.instagram.com/sebastian.selling/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-link"
                          >
                              <img src="../assets/maincharacter2.png" alt="">
                          </a>
                      </div>
                  </div>
              </div>

      </div>
  </div>
</template>
<script>
import hireBtn from './hire-btn.vue'
export default {
  name: 'aboutMe',

  components: {
    hireBtn,
  }
}
</script>