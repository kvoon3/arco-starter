import type { UserModule } from './types'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { VueQueryPlugin } from '@tanstack/vue-query'
// progress bar
import { ViteSSG } from 'vite-ssg'
import { createRouter, createWebHistory } from 'vue-router'
import globalComponents from '~/components'
import App from './App.vue'
import directive from './directive'

import createRouteGuard from './router/guard'
import { appRoutes } from './router/routes'

import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from './router/routes/base'

import './mock'

import '~/api/interceptor'
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '~/assets/style/global.less'
import 'nprogress/nprogress.css' // NProgress Configuration
import 'virtual:uno.css'

export const createApp = ViteSSG(
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
    const { app, router, routes, isClient, initialState } = ctx

    // install plugins etc.

    // app.use(router)
    app.use(globalComponents)
    app.use(directive)

    createRouteGuard(router)

    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
