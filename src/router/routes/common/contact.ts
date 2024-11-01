export const routeRecord = genRootRouteRecord({
  path: '',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: 'contact',
      component: () => import('~/views/contact/index.vue'),
      meta: {
        locale: 'menu.contact',
        requiresAuth: true,
        icon: 'icon-user',
        order: 0,
        roles: ['*'],
      },
    },
  ],
})
