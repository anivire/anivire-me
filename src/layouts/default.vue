<template>
    <div class="flex flex-col min-h-screen mx-auto max-w-7xl">
        <Header class="w-full"/>
        <NuxtPage class="grow"/>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/navigation/Header.vue';
</script>