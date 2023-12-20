import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()

    if (nuxtApp.$i18n && to.name !== from.name)
      await nuxtApp.$i18n.waitForPendingLocaleChange()

    if (to.hash === '#realisations')
      return { el: '#realisations', behavior: 'smooth' }

    return savedPosition || { top: 0 }
  },
}
