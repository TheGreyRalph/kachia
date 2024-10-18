<template>
  <q-page class="">
    <div class="parallax-section">
      <div class="overlay"></div>
      <div class="parallax-content">
        <h1 class="text-h2 text-bold">Welcome to Kachia LGA</h1>
        <p class="text-subtitle2">The Home of Ginger and Cultural Diversity</p>
      </div>
    </div>


    <section class="q-pa-md mx-5 q-mt-lg">
      <h2 class="text-h4 text-center text-green-main q-mb-md">About Kachia Local Government Area</h2>
      <q-divider inset />
      <p class="text-body1 q-mt-md q-px-md text-justify">
        Kachia (Adara: Akhwee) is a Local Government Area located in the southern part of Kaduna State, Nigeria.
        Known as the "Home of Ginger," Kachia is an important part of Kaduna's economy and cultural heritage.
        It covers 4,570 km² and had a population of 252,568 according to the 2006 census.
      </p>
    </section>


    <div class="  items-center mx-5 ">
      <p class="text-body1 text-justify q-pa-md">
        Ginger has become the hallmark of Kachia’s economy, earning its title as the "Home of Ginger." Other key agro-products include corn, millet, and soybeans. The town of Kachia itself is a bustling economic hub with various small and medium-scale businesses.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="relative group" data-aos="fade-up">
          <img
            src="images/gin.jpg"
            alt="Kachia Landscape"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 class="text-white text-xl font-bold">Beautiful Landscapes</h3>
          </div>
        </div>

        <div class="relative group" data-aos="zoom-in">
          <img
            src="images/kgin3.jpg"
            alt="Kachia Culture"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 class="text-white text-xl font-bold">Rich Culture</h3>
          </div>
        </div>

        <div class="relative group" data-aos="fade-right">
          <img
            src="images/kgin2.jpg"
            alt="Kachia Festival"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 class="text-white text-xl font-bold">Festivals & Events</h3>
          </div>
        </div>

        <div class="relative group" data-aos="fade-left">
          <img
            src="images/kgin4.jpg"
            alt="Kachia Market"
            class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 class="text-white text-xl font-bold">Local Markets</h3>
          </div>
        </div>
      </div>
    </div>

    <section class="q-pa-md">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Boundaries</h2>
      <q-divider />


      <div class="relative group grid grid-cols-2 items-center justify-center gap-5" data-aos="zoom-in">
        <img
          src="images/mapk.png"
          alt="Kachia Culture"
          class="rounded-lg shadow-lg w-[80%] h-full object-cover transition-all duration-500 transform group-hover:scale-105"
        />
        <p class="text-body1 q-mt-sm q-px-md text-justify">
          Kachia LGA is bordered by Zangon Kataf LGA to the east, Kajuru LGA to the northeast, Kagarko LGA to the
          south, Jaba LGA to the southeast, and Chikun LGA to the northwest. It also shares boundaries with Munya and Paikoro LGAs of Niger State to the west.
        </p>


      </div>

    </section>

    <section class="q-pa-md bg-grey-2">
      <h2 class="text-h5 text-center text-green-main q-mb-sm text-bold">Administrative Subdivisions</h2>
      <q-divider inset />
      <div class="row q-gutter-md q-mt-md q-px-md">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="bg-white">
            <q-card-section>
              <div class="text-h6 text-green-main">Agunu</div>
              <div class="text-body2">A major administrative ward.</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered class="bg-white">
            <q-card-section>
              <div class="text-h6 text-green-main">Kachia (Akhwee)</div>
              <div class="text-body2">The central administrative hub.</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="q-pa-md q-mt-lg text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Population</h2>
      <q-divider inset />
      <p class="text-body1 q-mt-md q-px-md text-justify">
        The Kachia Local Government Area had a population of 252,568 according to the 2006 national census,
        with projections by 2016 estimating it to be around 340,900. The population comprises various ethnic groups, including the Adara, Tinor-Myamya, Gbagyi, and Ham.
      </p>
    </section>

    <section class="q-pa-md q-mt-lg bg-grey-1 text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Climate</h2>
      <q-divider inset />

      <!-- Horizontal Scrolling Container -->
      <div class="seasons-scroll q-mt-md q-px-md">
        <div class="season-card">
          <q-icon name="sunny" size="50px" class="text-yellow" />
          <h3 class="text-h6 q-mt-md">Hot Season</h3>
          <p class="text-body2">Avg daily high temperature: 92°F (Feb - Apr)</p>
        </div>

        <div class="season-card">
          <q-icon name="ac_unit" size="50px" class="text-blue" />
          <h3 class="text-h6 q-mt-md">Cold Season</h3>
          <p class="text-body2">Avg daily low temperature: 58°F (Dec)</p>
        </div>

        <div class="season-card">
          <q-icon name="cloud_queue" size="50px" class="text-grey" />
          <h3 class="text-h6 q-mt-md">Rainy Season</h3>
          <p class="text-body2">Heavy rainfalls: May - Oct</p>
        </div>

        <div class="season-card">
          <q-icon name="grain" size="50px" class="text-green" />
          <h3 class="text-h6 q-mt-md">Dry Season</h3>
          <p class="text-body2">Low humidity: Nov - Jan</p>
        </div>
      </div>
    </section>

    <section class="q-pa-md bg-grey-2 q-mt-lg text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Religion</h2>
      <q-divider inset />
      <p class="text-body1 q-mt-md q-px-md text-justify">
        Christianity has the largest following in Kachia LGA, followed by Islam. African Traditional religions also have a significant and growing number of adherents.
      </p>
    </section>

    <section class="q-pa-md q-mt-lg text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Notable People</h2>
      <q-divider inset />
      <ul class="text-body1 q-pl-lg q-mt-md text-left">
        <li>Martin Luther Agwai – Military personnel</li>
        <li>Yohanna Kure – Military personnel</li>
      </ul>
    </section>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.text-green-main {
  color: #2e7d32;
}

.q-parallax .absolute-center h1 {
  font-weight: bold;
  font-size: 3rem;
}

.q-card {
  border-radius: 12px;
}
.q-pa-md {
  padding: 24px !important;
}
.text-justify {
  text-align: justify;
}
.parallax-section {
  position: relative;
  background-image: url('images/kgin.jpg');
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
.seasons-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}


.season-card {
  min-width: 220px;
  flex: 0 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;
  transition: transform 0.3s ease;
}

.season-card:hover {
  transform: scale(1.05); 
}
</style>
