<template>
  <q-page class=" text-center font-playfair">


    <div class="parallax-section">
      <div class=" overlay "></div>
      <div class="parallax-content">
        <h1 class="text-white text-h3 q-my-md">Get in Touch</h1>
        <p class="text-white q-my-sm">
          We would love to hear from you. Send us a message!
        </p>
      </div>
    </div>

    <div class="q-mt-xl q-px-lg q-pb-md">
      <div class="row justify-center">
        <div class="col-12 col-md-8 col-lg-6 bg-white q-pa-md rounded-lg shadow-lg">
          <h2 class="text-green-main text-h5 q-mb-md">Contact Us</h2>

          <q-form @submit="onSubmit">
            <q-input
              outlined
              label="Your Name"
              v-model="formData.name"
              class="q-mb-md"
              hint="Enter your full name"
              required
            />

            <q-input
              outlined
              label="Email Address"
              v-model="formData.email"
              class="q-mb-md"
              hint="We'll never share your email"
              type="email"
              required
            />

            <q-input
              outlined
              label="Your Message"
              v-model="formData.message"
              type="textarea"
              autogrow
              class="q-mb-md"
              hint="Tell us what you'd like to discuss"
              required
            />

            <div class="q-mt-lg">
              <q-btn
                type="submit"
                label="Send Message"
                color="green"
                class="full-width text-white"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import { Notify } from 'quasar';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const onSubmit = () => {
  if (!formData.name || !formData.email || !formData.message) {
    Notify.create({
      type: 'negative',
      message: 'Please fill in all the fields.',
    });
    return;
  }

  Notify.create({
    type: 'positive',
    message: 'Your message has been sent successfully!',
  });

  formData.name = '';
  formData.email = '';
  formData.message = '';
};
</script>

<style scoped>
.bg-bright-shade {
  background-color: #f9f9f9;
}

.q-pa-md {
  padding: 16px;
}

.q-mt-xl {
  margin-top: 48px;
}

.shadow-lg {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.q-parallax {
  position: relative;
}

.full-width {
  width: 100%;
}
.parallax-section {
  position: relative;
  background-image: url('/public/images//hero2.jpeg');
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

</style>
