<template>
  <q-page class="my-20">
    <q-banner class=" bg-green-main text-white">
      <q-icon name="mdi-account-circle" />
      <span class="text-h5">Ham Traditional Council - District Heads</span>
    </q-banner>

    <q-page-container class="q-pa-md">
      <div class="row q-col-gutter-lg q-row-gutter-md justify-start">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-mb-lg" v-for="(district, index) in hamDistrictHeads" :key="index">
          <div class="q-pa-md flex flex-column items-center">
            <q-img :src="district.image" class="circle-image rounded-lg w-40 h-40 q-mb-md " :alt="district.name" />
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
import { ref } from 'vue'

const hamDistrictHeads = ref([
  {
    name: 'HH Mr. Gimba Kogi',
    title: 'District Head Gidan Tagwai',
    image: '/images/ham1.png',
  },
  {
    name: 'HH Mr. Ali Barnabas Hadwyah',
    title: 'District Head Kurmin Musa',
    image: '/images/ham2.png',
  },
  {
    name: 'HH Mr. A. G. Gimba',
    title: 'District Head Sabon Sarki',
    image: '/images/ham3.png',
  },
  {
    name: 'HH Mr. Dauda Kure',
    title: 'District Head Kurmin Gwaza',
    reign: '2001 - Date',
    image: '/images/ham4.png',
  },
  {
    name: 'HH Mr. Matthias L. Isuwa',
    title: 'District Head Gidan Mana',
    image: '/images/ham5.png',
  },
  {
    name: 'HH Mal. Friday Yari Gantan',
    title: 'District Head Kwaturu',
    image: '/images/ham6.png',
  },
  {
    name: 'HH Mr. Jacob J Dogo',
    title: 'District Head Gidan Jibir',
    image: '/images/ham7.png',
  },
  {
    name: 'HH Mr. Isaac Gimba',
    title: 'District Head Jaban Kogo (Dung)',
    image: '/images/ham8.png',
  }
])
</script>

<style scoped>
.circle-image {
  width: 150px;
  height: 150px;
  border-radius: 5%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.q-banner {
  text-align: center;
  padding: 20px 0;
}

.q-page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>
