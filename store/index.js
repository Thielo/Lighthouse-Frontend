export const state = () => ({
  user: null,
  adminTitle: 'Dashboard'
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setTitle (state, title) {
    state.adminTitle = title
  }
}
