<template>
  <q-page>
    <HeroSection />

    <AboutSection />

    <GovernmentSection />
    <TraditionSection />

    <div class=" bg-greenn-shade">
      <div class="custom-shape-divider-top-1730287576">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#72B739"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#72B739"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#72B739"
          ></path>
        </svg>
      </div>
      <div
        class="grid mt-5 md:px-32 my-10 md:py-32 px-5 grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div class="relative group" data-aos="fade-up">
          <img
            src="images/gin.jpg"
            alt="Kachia Landscape"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-bright-shade bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 class=" text-slate-800 text-xl font-bold">Beautiful Landscapes</h3>
          </div>
        </div>

        <div class="relative group" data-aos="zoom-in">
          <img
            src="images/kgin3.jpg"
            alt="Kachia Culture"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-bright-shade  bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 class="text-slate-800 text-xl font-bold">Rich Culture</h3>
          </div>
        </div>

        <div class="relative group" data-aos="fade-right">
          <img
            src="images/kgin2.jpg"
            alt="Kachia Festival"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-bright-shade  bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 class="text-slate-800 text-xl font-bold">Festivals & Events</h3>
          </div>
        </div>

        <div class="relative group" data-aos="fade-left">
          <img
            src="images/kgin4.jpg"
            alt="Kachia Market"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-bright-shade  bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 class="text-slate-800 text-xl font-bold">Local Markets</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterSection/> -->
  </q-page>
</template>

<script setup>
import HeroSection from "components/HeroSection.vue";
import AboutSection from "components/AboutSection.vue";
import GovernmentSection from "components/GovernmentSection.vue";
// import TraditionSection from "components/TraditionSection.vue"
// import FooterSection from 'src/components/FooterSection.vue';

defineOptions({
  name: "IndexPage",
});
</script>
