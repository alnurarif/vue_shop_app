<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-blue-500 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/"><h1 class="text-3xl font-semibold">BestServe</h1></router-link>
    </div>
  </header>
    <RouterView :key="$route.fullPath"/>
</template>

<style scoped>

</style>
