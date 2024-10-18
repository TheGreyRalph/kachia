<template>
  <q-page class="bg-bright-shade py-20 px-10">
    <div class="flex flex-wrap justify-between items-start q-col-gutter-md">
      <div class="w-full md:w-[40%]" data-aos="fade-right">
        <h1 class="text-green-main text-3xl font-semibold">About Kachia</h1>
        <h2 class="text-gray-500 font-semibold">
          A Jewel in Kaduna State's Rich Tapestry
        </h2>
        <p>
          Nestled in the heart of Kaduna State, Kachia is a town renowned for
          its vibrant culture, deep historical roots, and natural beauty. Often
          referred to as a gateway to southern Kaduna, Kachia holds immense
          significance as a center of agricultural wealth, traditional
          festivals, and diverse ethnic heritage. Its lush landscapes, combined
          with its rich cultural tapestry, make Kachia a fascinating destination
          for those eager to explore the uncharted beauty and stories that shape
          Nigeria's northern region. From its storied past to its promising
          future, Kachia offers a captivating glimpse into the spirit of Kaduna.
        </p>
        <div class="flex flex-col mt-10 items-start w-full ">
          <div
            class="flex justify-start items-start w-full"
            data-aos="fade-left"
          >
            <div class="flex items-start flex-col">
              <img
                alt="Dr. Manzo Maigari"
                src="images/drmanzo.jpeg"
                class="rounded-md  shadow-lg w-60 h-60 object-cover border-4 border-green-main"
              />
              <p class="text-sm font-semibold mt-4 text-center text-gray-700">
                Chairman of Kachia LGA, Kaduna State
              </p>
            </div>
          </div>
          <div class="w-full" data-aos="fade-right">
            <h1 class="text-green-main text-3xl font-semibold">
              Dr. Manzo Maigari
            </h1>
            <h2 class="text-gray-500 font-semibold">
              Chairman, Kachia Local Government Area, Kaduna State
            </h2>
            <p class="">
              Dr. Manzo Maigari is an accomplished leader currently serving as
              the Chairman of Kachia Local Government Area and Special Adviser
              on Political Affairs to the Governor of Kaduna State. He is the
              former Director General of the Nigeria Agribusiness Group (NABG)
              and CEO of Agrolog Limited. With a strong background in
              leadership, he also chairs Greysoft Technologies and is involved
              in agricultural policy through roles like his membership on the
              Nigeria Advisory Board for Agricultural Policy and Research in
              Africa (APRA).
            </p>
            <p class="">
              From 2015 to 2019, he served as Commissioner for Agriculture,
              Forestry, Commerce, and Tourism in Kaduna State, where he
              introduced key policies, such as the Kaduna State Forestry Policy
              and the creation of the Kaduna Agricultural Development Agency
              (KADA). Dr. Maigari holds a Doctor of Veterinary Medicine from
              Ahmadu Bello University and an MBA from Royal Kennedy College,
              Switzerland, with further studies at Harvard and other global
              institutions. His work has significantly impacted agriculture in
              Kaduna, Nigeria, and Africa.
            </p>
          </div>
        </div>

      </div>

      <div
        class="bg-green-main p-8 flex justify-center items-center w-full md:w-1/2"
        data-aos="fade-left"
      >
        <div
          class="grid grid-cols-3 grid-rows-3 gap-4 border border-green-main p-4"
        >
          <img
            alt="img"
            src="images/kachiaFulani.jpg"
            class="col-span-2 row-span-2 rounded-lg shadow-md w-full h-full object-cover border-4 border-green-main"
          />
          <img
            alt="img"
            src="images/kachia2.jpg"
            class="rounded-full shadow-lg w-full h-full object-cover border-4 border-green-500"
          />
          <img
            alt="img"
            src="images/kachia4.jpg"
            class="col-span-1 row-span-2 rounded-xl shadow-lg w-full h-full object-cover border-4 border-green-500"
          />
          <img
            alt="img"
            src="images/kachiaMarket.jpg"
            class="col-span-2 row-span-1 rounded-2xl shadow-md w-full h-full object-cover border-4 border-green-500"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1200,
    offset: 200,
    once: true, 
  });
});
</script>
