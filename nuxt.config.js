export default {
  target: 'static',
  ssr: true,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#50c8f0' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Univerweb',
          url: process.env.BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: process.env.BASE_URL + '/logo.svg',
            width: '512px',
            height: '512px'
          },
          email: 'contact@univerweb.dz',
          telephone: '+213 551 90 46 22',
          faxNumber: '+213 21 44 08 11',
          sameAs: [
            'https://twitter.com/univerweb',
            'https://www.facebook.com/Univerweb',
            'https://www.linkedin.com/company/univerweb',
            'https://github.com/Univerweb'
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '62 Coop. El Mebnia, Birkhadem',
            postalCode: '16 029',
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
    scss: ['@/assets/scss/var.scss', '@/assets/scss/mixin.scss']
  },
  css: ['@/assets/scss/font.scss', '@/assets/scss/keyframes.scss', '@/assets/scss/main.scss'],
  buildModules: [
    '@nuxtjs/color-mode',
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
      { code: 'fr', name: 'Français', file: 'fr-FR.js' },
      { code: 'en', name: 'English', file: 'en-US.js' },
      { code: 'ar', name: 'العربية', file: 'ar-DZ.js' }
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
  pwa: {
    manifest: {
      name: 'Univerweb',
      short_name: 'Univerweb',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      background_color: '#50c8f0',
      lang: 'fr'
    }
  },
  loading: { color: '#50c8f0' },
  generate: { fallback: 'not_found.html' },
  router: { trailingSlash: true }
}
