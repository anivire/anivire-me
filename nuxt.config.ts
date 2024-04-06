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
    plugins: [
        {
            src: '~/plugins/aos/aos.client.ts',
            mode: 'client'
        },
    ],
    dir: {
        layouts: 'src/layouts',
        pages: 'src/pages',
    },
    modules: [
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
        'nuxt-font-loader',
        'nuxt-gtag',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
    ],
    googleFonts: {
        families: {
            Inter: true
        }
    },
    fontLoader: {
        local: [
            {
                src: '@/assets/Hubot-Sans.woff2',
                family: 'Hubot Sans',
                class: 'font-hubot',
            }
        ]
    },
    robots: {
        rules: [
            { Comment: '*' },
            { UserAgent: '*' },
            { Allow: '/' },
            { BlankLine: true },
            { Comment: 'Host' },
            { Host: process.env.CANONICAL_URL },
            { BlankLine: true },
            { Comment: 'Sitemaps' },
            { Sitemap: `https://${process.env.CANONICAL_URL}/sitemap.xml` },
        ],
    },
    gtag: {
        id: process.env.GOOGLE_TAG || "G-XXXXXXXXXX"
    },
    css: [
      '@/assets/index.css',
    ],
    ssr: true
});