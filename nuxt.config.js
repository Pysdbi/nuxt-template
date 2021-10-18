import colors from 'vuetify/es5/util/colors'

const isDev = process.env.NODE_ENV !== 'production'

const hostname = !isDev ? 'https://nuxt-template.com' : 'http://localhost:5000'

export default {
  globalName: 'nuxt-template',

  head: {
    titleTemplate: '%s - nuxt-template',
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }

      // Metric
      // { hid: 'yandex-verification', name: 'yandex-verification', content: 'key' },
      // { hid: 'google-site-verification', name: 'yandex-verification', content: 'key' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  rootDir: __dirname,

  // Global CSS
  css: [
  ],

  // Plugins to run before rendering page
  plugins: [
    { src: '@/plugins/aos.client.js' }
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
    // '@nuxtjs/yandex-metrika'
  ],

  // Search engines
  // yandexMetrika: {
  //   id: '',
  //   webvisor: true,
  //   clickmap: true,
  //   // useCDN:false,
  //   trackLinks: true,
  //   accurateTrackBounce: true
  // },

  // Sitemap
  sitemap: {
    hostname: '',
    gzip: true,
    exclude: []
  },

  // Google Web Font loader configuration
  webfontloader: {
    events: false,
    google: {
      families: ['Fira+Sans+Condensed:wght@300;400&display=swap']
    },
    timeout: 5000
  },

  // Axios module configuration
  axios: {
    baseURL: `${hostname}/api`
  },

  // PWA module configuration
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
