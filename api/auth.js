export default $axios => prefix => ({
  login (payload) {
    return $axios.$post(`${prefix}/login`, payload)
  },

  register (payload) {
    return $axios.$post(`${prefix}/register`, payload)
  },

  logout () {
    return $axios.$post(`${prefix}/logout`)
  },

  token () {
    return $axios.$get(`${prefix}/csrf-cookie`)
  },

  user () {
    return $axios.$get(`${prefix}/user`)
  }

})
