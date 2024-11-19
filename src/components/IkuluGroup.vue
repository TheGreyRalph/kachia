<template>
  <q-page padding>
    <div class="text-center">
      <q-banner class="bg-green-main text-white q-mb-lg">
        <h1 class="text-h4">The Ikulu People</h1>
        <p class="text-subtitle2">A Glimpse into Their History, Culture, and Heritage</p>
      </q-banner>
    </div>

    <q-card bordered class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Introduction</div>
        <p>
          The Ikulu people, also known as Ikolu, Bakulu, or Kulu, are an indigenous tribe
          found in the Middle Belt region of Nigeria. Their communities are predominantly
          located in Zongon Kataf, Kachia, and Kauru Local Government Areas of Kaduna State.
          They belong to the Plateau language group and refer to themselves as "Kulu," while
          their land is called "Akulu."
        </p>
      </q-card-section>
    </q-card>

    <q-card bordered class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Brief History</div>
        <p>
          Historically, the Ikulu people have deep roots in the Plateau region, with a rich
          culture and heritage that reflects their connection to the land and its traditions.
          Known for their communal lifestyle, the Ikulu people value agriculture, craftsmanship,
          and storytelling as integral parts of their way of life.
        </p>
      </q-card-section>
    </q-card>

    <q-card bordered class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Culture and Attire</div>
        <p>
          The Ikulu people are known for their vibrant traditional attire, which reflects their
          cultural identity. These outfits are often worn during festivals, ceremonies, and other
          communal events. Music and dance are vital in their celebrations, with traditional instruments
          like drums and flutes playing a key role. Crafts like weaving and pottery highlight their
          creativity and functional artistry.
        </p>
      </q-card-section>
    </q-card>

    <div class="text-h5 text-primary text-center q-my-lg">Image Gallery</div>
      <div v-for="(image, index) in galleryImages" :key="index">
        <q-img :src="image.src" :alt="image.alt" class="rounded-borders">
          <div class="absolute-bottom text-subtitle2 bg-black bg-opacity-50 text-white text-center q-px-sm">
            {{ image.alt }}
          </div>
        </q-img>
      </div>

    <!-- <q-card bordered class="q-mt-lg">
      <q-card-section>
        <div class="text-h6 text-center">Learn More</div>
        <p class="text-center">
          Interested in learning more about the Ikulu people and other indigenous tribes of Nigeria?
          <q-btn flat color="primary" label="Explore Now" @click="navigateToMoreInfo" />
        </p>
      </q-card-section>
    </q-card> -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      galleryImages: [
        {
          src: "images/attaire1.jpg",
          alt: "Ikulu Traditional Attire",
        },
        {
          src: "images/ikulu.jpg",
          alt: "Ikulu Cultural Dance",
        },
        // {
        //   src: "https://via.placeholder.com/800x400",
        //   alt: "Ikulu Festival Celebration",
        // },
      ],
    };
  },
  // methods: {
  //   navigateToMoreInfo() {
  //     this.$router.push("/more-info"); // Change to your actual route
  //   },
  // },
};
</script>

<style scoped>
.q-page {
  background: #f9f9f9;
}

.rounded-borders {
  border-radius: 12px;
}
</style>
