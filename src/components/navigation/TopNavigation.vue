<template>
    <header class="flex flex-row justify-between py-6 px-10">
        <div class="agent-1 reveal-left logo">
            <svg 
                class="hover:scale-125 hover:rotate-180 transition duration-200 ease-in-out"
                width="24" height="24" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.19355 2.4451L7.41177 11.0372L1.57648 15.9822C3.74869 17.2439 6.37176 16.9569 7.41177 16.6557L10.1608 14.405L14.9842 19.8264C17.3453 22.4024 20.6452 20.144 22 18.6929L14.9842 10.3143L20.8532 5.36937C19.3016 3.98938 16.8337 3.97295 15.7937 4.13723L12.2352 7.09436C11.6224 6.3496 9.79986 4.18324 7.41177 1.47582C4.42666 -1.90844 0.19355 1.54154 0.0417645 1.87011C-0.0796635 2.13296 0.0923595 2.36296 0.19355 2.4451Z" fill="#1E1C1D"/>
            </svg>
        </div>
        <nav class="agent-2 md:gap-10 gap-3 flex flex-row justify-between">
            <h1 @click="moveTo('projects')" class="uppercase md:text-sm text-xs text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">projects</h1>
            <h1 @click="moveTo('art')"      class="uppercase md:text-sm text-xs text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">art</h1>
            <h1 @click="moveTo('about')"    class="uppercase md:text-sm text-xs text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">contact</h1>
        </nav>
    </header>
</template>

<script setup lang="ts">
const moveTo = (container: string) => {
    const scrollTopOffset = document.getElementById(container)!.getBoundingClientRect().top + document.body.scrollTop - 25;

    window.scrollTo({
        top: scrollTopOffset,
        left: 0,
        behavior: "smooth",
    });
}
</script>

<!--<style>-->
<!--@keyframes fade-in-right {-->
<!--  from {-->
<!--    opacity: 0;-->
<!--    transform: translateX(-15px);-->
<!--  }-->
<!--  to {-->
<!--    opacity: 1;-->
<!--    transform: translateX(0);-->
<!--  }-->
<!--}-->

<!--@keyframes grow-left {-->
<!--  from {-->
<!--    transform: scaleX(0);-->
<!--  }-->
<!--  to {-->
<!--    transform: scaleX(1);-->
<!--  }-->
<!--}-->

<!--@keyframes grow-right {-->
<!--  from {-->
<!--    transform: scaleX(0);-->
<!--  }-->
<!--  to {-->
<!--    transform: scaleX(1);-->
<!--  }-->
<!--}-->

<!--.agent-1, .agent-3 {-->
<!--  opacity: 0;-->
<!--  animation: fade-in-right ease 0.4s forwards;-->
<!--}-->

<!--.agent-2 {-->
<!--  transform: scaleX(0);-->
<!--  transform-origin: left;-->
<!--  animation: grow-right cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;-->
<!--  animation-delay: 0.4s;-->
<!--}-->

<!--.agent-3 {-->
<!--  animation-delay: 0.8s;-->
<!--}-->
<!--</style>-->