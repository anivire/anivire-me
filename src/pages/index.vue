<template>
    <article class="flex flex-col gap-24">
        <Welcome />
        
        <section id="projects" class="flex flex-col gap-5 px-10">
            <a target="_blank" href="https://github.com/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer font-hubot">Projects<Icon name="ri:arrow-right-up-line" class="text-4xl"/></h1>
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
            <a  target="_blank" href="https://www.behance.net/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer font-hubot">Art<Icon name="ri:arrow-right-up-line" class="text-4xl"/></h1>
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
                    <a target="_blank" href="https://t.me/maconee"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="ic:baseline-telegram"/></a>
                    <a target="_blank" href="https://github.com/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="skill-icons:github-light"/></a>
                    <a target="_blank" href="https://twitter.com/aniv1re"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:twitter"/></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCNYYZJ49nb9058Z8NM6OE7A"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:youtube"/></a>
                    <a target="_blank" href="https://www.behance.net/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:behance"/></a>
                </nav>
                <SpotifyPlayer />
                <h1 class="text-2xl flex flex-row justify-center font-hubot">❤</h1>
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
        date: 'Current',
        title: 'Tijoe',
        link: 'https://tijoe.net/',
        description: 'Home page with Twitch-bot for russian streamer Tijoe.',
        tags: ['Next', 'Typescript', 'Supabase', 'Twitch API', 'Prismic'],
        cover: 'tijoe.webp'
    },
    
    // {
    //     id: 1,
    //     icon: 'vscode-icons:file-type-nuxt',
    //     langName: 'Nuxt',
    //     date: 'Current',
    //     title: 'avault',
    //     link: 'https://avault.vercel.app/',
    //     description: 'Web app where you can create lists, store and track anime titles.',
    //     tags: ['Nuxt', 'Typescript', 'Jikan', 'Supabase'],
    //     cover: 'avault.webp'
    // },
    
     {
        id: 2,
        icon: 'vscode-icons:file-type-nuxt',
        langName: 'Nuxt',
        date: 'Current',
        title: 'Personal web page',
        link: 'https://github.com/anivire/anivire-me',
        description: 'My web dev & art portfolio.',
        tags: ['Nuxt', 'Typescript', 'Spotify API'],
        cover: 'me.webp'
    }, {
        id: 3,
        icon: 'vscode-icons:file-type-gamemaker2',
        langName: 'GML',
        date: 'Current',
        title: 'Scrapped',
        link: 'https://youkaidrawing.itch.io/scrapped/',
        description: 'Arena-shooter game with rogue-like elements.',
        tags: ['GML', 'GameMaker Studio 2'],
        cover: 'scrapped-1.gif'
    },{
        id: 4,
        icon: 'vscode-icons:file-type-typescript-official',
        langName: 'Typescript',
        date: 'Current',
        title: 'Twitch Embed TS wrapper',
        link: 'https://github.com/anivire/twitch-embed-ts',
        description: 'Twitch Embed API Typescript wrapper.',
        tags: ['Typescript'],
        cover: 'twitch-api-ts-wrapper.webp'
    }, {
        id: 5,
        icon: 'vscode-icons:file-type-vue',
        langName: 'Vue',
        date: 'March 2023',
        title: 'Invoke',
        link: 'https://invoke-seven.vercel.app/',
        description: 'Web app where you can easily train Invoker spell combination skills.',
        tags: ['Vue', 'Typescript'],
        cover: 'invoke.webp'
    }, {
        id: 6,
        icon: 'vscode-icons:file-type-vue',
        langName: 'Vue',
        date: 'March 2023',
        title: 'Avatar generator',
        link: 'https://svg-avatar-generator.vercel.app/',
        description: 'Web app for generating avatars with random pattern.',
        tags: ['Vue', 'Typescript'],
        cover: 'avatar.webp'
    }
])

const artsData = ref([
    {
        id: 0,
        size: 'col-span-2',
        src: '4.webp',
    }, {
        id: 1,
        size: 'col-span-1',
        src: '8.webp',
    }, {
        id: 2,
        size: 'col-span-1',
        src: '3.webp',
    }, {
        id: 3,
        size: 'col-span-1',
        src: '5.webp',
    }, {
        id: 4,
        size: 'col-span-1',
        src: '1.webp',
    }, {
        id: 5,
        size: 'col-span-1',
        src: '6.webp',
    }, {
        id: 6,
        size: 'col-span-2',
        src: '7.webp',
    }, {
        id: 7,
        size: 'col-span-2',
        src: '9.webp',
    }, {
        id: 8,
        size: 'col-span-1',
        src: '2.webp',
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