<template>
  <q-page class="">
    <div class="cus-government-wrapper">
      <div class="q-col-gutter-md flex flex-col md:flex-row">
        <!-- Tabs for Desktop and Tablet View -->
        <div v-if="!isMobile" class="w-full">
          <q-tabs
            vertical
            v-model="activeTab"
            class="bg-white text-green flex justify-between w-full rounded-lg cus-shadow-tabs"
            active-class="cus-tabs-active"
            indicator-color="yellow"
          >
            <div class="flex flex-row md:flex gap-3 text-[3px] md:text-base">
              <q-tab
                name="governance"
                label="Governance"
                class="text-left cus-tab-text"
              />
              <q-tab
                name="rulers"
                label="Rulers of Kachia"
                class="text-left cus-tab-text"
              />
              <q-tab
                name="administration"
                label="Administration as a District"
                class="text-left cus-tab-text"
              />
              <q-tab
                name="lga"
                label="Kachia as a LGA"
                class="text-left cus-tab-text"
              />
              <q-tab
                name="traditional"
                label="Traditional Institutions"
                class="text-left cus-tab-text"
              />
            </div>
          </q-tabs>
        </div>

        <!-- Accordion for Mobile View -->
        <div v-else class="md:col-12">
          <q-expansion-item
            name="governance"
            label="Governance"
            expand-separator
            default-opened
            header-class="text-green-main font-bold"
            icon="article"
          >
            <GoverNace />
          </q-expansion-item>

          <q-expansion-item
            name="rulers"
            label="Rulers of Kachia"
            expand-separator
            header-class="text-green-main font-bold"
            icon="people"
          >
            <RulersTab />
          </q-expansion-item>

          <q-expansion-item
            name="administration"
            label="Administration as a District"
            expand-separator
            header-class="text-green-main font-bold"
            icon="account_balance"
          >
            <AdminKachia />
          </q-expansion-item>

          <q-expansion-item
            name="lga"
            label="Kachia as a LGA"
            expand-separator
            header-class="text-green-main font-bold"
            icon="domain"
          >
            <KachiaLga />
          </q-expansion-item>

          <q-expansion-item
            name="traditional"
            label="Traditional Institutions"
            expand-separator
            header-class="text-green-main font-bold"
            icon="place"
          >
            <TraditionSection />
          </q-expansion-item>
        </div>

        <!-- Tab Panels for Desktop and Tablet View -->
        <div v-if="!isMobile" class="md:col-12 md:col-md-9">
          <q-tab-panels v-model="activeTab" animated>
            <q-tab-panel name="governance">
              <GoverNace />
            </q-tab-panel>
            <q-tab-panel name="rulers">
              <RulersTab />
            </q-tab-panel>
            <q-tab-panel name="administration">
              <AdminKachia />
            </q-tab-panel>
            <q-tab-panel name="lga">
              <KachiaLga />
            </q-tab-panel>
            <q-tab-panel name="traditional">
              <TraditionSection />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AdaraHead from "./AdaraHead.vue";
import TraditionSection from "./TraditionSection.vue";
import HamHeads from "./HamHeads.vue";
import AdminKachia from "./AdminKachia.vue";
import KachiaLga from "./KachiaLga.vue";
import GoverNace from "./GoverNace.vue";
import RulersTab from "./RulersTab.vue";

const activeTab = ref("governance");

// Detect if screen width is mobile
const isMobile = ref(window.innerWidth <= 768);

// Add event listener to update mobile view on resize
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", updateIsMobile);
});
</script>

<style scoped>
.text-green-main {
  color: #4caf50; /* Adjust color if needed */
}
.font-playfair {
  font-family: "Playfair Display", serif;
}
.q-tabs__tab--active {
  font-weight: bold;
  border-left: 4px solid green;
}
</style>
