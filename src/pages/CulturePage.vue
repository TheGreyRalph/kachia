<template>
  <q-page class="q-pa-md font-playfair culture-page">
    <div class="parallax-section">
      <div class="parallax-content">
        <h1 class="text-h2 text-bold">The Culture of Kachia</h1>
        <p class="text-subtitle2">Diversity and Tradition in Harmony</p>
      </div>
    </div>

    <section class="md:px-32 md:py-5 q-mt-md">
      <h2 class="text-h4 text-green-main q-mb-md text-center">The People of Kachia</h2>
      <q-divider inset />
      <p class="text-body1 q-mt-md q-px-md text-justify">
        Kachia Local Government Area is home to a vibrant mix of ethnic groups, including the Kadara, Jaba, and Kuturmi as the dominant tribes. Others, such as the Hausa, Fulani, Bajju, Ikulu, Yoruba, Igbo, and Kagoro, also have a strong presence. Despite the diverse ethnicities, the people have coexisted peacefully over the years, creating a unique cultural blend.
      </p>
    </section>

    <section class="md:px-32 md:py-5 flex q-mt-lg bg-grey-1 rounded-borders">
      <h3 class="text-h5 text-indigo-10 q-mb-md">The Adara Tribe</h3>
      <div class=" md:grid flex items-center justify-center grid-cols-2">
        <q-img
        src="images/culture1.png"
          class="md:w-[80%] "
          style=""
        />
        <p class="text-body1 q-px-md text-justify">
          According to scholars, the Kadara people trace their origins to the great rock of Kufena, located six miles from Zaria. The tribe moved southward due to Hausa migration, eventually settling in the Kajuru and Kachia areas. Oral tradition also suggests that they might have migrated from the Middle East, fleeing persecution for refusing to convert to Islam. Despite the uncertainties around their precise origin, the Kadara people’s rich history is well-preserved in their traditions and cultural practices.
        </p>
      </div>

    </section>

    <section class="md:px-32 md:py-5 q-mt-lg">
      <h3 class="text-h5 text-indigo-10 q-mb-md">The Ham (Jaba) Tribe</h3>
      <div class=" md:grid flex items-center gap-10  justify-center grid-cols-2">
        <p class="text-body1 q-px-md text-justify">
          The Ham people, commonly referred to as Jaba, reside in the southern and southeastern parts of Kachia. Oral traditions state that they migrated south from Egypt, following the Nile Valley. Today, the Jaba live across the Gurara River and maintain a distinct cultural identity.
        </p>
        <q-img
        src="images/culture2.png"
          class="md:w-[80%] "
        />
      </div>
    </section>

    <section class="md:px-32 md:py-5 q-mt-lg bg-grey-1 rounded-borders">
      <h3 class="text-h5 text-indigo-10 q-mb-md">The Kuturmi Tribe</h3>
      <div class=" md:grid flex items-center justify-center grid-cols-2">
        <q-img
        src="images/culture3.png"
          class="q-mb-md md:w-[80%] "
        />
        <p class="text-body1 q-px-md text-justify">
          The Kuturmi people trace their origins back to Kano, migrating to their current settlements after the Jihad wars of the early 1800s. Along the way, they intermarried with the Kadara people, creating a rich cultural blend that continues to thrive today. The Kuturmi can now be found across multiple regions within Kachia and Kagarko Local Government Areas.
        </p>
      </div>

    </section>

    <section class="md:px-32 md:py-5 q-mt-lg">
      <h3 class="text-h5 text-green-main q-mb-md">Religion and Judiciary in Kachia</h3>
      <p class="text-body1 q-px-md text-justify">
        Before the arrival of missionaries, the people of Kachia practiced traditional religions, venerating nature and ancestral spirits. Today, Christianity is the predominant religion in the region, with a considerable Muslim population, and traces of traditional worship still practiced. Justice in Kachia was traditionally administered by local courts, with tribal leaders overseeing the judiciary. Although influenced by colonial rule, the native judicial system still plays an important role.
      </p>
    </section>

    <section class="md:px-32 md:py-5 q-mt-lg">
      <h3 class="text-h5 text-indigo-10 q-mb-md">Traditional Dances</h3>
      <div class="">
        <q-img
         src="images/culture1.png"
          style=""
          class="w-1/2"
          img-class="rounded-borders"
        />
        <q-img
          src="images/culture3.png"
          style=""
          class="w-1/2"
          img-class="rounded-borders"
        />
        <q-img
         src="images/culture2.png"
          style=""
          class="w-1/2"
          img-class="rounded-borders"
        />
      </div>
      <p class="text-body1  text-justify q-mt-md">
        Traditional dances are an essential part of the cultural heritage of Kachia, performed at festivals and important events. The Adara, Kuturmi, and Ham tribes each have their own unique dance styles, often accompanied by vibrant drumming and colorful attire.
      </p>
    </section>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.culture-page {
  background-color: #f5f5f5;
}

.text-green-main {
  color: #2e7d32;
}

.q-img-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.q-parallax .absolute-center h1 {
  font-weight: bold;
  font-size: 3rem;
}

.q-parallax .absolute-center p {
  font-size: 1.5rem;
}

.rounded-borders {
  border-radius: 12px;
}

.text-justify {
  text-align: justify;
}

.bg-grey-1 {
  background-color: #f0f0f0;
}

.q-ma-md {
  margin: 12px;
}

.q-mt-lg {
  margin-top: 24px;
}

.parallax-section {
  position: relative;
  background-image: url('images/kachia2.jpg');
  height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.parallax-content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.content-section {
  background-color: white;
  padding: 40px;
}
</style>
