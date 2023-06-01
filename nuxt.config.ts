export default defineNuxtConfig({
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
    ]
})