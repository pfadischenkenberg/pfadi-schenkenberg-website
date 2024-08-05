// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/img/favicons/schenkenberg-wappen.svg'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: 'img/favicons/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: 'img/favicons/favicon-16x16.png'},
            ]
        }
    },

    css: ['~/assets/scss/main.scss'],
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxt/image"]
})