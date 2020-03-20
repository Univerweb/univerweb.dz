const pkg = require('./package')

export default {
  mode: 'universal',
  /*
   ** Manifest
   */
  pwa: {
    manifest: {
      name: pkg.author,
      short_name: pkg.author,
      description: pkg.description,
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: '/?standalone=true',
      display: 'standalone',
      background_color: '#50c8f0',
      theme_color: '#50c8f0',
      lang: 'fr'
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: 'fr' },
    title: pkg.author,
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#50c8f0' },
      { name: 'theme-color', content: '#50c8f0' },
      { property: 'og:locale', content: 'fr_DZ' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: pkg.author },
      { hid: 'og:image', property: 'og:image', content: '' },
      { property: 'og:image:width', content: '' },
      { property: 'og:image:height', content: '' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        type: '/safari-pinned-tab.svg',
        color: '#50c8f0'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
