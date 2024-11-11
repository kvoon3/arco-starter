export const routeRecord = genRootRouteRecord({
  path: '/message',
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '',
      name: 'Message',
      component: () => import('~/pages/message.vue'),
      meta: {
        locale: 'menu.message',
        requiresAuth: true,
        icon: 'icon-user',
        roles: ['*'],
        order: 0,
      },
    },
  ],
})
