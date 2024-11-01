import type { LocationQueryRaw, Router } from 'vue-router'
import { isLogin } from '~/shared/states'

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, _, next) => {
    if (isLogin.value) {
      next()
    }
    else {
      if (to.name === 'Login') {
        next()
        return
      }
      next({
        name: 'Login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      })
    }
  })
}
