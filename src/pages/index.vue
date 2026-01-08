<template>
  <div class="flex flex-col gap-24">
    <Hero />

    <section id="projects" class="flex flex-col gap-5 px-10">
      <a target="_blank" href="https://github.com/anivire">
        <h2
          class="font-hubot flex cursor-pointer flex-row items-center justify-between text-2xl"
        >
          Projects<Icon name="ri:arrow-right-up-line" class="text-4xl" />
        </h2>
      </a>
      <section class="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
        <ProjectCard
          v-for="(project, index) in PROJECT_DATA"
          :key="index"
          :icon="project.icon"
          :title="project.title"
          :link="project.link"
          :description="project.description"
          :tags="project.tags"
          :cover="'/images/projects/' + project.cover"
        />
      </section>
    </section>

    <section id="art" class="flex flex-col gap-5 px-10">
      <a target="_blank" href="https://x.com/aniv1re">
        <h2
          class="font-hubot flex cursor-pointer flex-row items-center justify-between text-2xl"
        >
          Art<Icon name="ri:arrow-right-up-line" class="text-4xl" />
        </h2>
      </a>
      <section class="flex grid-cols-3 flex-col gap-5 md:grid">
        <NuxtImg
          v-for="(art, index) in ART_DATA"
          :key="index"
          loading="lazy"
          :class="art.size"
          class="h-full max-h-96 w-full rounded-3xl object-cover"
          :width="art.size === 'col-span-2' ? 1200 : 600"
          format="png"
          :src="'/images/art/' + art.src"
        />
      </section>
    </section>

    <section id="about" class="mb-24 flex flex-col gap-5 px-10">
      <section class="flex flex-col items-center justify-between gap-5">
        <nav class="flex flex-row gap-5 text-4xl text-ablack">
          <a target="_blank" href="mailto:hi@anivire.xyz"
            ><Icon
              class="cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              name="mdi:gmail"
          /></a>
          <a
            target="_blank"
            href="https://discordapp.com/users/207839349209956352"
            ><Icon
              class="cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              name="ic:baseline-discord"
          /></a>
          <a target="_blank" href="https://t.me/maconee"
            ><Icon
              class="cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              name="ic:baseline-telegram"
          /></a>
          <a target="_blank" href="https://github.com/anivire"
            ><Icon
              class="cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              name="skill-icons:github-light"
          /></a>
          <a target="_blank" href="https://twitter.com/aniv1re"
            ><Icon
              class="cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              name="mdi:twitter"
          /></a>
        </nav>
      </section>
    </section>
  </div>

  <div class="relative -mt-3 h-48 w-full overflow-hidden">
    <NuxtImg
      src="/images/character.webp"
      class="mx-auto w-64 -rotate-3 select-none pt-3 transition-all duration-200 ease-in-out hover:scale-105"
      :draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/hero.vue';
import ProjectCard from '../components/project-card.vue';
import { ART_DATA, PROJECT_DATA } from '../shared/constants';

useSeoMeta({
  title: 'anivire',
  ogTitle: 'anivire',
  description:
    "HELLO, HALLO, HIII, 👋, SUP, YO! I'm fullstack web developer and 2D digital artist.",
  ogDescription:
    "HELLO, HALLO, HIII, 👋, SUP, YO! I'm fullstack web developer and 2D digital artist.",
  ogImage: '/images/preview.png',
  ogImageUrl: '/images/preview.png',
  twitterCard: 'summary_large_image',
});
</script>
