export const routeRecord = genRootRouteRecord({
  path: '',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: 'workbench',
      component: () => import('~/pages/workbench/index.vue'),
      meta: {
        locale: 'menu.workbench',
        requiresAuth: true,
        icon: 'icon-common',
        order: 0,
        roles: ['*'],
      },
    },
  ],
})
