<template>
    <div class=" bg-green-main text-white py-5 px-10 h-52 md:h-32">
      <div class="row justify-between items-center">
        <div class="col-12 col-md-6 q-mb-md q-mb-none-md">
          <div>&copy; 2024 Kachia LGA. All rights reserved.</div>
          <div>Powered by .....</div>
        </div>
            <div class="col-12 col-md-6">
          <div class="row justify-end">
            <div class="q-mr-md q-hidden-xs">
              <q-btn flat label="Privacy Policy" class="text-white" :to="{ path: '/privacy-policy' }" />
              <q-btn flat label="Terms of Service" class="text-white" :to="{ path: '/terms' }" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

</style>
