<template>
	<div>
			<!-- Header -->
			<div class="large-container container mx-auto lg:px-40 xl:px-40 md:px-20 px-10 lg:py-60 xl:py-60 md:py-40 py-10 overflow-hidden z-1" id="ispect">
        <span class="text-4xl font-medium"><img src="../assets/projects/ispect/ispect-logo.svg" alt="iSpect" style="width: 180px;"></span>
        <div class="lg:text-7xl md:text-6xl text-5xl font-light brief mt-10">
          Make more informed decisions during procurement 
        </div>
			</div>
			<div class="parallax-container">
				<section class="my-20">
					<div class="image-1" id="parallax" data-type="background" data-speed="2"></div>
				</section>
			</div>
			<!-- background section -->
		  <!-- <div class="overflow-hidden" style="max-height: 900px;height:100%;">
        <img src="../assets/projects/ispect/ispect_web.jpg" alt="" srcset="">
      </div> -->



			<div class="large-container mx-auto  lg:px-40 xl:px-40 md:px-20 px-10 lg:py-60 xl:py-60 md:py-40 py-10 overflow-hidden z-1">
				<div class="grid gap-12 lg:grid-flow-col md:grid-flow-col">
					<div class="font-medium text-2xl">
						The challenge 
					</div>
					<div  class="lg:text-4xl md:text-3xl text-3xl font-light">
						iSpect is built to provide transparency in the construction industry in many ways, 
						through data and statistics mainly, 
						but also to provide clear communication routes between contractors, 
						sub-contractors and stakeholders.
						<div class="sm:text-2xl md:text-2xl lg:text-2xl mt-10">
							<div data-magnetic data-cursor="-opaque">
								<a 
								href="https://ispect.se/?lang=en" 
								target="_blank" 
								rel="noopener noreferrer"
								class="btn-underlined"
								>See landing page</a>
							</div>
						</div>
					</div>
				</div>

			</div>

				<!-- background parallax section -->
				<div class="parallax-container">
					<section class="my-20">
						<div class="image-2" id="parallax" data-type="background" data-speed="3"></div>
					</section>
				</div>
				
					<!-- branding section -->
					<div class="large-container mx-auto lg:px-40 xl:px-40 md:px-20 px-10 lg:py-60 xl:py-60 md:py-40 py-10">
						<div class="font-medium text-2xl">Branding</div>
						<p class="lg:text-4xl md:text-3xl text-3xl font-light my-10">
							Once a base understanding of company core values and vision 
							is established I can start building out a moodboard and iterate 
							on the brand.</p>
						<div class="flex flex-row flex-wrap -mx-2">
							<div class="w-100 lg:w-1/2 md:w-1/2 h-94 px-2">
								<div class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover">
									<img src="../assets/projects/ispect/logotype_800x600.png" alt="">
									<p class="font-medium text-center my-5 brief-responsibility">
										Finalized logotype incorporating the Search icon <br> that's been used from the very start 10 years ago.
									</p>
								</div>
							</div>
							<div class="w-100 lg:w-1/2 md:w-1/2 h-94 px-2">
								<div class="flex flex-col sm:flex-row md:flex-col -mx-2">
									<div class="w-full h-96 mb-4 sm:mb-0 md:mb-4 px-2">
										<img src="../assets/projects/ispect/ispect_plattform_logo.jpg" alt="">
										<p class="font-medium text-center my-5 brief-responsibility">
											Logotype introduced in the very minimal product platform
										</p>
									</div>
								</div>
							</div>
							<div class="w-100 lg:w-1/2 md:w-1/2 h-94 px-2">
								<div class="flex flex-col sm:flex-row md:flex-col -mx-2">
									<div class="w-full h-96 mb-4 sm:mb-0 md:mb-4 px-2">
										<img src="../assets/projects/ispect/ispect_featureset.jpg" alt="">
										<p class="font-medium text-center my-5 brief-responsibility">
											Feature set illustration
										</p>
									</div>
								</div>
							</div>

							<div class="w-100 lg:w-1/2 md:w-1/2 h-94 px-2">
								<div class="flex flex-col sm:flex-row md:flex-col -mx-2">
									<div class="w-full h-96 mb-4 sm:mb-0 md:mb-4 px-2">
										<img src="../assets/projects/ispect/ispect_data_flow.png" alt="">
										<p class="font-medium text-center my-5 brief-responsibility">
											Data flow illustration used as a backdrop on the landing page and login
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				<!-- background parallax section -->
				<div class="parallax-container">
					<section class="my-20">
						<div class="image-3" id="parallax" data-type="background" data-speed="4"></div>
					</section>
				</div>
</div>
</template>

<script>
import jQuery from 'jquery'


const $ = jQuery
window.$ = $

// makes the parallax elements
	function parallaxIt() {
  
	// create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var $backgrounds = [];

  // for each of content parallax element
  // $('[data-type="content"]').each(function(index, e) {
  //   var $contentObj = $(this);

  //   $contentObj.__speed = ($contentObj.data('speed') || 1);
  //   $contentObj.__fgOffset = $contentObj.offset().top;
  //   $contents.push($contentObj);
  // });

  // for each of background parallax element
  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
    $backgroundObj.__fgOffset = $backgroundObj.offset().top;
    $backgrounds.push($backgroundObj);
  });

  // update positions
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $backgrounds.forEach(function($backgroundObj) {
      var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

      $backgroundObj.css({
        backgroundPosition: '50% ' + yPos + 'px'
      });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();
export default {
	name: 'ispect',
	components: {
	},

	mounted() {

	}
}
</script>
<style scoped>


.parallax-container section {
  width: 100%;
  height: 80vh;
  flex: 1;
  display: flex;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: #000;
}
.parallax-container section .image-1 {
  background-image: url('../assets/projects/ispect/ispect_web.jpg');
}
.parallax-container section .image-2 {
  background-image: url('../assets/projects/ispect/ispect_issues.jpg');
}
.parallax-container section .image-3 {
  background-image: url('../assets/projects/ispect/databoards.jpg');
}
.parallax-container section #parallax  {
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 500;
}

</style>