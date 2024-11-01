import NProgress from 'nprogress'
import type { UserModule } from '~/types'

import 'nprogress/nprogress.css' // NProgress Configuration

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    NProgress.configure({ showSpinner: false })
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => {
      console.log('sdlfk')
      NProgress.done()
    })
  }
}
