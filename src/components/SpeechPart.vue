<template>
  <q-page class="">
    <div class="custom-shape-divider-top-1730287576">
      <!-- SVG Top Divider Code Here -->
    </div>
    <!-- <div class="custom-shape-divider-top-1730287576">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="#72B739"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="#72B739"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="#72B739"
        ></path>
      </svg>
    </div> -->
    <!-- Main Content Section -->
    <!-- <div
      class="flex flex-col md:grid md:grid-cols-2 px-10 py-5 md:py-10 font-playfair md:px-10 q-col-gutter-md"
    > -->
    <!-- Photo Section -->
    <div class="cus-speech-wrapper">
      <div class="cus-speech-section_title-cont" data-aos="fade-up">
        <div>
          <h1 class="">
            <span>Speech Delivered</span> by <br /><span
              >Hon. Dr. Manzo Daniel Maigari</span
            >
          </h1>
          <h2 class="">Executive Chairman, Kachia Local Government Area</h2>
        </div>
        <p v-if="!$q.screen.lt.md" class="">
          On the Occasion of the Swearing-In Ceremony of Elected Ward
          Councillors, <span>Monday, 4th November 2024</span>,
          <br />
          Local Government Secretariat, Kachia.
        </p>
      </div>

      <div class="cus-speech-main-cont">
        <div class="cus-speech-bio_title-cont" data-aos="fade-right">
          <div class="cus-speech-subject-visual-cont">
            <div class="cus-subject-visual-cont">
              <img
                src="images/pic01.jpg"
                alt="Hon. Dr. Manzo Maigari"
                class=""
              />
            </div>
            <p class="cus-speech-subject-title-1">
              Hon. Dr. Manzo Daniel Maigari
            </p>
            <p class="cus-speech-subject-title-2">
              Executive Chairman, Kachia Local Government Area
            </p>
          </div>
          <!-- </div> -->
        </div>
        <!-- Speech Content Section -->

        <div class="cus-speech-text-cont" data-aos="fade-left">
          <div class="" data-aos="fade-up">
            <!-- First Column -->
            <div class="cus-speech-text-col-1">
              <p v-if="$q.screen.lt.md" class="m-mobile-1">
                On the Occasion of the Swearing-In Ceremony of Elected Ward
                Councillors, <span>Monday, 4th November 2024</span>, Local
                Government Secretariat, Kachia.
              </p>

              <p>
                Let me begin by giving thanks to the Almighty God for making
                this day a reality and to welcome you all to this auspicious
                occasion. May I also use this platform to thank His Excellency
                Sen. Uba Sani, the Executive Governor of Kaduna state and the
                good people of Kachia local government for believing in us and
                to entrust us with the mandate to serve. And by God's grace and
                prayers, we will not fail.
              </p>
              <p class="">
                Today's ceremony is to swear in the twelve (12) newly elected
                Councillors of our local government.
              </p>
              <p class="">
                The elections have come and gone, and in the spirit of
                sportsmanship, there is always a winner and loser. However, in
                this case, we are all winners, No Victor No Vanquish. This is so
                because we're brothers and sisters, we all have a common goal to
                salvage Kachia through providing equitable service delivery and
                the development of the only home we can call ours - Kachia Local
                Government Area.
                <span
                  class="m-readmore"
                  v-if="$q.screen.lt.md"
                  @click="readmore = true"
                  >Read more</span
                >
              </p>
              <p v-if="!$q.screen.lt.md" class="">
                To our newly elected councillors who shall later be inaugurated
                as the legislative arm of this government, I charge you all to
                uphold the sanctity of the mandate entrusted to you by your
                people. This you will do by being responsive to the yearnings
                and aspirations of our people.
              </p>
            </div>

            <!-- Second Column -->
            <div v-if="!$q.screen.lt.md" class="cus-speech-text-col-2">
              <p class="">
                Let me also advise that it will make you more responsive and
                accountable leaders to create an office in your ward where you
                will engage your people on better service delivery at the
                grassroots. Your presence in your ward will pay off instead of
                coming to the local government headquarters to rent a house,
                thereby making it difficult for electorates to access you.
              </p>
              <p class="">
                May I also stress here that we shall remain resolute in
                translating our vision and mission of RESPONSIBILITY to the
                people towards achieving a New Kachia. To hit the ground
                running, I have constituted a Transition Committee, which in a
                short moment from now I will inaugurate. The term of reference
                of this committee shall be to facilitate a smooth transition
                from the outgoing administration to the incoming one. This is to
                ensure uninterrupted governance at this level.
              </p>
              <p class="">
                Permit me at this juncture to state here that the Transition
                Committee shall be under the Chairmanship of Mr. Ezra Zubairu
                with Dr. Jay Danjuma Daniel as Secretary. In carrying out its
                assignment, it shall undertake a comprehensive review of the
                ongoing projects, assess the current state of affairs and
                liabilities, and recommend priority...
                <span @click="readmore = true">Read more</span>
              </p>
            </div>
          </div>
          <!-- Signature Section -->
        </div>
      </div>
      <q-dialog v-if="!$q.screen.lt.md" v-model="readmore">
        <div class="cus-readmore-cont">
          <div class="cus-readmore-header">
            <h2>Speech Continuation</h2>
            <q-btn icon="close" flat round dense v-close-popup />
          </div>

          <div class="cus-readmore-text-content-cont">
            <p>
              <span
                >actions that will support my administration. This committee is
                to serve as a bridge builder for continuity of effective and
                efficient service delivery to our people in all the twelve (12)
                wards of our local government.</span
              >
            </p>
            <p class="">
              Let me call on us that as we await the outcome of the Transition
              Committee report, I implore us to work as a team to foster the
              success of this administration. To achieve this, therefore, we
              shall ensure that we strengthen our capacity to engage our rural
              communities to participate in decision-making for good governance.
              As an administration, we shall nurture innovative ideas and
              approaches towards better service delivery that seeks to be
              responsive and accountable to citizens' needs. And for this, we
              will not rest on our oars until we entrench sustainable integrated
              rural programs that will address the people's priority needs.
            </p>
            <p class="">
              Ladies and Gentlemen, I will not end this speech without
              soliciting for the support and cooperation of our traditional
              institution and the good people of Kachia local government
              irrespective of party leanings. Let's come together and find a
              workable solution that addresses priority areas we have identified
              to improve the lives of our people towards a new Kachia that all
              of us, our children, and future generations will be proud of.
            </p>
            <p class="">
              Finally, I wish to once again thank our esteemed guests and the
              good people of Kachia local government for taking out your time to
              grace this August occasion. I wish all a safe journey to your
              various destinations.
            </p>
          </div>
        </div>
      </q-dialog>

      <q-dialog v-if="$q.screen.lt.md" v-model="readmore">
        <div class="cus-readmore-cont">
          <div class="cus-readmore-header">
            <h2>Speech Continuation</h2>
            <q-btn icon="close" flat round dense v-close-popup />
          </div>

          <div class="cus-readmore-text-content-cont">
            <p>
              To our newly elected councillors who shall later be inaugurated as
              the legislative arm of this government, I charge you all to uphold
              the sanctity of the mandate entrusted to you by your people. This
              you will do by being responsive to the yearnings and aspirations
              of our people.
            </p>
            <p class="">
              Let me also advise that it will make you more responsive and
              accountable leaders to create an office in your ward where you
              will engage your people on better service delivery at the
              grassroots. Your presence in your ward will pay off instead of
              coming to the local government headquarters to rent a house,
              thereby making it difficult for electorates to access you.
            </p>
            <p class="">
              May I also stress here that we shall remain resolute in
              translating our vision and mission of RESPONSIBILITY to the people
              towards achieving a New Kachia. To hit the ground running, I have
              constituted a Transition Committee, which in a short moment from
              now I will inaugurate. The term of reference of this committee
              shall be to facilitate a smooth transition from the outgoing
              administration to the incoming one. This is to ensure
              uninterrupted governance at this level.
            </p>
            <p class="">
              Permit me at this juncture to state here that the Transition
              Committee shall be under the Chairmanship of Mr. Ezra Zubairu with
              Dr. Jay Danjuma Daniel as Secretary. In carrying out its
              assignment, it shall undertake a comprehensive review of the
              ongoing projects, assess the current state of affairs and
              liabilities, and recommend priority actions that will support my
              administration. This committee is to serve as a bridge builder for
              continuity of effective and efficient service delivery to our
              people in all the twelve (12) wards of our local government.
            </p>
            <p></p>
            <p class="">
              Let me call on us that as we await the outcome of the Transition
              Committee report, I implore us to work as a team to foster the
              success of this administration. To achieve this, therefore, we
              shall ensure that we strengthen our capacity to engage our rural
              communities to participate in decision-making for good governance.
              As an administration, we shall nurture innovative ideas and
              approaches towards better service delivery that seeks to be
              responsive and accountable to citizens' needs. And for this, we
              will not rest on our oars until we entrench sustainable integrated
              rural programs that will address the people's priority needs.
            </p>
            <p class="">
              Ladies and Gentlemen, I will not end this speech without
              soliciting for the support and cooperation of our traditional
              institution and the good people of Kachia local government
              irrespective of party leanings. Let's come together and find a
              workable solution that addresses priority areas we have identified
              to improve the lives of our people towards a new Kachia that all
              of us, our children, and future generations will be proud of.
            </p>
            <p class="">
              Finally, I wish to once again thank our esteemed guests and the
              good people of Kachia local government for taking out your time to
              grace this August occasion. I wish all a safe journey to your
              various destinations.
            </p>
          </div>
        </div>
      </q-dialog>
      <!-- <p class="">
        Hon. Dr. Manzo Maigari <br />
        Executive Chairman, Kachia LGA <br />
        04/11/2024
      </p> -->
    </div>

    <!-- Bottom Divider -->
    <!-- <div class="custom-shape-divider-bottom-1730287576"> -->
    <!-- SVG Bottom Divider Code Here -->
    <!-- </div> -->
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const readmore = ref(false);

onMounted(() => {
  AOS.init({
    duration: 1200,
    offset: 200,
    once: true,
  });
});
</script>

<style scoped>
.custom-shape-divider-bottom-1730287576 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1730287576 svg,
.custom-shape-divider-bottom-1730287576 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 70px;
}

.custom-shape-divider-bottom-1730287576 svg {
  transform: rotate(180deg);
}
</style>
