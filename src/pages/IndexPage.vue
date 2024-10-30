<template>
  <q-page>
    <HeroSection/>
    <AboutSection/>
    <GovernmentSection/>
    <TraditionSection/>
    <div class="grid mt-5 md:px-32 my-10 md:py-32 px-5 my grid-cols-1 md:grid-cols-2 gap-6">
      <div class="relative group" data-aos="fade-up">
        <img
          src="images/gin.jpg"
          alt="Kachia Landscape"
          class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h3 class="text-white text-xl font-bold">
            Beautiful Landscapes
          </h3>
        </div>
      </div>

      <div class="relative group" data-aos="zoom-in">
        <img
          src="images/kgin3.jpg"
          alt="Kachia Culture"
          class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h3 class="text-white text-xl font-bold">Rich Culture</h3>
        </div>
      </div>

      <div class="relative group" data-aos="fade-right">
        <img
          src="images/kgin2.jpg"
          alt="Kachia Festival"
          class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h3 class="text-white text-xl font-bold">
            Festivals & Events
          </h3>
        </div>
      </div>

      <div class="relative group" data-aos="fade-left">
        <img
          src="images/kgin4.jpg"
          alt="Kachia Market"
          class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h3 class="text-white text-xl font-bold">Local Markets</h3>
        </div>
      </div>
    </div>
    <!-- <FooterSection/> -->
  </q-page>
</template>

<script setup>
import HeroSection from "components/HeroSection.vue"
import AboutSection from "components/AboutSection.vue"
import GovernmentSection from "components/GovernmentSection.vue"
// import TraditionSection from "components/TraditionSection.vue"
// import FooterSection from 'src/components/FooterSection.vue';



defineOptions({
  name: 'IndexPage'
});
</script>
