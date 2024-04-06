import { title } from "process";

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
        '@nuxt/fonts',
        'nuxt-gtag',
        '@nuxtjs/robots',
        ['@nuxtjs/sitemap', { autoLastmod: true }]
    ],
    googleFonts: {
        families: {
            Inter: true
        }
    },
    fonts: {
        // You can provide overrides for individual families
        families: [
            { name: 'Hubot Sans', provider: 'local' }
        ],
        priority: 'local'
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
    site: {
        url: process.env.CANONICAL_URL,
        name: 'anivire',
    },
    sitemap: {
        xslColumns: [
            { label: 'URL', width: '50%' },
            { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
            { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
            { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
        ],
    },
    routeRules: {
        '/': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    },
    ssr: true
});