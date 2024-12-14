<template>
  <q-page
    class="cus-hero-wrapper flex flex-center font-playfair relative overflow-hidden"
  >
    <div class="cus-kachia-numbers-cont">
      <!-- <div><h2>Kachia by Numbers</h2></div> -->
      <div ref="counter1" data-index="0">
        <div>
          <p>Land Area</p>
          <p>{{ counters[0].value }}km<sup>2</sup></p>
        </div>
        <div>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6945 13.4365 18.2761Z"
                fill=""
              ></path>
              <path
                d="M5.00602 5.8339L4.59438 5.48184C4.56011 5.45252 4.52734 5.42182 4.49611 5.38985C2.94252 7.15213 2 9.466 2 12C2 17.4608 6.37707 21.8992 11.8142 21.9983C11.4608 20.9435 11.2302 19.234 12.1116 17.5732C12.9217 16.0465 14.5516 15.4456 15.5899 15.1903C16.1567 15.051 16.6778 14.9831 17.0542 14.9493C17.2442 14.9323 17.4018 14.9235 17.5156 14.919C17.5726 14.9168 17.6189 14.9156 17.6531 14.9149L17.6952 14.9143L17.7064 14.9143C19.0872 14.8991 19.6231 14.4916 19.8704 14.2132C20.1763 13.8688 20.2962 13.4605 20.4632 12.8917L20.4849 12.818C20.683 12.1447 21.3156 11.7093 21.9968 11.743C21.934 9.25352 20.9613 6.99003 19.3989 5.27266C19.3673 5.45036 19.3297 5.61557 19.2921 5.76183C19.1225 6.4234 18.8378 7.13716 18.4884 7.66739C18.1465 8.1863 17.5392 8.64995 17.1355 8.94003C16.8308 9.15893 16.5194 9.34078 16.2628 9.48867L16.1707 9.54169C15.939 9.67497 15.7548 9.78114 15.5794 9.89699C15.2234 10.1322 15.0099 10.3411 14.8652 10.6241C14.9532 10.9464 15.0157 11.3168 15.0167 11.7041C15.0191 12.6256 14.5474 13.3537 13.9836 13.8081C13.4289 14.2551 12.7112 14.5078 11.984 14.4999C9.03417 14.4677 7.30397 12.0613 7.08118 9.5816C7.0164 8.8606 6.69205 8.08373 6.23879 7.35988C5.798 6.65591 5.29975 6.10474 5.00602 5.8339Z"
                fill=""
              ></path>
              <path
                d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55132 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z"
                fill=""
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div ref="counter2" data-index="1">
        <div>
          <p>Population</p>
          <p>{{ counters[1].value }}</p>
        </div>
        <div>
          <svg
            fill="#000000"
            height="64px"
            width="64px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 283.831 283.831"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M171.484,134.682h-47c-5.247,0-9.5,4.253-9.5,9.5v130c0,5.247,4.253,9.5,9.5,9.5h47c5.247,0,9.5-4.253,9.5-9.5v-130 C180.984,138.935,176.73,134.682,171.484,134.682z"
                ></path>
                <path
                  d="M271.822,69.682h-47c-5.247,0-9.5,4.253-9.5,9.5v195c0,5.247,4.253,9.5,9.5,9.5h47c5.246,0,9.5-4.253,9.5-9.5v-195 C281.322,73.935,277.069,69.682,271.822,69.682z"
                ></path>
                <path
                  d="M71.145,176.831h-47c-5.247,0-9.5,4.253-9.5,9.5v88c0,5.247,4.254,9.5,9.5,9.5h47c5.247,0,9.5-4.253,9.5-9.5v-88 C80.645,181.085,76.392,176.831,71.145,176.831z"
                ></path>
                <path
                  d="M193.391,18.189L158.163,1.456c-7.486-3.558-16.431-0.369-19.984,7.113c-3.555,7.482-0.37,16.431,7.113,19.984l2.864,1.361 L12.483,78.206C4.678,80.984,0.604,89.563,3.381,97.368c2.186,6.142,7.965,9.974,14.132,9.974c1.67,0,3.367-0.28,5.03-0.872 l135.162-48.11l-1.031,2.17c-3.555,7.483-0.37,16.431,7.113,19.984c2.078,0.987,4.269,1.455,6.425,1.455 c5.611-0.001,10.993-3.163,13.56-8.568l16.732-35.228C204.059,30.691,200.874,21.743,193.391,18.189z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div ref="counter3" data-index="2">
        <div>
          <p>Wards</p>
          <p>{{ counters[2].value }}</p>
        </div>
        <div>
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 407.605 407.605"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M203.805,303.261c11.283,0,105.451-116.968,105.451-175.209c0-58.239-47.213-105.452-105.451-105.452 c-58.242,0-105.453,47.213-105.453,105.452C98.352,186.292,192.93,303.261,203.805,303.261z M135.69,124.359 c0-37.618,30.494-68.113,68.115-68.113c37.617,0,68.113,30.495,68.113,68.113c0,37.618-30.496,68.114-68.113,68.114 C166.184,192.473,135.69,161.977,135.69,124.359z"
                  ></path>
                  <path
                    d="M391.088,222.666c0-9.713-7.9-17.614-17.613-17.614c0,0-47.016,0-64.223,0c-1.34,0-2.883-0.071-4.58,2.776 c-3.389,5.688-3.092,5.188-6.273,10.453c-1.48,2.449,0.76,3.279,1.682,3.279c20.564,0,73.396,0,73.396,0 c0.588,0,1.104,0.518,1.104,1.104l16.52,144.727c0,0.588-0.516,1.105-1.105,1.105H17.616c-0.592,0-1.105-0.518-1.105-1.105 l16.517-144.725c0-0.588,0.516-1.104,1.105-1.104c0,0,54.619,0,72.826,0c1.5,0,3.875-0.872,1.174-5.269 c-3.169-5.157-1.941-3.646-5.299-9.354c-1.25-2.125-2.983-1.888-5.328-1.888c-15.844,0-63.373,0-63.373,0 c-9.709,0-17.613,7.901-17.613,17.614L0,367.393c0,9.713,7.902,17.613,17.615,17.613h372.377c9.715,0,17.613-7.9,17.613-17.613 L391.088,222.666z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <img
      alt="Quasar logo"
      src="images/kachaiHero.jpg"
      class="absolute top-0 left-0 h-full w-full object-cover filter brightness-70"
    />

    <div
      class="absolute top-0 left-0 h-full w-full bg-black opacity-40 parallax-bg"
    ></div>

    <div
      class="cus-hero-cont relative z-10 flex flex-col justify-center items-center h-full text-center text-container"
    >
      <h1 class="text-white text-4xl md:text-6xl font-bold hero-title">
        Explore Kachia
      </h1>
      <p class="text-white text-lg md:text-xl mt-4 hero-subtitle">
        Home of Ginger
      </p>
      <p class="text-white text-base md:text-lg mt-2 hero-text">
        Discover the beauty, heritage, and traditions of Kachia through its
        vibrant community.
      </p>
    </div>
    <div class="cus-hierarchy-showcase-cont">
      <div class="cus-hierarchy-visual-1" :class="{ pair: isElement1 }">
        <div><img src="/images/h1.png" alt="" /></div>
        <div><img src="/images/h2.png" alt="" /></div>
        <div><img src="/images/h3.png" alt="" /></div>
      </div>
      <div class="cus-hierarchy-visual-2" :class="{ pair: !isElement1 }">
        <div><img src="/images/FRN.png" alt="" /></div>
        <div><img src="/images/logokd.png" alt="" /></div>
        <div><img src="/images/klogo01.png" alt="" /></div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// defineOptions({
