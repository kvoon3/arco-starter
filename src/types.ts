import type { App } from 'vue'

import type { Router } from 'vue-router'
import type { AppRouteRecordRaw } from './router/routes/types'

export type UserModule = (ctx: {
  isClient: boolean
  route: AppRouteRecordRaw[]
  router: Router
  app: App<Element>
}) => void
