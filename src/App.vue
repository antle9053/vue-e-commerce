<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1 class="text-[#ff3040]">Text</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <RouterLink :to="{ name: 'home' }">Go to Home</RouterLink>
  <RouterLink :to="{ name: 'counter' }">Go to Counter</RouterLink>

  <main>
    <RouterView />
    <button @click="$router.replace({ name: 'counter' })">Click</button>
  </main>
</template>

<style scoped></style>
