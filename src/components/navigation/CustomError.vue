<template>
    <section class="w-full h-screen flex flex-col justify-center items-center">
        <h1 
            @click="router.push('/')" 
            class="font-hubot text-5xl lg:text-6xl xl:text-8xl text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1 overflow-hidden">
            <span v-for="i in 10" :key="i">{{ i > 1 ? errorCode.substring(1, errorCode.length) : errorCode }}</span>
        </h1>
    </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({ 
    errorCode: { type: String, required: true }
});

useSeoMeta({
    title: 'Ehhhh, ohhhh › anivire',
    ogTitle: 'Ehhhh, ohhhh › anivire',
    description: "Ehhhh, ohhhh there seems to be a error here.",
    ogDescription: "Ehhhh, ohhhh there seems to be a error here.",
});
</script>