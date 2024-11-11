export const routeRecord = genRootRouteRecord({
  path: '',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: 'contact',
      component: () => import('~/pages/contact/index.vue'),
      meta: {
        locale: 'menu.contact',
        requiresAuth: true,
        icon: 'icon-user-group',
        order: 1,
        roles: ['*'],
      },
      children: [
        {
          path: 'group',
          component: () => import('~/pages/contact/group.vue'),
        },
        {
          path: 'org',
          component: () => import('~/pages/contact/org.vue'),
        },
      ],
    },
  ],
})
