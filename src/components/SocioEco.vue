<template>
  <div class="socio-economic-page">
    <section class="my-10">
      <q-divider inset />

      <!-- Socio-Economic Activities Header -->
      <div class="text-section">
        <h2 class="text-h4 text-green-main q-mb-md">
          Socio-Economic Activities in Kachia
        </h2>
        <p class="text-body1 text-justify">
          Kachia’s socio-economic landscape is rich in history and diverse in
          resources, driven by vibrant markets, agricultural practices,
          industrial opportunities, and local entrepreneurship. Here, we explore
          the key sectors that contribute to Kachia's development and community
          well-being.
        </p>
      </div>

      <!-- Economic Activities Overview Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Overview of Economic Activities</h3>
        <p class="text-body1 q-mt-md text-justify">
          Economic activities in Kachia have roots dating back to the early 19th
          century when it served as an important trading hub. In 1922, colonial
          assessments documented Kachia’s vibrant market scene, with trading
          boosted by the Kaduna-Kafanchan-Jos railway. This infrastructure
          connected Kachia with larger markets, fostering trade, increasing
          local incomes, and supporting administrative needs.
        </p>
      </div>

      <!-- Markets and Trading Hubs Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Markets and Trading Hubs</h3>
        <q-img
          src="/images/market.jpg"
          alt="Market Scene"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Markets remain central to Kachia's economy, with various trading hubs
          offering essential goods and agricultural produce. The main markets
          and their operating days are:
        </p>
        <q-table
          class="q-mt-md"
          :rows="markets"
          row-key="name"
          :columns="[
            {
              name: 'marketName',
              required: true,
              label: 'Market Name',
              align: 'left',
              field: (row) => row.name,
            },
            {
              name: 'marketDay',
              align: 'left',
              label: 'Market Day',
              field: (row) => row.day,
            },
          ]"
        />
      </div>

      <!-- Industrial Development Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Industrial Development</h3>
        <q-img
          src="/images/industry.jpg"
          alt="Industrial Development"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Kachia hosts a ginger processing factory established in the 1990s.
          Despite its potential, the factory has not reached full capacity due
          to limited support. Revitalizing this industry would create jobs and
          strengthen Kachia's economy. Investors are encouraged to explore the
          area's potential to diversify employment and stimulate growth.
        </p>
      </div>

      <!-- Natural Resources Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Natural Resources</h3>
        <q-img
          src="/images/natural-resources.jpg"
          alt="Natural Resources"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Blessed with fertile soil, Kachia's natural resources are well-suited
          for agricultural growth. However, much of this potential remains
          untapped, requiring investment and strategic planning to unlock
          benefits for the local community and the state at large.
        </p>
      </div>

      <!-- Agriculture Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Agriculture</h3>
        <q-img
          src="/images/agriculture.jpg"
          alt="Agriculture in Kachia"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Agriculture is central to Kachia’s economy, especially for indigenous
          tribes like the Jaba, Kuturmi, and Kadara. Known as the "Home of
          Ginger," Kachia is one of Nigeria's largest producers of this valuable
          spice, with other key crops cultivated in the area including cereals,
          legumes, root crops, vegetables, and industrial crops.
        </p>
        <ul class="q-mt-md text-body1">
          <li><strong>Cereals:</strong> Sorghum, maize, rice, millet, acha.</li>
          <li>
            <strong>Legumes:</strong> Groundnuts, soybeans, cowpeas, locust
            beans.
          </li>
          <li>
            <strong>Roots & Tubers:</strong> Sweet potatoes, yams, cocoyam,
            cassava, ginger.
          </li>
          <li>
            <strong>Vegetables & Fruits:</strong> Okra, pawpaw, guava, banana,
            orange, mango, pumpkin.
          </li>
          <li>
            <strong>Industrial Crops:</strong> Sugar cane, sesame seeds, coffee,
            shea nuts.
          </li>
        </ul>
        <p class="text-body1 q-mt-md">
          Additionally, the livestock industry thrives with poultry, cattle, and
          goat farming, along with fishing supported by the Gurara Dam and
          river.
        </p>
      </div>

      <!-- Education and Healthcare Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Education and Healthcare</h3>
        <q-img
          src="/images/education-health.jpg"
          alt="Education and Healthcare"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Education is foundational to Kachia’s development, with over 257
          primary schools and 42 secondary schools. Healthcare facilities
          include two general hospitals and numerous clinics, providing
          essential services to residents. Private institutions complement
          public facilities, contributing to better standards in both sectors.
        </p>
      </div>

      <!-- Water Resources Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Water Resources</h3>
        <q-img
          src="/images/water-resources.jpg"
          alt="Water Resources"
          class="image-styled"
        />
        <p class="text-body1 q-mt-md text-justify">
          Water scarcity is a persistent issue in Kachia. While the Kachia Dam
          project was intended to provide a sustainable water source, reliance
          on wells and boreholes persists. Recent philanthropic initiatives,
          including motorized boreholes, have brought relief. Leveraging the
          Gurara Dam could provide a long-term solution if effectively managed.
        </p>
      </div>

      <!-- Conclusion Section -->
      <div class="section q-mt-md">
        <h3 class="text-h5 text-green-main">Conclusion</h3>
        <p class="text-body1 q-mt-md text-justify">
          Kachia’s socio-economic landscape embodies a blend of history,
          culture, and potential. With vibrant markets, agricultural traditions,
          and opportunities for industrial expansion, Kachia holds the promise
          of growth and prosperity. With proper investment and support, this
          region could become a leading economic center in Kaduna State.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const markets = [
  { name: "Kachia", day: "Friday" },
  { name: "Boder", day: "Monday" },
  { name: "Katari", day: "Thursday (rotational)" },
  { name: "Kurutu", day: "Friday" },
  { name: "Kurmin Tsara", day: "Wednesday" },
  { name: "Crossing", day: "Saturday" },
  { name: "Awon", day: "Tuesday" },
  { name: "Dam Market", day: "Friday (rotational)" },
  { name: "Rijaina", day: "Thursday" },
];
</script>

<style scoped>
.text-green-main {
  color: #2e7d32;
}

.text-justify {
  text-align: justify;
}

.section {
  margin-top: 16px;
}

.image-styled {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
}

.q-mt-md {
  margin-top: 16px;
}
</style>
