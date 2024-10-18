/**
 * Generate routes
 *
 * By extract routes(modules default export) and merge them to one array
 *
 * ---
 * For example,
 *
 * ## Input:
 *
 * ```
 * const pathRoutesMap = {
 *   './path/to/route': routeObject1,
 *   './path/to/route': [routeObject2, routeObject3],
 * }
 * ```
 *
 * ## Output:
 *
 * ```
 * const appRoutes = [routeObject1, routeObject2, routeObject3]
 * ```
 * ---
 */

import type { RouteRecordNormalized } from 'vue-router'
import { mergeArrayable } from '@antfu/utils'
import { objectEntries } from '@vueuse/core'

type PathToRoute = string
type PathRoutesMap = Record<PathToRoute, RouteRecordNormalized | RouteRecordNormalized []>

const commonPathRoutesMap: PathRoutesMap
  = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })

const externalPathRoutesMap: PathRoutesMap
  = import.meta.glob('./externalModules/*.ts', { eager: true, import: 'default' })

const [appRoutes, appExternalRoutes]: Array<RouteRecordNormalized[]> = [
  commonPathRoutesMap,
  externalPathRoutesMap,
].map(pathRoutesMap =>
  objectEntries(pathRoutesMap).reduce(
    (routes, [_, route]) => mergeArrayable(routes, route),
    [] as RouteRecordNormalized[],
  ),
)

// eslint-disable-next-line perfectionist/sort-named-exports
export { appRoutes, appExternalRoutes }
