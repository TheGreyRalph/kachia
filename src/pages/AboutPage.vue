<template>
  <q-page class="font-playfair">
    <div class="parallax-section font-playfair">
      <div class="overlay"></div>
      <div class="parallax-content">
        <h1 class="text-h2 text-bold">Welcome to Kachia LGA</h1>
        <p class="text-subtitle2">The Home of Ginger and Cultural Diversity</p>
      </div>
    </div>

    <div
      class="mx-5 flex my-20 bg-bright-shade border-bright-shade shadow-sm border row"
    >
      <q-tabs
        v-model="selectedTab"
        vertical
        class="bg-grey-1 w-52 text-green-main shadow-md rounded-lg"
      >
        <q-tab name="about" icon="info" label="About" />
        <q-tab name="evolution" icon=" secon" label="Evolution" />
        <q-tab name="history" icon=" " label="History" />
        <q-tab name="origin" icon="origin " label="Etymology" />
        <q-tab name="army" icon="origin " label="Arrival of Army" />
        <q-tab name="tribe" icon="terrain" label="Tribes and Attaire" />
        <q-tab name="boundaries" icon="map" label="Boundaries" />
        <q-tab name="population" icon="people" label="Population" />
        <q-tab name="climate" icon="wb_sunny" label="Climate" />
        <q-tab name="religion" icon="place" label="Religion" />
        <q-tab name="notable" icon="star" label="Notable People" />
      </q-tabs>

      <div class="w-full col-md-9">
        <q-tab-panels v-model="selectedTab" animated>
          <q-tab-panel class="bg-bright-shade" name="about">
            <section class="md:px-32 font-playfair q-mt-lg">
              <h2 class="text-h4 text-center text-green-main q-mb-md">
                About Kachia Local Government Area
              </h2>
              <q-divider inset />
              <p class="text-body1 q-mt-md q-px-md text-justify">
                Kachia (Adara: Akhwee) is a Local Government Area located in the
                southern part of Kaduna State, Nigeria. Known as the "Home of
                Ginger," Kachia is an important part of Kaduna's economy and
                cultural heritage. It covers 4,570 km² and had a population of
                252,568 according to the 2006 census.
              </p>
            </section>

            <div class="md:px-32 items-center font-playfair">
              <p class="text-body1 q-mt-md q-px-md text-justify">
                Ginger has become the hallmark of Kachia’s economy, earning its
                title as the "Home of Ginger." Other key agro-products include
                corn, millet, and soybeans. The town of Kachia itself is a
                bustling economic hub with various small and medium-scale
                businesses.
              </p>
              <div class="grid mt-5 grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group" data-aos="fade-up">
                  <img
                    src="images/gin.jpg"
                    alt="Kachia Landscape"
                    class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <h3 class="text-white text-xl font-bold">
                      Beautiful Landscapes
                    </h3>
                  </div>
                </div>

                <div class="relative group" data-aos="zoom-in">
                  <img
                    src="images/kgin3.jpg"
                    alt="Kachia Culture"
                    class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <h3 class="text-white text-xl font-bold">Rich Culture</h3>
                  </div>
                </div>

                <div class="relative group" data-aos="fade-right">
                  <img
                    src="images/kgin2.jpg"
                    alt="Kachia Festival"
                    class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <h3 class="text-white text-xl font-bold">
                      Festivals & Events
                    </h3>
                  </div>
                </div>

                <div class="relative group" data-aos="fade-left">
                  <img
                    src="images/kgin4.jpg"
                    alt="Kachia Market"
                    class="rounded-lg shadow-lg w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <h3 class="text-white text-xl font-bold">Local Markets</h3>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel class="bg-bright-shade" name="army">
            <section
              class="px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            >
              <div>
                <h1 class="text-green-main font-semibold">
                  Arrival of the Army in Kachia
                </h1>

                <p class="text-green-main">
                  History of Military Activities in Kachia
                </p>
              </div>

              <p>
                The exact date regarding the beginning of military activities in
                Kachia town remains unclear. However, a source mentioned that in
                May 1900, a patrol from the Royal West African Frontier Force
                (RWAFF) was sent by Lugard to explore the northern region. Their
                mission was to survey the land and find a suitable
                administrative headquarters for the Northern Protectorate as
                well as a site for military exercises.
              </p>

              <p>
                By August of that year, the patrol had collected topographical
                data for a location known as Kaduna. During their journey, the
                patrol team was attacked by a local pagan tribe, mistaking them
                for slave raiders who frequently traveled the same route from
                Zaria to Kaduna, Keffi, and Borno. This route, which is now a
                motorable road, connects Kano, Zaria, Kaduna, Kachia, Keffi, and
                beyond, passing through Benue to southern Nigeria.
              </p>
            </section>

            <section
              class="px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            >
              <h2 class="text-green-main font-semibold">
                Military Range and Artillery
              </h2>
              <p>
                Kachia later became notable for housing Nigeria's famous
                military range and is the headquarters of the Nigeria Army Corps
                of Artillery. The town has hosted soldiers and military
                personnel from across the globe, including Europe, the Americas,
                and Asia, who came to train or participate in exercises. Despite
                its military prominence, Kachia has seen limited economic
                development over the years.
              </p>

              <p>
                During the Nigerian Civil War in the 1960s, Kachia was the
                planned site for the northern elements' counter-coup against
                General Aguiyi Ironsi’s regime. In July 1966, General Ironsi
                visited Kachia for military exercises, and rumors of unrest led
                him to summon General Hassan Usman Katsina, who was then a Major
                and Governor of the Northern Region. It is believed that General
                Katsina’s presence prevented the coup from taking place in
                Kachia.
              </p>
            </section>

            <section
              class="px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            >
              <h2 class="text-green-main font-semibold">
                Establishment of Military Barracks in Kachia
              </h2>
              <p>
                Mal. Yashi Abdu, 103 years old, remembered the presence of
                military activity in Kachia for over a century. He served in the
                West African Frontier Force (WAFF) and recalled various barracks
                established over the years. Kachia had four main barracks:
              </p>
              <img
                src="images/image.png"
                alt="Kachia Market"
                class="rounded-lg shadow-lg w-[70%] h-full object-cover transition-all duration-500 transform group-hover:scale-105"
              />
              <ul>
                <li>The first barrack was in Ungwan Katanga.</li>
                <li>
                  The second was located at Madaka, near the current Police
                  Station.
                </li>
                <li>
                  The third was in Nasarawa Kachia, near the Rimi Trees and
                  south of the present-day Kachia market.
                </li>
                <li>
                  The fourth, known as Ganabatara Barracks, was located outside
                  the walls of Kachia town (Ganuwa), east of the present
                  Government Secondary School Kachia.
                </li>
              </ul>

              <p>
                Later, more military camps were established, such as the
                Engineer Barracks west of Kachia, the Nigeria Army
                Rehabilitation Centre, and the Nigeria Army School of Artillery
                (NASA). Despite the long-standing military presence, Kachia has
                struggled with economic growth, although its military
                significance is recognized internationally.
              </p>
            </section>
          </q-tab-panel>

          <q-tab-panel class="bg-bright-shade" name="evolution">
            <section
              class="px-32 py-5 flex text-base flex-col gap-2 font-playfair"
            >
              <p>
                Kachia, one of the oldest towns in Kaduna State, has a rich
                historical and political legacy. It played a key role in the
                pre-colonial and post-colonial eras, becoming a prominent center
                under the Zaria Native Authority. It has contributed to
                Nigeria's political development, producing notable leaders.
                Kachia is geographically bordered by Kajuru, Jaba, Kagarko,
                Zongon Kataf, and parts of Niger State, with a population of
                244,274 (2006 census) and a landmass of 4,000 sq km.
              </p>

              <p>
                Kachia is home to Africa's famous military range, the Gurara
                River, rich cultural sites like the Jaba Kogo rocks and Kuturmi
                mountains, and the annual festivals of the HAM, Kadara, and
                Kuturmi peoples. Its Guinea Savannah climate brings a wet season
                from April to October and a dry season with harmattan winds from
                November to March.
              </p>

              <p>
                Agriculture is central, with farming cycles following the rains,
                and the Laduga grazing reserve supports pastoral activities.
                Established in 1976, Kachia originally comprised five districts
                and now serves as the headquarters of one of the state's Local
                Government Areas. Several districts, including Kaduna South,
                Chikun, Kajuru, and Zangon Kataf, have since emerged from this
                region.
              </p>
            </section>
          </q-tab-panel>
          <q-tab-panel class="bg-bright-shade" name="history">
            <section
              class="px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            >
              <h2 class="text-green-main">HISTORY</h2>

              <p>
                There have been various claims regarding the original owners of
                Kachia, but the most accepted version acknowledges the Kadara
                tribe as the rightful owners. The origins of Kachia date back
                over 200 years, to the late 18th or early 19th century. Oral
                traditions suggest that Kachia was founded by Mal. Idi Magaji
                Maikalgo, a Hausa hunter from Katsina, who settled in the Kadara
                village of Allah Magani before moving to what is now Kachia due
                to the fertile land and rivers.
              </p>

              <p>
                Mal. Idi and his companions built the first houses in Kachia,
                fencing the settlement for protection against wild animals,
                notably hyenas. The town quickly grew, attracting more settlers,
                traders, and merchants from Zaria and Kano. While some versions
                credit Maikalgo for founding the town, others suggest that he
                needed to obtain permission from the Zazzau Emirate to settle in
                Kachia, indicating that the area was already inhabited before
                his arrival.
              </p>

              <p>
                Alternative accounts suggest that Kachia was initially a Fulani
                hamlet, established due to its strategic position along a key
                trade route from Kano to southern Nigeria. Some argue that the
                Fulani were the first settlers, while others claim the town was
                a melting pot, with various ethnic groups like the Rumadah,
                Kuturmi, Jaba, and others contributing to its development. Over
                time, these groups formed a united community through
                intermarriages and cooperation against external threats.
              </p>

              <p>
                In support of the Kadara ownership claim, it is said that the
                pillars of stones found in Kachia were sites where the Kadara
                people worshipped their gods, further cementing their connection
                to the land. Despite the presence of other tribes and versions
                of the town's founding, it is widely accepted that the Kadara
                were the original inhabitants of the area, though the role of
                Mal. Idi Maikalgo remains significant in the town's history.
              </p>

              <p>
                In conclusion, the history of Kachia reflects a blend of
                different ethnic groups who contributed to its growth and
                development. Although the Kadara are recognized as the original
                owners, the collective efforts of the Hausa, Fulani, Jaba,
                Kuturmi, and other tribes have shaped Kachia into the town it is
                today. Each group played a vital role in its history, making it
                a pluralistic and dynamic settlement.
              </p>
            </section>
          </q-tab-panel>


          <q-tab-panel
            class="bg-bright-shade px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            name="tribe"
          >
          <TribePage/>
        </q-tab-panel>





          <q-tab-panel
            class="bg-bright-shade px-32 py-5 flex text-base flex-col gap-5 font-playfair"
            name="origin"
          >
            <section>
              <h2 class="text-green-main font-semibold">
                Origin of the Name "Kachia"
              </h2>
              <p>
                The name "Kachia" originated from the experiences of merchants
                who visited the town. Although there was an abundance of food
                and drink, accommodation was scarce. Merchants would exclaim,
                "kaci kasha babu wurin kwana" meaning, "You eat and drink but
                there's no place to sleep," which eventually led to the name
                "Kachia."
              </p>
            </section>

            <section>
              <h2 class="text-green-main font-semibold">
                Kachia Wall (Ganuwa)
              </h2>
              <p>
                Kachia was fortified by a large wall called Ganuwa to protect it
                from tribal wars and slave raiders. The wall, now in ruins, had
                four main gates: Kofar Shahu, Kofar Kurmin Biri, Kofar Gaiyan,
                and Kofar Kusfa.
              </p>
            </section>

            <section>
              <h2 class="text-green-main font-semibold">
                Wards (Ungwa) of Kachia
              </h2>
              <p>
                Kachia was divided into various wards based on ethnic groups.
                For example, Ungwan Madaka/Katagan housed mostly the Kadara
                people, while Kwantaro had a mix of Hausa butchers and Jaba
                people. Ungwan Kusfa was predominantly Kuturmi, and Ungwan Gabas
                housed people of Damau origin, who were once servants to the
                Emir of Zazzau.
              </p>
            </section>

            <section>
              <h2 class="text-green-main font-semibold">Sabon Gari Kachia</h2>
              <p>
                Sabon Gari was an enclave for settlers, where people from
                different ethnic backgrounds lived. It housed churches and
                schools and was considered a melting pot of diverse cultures.
              </p>
            </section>

            <section>
              <h2 class="text-green-main font-semibold">Gumel</h2>
              <p>
                Gumel, predominantly inhabited by the Bajju people, was
                originally settled by hunters who found the land suitable for
                both hunting and farming. After a tragic incident involving a
                wild beast, they decided to settle permanently in the area.
              </p>
            </section>
          </q-tab-panel>

          <q-tab-panel class="bg-bright-shade" name="boundaries">
            <section class="py-5 md:px-32">
              <h2 class="text-h5 text-green-main q-mb-sm text-bold">
                Boundaries
              </h2>
              <q-divider />

              <div
                class="relative group flex md:grid md:grid-cols-2 items-center justify-center gap-5"
                data-aos="zoom-in"
              >
                <img
                  src="images/mapk.png"
                  alt="Kachia Culture"
                  class="rounded-lg shadow-lg w-[80%] h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                />
                <p class="text-body1 q-mt-sm q-px-md text-justify">
                  Kachia LGA is bordered by Zangon Kataf LGA to the east, Kajuru
                  LGA to the northeast, Kagarko LGA to the south, Jaba LGA to
                  the southeast, and Chikun LGA to the northwest. It also shares
                  boundaries with Munya and Paikoro LGAs of Niger State to the
                  west.
                </p>
              </div>
            </section>
          </q-tab-panel>

          <!-- <section class=" md:px-32 py-5 bg-grey-2">
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
    </section> -->

          <q-tab-panel class="bg-bright-shade" name="population">
            <section class="md:px-32 py-5 q-mt-lg text-center">
              <h2 class="text-h5 text-green-main q-mb-sm text-bold">
                Population
              </h2>
              <q-divider inset />
              <p class="text-body1 q-mt-md q-px-md text-justify">
                The Kachia Local Government Area had a population of 252,568
                according to the 2006 national census, with projections by 2016
                estimating it to be around 340,900. The population comprises
                various ethnic groups, including the Adara, Tinor-Myamya,
                Gbagyi, and Ham.
              </p>
            </section>
          </q-tab-panel>

          <q-tab-panel class="bg-bright-shade" name="climate">
            <section class="md:px-32 q-mt-lg bg-grey-1 text-center">
              <h2 class="text-h5 text-green-main q-mb-sm text-bold">Climate</h2>
              <q-divider inset />

              <!-- Horizontal Scrolling Container -->
              <div class="seasons-scroll q-mt-md q-px-md">
                <div class="season-card">
                  <q-icon name="sunny" size="50px" class="text-yellow" />
                  <h3 class="text-h6 q-mt-md">Hot Season</h3>
                  <p class="text-body2">
                    Avg daily high temperature: 92°F (Feb - Apr)
                  </p>
                </div>

                <div class="season-card">
                  <q-icon name="ac_unit" size="50px" class="text-blue" />
                  <h3 class="text-h6 q-mt-md">Cold Season</h3>
                  <p class="text-body2">
                    Avg daily low temperature: 58°F (Dec)
                  </p>
                </div>

                <div class="season-card">
                  <q-icon name="cloud_queue" size="50px" class="text-grey" />
                  <h3 class="text-h6 q-mt-md">Rainy Season</h3>
                  <p class="text-body2">Heavy rainfalls: May - Oct</p>
                </div>

                <div class="season-card md:px-32 py-5">
                  <q-icon name="grain" size="50px" class="text-green" />
                  <h3 class="text-h6 q-mt-md">Dry Season</h3>
                  <p class="text-body2">Low humidity: Nov - Jan</p>
                </div>
              </div>
            </section>
          </q-tab-panel>

          <!-- <section class=" md:px-32 q-mt-lg text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Religion</h2>
      <q-divider inset />
      <p class="text-body1 q-mt-md q-px-md text-justify">
        Christianity has the largest following in Kachia LGA, followed by Islam. African Traditional religions also have a significant and growing number of adherents.
      </p>
    </section>

    <section class="md:px-32 py-5 q-mt-lg text-center">
      <h2 class="text-h5 text-green-main q-mb-sm text-bold">Notable People</h2>
      <q-divider inset />
      <ul class="text-body1 q-pl-lg q-mt-md text-left">
        <li>Martin Luther Agwai – Military personnel</li>
        <li>Yohanna Kure – Military personnel</li>
      </ul>
    </section> -->
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TribePage from "src/components/TribePage.vue";

const selectedTab = ref("about");
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
  background-image: url("images/kgin.jpg");
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
