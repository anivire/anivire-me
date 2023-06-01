<template>
    <div class="flex flex-row justify-between py-6 px-10">
        <div class="logo">
            <svg 
                class="hover:scale-125 hover:rotate-180 transition duration-200 ease-in-out"
                width="24" height="24" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.19355 2.4451L7.41177 11.0372L1.57648 15.9822C3.74869 17.2439 6.37176 16.9569 7.41177 16.6557L10.1608 14.405L14.9842 19.8264C17.3453 22.4024 20.6452 20.144 22 18.6929L14.9842 10.3143L20.8532 5.36937C19.3016 3.98938 16.8337 3.97295 15.7937 4.13723L12.2352 7.09436C11.6224 6.3496 9.79986 4.18324 7.41177 1.47582C4.42666 -1.90844 0.19355 1.54154 0.0417645 1.87011C-0.0796635 2.13296 0.0923595 2.36296 0.19355 2.4451Z" fill="#1E1C1D"/>
            </svg>
        </div>
        <div class="flex flex-row gap-10">
            <h1 @click="moveToProjects()" class="uppercase text-sm text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">projects</h1>
            <h1 @click="moveToArt()" class="uppercase text-sm text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">art</h1>
            <h1 @click="moveToAbout()" class="uppercase text-sm text-ablack cursor-pointer hover:bg-ablack hover:text-awhite p-1">contact</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
const moveToProjects = () => {
    const scrollTopOffset = document.getElementById("projects")!.getBoundingClientRect().top + document.body.scrollTop - 25;

    window.scrollTo({
        top: scrollTopOffset,
        left: 0,
        behavior: "smooth",
    });
}

const moveToArt = () => {
    const scrollTopOffset = document.getElementById("art")!.getBoundingClientRect().top + document.body.scrollTop - 25;

    window.scrollTo({
        top: scrollTopOffset,
        left: 0,
        behavior: "smooth",
    });
}

const moveToAbout = () => {
    const scrollTopOffset = document.getElementById("about")!.getBoundingClientRect().top + document.body.scrollTop - 25;

    window.scrollTo({
        top: scrollTopOffset,
        left: 0,
        behavior: "smooth",
    });
}
</script>