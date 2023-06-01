<template>
    <div class="flex flex-col gap-10">
        <Welcome/>
        <div class="flex flex-col gap-5 my-24 px-10">
            <h1 class="text-2xl flex flex-row justify-between items-center">Projects <Icon name="ri:arrow-right-up-line" class="text-4xl"/></h1>
            <div class="grid grid-cols-2 gap-5">
                <ProjectCard 
                    icon="vscode-icons:file-type-nuxt"
                    lang-name="Nuxt"
                    date="Current"
                    title="avault"
                    link="https://avault.vercel.app/"
                    description="A web app where user can store all watched anime titles and keep track of new ongoing anime"
                    :tags="['Vue', 'Nuxt', 'Typescript', 'Jikan', 'Supabase']"
                    cover="../public/avault.png"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-gamemaker2"
                    lang-name="GML"
                    date="August 2022"
                    title="Scrapped"
                    link="https://youkaidrawing.itch.io/scrapped"
                    description="Brackeys 2022.2 seven days long game-jam entry"
                    :tags="['GML', 'Game Jam', 'GameMaker Studio 2']"
                    cover="../public/scrapped.gif"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-vue"
                    lang-name="Vue"
                    date="March 2023"
                    title="Invoke"
                    link="https://invoke-seven.vercel.app/"
                    description="Easily train your Invoker spell combination skills with"
                    :tags="['Vue', 'Typescript']"
                    cover="../public/invoke.png"
                />
                <ProjectCard
                    icon="vscode-icons:file-type-vue"
                    lang-name="Vue"
                    date="March 2023"
                    title="Avatar generator"
                    link="https://svg-avatar-generator.vercel.app/"
                    description="Web app for generating random pattern avatars"
                    :tags="['Vue', 'Typescript']"
                    cover="../public/avatar.png"
                />
                <ProjectCard
                    icon="devicon:csharp"
                    lang-name="C#"
                    date="May 2021"
                    title="ArtistPalace"
                    link="https://github.com/anivire/ArtistPalace"
                    description="A small project aimed at compiling a constantly updated list of artists from all over the world"
                    :tags="['ASP.Net Core', 'C#', 'HTML', 'CSS']"
                    cover="../public/artist-palace.png"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import Welcome from '../components/Welcome.vue';
</script>