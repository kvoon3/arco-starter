import { isLogin } from '~/shared/states'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  router.beforeResolve((to) => {
    const {
      requiresAuth = true,
    } = to.meta

    const res = requiresAuth
      ? isLogin.value
      : true

    return res || '/login'
  })
}
