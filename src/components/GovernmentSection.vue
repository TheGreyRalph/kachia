<template>
  <q-page class="bg-bright-shade py-10 px-10">
    <div class="row q-col-gutter-md">
      <div class="md:col-12 md:col-md-3">
        <q-tabs
          vertical
          v-model="activeTab"
          class="bg-gray-100 rounded-lg shadow-lg"
          active-color="green"
          indicator-color="yellow"
        >
          <div
            class="flex flex-row md:flex gap-3  text-[3px] md:text-base"
          >
            <q-tab name="governance" label="Governance" class="text-left" />
            <q-tab name="rulers" label="Rulers of Kachia" class="text-left" />

            <q-tab
              name="administration"
              label="Administration as a District"
              class="text-left"
            />
            <q-tab
              name="traditional"
              label="Traditional Institutions"
              class="text-left"
            />
            <q-tab
              name="Adara"
              label="Adara Traditional Council"
              class="text-left"
            />
            <q-tab
              name="Ham"
              label="Ham Traditional Council"
              class="text-left"
            />
          </div>
        </q-tabs>
      </div>

      <div class="md:col-12 md:col-md-9">
        <q-tab-panels v-model="activeTab" animated>
          <q-tab-panel name="governance">
            <section class=" md:p-8 rounded-lg mb-10">
              <h1 class="text-green-main text-3xl text-center md:text-start font-semibold mb-4">
                Governance
              </h1>
              <p class="text-gray-600 text-sm md:text-lg text-center md:text-start mb-8">
                The local government of Kachia is headed by the Executive
                Governor of Kaduna State and the Chairman of Kachia LGA. They
                work together with other officials to ensure smooth
                administration and the development of the region. Below are key
                administrative figures and their roles.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <div
                  class="flex flex-col items-center text-center bg-green-main p-6 rounded-lg shadow-md"
                >
                  <img
                    alt="Executive Governor Kaduna State"
                    src="images/gov.jpeg"
                    class="rounded-full shadow-lg md:w-40 h-40 object-cover border-4 border-green-500 mb-4"
                  />
                  <h2 class="text-xl font-semibold text-white">
                    Executive Governor
                  </h2>
                  <p class="text-gray-100 mt-2">
                    Oversees the governance of the state, ensuring the execution
                    of government policies, promoting development, and
                    maintaining law and order.
                  </p>
                </div>

                <div
                  class="flex flex-col items-center text-center bg-green-main p-6 rounded-lg shadow-md"
                >
                  <img
                    alt="Chairman of Kachia LGA"
                    src="images/drmanzo.jpeg"
                    class="rounded-full shadow-lg w-40 h-40 object-cover border-4 border-green-500 mb-4"
                  />
                  <h2 class="text-xl font-semibold text-white">
                    Chairman of Kachia LGA
                  </h2>
                  <p class="text-gray-100 mt-2">
                    Responsible for local governance, addressing the needs of
                    the community, and working closely with state officials to
                    implement local policies and development projects.
                  </p>
                </div>
              </div>
            </section>
          </q-tab-panel>

          <q-tab-panel name="rulers">
            <section class="bg-white shadow-lg p-2 md:p-8 rounded-lg md:mb-10">
              <h1 class="text-green-main md:text-3xl font-semibold mb-4">
                Rulers of Kachia
              </h1>
              <p class="text-gray-600 text-sm md:text-lg mb-4">
                Historically, the leadership in Kachia was not formally
                organized. Brave and intelligent warriors led the people, and as
                time progressed, the people began to organize themselves under
                more formal leadership structures.
              </p>
              <p class="text-gray-600 text-sm md:text-lg mb-8">
                Kachia was traditionally governed by village heads (Sarakuna),
                with the first being Mal. Idi Magaji Maikalgo, followed by other
                notable leaders. These are the rulers of Kachia:
              </p>
              <ul class="list-disc list-inside text-gray-700">
                <li>Mal. Idi Magaji Maikalgo</li>
                <li>Mal. Jarmai</li>
                <li>Mal. Kato</li>
                <li>Mal. Musa Magaji Ali (Bamaguje)</li>
                <li>Mal. Nagwamatse (Fulani Stock)</li>
                <li>Mal. Arso (Fulani Stock)</li>
                <li>Mal. Abubakar I</li>
                <li>Mal. Abubakar II</li>
                <li>Alh. Sani Abubakar</li>
                <li>Engr. Tanimu Badamasi (current Sarkin Kachia)</li>
              </ul>
              <p class="text-gray-600 text-sm md:text-lg mt-4">
                Over time, the village administration in Kachia was influenced
                by the Fulani or Habe system, which was likely adopted through
                contact with the Hausas. The ruling houses today are those of
                Sani Abubakar Danladi Shugaba and Musa Sarkin Kachia.
              </p>
            </section>
          </q-tab-panel>

          <q-tab-panel name="administration">
            <section class=" p-2 md:p-8 rounded-lg">
              <h1 class="text-green-main text-sm md:text-3xl font-semibold mb-4">
                Administration as a District
              </h1>
              <p class="text-gray-600 text-sm md:text-lg mb-4">
                Kachia town became a district in 1907 after Zaria province was
                divided into 32 districts. The administration was historically
                imposed by the Zazzau Emirate with the help of the British
                colonial government.
              </p>
              <p class="text-gray-600 text-sm md:text-lg mb-8">
                The district has been governed by both indigenous and
                non-indigenous District Heads. The indigenous heads include
                Alhaji Ahmadu Bawa Gambo, making him the first indigenous
                District Head of Kachia.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">
                    Non-Indigenous District Heads:
                  </h2>
                  <ul class="list-disc list-inside text-gray-700">
                    <li>Sarkin Zana Umaru</li>
                    <li>Ma'aji Zubairu</li>
                    <li>Dangaladima Zubairu</li>
                    <li>Dangaladima Sumailu</li>
                    <li>Wambai Usman</li>
                    <li>Wambai Sani Maigamu</li>
                    <li>Mal. Dikko Turaki Babba</li>
                    <li>Danbarau Gidado</li>
                  </ul>
                </div>

                <div>
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">
                    Indigenous District Heads:
                  </h2>
                  <ul class="list-disc list-inside text-gray-700">
                    <li>Alh. Bawa Gambo Sarkin Zaria</li>
                    <li>Alh. Ahmadu Salihu Ma'aji</li>
                    <li>Mal. Musa Gaiya Ma'aji Babba</li>
                    <li>Alh. Musa B. Gambo Kuyanbana</li>
                    <li>Alh. Sabiu Suleiman Ma'aji Babba Adara</li>
                  </ul>
                </div>
              </div>
            </section>
          </q-tab-panel>
          <q-tab-panel name="traditional">
            <TraditionSection />
          </q-tab-panel>

          <q-tab-panel name="Adara">
            <AdaraHead />
          </q-tab-panel>

          <q-tab-panel name="Ham">
            <HamHeads />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AdaraHead from "./AdaraHead.vue";
import TraditionSection from "./TraditionSection.vue";
import HamHeads from "./HamHeads.vue";

const activeTab = ref("governance");
</script>

<style scoped>
.q-tabs__tab--active {
  font-weight: bold;
  border-left: 4px solid green;
}
</style>
