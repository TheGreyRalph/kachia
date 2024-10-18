<template>
  <router-view />
</template>

<script setup>
import { onMounted, onBeforeUpdate } from 'vue';
import { useRouter } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

defineOptions({
  name: 'App'
});

const initAOS = () => {
  AOS.init({
    duration: 1200,
    offset: 200,
    once: true,
  });
};

onMounted(() => {
  AOS.init({
    duration: 1200,
    offset: 200,
    once: false,
  });
});


const router = useRouter();
router.afterEach(() => {
  AOS.refresh(); 
});
</script>
