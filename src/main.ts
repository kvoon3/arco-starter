import type { UserModule } from './types'
import { createWebHistory } from 'vue-router'
import globalComponents from '~/components'
import App from './App.vue'
import directive from './directive'

import createRouteGuard from './router/guard'
import { appRoutes } from './router/routes'

import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from './router/routes/base'

import { setup } from './setup'

import './mock'
import '~/api/interceptor'

// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '~/assets/style/global.less'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

setup(
  // the root component
  App,
  // vue-router options
  {
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: 'login',
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('~/views/login/index.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      ...appRoutes,
      REDIRECT_MAIN,
      NOT_FOUND_ROUTE,
    ],
    scrollBehavior() {
      return { top: 0 }
    },
  },
  // function to have custom setups
  (ctx) => {
    const { app, router } = ctx

    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)

    app.use(globalComponents)
    app.use(directive)

    createRouteGuard(router)
  },
)
