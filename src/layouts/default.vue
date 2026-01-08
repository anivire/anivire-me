<template>
  <main class="relative mx-auto flex min-h-screen max-w-7xl flex-col">
    <TopNavigation class="absolute z-20 w-full" />
    <NuxtPage class="page grow" />
  </main>
</template>

<script setup lang="ts">
import TopNavigation from '../components/navigation.vue';
</script>
