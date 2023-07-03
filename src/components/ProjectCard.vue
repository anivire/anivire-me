<template>
    <a 
        target="_blank" 
        :href="link"
        ref="target"
        :style="{ transform: cardTransform, transition: 'all 0.25s ease-out' }"
        class="bg-gradient-to-r from-ablack to-ablack/90 text-awhite rounded-3xl p-8 flex flex-col justify-between gap-5">
        <div class="flex flex-col gap-2">
            <div class="flex flex-row justify-between font-semibold">
                <p class="items-center flex flex-row gap-2"><Icon :name="icon" class="text-2xl"/> {{langName}}</p>
                <div class="flex flex-row gap-2 items-center">
                    <div v-if="date == 'Current'" class="bg-green-500 w-2 h-2 rounded-full animate-pulse mt-0.5"/>
                    <div v-else-if="date == 'Paused'" class="bg-amber-500 w-2 h-2 rounded-full mt-0.5"/>
                    <div v-else class="bg-rose-500 w-2 h-2 rounded-full mt-0.5"/>
                    <p>{{date}}</p>
                </div>
            </div>
            <h1 class="flex flex-row gap-2 items-center md:text-3xl text-2xl -mb-1">{{title}} <Icon name="ri:arrow-right-up-line"/></h1>
            <p class="font-semibold">{{description}}</p>
        </div>
        <NuxtImg 
            v-if="cover"
            :src="cover"
            width="600"
            class="rounded-lg w-full object-cover"
        />
        <div class="flex flex-row flex-wrap gap-3">
            <p 
                v-for="tag in tags"
                class="p-0.5 px-3 rounded-full bg-awhite text-ablack font-bold text-sm">
                {{ tag }}
            </p>
        </div>
    </a>
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