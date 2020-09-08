export default {
  target: 'static',
  ssr: true,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#50c8f0' },
      { name: 'theme-color', content: '#50c8f0' },
      { name: 'apple-mobile-web-app-capable"', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
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
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Univerweb',
          url: process.env.BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: process.env.BASE_URL + '/logo.svg',
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
            email: 'support@univerweb.dz',
            areaServed: 'DZ',
            availableLanguage: ['French', 'Arabic']
          }
        })
      }
    ]
  },
  styleResources: {
    scss: ['@/assets/css/var.scss', '@/assets/css/mixin.scss']
  },
  css: [
    '@/assets/css/font.scss',
    '@/assets/css/keyframes.scss',
    '@/assets/css/main.scss'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { offset: -72 }]
  ],
  modules: ['nuxt-i18n', '@nuxt/http'],
  components: true,
  plugins: ['~plugins/vue-lazyload', { src: '~plugins/ga.js', mode: 'client' }],
  i18n: {
    locales: [
      { code: 'fr', file: 'fr-FR.js' },
      { code: 'en', file: 'en-US.js' },
      { code: 'ar', file: 'ar-DZ.js' }
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/',
    vuex: { syncMessages: true }
  },

  env: {
    BASE_URL: process.env.BASE_URL || false,
    API_KEY: process.env.API_KEY || false
  },

  manifest: {
    name: 'Univerweb',
    short_name: 'Univerweb',
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
    background_color: '#50c8f0',
    lang: 'fr'
  },
  loading: { color: '#50c8f0' },
  generate: { fallback: '404.html' },
  router: { trailingSlash: true }
}
