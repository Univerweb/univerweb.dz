import process from 'node:process'

export default defineNuxtConfig({
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

  router: {
    options: {
      linkActiveClass: '',
      linkExactActiveClass: '',
      scrollBehaviorType: 'smooth',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/var.scss" as *;',
        },
      },
    },
  },

  css: [
    '@/assets/css/font.css',
    '@/assets/scss/main.scss',
    '@/assets/css/keyframes.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  image: {
    dir: 'assets/images',
  },

  colorMode: {
    preference: 'light',
  },

  i18n: {
    locales: [
      { code: 'fr', file: 'fr-FR.json', iso: 'fr-FR' },
      { code: 'en', file: 'en-US.json', iso: 'en-US' },
      { code: 'ar', file: 'ar-DZ.json', iso: 'ar-DZ', dir: 'rtl' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    baseUrl: process.env.BASE_URL,
    skipSettingLocaleOnNavigate: true,
  },

  sitemap: {
    autoLastmod: false,
    xsl: false,
    discoverImages: false,
  },

  gtag: {
    id: process.env.GTAG_ID,
  },
})
