<template>
  <article>
    <a
      target="_blank"
      :href="link"
      ref="target"
      :style="{ transform: cardTransform, transition: 'all 0.25s ease-out' }"
      class="flex flex-col justify-between gap-3 rounded-3xl bg-gradient-to-r from-ablack to-ablack/90 p-6 text-awhite md:gap-5 md:p-8"
    >
      <section class="flex flex-col gap-3">
        <section class="flex flex-row justify-between font-semibold">
          <h2
            class="-mb-1 flex flex-row items-center gap-2 text-xl md:text-3xl"
          >
            {{ title }}
          </h2>
          <p class="flex flex-row items-center gap-2">
            <Icon :name="icon" class="text-xl md:text-2xl" />
          </p>
        </section>
        <p class="text-sm md:text-base">{{ description }}</p>
      </section>

      <NuxtImg
        v-if="cover"
        :src="cover"
        alt="Cover image"
        loading="lazy"
        width="600"
        class="max-h-40 w-full rounded-lg object-cover"
      />

      <section class="flex flex-row flex-wrap gap-2 md:gap-3">
        <p
          v-for="tag in tags"
          class="rounded-full bg-awhite p-0.5 px-3 text-sm font-bold text-ablack"
        >
          {{ tag }}
        </p>
      </section>
    </a>
  </article>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, required: false },
  cover: { type: String, required: false },
});

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rotateX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rotateY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);
  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
</script>
