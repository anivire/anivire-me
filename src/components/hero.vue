<template>
  <article class="flex h-screen flex-col items-center lg:px-10">
    <section
      class="relative mt-16 flex w-full grow flex-row justify-center rounded-3xl"
    >
      <div class="flex flex-col items-center justify-center gap-5">
        <h2
          class="font-hubot rounded-full bg-ablack px-6 py-1 text-base uppercase text-awhite sm:px-6 sm:py-2 sm:text-2xl md:px-10 md:py-3 md:text-3xl lg:px-16 lg:py-5 lg:text-5xl"
        >
          hello, hallo, hiii, 👋, sup, yo!
        </h2>
        <h2
          class="font-hubot w-fit text-2xl uppercase text-ablack sm:text-3xl md:p-3 md:text-4xl lg:p-5 lg:text-5xl"
        >
          i'm
        </h2>
        <h2
          :class="rotate > 0 ? 'rotate-1' : '-rotate-1'"
          class="font-hubot w-fit bg-ablack px-4 py-2 pb-1 text-5xl uppercase text-awhite sm:px-6 sm:py-3 sm:text-6xl md:px-10 md:py-4 md:text-8xl lg:px-16 lg:py-5 lg:text-9xl"
        >
          {{ randomizedUsername }}
        </h2>
      </div>
    </section>
    <h2 class="font-hubot my-3 flex flex-row items-center gap-5">
      <Icon name="ri:arrow-down-line" class="animate-bounce" /> Scroll down
      <Icon name="ri:arrow-down-line" class="animate-bounce" />
    </h2>
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
  let leetChar = '';

  let random = Math.round(Math.random());
  if (random == 0) {
    leetChar = leetChars[charToReplace.toUpperCase()] || charToReplace;
  } else {
    leetChar = vanillaChars[charToReplace.toUpperCase()] || charToReplace;
  }

  const leetUsername =
    randomizedUsername.value.slice(0, index) +
    leetChar +
    randomizedUsername.value.slice(index + 1);

  randomizedUsername.value = leetUsername;
};

const timer = setInterval(() => {
  rotate.value = Math.floor(Math.random() * 5) - 2;
}, 300);

const usernameTimer = setInterval(() => {
  randomizeUsername();
}, 100);
</script>
