import pkg from './package'

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
        href: '/safari-pinned-tab.svg',
        color: '#50c8f0'
      }
    ],
    /*
     ** JSON-LD Data structured
     */
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Univerweb',
          url: 'https://www.univerweb.dz',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.univerweb.dz/logo.svg',
            width: '256px',
            height: '256px'
          },
          email: 'info@univerweb.dz',
          telephone: '+213 551 90 46 22',
          faxNumber: '+213 21 44 08 11',
          sameAs: [
            'https://twitter.com/univerweb',
            'https://www.facebook.com/Univerweb'
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '62, coopérative El Mebniya',
            postalCode: '16 330',
            addressLocality: 'Alger',
            addressCountry: 'Algérie'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'technical support',
            telephone: '+213 21 44 08 11',
            email: 'webmaster@univerweb.dz',
            areaServed: 'DZ',
            availableLanguage: ['French', 'Arabic']
          }
        })
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#50c8f0'
  },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Style Resources
   */
  styleResources: {
    scss: '@/assets/scss/var.scss'
  },

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
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/style-resources'
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
  },
  /*
   ** i18n
   */
  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr.js'
      },
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'ar',
        file: 'ar.js'
      }
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/'
  }
}
