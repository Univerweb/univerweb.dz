export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseEmail: process.env.BASE_EMAIL,
      managerEmail: process.env.MANAGER_EMAIL,
      supportEmail: process.env.SUPPORT_EMAIL,
      apiKey: process.env.API_KEY,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/var.scss" as *; @use "@/assets/scss/mixin.scss" as *;',
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
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-icons',
    'nuxt-svgo',
  ],

  image: {
    // staticFilename: 'images/[name]-[hash][ext]',
    // dir: 'assets/images',
  },

  colorMode: {
    preference: 'light',
  },

  i18n: {
    locales: [
      { code: 'fr', files: ['common.json', 'fr-FR.json'], iso: 'fr-FR', name: 'Français', dir: 'ltr' },
      { code: 'ar', files: ['common.json', 'ar-DZ.json'], iso: 'ar-DZ', name: 'العربية', dir: 'rtl' },
      { code: 'en', files: ['common.json', 'en-US.json'], iso: 'en-US', name: 'English' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    baseUrl: process.env.BASE_URL,
    skipSettingLocaleOnNavigate: true,
  },

  svgo: {
    svgo: false,
  },

  // pwa: {
  //   manifest: {
  //     name: 'Univerweb',
  //     description: 'Univerweb website',
  //     theme_color: '#50c8f0'
  //   }
  // },
})
