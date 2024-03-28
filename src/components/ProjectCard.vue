<template>
    <article>
        <a 
            target="_blank" 
            :href="link"
            ref="target"
            :style="{ transform: cardTransform, transition: 'all 0.25s ease-out' }"
            class="bg-gradient-to-r from-ablack to-ablack/90 text-awhite rounded-3xl md:p-8 p-6 flex flex-col justify-between md:gap-5 gap-3">
            <section class="flex flex-col gap-2">
                <section class="flex flex-row justify-between font-semibold">
                    <p class="items-center flex flex-row gap-2"><Icon :name="icon" class="md:text-2xl text-xl"/> {{langName}}</p>
                    <div class="flex flex-row gap-2 items-center">
                        <div v-if="date === 'Current'" class="bg-green-500 w-2 h-2 rounded-full animate-pulse mt-0.5"/>
                        <div v-else-if="date === 'Paused' || date === 'Unannounced'" class="bg-amber-500 w-2 h-2 rounded-full mt-0.5"/>
                        <div v-else class="bg-rose-500 w-2 h-2 rounded-full mt-0.5"/>
                        <p class="md:text-base text-sm">{{date}}</p>
                    </div>
                </section>
                <h1 class="flex flex-row gap-2 items-center md:text-3xl text-xl -mb-1 font-hubot">{{title}} <Icon name="ri:arrow-right-up-line"/></h1>
                <p class="md:text-base text-sm">{{description}}</p>
            </section>

            <NuxtImg 
                v-if="cover"
                :src="cover"
                alt="Cover image"
                loading="lazy"
                width="600"
                class="rounded-lg w-full object-cover max-h-40"
            />

            <section class="flex flex-row flex-wrap md:gap-3 gap-2">
                <p 
                    v-for="tag in tags"
                    class="p-0.5 px-3 rounded-full bg-awhite text-ablack font-bold text-sm">
                    {{ tag }}
                </p>
            </section>
        </a>
    </article>
</template>

<script setup lang="ts">
defineProps({
    icon: { type: String, required: true },
    langName: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array, required: false },
    cover: { type: String, required: false }
})

const target = ref(null);
const {elementX, elementY, isOutside, elementHeight, elementWidth} = useMouseInElement(target);

const cardTransform = computed(() => {
    const MAX_ROTATION = 6;
    const rotateX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);
    const rotateY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
})
</script>