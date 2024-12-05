import type { UserModule } from '~/types'
import { isLogin } from '~/shared/states'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, _, next) => {
    const requiresAuth = to.meta.requiresAuth ?? true
    // loop issue
    if (requiresAuth && !isLogin.value) {
      next({ name: '/login/', replace: true })
    }
    else {
      // Proceed to the requested route
      next()
    }
  })
}
