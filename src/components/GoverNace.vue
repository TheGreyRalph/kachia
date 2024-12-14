<template>
  <section class="cus-governance-wrapper">
    <h1 class="text-green-main text-3xl text-start font-semibold mb-4">
      Governance
    </h1>
    <p class="text-gray-600 font-playfair text-sm text-start mb-8">
      Kachia Local Government Council for many years like most municipal areas
      in Kaduna State, had been under the parliamentary system of government,
      with a chairman as the head at the top of the political and administrative
      setup. He is assisted by a vice chairman and councillors and supervisory
      councillors appointed from within the elected councilors. This existed
      until 2018. In 2017, the Kaduna State under the Nasir El-Rufai
      administration, in line with the provisions of section 5(2) of the 1999 as
      amended, abolished the old parliamentary system which existed in the state
      and in place of it adopted the Presidential System for the Local
      Government Areas in Kaduna State.
    </p>
    <p class="text-gray-600 font-playfair text-sm text-start mb-8">
      In May of 2018, local government elections were held and in July of 2018,
      the local councils executives came into effect in line with Law No. 3
      passed by the Kaduna State House of Assembly in the same year. On October
      19th, in line with the provision of the electoral act, Governor Nasir
      El-Rufai organized and conducted LG elections through the State
      Independent Electoral Commission SIECOM.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
      <div
        class="flex flex-col items-center text-center p-6 rounded-lg cus-fade-shadow"
      >
        <img
          alt="Chairman of Kachia LGA"
          src="images/dmh1.jpg"
          class="rounded-full w-40 h-40 object-cover border-4 mb-4"
        />
        <h2 class="text-xl font-semibold">Executive Chairman of Kachia LGA</h2>
        <p class="font-semibold">Hon. Dr. Manzo Daniel Maigari</p>

        <p class="text-gray-600 font-playfair mt-2">
          <!-- Responsible for local governance, addressing the needs of the
          community, and working closely with state officials to implement local
          policies and development projects. -->
        </p>
      </div>

      <div
        class="flex flex-col items-center text-center p-6 rounded-lg cus-fade-shadow"
      >
        <img
          alt="Chairman of Kachia LGA"
          src="images/vc.jpeg"
          class="rounded-full shadow-lg w-40 h-40 object-cover border-4 border-green-500 mb-4"
        />
        <h2 class="text-xl font-semibold">Vice Chairman of Kachia LGA</h2>
        <p class="font-semibold">Hon Hussieni Abdullahi</p>
        <p class="text-gray-600 font-playfair mt-2">
          <!-- Assists the Chairman in overseeing local governance and ensuring
          effective administration within Kachia LGA. -->
        </p>
      </div>
    </div>
    <div class="container q-py-md">
      <!-- Header Section -->
      <div class="text-center q-mb-md">
        <h1 class="text-green-main text-3xl font-bold">
          Structure of the Local Government
        </h1>
        <p class="text-gray-600 font-playfair font-medium">
          The following council emerged in Kachia Local Government, to be in
          office for 4 years. With the Supreme Court's landmark ruling on July
          11, 2024, granting autonomy to local governments, the tenure of
          councils has been extended to four years, replacing the three-year
          term established by the state law of 2018
        </p>
      </div>

      <!-- Executive Arm Section -->
      <section class="bg-white shadow-lg p-4 md:p-8 rounded-lg q-mb-md">
        <h2 class="text-green-main text-2xl font-semibold mb-4">
          Executive Arm
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="cus-extras-1 p-4 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-white">Executive Chairman</h3>
            <p class="text-gray-100 mt-2">Hon. Dr. Manzo Daniel Maigari</p>
          </div>
          <div class="cus-extras-1 p-4 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-white">Vice Chairman</h3>
            <p class="text-gray-100 mt-2">Hon. Hussaini Abdullahi</p>
          </div>
          <div class="cus-extras-1 p-4 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-white">
              Secretary to Local Government
            </h3>
            <p class="text-gray-100 mt-2">Yet to be appointed</p>
          </div>
          <div class="cus-extras-1 p-4 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold text-white">
              3 Supervisory Councilors
            </h3>
            <p class="text-gray-100 mt-2">Yet to be appointed</p>
          </div>
        </div>
      </section>

      <!-- Legislative Arm Section -->
      <section class="bg-white shadow-lg p-4 md:p-8 rounded-lg">
        <h2 class="text-green-main text-2xl font-semibold mb-4">
          Legislative Arm
        </h2>
        <p class="text-gray-600 text-sm md:text-base mb-4">
          Under the provisions of the Local Government Council reforms, all
          elected councilors from the various wards of the Local Government Area
          shall constitute the Legislative Arm of the Local Government.
        </p>

        <!-- Councilors Table -->
        <q-table
          flat
          bordered
          separator
          class="q-my-md shadow-md"
          :rows="councilors"
          :columns="columns"
          row-key="ward"
          dense
          wrap-cells
        />
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Councilors data
const councilors = ref([
  { ward: "Agunu", councilor: "Nura Suleman" },
  { ward: "Ankwa", councilor: "Samaila Ibrahim" },
  { ward: "Awon", councilor: "Musa Bawa" },
  { ward: "Bishini", councilor: "Moses Isah Bawa" },
  { ward: "Doka", councilor: "Francis Usman" },
  { ward: "Gidan Tagwai", councilor: "Malachy Mordayel Aadam" },
  { ward: "Gumel", councilor: "Bako Timothy Yakubu" },
  { ward: "Katari", councilor: "-" },
  { ward: "Kurmin Musa", councilor: "Gabriel Nyam Ajigo" },
]);

// Define table columns
const columns = [
  { name: "ward", label: "Ward", align: "left", field: "ward" },
  { name: "councilor", label: "Councilor", align: "left", field: "councilor" },
];
</script>

<style scoped>
.text-green-main {
  color: #4caf50; /* Adjust color if needed */
}
.font-montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
