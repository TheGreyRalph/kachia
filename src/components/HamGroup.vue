<template>
  <div class="">
    <section class="my-10">
      <q-divider inset />

      <!-- Introduction Section -->
      <div class="text-section">
        <h2 class="text-h4 text-green-main q-mb-md">Historical Origins</h2>
        <p class="text-body1 text-justify">
          The Ham people, also known as the Jaba, inhabit the southern and
          southeastern parts of Kachia Local Government Area. According to oral
          tradition, their ancestral origins trace back to southern Egypt. It is
          said they migrated southwards along the Nile Valley, crossed through
          regions around northeastern Africa (possibly Chad or Borno), and
          finally settled in their present locations.
        </p>

        <p class="text-body1 text-justify q-mt-md">
          In Kachia, they are affectionately called
          <strong>"Jaba Ketare"</strong> because they live across the tributary
          of the Gurara River. Their settlements are known for their rich
          cultural practices, closely tied to the land and natural surroundings.
        </p>
      </div>

      <!-- Image and Cultural Sections -->
      <div class="flex q-mt-md">
        <!-- Left: Artifact Section -->

        <!-- Right: Cultural Information -->
        <div class="info-section q-ml-lg">
          <div class="artifact-section flex items-center my-5">
            <q-img
              src="/images/nok.jpeg"
              alt="Nok Terracotta Sculpture"
              class="image-styled"
            />
            <p class="q-mt-sm text-center">
              Nok Terracotta Artifact – An Ancient Connection to the Ham People
            </p>
          </div>
          <h3 class="text-h5 text-green-main">Cultural Heritage</h3>
          <p class="text-body1 q-mt-md">
            The Ham people are known for their intricate wood carvings, pottery,
            and traditional weaving techniques. They are also respected for
            their agricultural skills, cultivating crops such as millet, yam,
            and maize in harmony with the seasons.
          </p>

          <div class="image-section q-mt-md">
            <q-img
              src="images/jaba2.jpeg"
              alt="Ham Traditional Attire"
              class="image-styled"
            />
            <p class="q-mt-sm text-center">
              Traditional Attire of the Ham People
            </p>
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">
            Music, Dance, and Festivals
          </h4>
          <p class="text-body1 q-mt-md">
            Music and dance play a crucial role in the Ham people's way of life.
            Traditional drumming and folk songs accompany their dance
            ceremonies, often performed during weddings, harvest festivals, and
            religious rituals.
          </p>

          <div class="flex no-wrap flex-nowrap gap-5">
            <q-img
              src="images/jab1.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
            <q-img
              src="images/jab2.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Notable Locations</h4>
          <p class="text-body1 q-mt-md">
            Important locations include settlements near the Gurara River
            tributary, which hold historical and spiritual significance for the
            Ham people. Their villages offer a glimpse into both their ancient
            customs and modern adaptations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No logic required for now.
</script>

<style scoped>
.ham-group {
  background-color: #f5f5f5;
}

.text-green-main {
  color: #2e7d32;
}

.text-justify {
  text-align: justify;
}

.image-section {
  flex: 1;
  max-width: 40%;
}

.artifact-section {
  flex: 1;
  max-width: 40%;
  margin-right: 20px;
}

.image-styled {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-section {
  flex: 1;
}

.flexx {
  display: flex;
  flex-wrap: wrap;
}

.q-mt-md {
  margin-top: 16px;
}

.q-mt-lg {
  margin-top: 24px;
}
</style>
