export default {
  open(state) {
    state.open = !state.open
  },
  close(state) {
    state.open = false
  }
}
