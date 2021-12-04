export default async function ({ route, redirect, store, $api }) {
  const routeDashboard = '/admin/dashboard'
  const routeLogin = '/auth/login'
  // If the user is not authenticated
  const status = await $api.auth.user()
    .then((response) => {
      console.log(response)
      store.commit('setUser', response)
      return true
    })
    .catch((error) => {
      if (!error.response) {
        // network error
        console.log('Error: Network Error')
      } else {
        console.log('error.response.data.message')
      }
      return false
    })

  if (!status && route.path.includes('/admin')) {
    return redirect(routeLogin)
  } else if (status && route.path.includes('/auth')) {
    return redirect(routeDashboard)
  }
}
