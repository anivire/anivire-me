<template>
    <div class="flex flex-col items-center sm:px-3 lg:px-10 h-[90vh]">
        <div class="flex flex-row w-full rounded-3xl relative justify-center grow">
            <div class="flex flex-col sm:gap-1 lg:gap-5 justify-center items-center">
                <h1 class="bg-ablack p-3 lg:p-5 px-6 mx-3 lg:px-16 rounded-full uppercase text-2xl lg:text-5xl text-awhite">hello, hallo, hiii, 👋, sup, yo!</h1>
                <h1 class="p-5 uppercase sm:text-2xl lg:text-5xl text-ablack w-fit">i'm</h1>
                <h1 
                    :class="rotate > 0 ? 'rotate-1' : '-rotate-1' "
                    class="uppercase sm:text-4xl lg:text-9xl text-awhite bg-ablack sm:py-1 lg:py-5 lg:pb-3 sm:px-6 lg:px-16 w-fit">{{randomizedUsername}}</h1>
            </div>
        </div>
        <h1 class="flex flex-row gap-5 items-center my-3"><Icon name="ri:arrow-down-line" class="animate-bounce"/> Scroll down <Icon name="ri:arrow-down-line"  class="animate-bounce"/></h1>      
    </div>
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