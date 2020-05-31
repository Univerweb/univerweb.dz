export const state = () => ({
  isOpen: false
})

export const getters = {}

export const actions = {
  open: ({ commit }) => commit('open'),
  close: ({ commit }) => commit('close')
}

export const mutations = {
  open(state) {
    state.isOpen = !state.isOpen
  },
  close(state) {
    state.isOpen = false
  }
}
