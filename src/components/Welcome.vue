<template>
    <article class="lg:px-10 flex flex-col items-center h-screen">
        <section class="flex flex-row w-full rounded-3xl relative justify-center grow mt-16">
            <div class="flex flex-col gap-5 justify-center items-center">
                <h1 class="lg:py-5 lg:px-16 lg:text-5xl md:py-3 md:px-10 md:text-3xl sm:py-2 sm:px-6 sm:text-2xl py-1 px-6 text-base bg-ablack rounded-full uppercase text-awhite">hello, hallo, hiii, 👋, sup, yo!</h1>
                <h1 class="lg:p-5 lg:text-5xl md:p-3 md:text-4xl sm:text-3xl text-2xl uppercase text-ablack w-fit">i'm</h1>
                <h1 
                    :class="rotate > 0 ? 'rotate-1' : '-rotate-1' "
                    class="lg:text-9xl lg:py-5 lg:pb-3 lg:px-16 md:text-8xl md:py-4 md:pb-2 md:px-10 sm:text-6xl sm:py-3 sm:pb-2 sm:px-6 text-5xl py-2 pb-1 px-4 uppercase text-awhite bg-ablack w-fit">{{randomizedUsername}}</h1>
            </div>
        </section>
        <h1 class="flex flex-row gap-5 items-center my-3"><Icon name="ri:arrow-down-line" class="animate-bounce"/> Scroll down <Icon name="ri:arrow-down-line"  class="animate-bounce"/></h1>      
    </article>
</template>

<script setup lang="ts">
const rotate = ref(0);
const username = ref('ANIVIRE');
const randomizedUsername = ref('ANIVIRE');

const randomizeUsername = () => {
    const leetChars: { [key: string]: string } = {
        A: '4',
        E: '3',
        I: '1',
    };
    
    const vanillaChars: { [key: string]: string } = {
        '4': 'A',
        '3': 'E',
        '1': 'I',
    };

    const index = Math.floor(Math.random() * randomizedUsername.value.length);
    const charToReplace = username.value[index];
    let leetChar = ''

    let random = Math.round(Math.random());
    if (random == 0) {
        leetChar = leetChars[charToReplace.toUpperCase()] || charToReplace;
    } else {
        leetChar = vanillaChars[charToReplace.toUpperCase()] || charToReplace;
    }

    const leetUsername = randomizedUsername.value.slice(0, index) + leetChar + randomizedUsername.value.slice(index + 1);

    randomizedUsername.value = leetUsername;
}

const timer = setInterval(() => {
    rotate.value = Math.floor(Math.random() * 5) - 2;
}, 300);

const usernameTimer = setInterval(() => {
    randomizeUsername();
}, 100);
</script>