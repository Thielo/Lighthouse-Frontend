export const state = () => ({
  user: null,
  title: 'Dashboard'
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setTitle (state, title) {
    state.title = title
  }
}
