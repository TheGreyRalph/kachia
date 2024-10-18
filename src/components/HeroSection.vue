<template>
  <q-page class="flex flex-center relative overflow-hidden">
    <img
      alt="Quasar logo"
      src="images/kachaiHero.jpg"
      class="absolute top-0 left-0 h-full w-full object-cover filter brightness-70"
    />

    <div class="absolute top-0 left-0 h-full w-full bg-black opacity-40 parallax-bg"></div>

    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-container">
      <h1 class="text-white text-4xl md:text-6xl font-bold hero-title">
        Explore Kachia
      </h1>
      <p class="text-white text-lg md:text-xl mt-4 hero-subtitle">
        Rich in Culture and History
      </p>
      <p class="text-white text-base md:text-lg mt-2 hero-text">
        Discover the beauty, heritage, and traditions of Kachia through its vibrant community.
      </p>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'HeroSection'
});
</script>

<style scoped>
.parallax-bg {
  background-attachment: fixed;
  transition: background-position 0.2s ease-out;
}

.text-container {
  animation: fadeIn 2s ease-out;
}

.hero-title {
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8);
  animation: bounceIn 1s ease-out forwards, glow 1.5s infinite alternate;
}

.hero-subtitle, .hero-text {
  opacity: 0;
  animation: fadeInUp 1.2s ease-out forwards 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 4px 20px rgba(255, 255, 255, 0.6), 0 2px 20px rgba(255, 255, 0, 0.5);
  }
  to {
    text-shadow: 0 4px 40px rgba(255, 255, 255, 0.8), 0 2px 25px rgba(255, 255, 0, 0.7);
  }
}

.q-page {
  height: 100vh;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-text {
    font-size: 0.9rem;
  }
}
</style>
