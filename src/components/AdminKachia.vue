<template>
  <q-page>
    <div class=" my-8">
      <section class=" bg-white rounded-lg overflow-hidden">
        <!-- Header Section with Hero Image and Title -->

          <div class=" ">
            <h1 class="text-4xl font-bold text-green-main ">Administrators of Kachia</h1>
            <p class="text-lg mt-1">The Evolution of Kachia as an Administrative Area (1969 - 1976)</p>
          </div>

        <!-- Introduction Section -->
        <q-card-section class="">
          <p class="text-lg leading-relaxed mb-6">
            Following the dissolution of the Native Authorities in 1967, a sweeping series of administrative reforms established Kachia as an Administrative Area within North Central State. Led by Colonel Abba Kyari, these changes marked a shift from colonial-based authority structures to locally empowered councils, ensuring greater representation and alleviating longstanding regional oppression.
          </p>
          <q-separator spaced />
        </q-card-section>

        <!-- Phase One: Establishment of Administrative Areas -->
        <q-card-section class="p-6 bg-gray-50">
          <h2 class="text-2xl font-semibold mb-4">Phase One: Creation of Administrative Areas (1969)</h2>
          <p class="text-base leading-relaxed mb-6">
            In April 1969, Kachia was established as one of nine Administrative Areas, a move that replaced the old Native Authority system. Colonel Kyari’s reforms centralized administrative power within councils composed of local representatives, aiming to decentralize governance and encourage local leadership.
          </p>
          <q-list bordered class="bg-gray-100 rounded-lg">
            <q-item>
              <q-item-section avatar>
                <q-icon name="star" color="indigo"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lg">Kachia was initially headquartered in Zonkwa</q-item-label>
                <q-item-label caption class="text-sm">Due to distance, the headquarters was relocated to Kachia in 1969.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="domain" color="indigo"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lg">Colonel Abba Kyari's Reforms</q-item-label>
                <q-item-label caption class="text-sm">Replacing the Native Authority, local councils were formed to increase representation and empowerment.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Phase Two: Expanded Representation (1972) -->
        <q-card-section class="p-6">
          <h2 class="text-2xl font-semibold mb-4">Phase Two: Expansion and Greater Representation (1972)</h2>
          <p class="text-base leading-relaxed mb-6">
            In response to the need for broader representation, local councils were expanded in 1972 to include members elected from the administrative area. The composition was set at two-thirds elected representatives and one-third appointed members, serving a three-year term.
          </p>
          <q-list bordered class="bg-gray-100 rounded-lg">
            <q-item v-for="(member, index) in councilMembers" :key="index" clickable>
              <q-item-section avatar>
                <q-icon name="person" color="green"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lg">{{ member.name }}</q-item-label>
                <q-item-label caption class="text-sm">{{ member.role }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Phase Three: Key Events and Relocation of Headquarters -->
        <q-card-section class="p-6 bg-gray-50">
          <h2 class="text-2xl font-semibold mb-4">Phase Three: Relocation of Headquarters &amp; Commissioning of Kachia Township Secretariat (1971)</h2>
          <p class="text-base leading-relaxed mb-6">
            With approval from the Commissioner for Local Government, the administrative seat moved from Zonkwa to Kachia in 1971. The relocation was formalized with the construction of the Kachia Township Secretariat, commissioned by Mal. Tagwai Sambo, and symbolized by the planting of two trees by dignitaries.
          </p>
          <q-timeline>
            <q-timeline-entry
              v-for="event in events"
              :key="event.year"
              :title="event.year"
              :subtitle="event.title"
              class="text-gray-700"
            >
              <q-card flat class="bg-gray-200 rounded-lg p-3">
                <p>{{ event.description }}</p>
              </q-card>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>

        <!-- Notable Figures and Administrators Section -->
        <q-card-section class="p-6">
          <h2 class="text-2xl font-semibold mb-4">Notable Figures and Administrators (1969 - 1976)</h2>
          <q-list bordered class="bg-gray-100 rounded-lg">
            <q-item v-for="(figure, index) in notableFigures" :key="index" clickable>
              <q-item-section avatar>
                <q-icon name="supervisor_account" color="amber"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-lg">{{ figure.name }}</q-item-label>
                <q-item-label caption class="text-sm">{{ figure.role }} ({{ figure.years }})</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Council Members from the 1972 expansion
      councilMembers: [
        { name: 'Alhaji Ahmed Kuriga', role: 'District Representative' },
        { name: 'Mal. Akusi Bugai', role: 'District Representative' },
        { name: 'Ibrahim S. Makera', role: 'District Representative' },
        { name: 'Alhaji Umaru Kagarko', role: 'District Representative' },
        // Add other members
      ],

      // Timeline of major events during the administrative changes
      events: [
        { year: '1969', title: 'Administrative Area Established', description: 'Kachia designated as an Administrative Area under Colonel Kyari’s reforms.' },
        { year: '1971', title: 'Headquarters Relocated to Kachia', description: 'With approval, the administrative seat moved from Zonkwa to Kachia.' },
        { year: '1972', title: 'Council Expansion', description: 'New members elected and appointed for broader representation.' },
        // Add other events as needed
      ],

      // Notable administrators and figures in Kachia's history
      notableFigures: [
        { name: 'Alhaji Ahmadu Bawa Gambo', role: 'Chairman', years: '1969-1974' },
        { name: 'Mal. Gwani Dogo', role: 'Administrative Secretary', years: '1974-1976' },
        { name: 'Alh. Abubakar Turaki', role: 'Care Taker', years: '1976' },
        // Add other figures
      ]
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
.text-gray-700 {
  color: #4a5568;
}
.bg-gray-50 {
  background-color: #f9fafb;
}
.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
