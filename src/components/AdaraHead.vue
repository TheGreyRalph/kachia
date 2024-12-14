<template>
  <q-page class="my-20">
    <q-banner class="bg-green-main text-white">
      <q-icon name="mdi-account-circle" />
      <span class="text-h5">ADARA TRADITIONAL COUNCIL </span>
    </q-banner>

    <q-page-container class="md:q-pa-md">
      <div class="row q-col-gutter-lg q-row-gutter-md justify-start">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 q-mb-lg"
          v-for="(district, index) in districtHeads"
          :key="index"
        >
          <div class="q-pa-md flex flex-column items-center">
            <q-img
              :src="district.image"
              class="circle-image rounded-lg w-32 h-32 q-mb-md"
              :alt="district.name"
            />
            <div class="">
              <div class="text-h6">{{ district.name }}</div>
              <div class="text-subtitle2">{{ district.title }}</div>
              <div class="text-body2">{{ district.reign }}</div>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

const districtHeads = ref([
  {
    name: "HRH Mr. Maiwada Galadima",
    title: "Agom Adara",
    reign: "2007 - Date",
    image: "/images/adara1.png",
  },
  {
    name: "HH Alh. Sabiu Suleman",
    title: "District Head Kachia",
    reign: "2001 - Date",
    image: "/images/adara2.png",
  },
  {
    name: "HH Mr. Joseph A. Sarki",
    title: "District Head Agunu",
    image: "/images/adara3.png",
  },
  {
    name: "HH Mr. Emmanuel A. Turaki",
    title: "District Head Awon",
    image: "/images/adara4.png",
  },
  {
    name: "HH Mal. Tanko D. Usman",
    title: "District Head Bishini",
    image: "/images/adara5.png",
  },
  {
    name: "HH Mr. Zamani Dogonyaro",
    title: "District Head Katari North",
    image: "/images/adara6.png",
  },
  {
    name: "HH Mal. John O. Bahago",
    title: "District Head Akilubu",
    image: "/images/adara7.png",
  },
  {
    name: "HH Mr. Aliyu P. Maiangwa, JP",
    title: "District Head Ariko",
    image: "/images/adara8.png",
  },
  {
    name: "HH Hon. Abdullahi Sani Barau",
    title: "District Head Ankwa",
    image: "/images/adara9.png ",
  },
  {
    name: "HH Hon. Sabo J. Usman",
    title: "District Head Mai Ido",
    image: "/images/adara10.png",
  },
  {
    name: "HH Mal. Musa Mandan",
    title: "District Head Gumel",
    reign: "2001 - Date",
    image: "/images/adara11.png",
  },
  {
    name: "HH Mr. Yusuf Tawai",
    title: "District Head Rep Kurmin Mazuga",
    reign: "2001 - Date",
    image: "/images/adara12.png",
  },
  {
    name: "HH Mr. Azare Hassan",
    title: "District Head Koron Tsohowo",
    image: "/images/adara13.png",
  },
  {
    name: "HH Mr. Amos Citta Yarima",
    title: "District Head Katari South",
    image: "/images/adara14.png",
  },
  {
    name: "HH Ardo Haruna Jilabi",
    title: "District Head Laduga",
    image: "/images/adara15.png",
  },
  {
    name: "HH Moses Agwai",
    title: "District Head Doka",
    image: "/images/adara16.png",
  },
]);
</script>

<style scoped>
.q-banner {
  text-align: center;
  padding: 20px 0;
}

.q-page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.circle-image {
  width: 150px;
  height: 150px;
  border-radius: 5%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.q-img {
  max-width: 100%;
  height: auto;
}
</style>
