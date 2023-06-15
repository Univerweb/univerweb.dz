import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition)
      return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 300)
    })
  },
}
