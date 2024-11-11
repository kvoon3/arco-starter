export const routeRecord = genRootRouteRecord({
  path: '/me',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '',
      name: 'Me',
      component: () => import('~/pages/me/index.vue'),
      meta: {
        locale: 'menu.me',
        requiresAuth: true,
        icon: 'icon-user',
        roles: ['*'],
        order: 999,
      },
    },
    {
      path: 'reset-password',
      name: 'ResetPassword',
      component: () => import('~/pages/me/reset-password.vue'),
    },
    {
      path: 'binding-phone',
      name: 'BindingPhone',
      component: () => import('~/pages/me/binding-phone.vue'),
    },
  ],
})
