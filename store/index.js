export const state = () => ({
  isOpen: false,

  works: [],
  locales: ['fr', 'en', 'ar'],
  locale: 'fr'
})

export const getters = {}

export const actions = {
  open: ({ commit }) => commit('open'),
  close: ({ commit }) => commit('close'),

  async all({ commit }, works) {
    await commit('SET_POST', works)
  }
}

export const mutations = {
  open(state) {
    state.isOpen = !state.isOpen
  },

  close(state) {
    state.isOpen = false
  },

  SET_POST: (state, works) => (state.works = works),

  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
