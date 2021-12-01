export default $axios => (resource, prefix) => ({
  index () {
    return $axios.$get(`${prefix}/${resource}`)
  },

  create (payload) {
    return $axios.$post(`${prefix}/${resource}`, payload)
  },

  show (id) {
    return $axios.$get(`${prefix}/${resource}/${id}`)
  },

  update (payload, id) {
    return $axios.$put(`${prefix}/${resource}/${id}`, payload)
  },

  delete (id) {
    return $axios.$delete(`${prefix}/${resource}/${id}`)
  }

})
