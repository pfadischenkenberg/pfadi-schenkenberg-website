// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/schenkenberg-wappen.svg'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
            ]
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},


})
