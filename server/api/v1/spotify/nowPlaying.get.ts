import { SpotifyService } from 'spotify-now-playing'

export default defineEventHandler(async (event) => {
    const spotify = new SpotifyService('d9f8075d1d0143de8f36b03383183372', '6c5bb46044254f6f8ca06249e6d3d89a', 'AQAv38Y_oIB-fXeK4HYeEMRkXlRyTlts0I_ytp-91ASqpXEBRSeBFgDQPWEUyc3jsHvVPqvNIqYmgn9-Y4-DOr5bilOTWEiKarYRUJFbVlyIMiOvc9OOPGqtqvAa7r-LRmM');
    const song = await spotify.getCurrentSong();

    return song;
})


// https://accounts.spotify.com/authorize?response_type=code&client_id=d9f8075d1d0143de8f36b03383183372&scope=user-read-currently-playing&redirect_uri=http://localhost:3000/
// curl.exe -X POST https://accounts.spotify.com/api/token -d "client_id=d9f8075d1d0143de8f36b03383183372&client_secret=6c5bb46044254f6f8ca06249e6d3d89a&grant_type=authorization_code&code=AQCjr4i7U0lsTxDhgJj40Zdw79EA91dt1rhGLsMbteuHmKCj0ffgL10bhRXQ3XcGGX11C5YgXrWFIIHgQfr5dCMzOPl9IEkvmODkOnzAwDuSra_Fcd9kv4n_FZNQLAgH_cVSmryDRybWNFMq7Hg5-hZ5ZhvopneNeS_PGDYck0niQ5ZPyVoxAXoaToWoZyZ-Yca5p3tT4Q&redirect_uri=http://localhost:3000/"