import createRepository from '~/api/repository.js'
import createAuthRepository from '~/api/auth.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)
  const authRepositoryWithAxios = createAuthRepository(ctx.$axios)
  const prefix = '/api'

  const repositories = {
    posts: repositoryWithAxios('posts', prefix),
    threads: repositoryWithAxios('threads', prefix),
    users: repositoryWithAxios('users', prefix),
    auth: authRepositoryWithAxios(prefix)
  }

  inject('api', repositories)
}
