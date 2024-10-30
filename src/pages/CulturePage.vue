<template>
  <q-page class="q-pa-md font-playfair culture-page">
    <div class="parallax-section">
      <div class="parallax-content">
        <h1 class="text-h2 text-bold">The Culture of Kachia</h1>
        <p class="text-subtitle2">Diversity and Tradition in Harmony</p>
      </div>
    </div>

    <section class="md:px-32 md:py-5 q-mt-md">
      <h2 class="text-h4 text-green-main q-mb-md text-center">The People of Kachia</h2>
      <q-divider inset />
      <p class="text-body1 font-playfair q-mt-md q-px-md text-justify">
        Kachia Local Government Area is home to a vibrant mix of ethnic groups, including the Kadara, Jaba, and Kuturmi as the dominant tribes. Others, such as the Hausa, Fulani, Bajju, Ikulu, Yoruba, Igbo, and Kagoro, also have a strong presence. Despite the diverse ethnicities, the people have coexisted peacefully over the years, creating a unique cultural blend.
      </p>



      <!-- Desktop Sidebar & Content -->
      <div class="desktop-view flex">
        <!-- Sidebar -->
        <aside class="sidebar bg-light shadow rounded-sidebar">
          <q-list>
            <q-item
              clickable
              v-ripple
              v-for="tribe in tribes"
              :key="tribe.id"
              @click="selectTribe(tribe)"
              :active="tribe.id === selectedTribe?.id"
              class="sidebar-item"
            >
              <q-icon :name="tribe.icon" class="sidebar-icon" />
              <span class="sidebar-text">{{ tribe.name }}</span>
            </q-item>
          </q-list>
        </aside>

        <!-- Main Content Section -->
        <div class="content-section q-ml-lg">
          <div v-if="selectedTribe">
            <h3 class="text-h5 text-green-main">{{ selectedTribe.name }}</h3>
            <p class="text-body1 text-justify q-mt-md">
              {{ selectedTribe.description }}
            </p>
            <component v-if="selectedTribe.component" :is="selectedTribe.component" />
          </div>
          <div v-else>
            <p class="text-body1 q-mt-md">Please select a tribe to view more information.</p>
          </div>
        </div>
      </div>


      <!-- Mobile Accordion View -->
      <div class="mobile-view accordion-tabs q-mt-md">
        <div v-for="tribe in tribes" :key="tribe.id" class="accordion-item">
          <div
            class="accordion-header q-pa-md text-green-main text-bold"
            @click="toggleTribe(tribe)"
          >
            {{ tribe.name }}
          </div>

          <transition name="fade">
            <div v-show="tribe.id === activeTribeId" class="accordion-content text-body1 text-justify q-pa-md">
              <p>{{ tribe.description }}</p>
              <component v-if="tribe.component" :is="tribe.component" />
            </div>
          </transition>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// Import tribe-specific components
import AdaraGroup from './AdaraGroup.vue';
import HamGroup from 'src/components/HamGroup.vue';
import KurmiGroup from 'src/components/KurmiGroup.vue';
import BajjuGuy from 'src/components/BajjuGuy.vue';

// Tribe data with corresponding components
const tribes = [
  {
    id: 1,
    name: 'Kadara',
    description:
      'The Kadara people are known for their unique traditions, rich history, and cultural heritage.',
    component: AdaraGroup,
  },
  {
    id: 2,
    name: 'Ham',
    description:
      'The Ham people is celebrated for its traditional music, dance, and colorful festivals.',
    component: HamGroup,
  },
  {
    id: 3,
    name: 'Kuturmi',
    description:
      'The Kuturmi people are famous for their crafts and agricultural practices.',
      component: KurmiGroup,
  },
  {
    id: 4,
    name: 'Bajju',
    description:
      'The Bajju people have a strong sense of community, known for their vibrant clothing and customs.',
      component: BajjuGuy,
  },
  {
    id: 5,
    name: 'Ikulu',
    description:
      'The Ikulu tribe is known for its ancient rituals and deep connection with the land.',
  },
];

const selectedTribe = ref(null);
const activeTribeId = ref(null);

const selectTribe = (tribe) => {
  selectedTribe.value = tribe;
};

const toggleTribe = (tribe) => {
  activeTribeId.value = activeTribeId.value === tribe.id ? null : tribe.id;
};
</script>

<style scoped>
.culture-page {
  background-color: #f5f5f5;
}

.text-green-main {
  color: #2e7d32;
}

.rounded-borders {
  border-radius: 12px;
}

.text-justify {
  text-align: justify;
}

.parallax-section {
  position: relative;
  background-image: url('images/kachia2.jpg');
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

.parallax-content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.content-section {
  background-color: white;
  padding: 40px;
  flex: 1;
}

.accordion-tabs {
  display: none;
}

.accordion-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-header {
  background-color: #e8f5e9;
  cursor: pointer;
}

.accordion-content {
  background-color: white;
  padding: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.desktop-view {
  display: flex;
  padding: 20px;
}

/* Sidebar Styles */
.sidebar {
  width: 200px;
  padding: 10px;
  background-color: #f0f5f1; /* Soft green background */
}

.rounded-sidebar {
  border-radius: 12px;
}

.sidebar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  color: #2e7d32; /* Main green color for text */
  transition: background-color 0.3s ease;
}

.sidebar-item:hover {
  background-color: #e8f5e9; /* Slightly darker green on hover */
  border-radius: 8px;
}

.sidebar-icon {
  color: #2e7d32; /* Green icon color */
  font-size: 24px;
  margin-bottom: 5px;
}

.sidebar-text {
  color: #2e7d32;
  font-size: 14px;
  font-weight: bold;
}

/* Main Content Section */
.content-section {
  background-color: white;
  padding: 40px;
  flex: 1;
  border-radius: 8px;
}

/* Responsive Adjustment: Hide desktop view on small screens */
@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }
}


/* Responsive styling */
@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }
  .accordion-tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media (min-width: 769px) {
  .mobile-view {
    display: none;
  }
}
</style>
