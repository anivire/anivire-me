import { SpotifyService } from 'spotify-now-playing'
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    const spotify = new SpotifyService(runtimeConfig.public.CLIENT_ID, runtimeConfig.public.CLIENT_SECRET, runtimeConfig.public.REFRESH_TOKEN);
    const song = await spotify.getCurrentSong();

    return song;
})