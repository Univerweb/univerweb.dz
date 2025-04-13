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

  css: [
    '@/assets/scss/main.scss',
  ],

  router: {
    options: {
      linkActiveClass: '',
      linkExactActiveClass: '',
      scrollBehaviorType: 'smooth',
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

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

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-06',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variable.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.GTAG_ID,
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'fr', file: 'fr-FR.json', language: 'fr-FR' },
      { code: 'en', file: 'en-US.json', language: 'en-US' },
      { code: 'ar', file: 'ar-DZ.json', language: 'ar-DZ', dir: 'rtl' },
    ],
    lazy: true,
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    baseUrl: process.env.BASE_URL,
    skipSettingLocaleOnNavigate: true,
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
