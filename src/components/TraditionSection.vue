<template>
  <q-page class="md:bg-bright-shade font-playfair px-2 py-2 md:py-10 md:md:px-10">
    <section class="rounded-lg md:mb-10">
      <h1 class="text-green-main text-sm md:text-3xl font-semibold mb-4">Traditional Institutions</h1>
      <p class="text-gray-60 text-sm md:text-lg mb-8">
        Traditional institutions in Kachia have a long history, shaped by the culture, struggles, and self-determination of its people. Though these institutions were once limited to the District Head level, the democratic era ushered in new opportunities for self-governance. The creation of new Chiefdoms, particularly under the Makarfi administration in 2001, led to the formal recognition of the Adara and Ham traditional councils.
      </p>
      <div class="md:bg-gray-50 p-6 rounded-lg shadow-md md:mb-8">
        <h2 class="md:text-2xl text-sm font-semibold text-gray-800 mb-4">Adara Traditional Council</h2>
        <div class="flex items-center">
          <div class="flex flex-col">
            <p class="text-gray-700 text-sm  md:text-lg mb-2">
              The Adara Traditional Council, created in 2001, represents the people of Kachia. His Royal Highness, Mr. Maiwada Galadima, ascended the throne in 2007 as **Agom Adara III**. The Chiefdom initially began as a 3rd class position but was later elevated to 2nd class under Late ACP Abubakar Maigari (Rtd) Agom Adara II.
            </p>
            <p class="text-gray-700 text-sm md:text-lg mb-4">
              The Agom Adara oversees 14 districts in Kachia Local Government, which are administered by district heads. These districts include: Kachia, Bishini, Awon, Katari North, Katari South, Ariko, Koron Tshohowa, and more.
            </p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-4">Districts under Adara Council</h3>
        <ul class="grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Kachia</li>
          <li>Bishini</li>
          <li>Awon</li>
          <li>Katari North</li>
          <li>Katari South</li>
          <li>Ariko</li>
          <li>Koron Tshohowa</li>
          <li>Gumel</li>
          <li>Mazuga</li>
          <li>Mai Ido Rafi</li>
          <li>Akilibu</li>
          <li>Doka</li>
          <li>Agunu</li>
          <li>Ankwa</li>
        </ul>
        <div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 class="md:text-2xl text-sm font-semibold text-gray-800 mb-4">Ham Traditional Council</h2>
        <div class="flex items-center">

          <div class="flex flex-col">
            <p class="text-gray-700 text-sm md:text-lg mb-2">
              The Ham Traditional Council, led by His Royal Highness **Dr. Danladi Gyet Maude (JP) OON**, known as **Kpop Ham**, dates back to 1970 when he ascended the throne. In 2001, the chiefdom was elevated to 1st class status. The Ham people, originally referred to as Jaba Ketare in Kachia, were united with their kin in Jaba Local Government to form the present Ham Chiefdom.
            </p>
            <p class="text-gray-700 text-sm md:text-lg mb-4">
              The Ham Traditional Council in Kachia oversees 9 districts, administered by district heads, who carry out their duties through village heads and ward levels.
            </p>
          </div>
        </div>

        <h3 class="md:text-xl font-semibold text-gray-800 mt-6 mb-4">Districts under Ham Council</h3>
        <ul class="grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Sabon Sarki</li>
          <li>Gidan Tagwai</li>
          <li>Jaban Kogo</li>
          <li>Kurmin Musa</li>
          <li>Kwaturu</li>
          <li>Gidan Jibir</li>
          <li>Kurmin Gwaza</li>
          <li>Gidan Gyara</li>
          <li>Gidan Mana</li>
        </ul>
        <div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import AdaraHead from "components/AdaraHead.vue"
import HamHeads from "components/HamHeads.vue"

defineOptions({
  name: "TraditionSection",
});
</script>
