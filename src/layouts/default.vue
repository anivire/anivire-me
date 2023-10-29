<template>
    <main class="flex flex-col min-h-screen mx-auto max-w-7xl relative">
        <TopNavigation class="w-full absolute z-20 "/>
        <NuxtPage class="grow"/>
    </main>
</template>

<script setup lang="ts">
import TopNavigation from '../components/navigation/TopNavigation.vue';
</script>