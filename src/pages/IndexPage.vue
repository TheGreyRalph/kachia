<template>
  <q-page>
    <HeroSection/>
    <AboutSection/>
    <GovernmentSection/>
    <TraditionSection/>
    <!-- <FooterSection/> -->
  </q-page>
</template>

<script setup>
import HeroSection from "components/HeroSection.vue"
import AboutSection from "components/AboutSection.vue"
import GovernmentSection from "components/GovernmentSection.vue"
// import TraditionSection from "components/TraditionSection.vue"
// import FooterSection from 'src/components/FooterSection.vue';



defineOptions({
  name: 'IndexPage'
});
</script>
