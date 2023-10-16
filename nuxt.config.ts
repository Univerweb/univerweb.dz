import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },

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
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-simple-sitemap',
  ],

  image: {
    dir: 'assets/images',
  },

  colorMode: {
    preference: 'light',
  },

  i18n: {
    locales: [
      { code: 'fr', file: 'fr-FR.json', iso: 'fr-FR', name: 'Français', dir: 'ltr' },
      { code: 'en', file: 'en-US.json', iso: 'en-US', name: 'English', dir: 'ltr' },
      { code: 'ar', file: 'ar-DZ.json', iso: 'ar-DZ', name: 'العربية', dir: 'rtl' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    baseUrl: process.env.BASE_URL,
    skipSettingLocaleOnNavigate: true,
  },

  gtag: {
    id: process.env.GTAG_ID,
  },

  sitemap: {
    autoLastmod: false,
    xsl: false,
  },
})
