import { isLogin } from '~/shared/states'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  router.beforeResolve((to) => {
    const {
      requiresAuth = true,
    } = to.meta

    return requiresAuth
      ? isLogin.value
      : true
  })
}
