export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      baseEmail: process.env.BASE_EMAIL,
      managerEmail: process.env.MANAGER_EMAIL,
      supportEmail: process.env.SUPPORT_EMAIL,
      apiKey: process.env.API_KEY || ''
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/var.scss" as *; @use "@/assets/scss/mixin.scss" as *;'
        }
      }
    }
  },

  css: ['@/assets/css/font.css', '@/assets/scss/main.scss', '@/assets/css/keyframes.css'],

  modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxt/image-edge', '@nuxtjs/color-mode', '@vueuse/nuxt', 'nuxt-icons'],

  // plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  i18n: {
    vueI18n: {
      fallbackLocale: 'fr'
    },
    locales: [
      { code: 'fr', file: 'fr-FR.json', iso: 'fr-FR', name: 'Français', dir: 'ltr' },
      { code: 'ar', file: 'ar-DZ.json', iso: 'ar-DZ', name: 'العربية', dir: 'rtl' },
      { code: 'en', file: 'en-US.json', iso: 'en-US', name: 'English' }
    ],
    lazy: true,
    langDir: 'lang',
    skipSettingLocaleOnNavigate: true,
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    baseUrl: process.env.BASE_URL
  },

  image: {
    staticFilename: 'images/[name]-[hash][ext]'
  }

  // pwa: {
  //   manifest: {
  //     name: 'Univerweb',
  //     description: 'Univerweb website',
  //     theme_color: '#50c8f0'
  //   }
  // },
})
