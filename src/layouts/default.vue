<template>
    <main class="flex flex-col min-h-screen mx-auto max-w-7xl relative">
        <TopNavigation class="w-full absolute z-20 "/>
        <NuxtPage class="page grow"/>
    </main>
</template>

<script setup lang="ts">
import TopNavigation from '../components/navigation/TopNavigation.vue';

useHead({
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '@/assets/Hubot-Sans.woff2'
    }
  ],
});
</script>