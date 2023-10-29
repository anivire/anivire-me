<template>
    <article class="flex flex-col gap-24">
        <Welcome/>
        
        <section id="projects" class="flex flex-col gap-5 px-10">
            <a target="_blank" href="https://github.com/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer">Projects<Icon name="ri:arrow-right-up-line" class="text-4xl"/></h1>
            </a>
            <section class="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                <ProjectCard v-for="project in projectsData" 
                    :key="project.id"
                    :icon="project.icon"
                    :lang-name="project.langName"
                    :date="project.date"
                    :title="project.title"
                    :link="project.link"
                    :description="project.description"
                    :tags="project.tags"
                    :cover="'/images/projects/' + project.cover"
                />
            </section>
        </section>

        <section id="art" class="flex flex-col gap-5 px-10">
            <a target="_blank" href="https://www.behance.net/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer">Art<Icon name="ri:arrow-right-up-line" class="text-4xl"/></h1>
            </a>
            <section class="md:grid flex flex-col grid-cols-3 gap-5">
                <NuxtImg 
                    v-for="art in artsData"
                    :key="art.id"
                    loading="lazy" 
                    :class="art.size"
                    class="object-cover rounded-3xl h-full max-h-96 w-full" 
                    :width="art.size === 'col-span-2' ? 1200 : 600"             
                    format="png" 
                    :src="'/images/art/' + art.src"/>
            </section>
        </section>

        <section id="about" class="flex flex-col gap-5 px-10 mb-24">
            <section class="flex flex-col items-center justify-between gap-5">
                <nav class="flex flex-row gap-5 text-ablack text-4xl">
                    <a target="_blank" href="mailto:anivire.work@gmail.com"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:gmail"/></a>
                    <a target="_blank" href="https://discordapp.com/users/207839349209956352"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="ic:baseline-discord"/></a>
                    <a target="_blank" href="https://github.com/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="skill-icons:github-light"/></a>
                    <a target="_blank" href="https://twitter.com/aniv1re"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:twitter"/></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCNYYZJ49nb9058Z8NM6OE7A"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:youtube"/></a>
                    <a target="_blank" href="https://www.behance.net/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:behance"/></a>
                </nav>
                <SpotifyPlayer/>
                <h1 class="text-2xl flex flex-row justify-center">❤</h1>
            </section>
        </section>
    </article>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import SpotifyPlayer from '../components/SpotifyPlayer.vue';
import Welcome from '../components/Welcome.vue';

const projectsData = ref([
    {
        id: 0,
        icon: 'vscode-icons:file-type-next',
        langName: 'Next',
        date: 'Unannounced',
        title: 'Tijoe',
        link: '#',
        description: 'Home page with Twitch-bot for russian streamer Tijoe.',
        tags: ['React', 'Next', 'Typescript', 'Supabase', 'Twitch API'],
        cover: 'tijoe.png'
    },{
        id: 1,
        icon: 'vscode-icons:file-type-nuxt',
        langName: 'Nuxt',
        date: 'Current',
        title: 'avault',
        link: 'https://avault.vercel.app/',
        description: 'Web app where you can create lists, store and track anime titles.',
        tags: ['Vue', 'Nuxt', 'Typescript', 'Jikan', 'Supabase'],
        cover: 'avault.png'
    }, {
        id: 2,
        icon: 'vscode-icons:file-type-gamemaker2',
        langName: 'GML',
        date: 'Current',
        title: 'Scrapped',
        link: 'https://youkaidrawing.itch.io/scrapped/',
        description: 'Arena-shooter game with rogue-like elements.',
        tags: ['GML', 'GameMaker Studio 2'],
        cover: 'scrapped.png'
    }, {
        id: 3,
        icon: 'vscode-icons:file-type-vue',
        langName: 'Vue',
        date: 'March 2023',
        title: 'Invoke',
        link: 'https://invoke-seven.vercel.app/',
        description: 'Web app where you can easily train Invoker spell combination skills.',
        tags: ['Vue', 'Typescript'],
        cover: 'invoke.png'
    }, {
        id: 4,
        icon: 'vscode-icons:file-type-vue',
        langName: 'Vue',
        date: 'March 2023',
        title: 'Avatar generator',
        link: 'https://avault.vercel.app/',
        description: 'Web app for generating avatars with random pattern.',
        tags: ['Vue', 'Typescript'],
        cover: 'avatar.png'
    }, {
        id: 5,
        icon: 'devicon:csharp',
        langName: 'C#',
        date: 'May 2021',
        title: 'ArtistPalace',
        link: 'https://github.com/anivire/ArtistPalace',
        description: 'Small project aimed at compiling a constantly updated list of artists from all over the world.',
        tags: ['ASP.Net Core', 'C#', 'HTML', 'CSS'],
        cover: 'artist-palace.png'
    },
])

const artsData = ref([
    {
        id: 0,
        size: 'col-span-2',
        src: '4.png',
    }, {
        id: 1,
        size: 'col-span-1',
        src: '8.png',
    }, {
        id: 2,
        size: 'col-span-1',
        src: '3.png',
    }, {
        id: 3,
        size: 'col-span-1',
        src: '5.png',
    }, {
        id: 4,
        size: 'col-span-1',
        src: '1.png',
    }, {
        id: 5,
        size: 'col-span-1',
        src: '6.png',
    }, {
        id: 6,
        size: 'col-span-2',
        src: '7.png',
    }, {
        id: 7,
        size: 'col-span-2',
        src: '9.png',
    }, {
        id: 8,
        size: 'col-span-1',
        src: '2.png',
    }
])

useSeoMeta({
    title: 'anivire',
    ogTitle: 'anivire',
    description: '2D artist and developer',
    ogDescription: '2D artist and developer',
    ogImage: '/images/preview.png',
    ogImageUrl: '/images/preview.png',
    twitterCard: 'summary_large_image'
})
</script>