<template>
  <div class="my-5">
    <section class="">
      <q-divider inset />

      <div class="text-section">
        <h2 class="text-h4 text-green-main">Historical Origins</h2>
        <p class="text-body1 text-justify">
          Gunn D Harold (1956), writing on the Kadara tribe, said, “The
          traditional origin of the Kadara is traced to Kufena, the great rock
          six miles from Zaria. It was here they were later drawn southwards by
          Hausa migration which brought them to their present settlements in
          Kajuru and Kachia local government areas respectively.”
        </p>

        <p class="text-body1 text-justify q-mt-md">
          Oral tradition, as quoted by Mr. Agya (1994), states that the Kadara
          people migrated from the east, following the sun from sunrise to
          sunset. Early European explorers, when told this, speculated that the
          Kadara may have originated from the 'Middle East.' The Kadara people
          were said to have crossed the Mediterranean Sea, lived briefly among
          the Beriberi of Borno, and moved through Bauchi to Kano before
          arriving at their current settlements.
        </p>
      </div>

      <!-- Image and Cultural Sections -->
      <div class="flex q-mt-lg">
        <!-- Right: Cultural Information -->
        <div class="info-section q-ml-lg">
          <h3 class="text-h5 text-green-main">Cultural Highlights</h3>
          <p class="text-body1 q-mt-md">
            The Adara people are known for their vibrant clothing, deeply rooted
            traditions, and lively dances that express their connection to the
            land. Their attire reflects their agricultural heritage, adorned
            with colorful fabrics that signify joy and unity within the
            community.
          </p>

          <!-- Left: Image Section -->
          <div class="image-section my-5">
            <p class="q-mt-sm text-center">Adara Traditional Attire</p>
          </div>
          <div class="flex no-wrap flex-nowrap gap-5">
            <q-img
              src="images/ada1.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
            <q-img
              src="images/ada2.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Dance and Festivals</h4>
          <p class="text-body1 q-mt-md">
            Dance is a key part of the Adara tribe’s cultural expression, often
            performed during festivals and community events. Traditional dances
            are accompanied by rhythmic drums and songs, bringing the community
            together in celebration.
          </p>
          <div class="flex no-wrap flex-nowrap gap-5">
            <q-img
              src="images/ada7.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
            <q-img
              src="images/ada4.jpeg"
              alt="Adara Traditional Attire"
              class="image-styled"
            />
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Important Locations</h4>
          <p class="text-body1 q-mt-md">
            Significant places tied to the Adara people include the areas of
            Kajuru and Kachia. These regions hold cultural landmarks and provide
            a glimpse into the tribe’s history and evolution.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No logic required at this moment.
</script>

<style scoped>
.adara-group {
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

.image-styled {
  width: 100%;
  border-radius: 12px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-section {
  flex: 1;
}

.flexx {
  display: flex;
  flex-wrap: wrap;
}

.q-mt-lg {
  margin-top: 24px;
}
</style>
