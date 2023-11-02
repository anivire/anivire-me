require('dotenv').config()

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            CLIENT_ID: process.env.CLIENT_ID,
            CLIENT_SECRET: process.env.CLIENT_SECRET,
            REFRESH_TOKEN: process.env.REFRESH_TOKEN,
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    dir: {
        layouts: 'src/layouts',
        pages: 'src/pages',
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image-edge',
        '@vueuse/nuxt'
    ],
    css: [
      '@/assets/index.css',
    ],
    ssr: true
})