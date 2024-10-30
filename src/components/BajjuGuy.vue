<template>
  <div class="">
    <section class="my-10">
      <q-divider inset />

      <!-- Introduction Section -->
      <div class="text-section">
        <h2 class="text-h4 text-green-main q-mb-md">Historical Origins</h2>
        <p class="text-body1 text-justify">
          Predominantly of Bajju stock, the people of Gumel have a rich history that spans nearly a century. Deacon Musa Mandan, the first and incumbent District Head of Gumel, shares a compelling oral tradition about the founding of the community. According to him, their ancestors arrived as hunters from regions now within Zongon Kataf Local Government Area, and were drawn southward by the promise of game-rich forests and fertile lands.
        </p>
        <p class="text-body1 text-justify q-mt-md">
          During a hunting expedition, tragedy struck when a youth was killed by a wild beast known in Hausa as <strong>"Mugun Daji"</strong> (warthog). Angered by this loss, the community organized a band of hunters who swore not to return home until they had killed the beast. Their journey led them to the present-day site of Gumel, where they ultimately decided to settle permanently, captivated by the land’s bounty and suitability for both hunting and agriculture.
        </p>
      </div>

      <!-- Image and Cultural Sections -->
      <div class="flex q-mt-md">
        <!-- Left: Artifact Section -->

        <!-- Right: Cultural Information -->
        <div class="info-section q-ml-lg">
          <div class="artifact-section flex items-center my-5 ">
            <q-img src="/images/baj3.jpeg" alt="Nok Terracotta Sculpture" class="image-styled" />
            <p class="q-mt-sm text-center">The people</p>
          </div>
          <h3 class="text-h5 text-green-main">Cultural Heritage of the Bajju People</h3>
          <p class="text-body1 q-mt-md">
            The Bajju, or Ba̠jju people, are widely known for their traditional practices, which include intricate wood carvings, pottery, blacksmithing, and farming. Agriculture remains central to their lifestyle, with crops like millet, yam, and maize cultivated in alignment with seasonal cycles. These practices are complemented by a strong emphasis on community gatherings and religious ceremonies.
          </p>

          <div class="image-section q-mt-md">
            <q-img src="images/baj.jpeg" alt="Bajju Traditional Attire" class="image-styled" />
            <p class="q-mt-sm text-center">Traditional Attire of the Bajju People</p>
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Rituals, Music, and Dance</h4>
          <p class="text-body1 q-mt-md">
            Music and dance are deeply woven into the Bajju way of life. Festive occasions are marked by traditional drumming, folk songs, and ceremonial dances, especially during weddings, harvest festivals, and spiritual events. A unique aspect of Bajju spirituality involves the reverence for spirits like the Gajimale (water spirit), believed to bring wealth in exchange for family sacrifices, and the Abvoi, a religious institution involving masked dances known as Abusak.
          </p>

          <div class="flex no-wrap flex-nowrap gap-5 ">
            <q-img src="images/baj1.jpeg" alt="Traditional Bajju Festival" class="image-styled" />
            <q-img src="images/baj2.jpeg" alt="Bajju Masked Dancers" class="image-styled" />
          </div>

          <h4 class="text-h6 q-mt-lg text-green-main">Notable Locations and Ancestral Sites</h4>
          <p class="text-body1 q-mt-md">
            Important sites for the Bajju include villages by the Gurara River, where they believe their ancestors first settled. Some legends also speak of ancestral connections to hills in Bauchi and Plateau States, where they shared cultural roots with tribes like the Afizere and Irigwe. These sites are visited during rituals and ceremonies, and reflect the Bajju's strong sense of heritage and place.
          </p>

          <h4 class="text-h6 q-mt-lg text-green-main">Bajju Taboos and Beliefs</h4>
          <p class="text-body1 q-mt-md">
            The Bajju people observe numerous taboos and superstitions, particularly surrounding food and interactions with spiritual entities. Women, for instance, are prohibited from eating eggs and certain meats, believed to symbolize future offspring. In addition, children are taught not to accept food from strangers, as it might contain Nkut (witchcraft). These beliefs, along with unique rites like Tyyi Tson (euthanasia), demonstrate a cultural system that is both protective and symbolically rich.
          </p>

          <div class="text-body1 q-mt-md">
            <ul>
              <li><strong>Witchcraft (Nkut):</strong> Bajju witchcraft involves exerting spiritual influence, with practitioners, or Akut, believed to have “second sight” for perceiving the spirit world.</li>
              <li><strong>Taboos for Women:</strong> Women are forbidden from cooking or farming for seven days after childbirth, hitting walls (which may summon spirits), and eating animal heads, which are considered sacred.</li>
              <li><strong>Masquerade Tradition (Abusak):</strong> During the Abvoi celebrations, the Abusak dancers represent spirits, performing vibrant, disciplinary dances that interact with and even chastise onlookers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional logic required.
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
