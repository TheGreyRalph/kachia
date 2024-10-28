<template>
  <q-page>
    <!-- Main Section on Kachia LGA History -->
    <section class="font-playfair  p-10">
      <div>
        <div class="text-h4 text-green-main">Kachia as a Local Government Area</div>
        <div class="text-subtitle1 text-grey">From 1976 to Present</div>
      </div>

      <section class="text-justify gap-5 flex">
        <p>
          Kachia became an official Local Government Area (LGA) on October 1st, 1976, as part of the first wave of LGAs
          established during General Olusegun Obasanjo’s administration. This initiative was a response to the recommendations
          of the Dasuki Report, a landmark in Nigerian local government reform aimed at bringing governance closer to the grassroots.
        </p>
        <p>
          The reform was launched on August 23rd, 1976, by Brigadier Shehu Musa Yar’Adua under the theme
          “Democracy and Development at Grassroots.” Kachia emerged as one of 14 new LGAs in what is now Kaduna State,
          marking a critical milestone for community-led governance and local empowerment.
        </p>
      </section>

      <!-- Expanded Political and Financial Overview -->
      <section class="flex gap-3">
        <div class="text-h6 text-green-main">Socio-Political Structures and Financial Overview</div>
        <p class="text-justify">
          The first local elections were held on November 30th, 1976, as a democratic step forward for the newly
          established LGAs. Prior to this, Abubakar Turaki held the office of Chairman from 1974-1975 until the 1976 elections
          brought Mr. Atama Gwani into office as the duly elected Chairman. Kachia LGA operated with an annual budget
          of ₦4,056,423 between 1976-1978, reflecting significant local resources for that era.
        </p>
        <p class="text-justify">
          During this period, the Chairman earned an annual income of ₦7,200 (₦600 monthly), while designated Councilors
          received ₦4,800 per year (₦400 monthly). Nominated council members earned ₦1,200 annually (₦100 monthly),
          and the Secretary, as the highest-paid official, earned ₦8,000 yearly (₦739 per month).
        </p>
        <p class="text-justify">
          Following military intervention and the eventual return to civilian rule in 1999, the administration of Kachia saw renewed
          developments. In January 2004, as part of the Makarfi Administration’s efforts to extend local governance,
          46 Development Areas were created in Kaduna State, two of which were established within Kachia LGA.
        </p>
      </section>
    </section>

    <!-- Section for Displaying Past Chairmen Gallery -->
    <div class="my-card text-center">
      <section>
        <div class="text-h5">Past Chairmen of Kachia LGA</div>
        <div class="text-subtitle2 text-grey">A tribute to leadership through the years</div>
      </section>

      <q-separator />

      <div class="gallery-grid my-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <q-card
          v-for="(chairman, index) in chairmen"
          :key="index"
          class="gallery-item h-full flex flex-col justify-between"
        >
          <q-img
            :src="chairman.photo"
            alt="Chairman Photo"
            class="rounded-t-md h-32  object-cover"
          />
          <q-card-section class="flex-1 p-4">
            <div class="text-[14px] font-semibold">{{ chairman.name }}</div>
            <div class="text-xs text-gray-500">{{ chairman.term }}</div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: "KachiaLGASection",
  data() {
  return {
    chairmen: [
      { name: "Atama Gwani", term: "Chairman 1976 - 1980", photo: "images/chair1.png" },
      { name: "Alh. Mamman Tukur Ankwa", term: "Chairman 1980 - 1983", photo: "images/chair2.png" },
      { name: "Alh. Lawal Dano", term: "Sole Administrator - 1984 - 1985", photo: "images/chair3.png" },
      { name: "Late Alh. Sallau Umar Kachia", term: "Chairman 1983", photo: "images/chair4.png" },
      { name: "Mr. Tanko Tete", term: "Chairman - Care-Taker Committee 1985 - 1986", photo: "images/chair5.png" },
      { name: "Mr. Barnabas Pikwawi", term: "Chairman - Care-Taker Committee 1986 - 1987", photo: "images/chair6.png" },
      { name: "Mr. Samaila Dambo", term: "Chairman 1988 - 1990", photo: "images/chair7.png" },
      { name: "Late Alh. Suleiman Yusuf", term: "Sole Administrator - 1990 - 1991", photo: "images/chair8.png" },
      { name: "Hon. Habila Alkali", term: "Executive Chairman 1991 - 1993", photo: "images/chair9.png" },
      { name: "Hon. Felix Hassan Hyet", term: "Care-Taker Chairman 1994 - 1996", photo: "images/chair10.png" },
      { name: "Late Hon. Sunday Bali", term: "Acting Chairman 1996 - 1997", photo: "images/chair11.png" },
      { name: "Hon. Bulus Sawta", term: "Chairman 1995 - 1996", photo: "images/chair12.png" },
      { name: "Alh. Yunusa Muhammed", term: "Chairman - Care-Taker Committee 1998 - 1999", photo: "images/chair13.png" },
      { name: "Hon. Abubakar G. Haruna", term: "Executive Chairman 1997 - 1998", photo: "images/chair14.png" },
      { name: "Hon. Engr. Haruna Joseph Kato", term: "Executive Chairman 1999 - 2002", photo: "images/chair15.png" },
      { name: "Mr. Sani Mazawaje", term: "Chairman - Care-Taker Committee 2003 - 2004", photo: "images/chair16.png" },
      { name: "Hon. Bulus Danfulani", term: "Chairman Interim-Management Committee 2004", photo: "images/chair17.png" },
      { name: "Hon. Edward Ishaya Pati", term: "Executive Chairman 2004 - 2007", photo: "images/chair18.png" },
      { name: "Hon. Abdulkadir Bello", term: "Chairman Interim Management Committee 2007 - 2008", photo: "images/chair19.png" },
      { name: "Alh. Aliyu Salisu Ikara", term: "Chairman - Care-Taker Committee 2007", photo: "images/chair20.png" },
      { name: "Hon. John Saidu", term: "Executive Chairman 2008 - Date", photo: "images/chair21.png" },
    ],
  };
},


};
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 20px auto;
}
.text-primary {
  color: #2196F3;
}
.full-width {
  width: 100%;
}
.rounded-borders {
  border-radius: 8px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
.gallery-item {
  max-width: 180px;
  margin: auto;
  transition: transform 0.3s;
}
.gallery-item:hover {
  transform: scale(1.05);
}
</style>
