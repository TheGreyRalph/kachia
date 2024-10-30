<template>
  <div class="kuturmi-group">
    <section class="my-10">
      <q-divider inset />

      <!-- Introduction Section -->
      <div class="text-section">
        <h2 class="text-h4 text-green-main q-mb-md">Historical Origins</h2>
        <p class="text-body1 text-justify">
          The Kuturmi people, historically referred to as the "Kutumbawa," are believed to have originated from Kano. Following the Jihad wars of 1804-1807 AD, they migrated to their current settlements. This migration journey included other ethnic groups such as the Koro, Kuramah, and Gwandara.
        </p>
        <p class="text-body1 text-justify q-mt-md">
          They first settled in the fortified town of Old Iburu for several decades before dispersing in search of more farmland. The Kuturmi communities today are found in areas like Idon, Kallah, Afogo, Iburu, and Gafe, where they coexist with neighboring groups, creating a unique cultural blend.
        </p>
      </div>

      <!-- Image and Cultural Sections -->
      <div class="flex q-mt-md">
        <!-- Left: Artifact Section -->

        <!-- Right: Cultural Information -->
        <div class="info-section q-ml-lg">
          <div class="my-5 mx-6">
            <div class=" flex flex-nowrap gap-5">
              <q-img src="/images/gurara3.png" alt="Kuturmi Artifact" class="image-styled" />
              <q-img src="/images/gurara1.png" alt="Kuturmi Artifact" class="image-styled" />
            </div>

            <p class="q-mt-sm text-center">The Gurara Dam – Symbols of Cultural Heritage</p>
          </div>

          <h3 class="text-h5 text-green-main">Cultural Heritage</h3>
          <p class="text-body1 q-mt-md">
            The Kuturmi people are known for their craftsmanship in weaving, pottery, and traditional farming practices. They primarily cultivate millet, yam, and maize, and their lifestyle is closely connected to the rhythms of nature.
          </p>

          <div class="image-section q-mt-md">
            <q-img src="images/kum1.jpeg" alt="Kuturmi Traditional Attire" class="image-styled" />
            <p class="q-mt-sm text-center">Traditional Attire of the Kuturmi People</p>
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Music, Dance, and Festivals</h4>
          <p class="text-body1 q-mt-md">
            Music, storytelling, and dance play an essential role in Kuturmi culture. Their festivals, often held during harvest and religious events, feature traditional drumming and lively dances that celebrate community and ancestry.
          </p>

          <div class="flex my-5 no-wrap flex-nowrap gap-5">
            <q-img src="images/kum22.jpeg" alt="Kuturmi Dance" class="image-styled" />
            <q-img src="images/kum5.jpeg" alt="Kuturmi Festival" class="image-styled" />
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Notable Locations</h4>
          <p class="text-body1 q-mt-md">
            Kuturmi communities are often located near key historical and spiritual sites, many of which are adjacent to the regions of their historical allies. These locations reflect both their rich history and ongoing cultural significance.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional logic needed for this static content component.
</script>

<style scoped>
.kuturmi-group {
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
