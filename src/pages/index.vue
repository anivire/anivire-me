<template>
    <div class="flex flex-col gap-24">
        <Welcome/>
        <div id="projects" class="flex flex-col gap-5 px-10">
            <a href="https://github.com/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer">
                    Projects 
                    <Icon name="ri:arrow-right-up-line" class="text-4xl"/>
                </h1>
            </a>
            <div class="grid grid-cols-2 gap-5">
                <ProjectCard 
                    icon="vscode-icons:file-type-nuxt"
                    lang-name="Nuxt"
                    date="Current"
                    title="avault"
                    link="https://avault.vercel.app/"
                    description="A web app where user can store all watched anime titles and keep track of new ongoing anime"
                    :tags="['Vue', 'Nuxt', 'Typescript', 'Jikan', 'Supabase']"
                    cover="/public/images/projects/avault.png"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-gamemaker2"
                    lang-name="GML"
                    date="August 2022"
                    title="Scrapped"
                    link="https://youkaidrawing.itch.io/scrapped"
                    description="Brackeys 2022.2 seven days long game-jam entry"
                    :tags="['GML', 'Game Jam', 'GameMaker Studio 2']"
                    cover="/public/images/projects/scrapped.gif"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-vue"
                    lang-name="Vue"
                    date="March 2023"
                    title="Invoke"
                    link="https://invoke-seven.vercel.app/"
                    description="Easily train your Invoker spell combination skills"
                    :tags="['Vue', 'Typescript']"
                    cover="/public/images/projects/invoke.png"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-vue"
                    lang-name="Vue"
                    date="March 2023"
                    title="Avatar generator"
                    link="https://svg-avatar-generator.vercel.app/"
                    description="Web app for generating random pattern avatars"
                    :tags="['Vue', 'Typescript']"
                    cover="/public/images/projects/avatar.png"
                />
                <ProjectCard
                    icon="devicon:csharp"
                    lang-name="C#"
                    date="May 2021"
                    title="ArtistPalace"
                    link="https://github.com/anivire/ArtistPalace"
                    description="A small project aimed at compiling a constantly updated list of artists from all over the world"
                    :tags="['ASP.Net Core', 'C#', 'HTML', 'CSS']"
                    cover="/public/images/projects/artist-palace.png"
                />
            </div>
        </div>
        <div id="art" class="flex flex-col gap-5 px-10">
            <a href="https://www.behance.net/anivire">
                <h1 class="text-2xl flex flex-row justify-between items-center cursor-pointer">
                    Art 
                    <Icon name="ri:arrow-right-up-line" class="text-4xl"/>
                </h1>
            </a>
            <div class="grid grid-cols-3 gap-5">
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full col-span-2" width="600"             format="png" src="/public/images/art/4.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full" width="300"                        format="png" src="/public/images/art/8.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full" width="300"                        format="png" src="/public/images/art/3.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full" width="300"                        format="png" src="/public/images/art/5.png"/>
                <NuxtImg loading="lazy" class="object-cover object-top rounded-3xl h-full max-h-96 w-full" width="300"             format="png" src="/public/images/art/1.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full" width="300"                        format="png" src="/public/images/art/6.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full col-span-2" width="300"             format="jpg" src="/public/images/art/9.jpg"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full col-span-2" width="600"             format="png" src="/public/images/art/7.png"/>
                <NuxtImg loading="lazy" class="object-cover rounded-3xl h-full max-h-96 w-full" width="300"                        format="png" src="/public/images/art/2.png"/>
                <NuxtImg loading="lazy" class="object-cover object-top rounded-3xl h-full max-h-96 w-full col-span-3" width="600"  format="png" src="/public/images/art/10.png"/>
            </div>../
        </div>
        <div id="about" class="flex flex-col gap-5 px-10 mb-24">
            <div class="flex flex-col items-center justify-between gap-5">
                <div class="flex flex-row gap-5 text-ablack text-4xl">
                    <a href="mailto:anivire.work@gmail.com"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:gmail"/></a>
                    <a href="https://discordapp.com/users/207839349209956352"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="ic:baseline-discord"/></a>
                    <a href="https://github.com/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="skill-icons:github-light"/></a>
                    <a href="https://twitter.com/aniv1re"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:twitter"/></a>
                    <a href="https://www.youtube.com/channel/UCNYYZJ49nb9058Z8NM6OE7A"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:youtube"/></a>
                    <a href="https://www.behance.net/anivire"><Icon class="hover:scale-125 cursor-pointer transition duration-200 ease-in-out" name="mdi:behance"/></a>
                </div>
                <SpotifyPlayer/>
                <h1 class="text-2xl flex flex-row justify-center">❤</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import SpotifyPlayer from '../components/SpotifyPlayer.vue';
import Welcome from '../components/Welcome.vue';

useSeoMeta({
    title: 'anivire',
    ogTitle: 'anivire',
    description: '2D artist and developer',
    ogDescription: '2D artist and developer',
    ogImage: '../public/preview.png',
    ogImageAlt: '../public/preview.png'
})
</script>