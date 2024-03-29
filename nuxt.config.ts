import { NuxtConfig } from '@nuxt/types'

const routerBase =
    process.env.DEPLOY_ENV === 'GH_PAGES'
        ? {
              router: {
                  base: '/demos/',
              },
          }
        : {}

const linkHref =
    process.env.DEPLOY_ENV === 'GH_PAGES'
        ? '/demos/favicon.ico'
        : '/favicon.ico'

const configs: NuxtConfig = {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'demos',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: linkHref }],
    },

    static: {
        prefix: false,
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['element-ui/lib/theme-chalk/index.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    // '@/plugins/composition-api.ts',
    plugins: ['@/plugins/element-ui.ts'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/composition-api',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        loaders: {
            less: {},
        },
    },
    ...routerBase,
}

export default configs
