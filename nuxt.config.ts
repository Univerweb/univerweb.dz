export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],

  app: { rootId: 'app' },

  css: ['@/assets/scss/main.scss'],

  router: {
    options: {
      linkActiveClass: '',
      linkExactActiveClass: '',
      scrollBehaviorType: 'smooth',
    },
  },

  content: { renderer: { anchorLinks: false } },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseEmail: process.env.BASE_EMAIL,
      managerEmail: process.env.MANAGER_EMAIL,
      supportEmail: process.env.SUPPORT_EMAIL,
      gmapsKey: process.env.GMAPS_KEY,
      gmapsId: process.env.GMAPS_ID,
    },
  },

  compatibilityDate: '2025-08-08',

  eslint: { config: { stylistic: true } },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.GTAG_ID,
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', language: 'fr-FR', file: 'fr-FR.json' },
      { code: 'en', language: 'en-US', file: 'en-US.json' },
      { code: 'ar', language: 'ar-DZ', file: 'ar-DZ.json', dir: 'rtl' },
    ],
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    baseUrl: process.env.BASE_URL,
  },

  image: {
    cloudinary: {
      baseURL: process.env.CDN_URL,
    },
    screens: {
      xs: 374,
      sm: 424,
      md: 767,
      lg: 1023,
      xl: 1279,
      xxl: 1439,
    },
  },

  sitemap: {
    autoLastmod: false,
    xsl: false,
    discoverImages: false,
  },
})
