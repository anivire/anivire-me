<template>
    <a 
        v-if="song && song.isPlaying" 
        target="_blank" 
        :href="song.url" 
        class="hover:scale-105 duration-200 transition ease-in-out flex flex-row gap-3 md:w-96 w-80 h-28 bg-gradient-to-r from-ablack to-ablack/90 p-3 rounded-xl text-awhite">
        <NuxtImg
            :src="song?.album.image"
            width="100"
            height="100"
            class="rounded-lg h-full"
        />
        <div class="flex flex-col justify-between w-full">
            <div class="flex flex-col">
                <div class="flex flex-row gap-1 items-center">
                    <p 
                        class="md:text-lg text-sm font-bold line-clamp-2 leading-5 items-center">
                        {{ song.title }} 
                    </p>
                    <Icon name="ri:arrow-right-up-line" class="text-xl w-12"/>
                </div>
                <p class="md:text-sm text-xs font-normal line-clamp-1"><span v-for="artist, i in song.artists.name">
                    {{ (artist) + (song.artists.name.length != 1 && i + 1 != song.artists.name.length ? ', ' : '') }}
                </span></p>
            </div>
            <div class="bg-emerald-800 rounded-sm my-2">
                <div
                    :style="'width: ' + song.progress / song.length * 100 + '%'" 
                    class="bg-gradient-to-r from-emerald-400 to-green-600 transition-all duration-200 ease-in-out rounded-sm p-1"
                />
            </div>
        </div>
    </a>
    <div v-else class="flex flex-row gap-3 md:w-96 w-80 h-28 bg-gradient-to-r from-ablack to-ablack/90 p-3 rounded-xl text-awhite items-center justify-center">
        <p class="font-semibold text-sm"><Icon name="logos:spotify-icon" class="text-xl mr-1"/> Nothing playing yet...</p>
    </div>
</template>

<script setup lang="ts">
const { data: song, refresh} = useAsyncData('nowPlaying', () => $fetch('/api/v1/spotify/nowPlaying', { method: 'GET' }));

setInterval(() => {
    refresh();
}, 3000);
</script>