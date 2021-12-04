export const state = () => ({
  title: ''
})

export const mutations = {
  updatePagetitle (state, title) {
    state.title = title
  }
}
