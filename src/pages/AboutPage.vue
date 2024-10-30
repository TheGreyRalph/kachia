<template>
  <q-page class="font-playfair">
    <div class="parallax-section font-playfair">
      <div class="overlay"></div>
      <div class="parallax-content">
        <h1 class="text-h2 text-bold">Welcome to Kachia LGA</h1>
        <p class="text-subtitle2">The Home of Ginger and Cultural Diversity</p>
      </div>
    </div>

    <div class="mx-5 my-20 bg-bright-shade border-bright-shade shadow-sm border flex flex-nowrap ">
      <!-- Tabs for Desktop and Tablet View -->
      <div v-if="!isMobile" class="md:col-3">
        <q-tabs
          v-model="selectedTab"
          vertical
          class="bg-grey-1 w-52 text-green-main shadow-md rounded-lg"
        >
          <q-tab name="about" icon="info" label="About" />
          <q-tab name="evolution" icon="history_edu" label="Evolution" />
          <q-tab name="history" icon="book" label="History" />
          <q-tab name="origin" icon="language" label="Etymology" />
          <q-tab name="army" icon="military_tech" label="Arrival of Army" />
          <q-tab name="tribe" icon="people" label="Tribes and Attire" />
          <q-tab name="boundaries" icon="map" label="Boundaries" />
          <q-tab name="population" icon="people" label="Population" />
          <q-tab name="climate" icon="wb_sunny" label="Climate" />
          <q-tab name="religion" icon="place" label="Religion" />
          <q-tab name="notable" icon="star" label="Notable People" />
        </q-tabs>
      </div>

      <!-- Accordion for Mobile View -->
      <div v-else class="w-full">
        <q-expansion-item v-for="(tab, index) in tabs" :key="index" :label="tab.label" :icon="tab.icon" expand-separator header-class="text-green-main font-bold">
          <component :is="tab.component" />
        </q-expansion-item>
      </div>

      <!-- Tab Panels for Desktop and Tablet View -->
      <div v-if="!isMobile" class="md:col-6">
        <q-tab-panels v-model="selectedTab" animated>
          <q-tab-panel class="bg-bright-shade" name="about">
            <AboutSide />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="army">
            <ArrivaArmy />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="evolution">
            <EvoLution />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="history">
            <HisTory />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="tribe">
            <TribePage />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="origin">
            <OriGin />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="boundaries">
            <BounDary />
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="population">
            <!-- Population content -->
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="climate">
            <!-- Climate content -->
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TribePage from "src/components/TribePage.vue";
import ArrivaArmy from "src/components/ArrivaArmy.vue";
import EvoLution from "src/components/EvoLution.vue";
import HisTory from "src/components/HisTory.vue";
import OriGin from "src/components/OriGin.vue";
import AboutSide from "src/components/AboutSide.vue";
import BounDary from "src/components/BounDary.vue";

const selectedTab = ref("about");
const isMobile = ref(window.innerWidth <= 768);

// Define tabs data
const tabs = [
  { name: "about", label: "About", icon: "info", component: AboutSide },
  { name: "evolution", label: "Evolution", icon: "history_edu", component: EvoLution },
  { name: "history", label: "History", icon: "book", component: HisTory },
  { name: "origin", label: "Etymology", icon: "language", component: OriGin },
  { name: "army", label: "Arrival of Army", icon: "military_tech", component: ArrivaArmy },
  { name: "tribe", label: "Tribes and Attire", icon: "people", component: TribePage },
  { name: "boundaries", label: "Boundaries", icon: "map", component: BounDary },
  // Add other tabs here with corresponding components
];

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", updateIsMobile);
});
</script>

<style scoped>
.text-green-main {
  color: #2e7d32;
}

.parallax-section {
  position: relative;
  background-image: url("images/kgin.jpg");
  height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.parallax-content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.seasons-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}

.season-card {
  min-width: 180px;
  flex: 0 0 auto;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;
  transition: transform 0.3s ease;
}

.season-card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  /* Reduce font sizes for smaller screens */
  .text-h2 {
    font-size: 1.5rem;
  }
  .text-h5 {
    font-size: 1.125rem;
  }

  /* Adjust padding and margin for mobile */
  .parallax-section {
    height: 250px;
  }
  .q-page {
    padding: 10px;
  }
}
</style>
