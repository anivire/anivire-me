<template>
  <section class="flex h-screen w-full flex-col items-center justify-center">
    <h2
      @click="router.push('/')"
      class="font-hubot cursor-pointer overflow-hidden p-1 text-5xl text-ablack hover:bg-ablack hover:text-awhite lg:text-6xl xl:text-8xl"
    >
      <span v-for="i in 10" :key="i"
        >{{ i > 1 ? errorCode.substring(1, errorCode.length) : errorCode }}
      </span>
    </h2>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  errorCode: { type: String, required: true },
});

useSeoMeta({
  title: 'Ehhhh, ohhhh › anivire',
  ogTitle: 'Ehhhh, ohhhh › anivire',
  description: 'Ehhhh, ohhhh there seems to be a error here.',
  ogDescription: 'Ehhhh, ohhhh there seems to be a error here.',
});
</script>
