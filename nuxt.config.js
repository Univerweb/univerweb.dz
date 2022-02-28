export default {
  target: 'static',
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#50c8f0' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  styleResources: {
    scss: ['@/assets/scss/var.scss', '@/assets/scss/mixin.scss']
  },
  css: ['@/assets/scss/font.scss', '@/assets/scss/keyframes.scss', '@/assets/scss/main.scss'],
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { offset: -72 }]
  ],
  modules: ['@nuxtjs/i18n', '@nuxt/content'],
  components: true,
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', file: 'fr-FR.js', name: 'Français', dir: 'ltr' },
      { code: 'ar', iso: 'ar-DZ', file: 'ar-DZ.js', name: 'العربية', dir: 'rtl' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' }
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/',
    baseUrl: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    baseEmail: process.env.BASE_EMAIL || false,
    managerEmail: process.env.MANAGER_EMAIL || false,
    supportEmail: process.env.SUPPORT_EMAIL || false,
    apiKey: process.env.API_KEY || '',
    phone: '021 44 08 11',
    mobile: '0551 90 46 22',
    postalCode: '16029'
  },
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Univerweb',
      description: 'Univerweb website',
      theme_color: '#50c8f0'
    }
  },
  generate: {
    fallback: 'not_found.html'
  }
}
