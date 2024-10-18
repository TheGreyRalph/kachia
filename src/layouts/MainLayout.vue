<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white py-3">
      <q-toolbar class="font-semibold">

        <q-toolbar-title class=" flex -ml-80 items-center justify-center text-green-main">
          <img
          src="images/kslogo.jpeg"
          alt="Kachia Culture"
          class="rounded-lg shadow-lg  w-[6%] "
        />
        <img
        src="images/klog.png"
        alt="Kachia Culture"
        class=" w-[10%] "
      />

        </q-toolbar-title>

        <div v-if="!$q.screen.lt.md" class="q-gutter-sm text-green-main q-mr-md q-mr-auto md:block">
          <q-btn flat label="Home" :to="{ path: '/' }" />
          <q-btn flat label="About Kachia" :to="{ path: '/about' }" />
          <q-btn flat label="Culture" :to="{ path: '/culture' }" />
          <q-btn flat label="Contact" :to="{ path: '/contact' }" />
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
        <q-item clickable v-ripple :to="{ path: '/government' }">
          <q-item-section>Government</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/tourism' }">
          <q-item-section>Tourism</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/news' }">
          <q-item-section>News</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/contact' }">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
  <FooterSection/>

    </q-footer>
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
