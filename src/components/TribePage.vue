<template>
  <q-page class="flex flex-center">
    <div class="image-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-card"
        @mouseover="pauseRotation"
        @mouseleave="resumeRotation"
      >
        <q-img :src="image.src" class="rotating-image">
          <div class="hover-info">{{ image.info }}</div>
        </q-img>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/images/kadara1.jpg", info: "The Kadara People" },
        { src: "/images/jaba2.jpeg", info: " The Jaba People" },
        { src: "/images/kadara3.jpeg", info: "lorem " },
        // { src: 'images/jaba2.jpeg', info: 'lorem ' },
        { src: "images/bajju.jpeg", info: "lorem " },
      ],
    };
  },
  methods: {
    pauseRotation() {
      const container = document.querySelector(".image-container");
      container.style.animationPlayState = "paused";
    },
    resumeRotation() {
      const container = document.querySelector(".image-container");
      container.style.animationPlayState = "running";
    },
  },
};
</script>
<style scoped>
.image-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation: rotate 10s linear infinite;
}

.image-card {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 10px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.rotating-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.hover-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.image-card:hover .hover-info {
  opacity: 1;
}

.image-card:hover {
  transform: scale(1.1);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
