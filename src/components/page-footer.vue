<template>
  <div>
<div class="w-full min-h-screen flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-7xl font-bold">
                <h1 class="w-full md:w-2/3">
                    Got a project? <br> Tell me about it
                </h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <div class="w-55 pt-6 md:pt-0">
                    <a 
                    href="mailto:sebastian.selling@outlook.com" 
                    class="bg-green-400 text-black font-bold text-center rounded-2xl shadow px-10 py-4 flex items-center">
                        Send me a message
                    </a>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex mt-24 mb-12 flex-row justify-between">
                    <div class="text-4xl">
                        House of Selling  
                    </div>
                    <div class="flex flex-row space-x-8 items-center justify-between">
                        <div data-magnetic data-cursor="-opaque">
                            <a href="https://www.dribbble.com/sebastianselling" target="_blank">
                                Dribbble    
                            </a>

                        </div>
                        <div data-magnetic data-cursor="-opaque">
                            <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank">
                                Linkedin    
                            </a>

                        </div>
                        <div data-magnetic data-cursor="-opaque">
                            <a href="https://www.instagram.com/sebastian.selling" target="_blank">
                                Instagram    
                            </a>

                        </div>
                    </div>
                </div>
                <hr class="border-gray-600"/>
                <p class="w-full text-left my-12 text-gray-600">Copyright © 2021 House of Selling</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageFooter'
}
</script>