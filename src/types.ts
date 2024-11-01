import type { ValidatedError } from '@arco-design/web-vue/es/form/interface'

import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { AppRouteRecordRaw } from './router/routes/types'

export type UserModule = (ctx: {
  isClient: boolean
  route: AppRouteRecordRaw[]
  router: Router
  app: App<Element>
}) => void

export interface OnSubmitParams<T extends Record<string, any>> {
  values: T
  errors: Record<keyof T, ValidatedError | undefined>
}
