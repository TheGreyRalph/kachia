<template>
  <q-layout class="" view="lHh Lpr lFf">
    <div class="cus-header-section">
      <div class="cus-header-cont">
        <a href="/">
          <div class="cus-header-logo-cont">
            <img src="images/klogo.png" alt="Kachia Culture" class="" />
            <h2 v-if="!$q.screen.lt.md" class="">
              Kachia Local Government Area
            </h2>
            <h2 v-if="$q.screen.lt.md" class="">Kachia LGA</h2>
          </div>
        </a>

        <div v-if="!$q.screen.lt.md" class="cus-header-nav">
          <q-btn flat label="Home" :to="{ path: '/' }" />
          <q-btn flat label="About Kachia" :to="{ path: '/about' }" />
          <q-btn flat label="Culture" :to="{ path: '/culture' }" />
          <q-btn flat label="Contact" :to="{ path: '/contact' }" />
          <div class="cus-e-gov-btn-cont">
            <button style="--clr: #7808d0">
              <span class="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              E-Gov Portal
            </button>
          </div>
        </div>

        <q-btn
          flat
          dense
          round
          icon="menu"
          v-if="$q.screen.lt.md"
          @click="toggleLeftDrawer"
          class="q-hidden-md text-green-main"
        />
      </div>
    </div>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      class="q-hidden-md-and-up"
    >
      <q-list>
        <q-item clickable v-ripple :to="{ path: '/' }">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/about' }">
          <q-item-section>About Kachia</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/culture' }">
          <q-item-section>Culture</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/contact' }">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer> -->
    <FooterSection />

    <!-- </q-footer> -->
  </q-layout>
</template>

<script setup>
import FooterSection from "src/components/FooterSection.vue";
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
