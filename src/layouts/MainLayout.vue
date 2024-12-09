<template>
  <q-layout class="" view="lHh Lpr lFf">
    <q-header class="bg-white py-3 font-playfair  ">
      <q-toolbar class="font-semibold">

        <q-toolbar-title class=" md:flex flex -ml-10    md:-ml-60  items-center justify-center text-green-main">
          <img
          src="images/klogo.png"
          alt="Kachia Culture"
          class="rounded-lg w-[25%]  md:w-[8%] "
        />
        <p class=" text-green-main md:text-base text-sm font-bold ">Kachia Local Government Area </p>

        </q-toolbar-title>

        <div v-if="!$q.screen.lt.md" class="q-gutter-sm font-bold text-green-main q-mr-md q-mr-auto md:block">
          <q-btn class=" font-bold" flat label="Home" :to="{ path: '/' }" />
          <q-btn class=" font-bold" flat label="About Kachia" :to="{ path: '/about' }" />
          <q-btn class=" font-bold" flat label="Culture" :to="{ path: '/culture' }" />
          <q-btn class=" font-bold" flat label="Contact" :to="{ path: '/contact' }" />
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

      </q-toolbar>
    </q-header>

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
  <FooterSection/>

    <!-- </q-footer> -->
  </q-layout>

</template>

<script setup>
import FooterSection from 'src/components/FooterSection.vue';
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
