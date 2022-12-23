export default defineNuxtConfig({
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

  modules: ['@nuxt/content', ['nuxt-icons']],

  // plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // i18n: {
  //   locales: [
  //     { code: 'fr', iso: 'fr-FR', file: 'fr-FR.js', name: 'Français', dir: 'ltr' },
  //     { code: 'ar', iso: 'ar-DZ', file: 'ar-DZ.js', name: 'العربية', dir: 'rtl' },
  //     { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' }
  //   ],
  //   defaultLocale: 'fr',
  //   detectBrowserLanguage: false,
  //   lazy: true,
  //   langDir: 'locales/',
  //   baseUrl: process.env.BASE_URL
  // },

  // image: {
  //   staticFilename: 'images/[name]-[hash][ext]'
  // },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      baseEmail: process.env.BASE_EMAIL,
      managerEmail: process.env.MANAGER_EMAIL,
      supportEmail: process.env.SUPPORT_EMAIL,
      apiKey: process.env.API_KEY || '',
      phone: '021 44 08 11',
      mobile: '0551 90 46 22',
      postalCode: '16029'
    }
  }
  // pwa: {
  //   manifest: {
  //     name: 'Univerweb',
  //     description: 'Univerweb website',
  //     theme_color: '#50c8f0'
  //   }
  // },
})
