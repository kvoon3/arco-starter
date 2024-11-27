/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/[...catch]': RouteRecordInfo<'/[...catch]', '/:catch(.*)', { catch: ParamValue<true> }, { catch: ParamValue<false> }>,
    '/contact': RouteRecordInfo<'/contact', '/contact', Record<never, never>, Record<never, never>>,
    '/contact/deprecated-member-[dept_id]-[user_id]': RouteRecordInfo<'/contact/deprecated-member-[dept_id]-[user_id]', '/contact/deprecated-member-:dept_id-:user_id', { dept_id: ParamValue<true>, user_id: ParamValue<true> }, { dept_id: ParamValue<false>, user_id: ParamValue<false> }>,
    '/contact/dept': RouteRecordInfo<'/contact/dept', '/contact/dept', Record<never, never>, Record<never, never>>,
    '/contact/group': RouteRecordInfo<'/contact/group', '/contact/group', Record<never, never>, Record<never, never>>,
    '/contact/group-[group_id]-[group_name]': RouteRecordInfo<'/contact/group-[group_id]-[group_name]', '/contact/group-:group_id-:group_name', { group_id: ParamValue<true>, group_name: ParamValue<true> }, { group_id: ParamValue<false>, group_name: ParamValue<false> }>,
    '/contact/member-[[dept_id]]-[[dept_name]]': RouteRecordInfo<'/contact/member-[[dept_id]]-[[dept_name]]', '/contact/member-:dept_id?-:dept_name?', { dept_id?: ParamValueZeroOrOne<true>, dept_name?: ParamValueZeroOrOne<true> }, { dept_id?: ParamValueZeroOrOne<false>, dept_name?: ParamValueZeroOrOne<false> }>,
    '/contact/org': RouteRecordInfo<'/contact/org', '/contact/org', Record<never, never>, Record<never, never>>,
    '/img-test': RouteRecordInfo<'/img-test', '/img-test', Record<never, never>, Record<never, never>>,
    '/login/': RouteRecordInfo<'/login/', '/login', Record<never, never>, Record<never, never>>,
    '/message': RouteRecordInfo<'/message', '/message', Record<never, never>, Record<never, never>>,
    '/message/[group_id]-[group_name]': RouteRecordInfo<'/message/[group_id]-[group_name]', '/message/:group_id-:group_name', { group_id: ParamValue<true>, group_name: ParamValue<true> }, { group_id: ParamValue<false>, group_name: ParamValue<false> }>,
    '/not-found/': RouteRecordInfo<'/not-found/', '/not-found', Record<never, never>, Record<never, never>>,
    '/redirect/': RouteRecordInfo<'/redirect/', '/redirect', Record<never, never>, Record<never, never>>,
    '/register/': RouteRecordInfo<'/register/', '/register', Record<never, never>, Record<never, never>>,
    '/reset-password/': RouteRecordInfo<'/reset-password/', '/reset-password', Record<never, never>, Record<never, never>>,
    '/workbench/': RouteRecordInfo<'/workbench/', '/workbench', Record<never, never>, Record<never, never>>,
    '/workbench/user-track': RouteRecordInfo<'/workbench/user-track', '/workbench/user-track', Record<never, never>, Record<never, never>>,
  }
}
