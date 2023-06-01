import { SpotifyService } from 'spotify-now-playing'

export default defineEventHandler(async (event) => {
    const spotify = new SpotifyService('d9f8075d1d0143de8f36b03383183372', '6c5bb46044254f6f8ca06249e6d3d89a', 'AQDrUZqKnEXnBBuArbViCwhdFJvf8-TuxCMQu7BnYVkM7X-dnMz87BIy63jJ5LmadfCrFw9tQmhvelvC29oAKyKAFHNQVrETnK0Nq7kBDzRBOHWGC2XRWUeAyhqjFV4KnZ8');
    const song = await spotify.getCurrentSong();

    return song;
})


// https://accounts.spotify.com/authorize?response_type=code&client_id=d9f8075d1d0143de8f36b03383183372&scope=user-read-currently-playing&redirect_uri=http://localhost:3000/
// curl.exe -X POST https://accounts.spotify.com/api/token -d "client_id=d9f8075d1d0143de8f36b03383183372&client_secret=6c5bb46044254f6f8ca06249e6d3d89a&grant_type=authorization_code&code=AQDt5pzoNu3i3Z5wEFIOUTV748lpJVzzPDnojo7K3MkphNu5P0PX0Zy60cHbmRKIL684xS36EogGRoTtOOSRpKJSWYQqyCabBwWQ5oDSOlXJlpbubn1SIslNJLs6ozEqGaeZTHkJS50q0Wh3mg957PWavrldIrzgWFNR7CF9EeC7f3w8UXAYuuzSn52-WzIP82h-CdnHCw&redirect_uri=http://localhost:3000/"

// { 
//     "access_token":"BQDU-LsdlR-cq2cU_-i4vDGdLu6xuRRpyoaMpWse-E7L5k_YNp260PcKdPH-gYt-tCYyL-l2ZcxvGlml18VCaGdsfUD8VKqWtlyY3IvtyB09m7oPTShBK9BYKWstxDRYSGszwsk8zm-WmJ1-UvZ6CCiWXE7dumKvTfUIyI-yf2ZIalSgdcz7JSb1ryHngEFAi_akGy8",
//     "token_type":"Bearer",
//     "expires_in":3600,
//     "refresh_token":"AQDrUZqKnEXnBBuArbViCwhdFJvf8-TuxCMQu7BnYVkM7X-dnMz87BIy63jJ5LmadfCrFw9tQmhvelvC29oAKyKAFHNQVrETnK0Nq7kBDzRBOHWGC2XRWUeAyhqjFV4KnZ8",
//     "scope":"user-read-currently-playing"
// }