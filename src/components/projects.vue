<template>
<div>

  <div class="large-container py-20 lg:py-40 md:py-30">
      <h2 class="text-4xl md:text-5xl lg:text-6xl">Products</h2>
      <p class="brief-responsibility brief lg:text-4xl md:text-3xl text-3xl">
        Software as a service apps with a focus on <br> the construction industry
      </p>
      <!-- component -->
      <div class="min-w-screen flex relative my-20">
              
              <div class="md:flex sm:contents items-center -mx-10">
                  <div class="w-full md:w-1/2 pl-10 pr-10">
                      <img src="../assets/projects/ispect/ispect-logo.svg" style="max-width: 160px;" alt="" class="mb-5">
                      <div class="mb-10 brief">
                          <p class="brief lg:text-4xl md:text-3xl text-3xl">
                            Platform that connects millions of construction defects with materials, 
                            high risk constructions <br> and contractors
                          </p>
                          <span class="brief-responsibility text-2xl">
                            Founding member, Visual Designer and Front-end Dev
                          </span>
                          
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 ml-10 md-and-up:ml-0" data-magnetic data-cursor="-opaque">
                      <div class="relative">
                        <router-link
                          to="/ispect"
                          class="project-link"
                          data-magnetic
                          data-cursor="-opaque"
                         >
                          <img src="../assets/projects/ispect/platform.png" alt="">
                         </router-link>
                      </div>
                  </div>
              </div>

      </div>

  </div>
  <div class="large-container py-20 lg:py-40 md:py-30">
      <!-- component -->
      <div class="min-w-screen flex relative">
              
              <div class="md:flex sm:contents items-center -mx-10">
                  <div class="w-full md:w-1/2 pl-10 pr-10">
                      <div class="brief mb-10">
                          <img src="../assets/projects/icontrol/icontrol-logo.svg" style="max-width: 160px;" alt="" class="mb-5">
                          <p class="brief lg:text-4xl md:text-3xl text-3xl">
                            Never write another report again.
                            <br>
                            <br>
                            A platform for all your construction documentation.
                          </p>
                          <span class="brief-responsibility text-2xl">
                            Founding member, Branding, UI design and front-end dev
                          </span>
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 ml-10 md-and-up:ml-0" data-magnetic data-cursor="-opaque">
                      <div class="relative">
                          <a
                            href="https://www.icontrolapp.se/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-link"
                          >
                              <img src="../assets/projects/icontrol/icontrol-phone.png" alt="">
                          </a>
                      </div>
                  </div>
              </div>

      </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'projects',
}
</script>
