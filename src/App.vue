<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
  header{
    line-height: 1.5;
    max-height: 100vh;
  }
  .logo{
    display: block;
    margin: 0 auto 2rem;
  }
</style>