//   name: "HeroSection",
// });

import { ref, onMounted, nextTick } from "vue";

// Define counters and their target values
const counters = ref([
  { value: 0, targetValue: 4570 },
  { value: 0, targetValue: 373100 },
  { value: 0, targetValue: 12 },
]);

// Method to start counting up
const countUp = (counter) => {
  let current = counter.value;
  const step = Math.ceil(counter.targetValue / 50); // Speed of counting
  const interval = setInterval(() => {
    current += step;
    if (current >= counter.targetValue) {
      current = counter.targetValue;
      clearInterval(interval);
    }
    counter.value = current;
  }, 50);
};

const isElement1 = ref(true);
// Intersection Observer setup
onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = entry.target.dataset.index;
            countUp(counters.value[targetIndex]);
            observer.unobserve(entry.target); // Stop observing after counting
          }
        });
      },
      { threshold: 0.5 }
    ); // 50% of the element must be in view

    // Access elements using ref and observe each counter element
    Object.keys(counters.value).forEach((index) => {
      const counterElement = document.querySelector(`[data-index="${index}"]`);
      if (counterElement) {
        observer.observe(counterElement);
      }
    });
  });

  // Initialize AOS library after observer setup
  // import("aos").then((AOS) => {
  //   AOS.init({
  //     once: true, // Ensures AOS animations run only once
  //   });
  // });

  setInterval(() => {
    // Toggle the value of isElement1 every 5 seconds
    isElement1.value = !isElement1.value;
    console.log("yessssssssssssssss");
  }, 5000);
});
</script>

<style scoped>
.parallax-bg {
  background-attachment: fixed;
  transition: background-position 0.2s ease-out;
}

.text-container {
  animation: fadeIn 2s ease-out;
}

.hero-title {
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.4),
    0 2px 10px rgba(0, 0, 0, 0.8);
  animation: bounceIn 1s ease-out forwards, glow 1.5s infinite alternate;
}

.hero-subtitle,
.hero-text {
  opacity: 0;
  animation: fadeInUp 1.2s ease-out forwards 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 4px 20px rgba(255, 255, 255, 0.6),
      0 2px 20px rgba(255, 255, 0, 0.5);
  }
  to {
    text-shadow: 0 4px 40px rgba(255, 255, 255, 0.8),
      0 2px 25px rgba(255, 255, 0, 0.7);
  }
}

.q-page {
  height: 100vh;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-text {
    font-size: 0.9rem;
  }
}
</style>
