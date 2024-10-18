/**
 * @See `/src/router/routes/README.md` for more information
 */

import type { RouteRecordNormalized } from 'vue-router'
import { mergeArrayable } from '@antfu/utils'
import { objectEntries } from '@vueuse/core'

type PathToRoute = string
type PathRoutesMap = Record<PathToRoute, RouteRecordNormalized | RouteRecordNormalized []>

const commonPathRoutesMap: PathRoutesMap
  = import.meta.glob('./modules/*.ts', { eager: true, import: 'routeRecord' })

const externalPathRoutesMap: PathRoutesMap
  = import.meta.glob('./externalModules/*.ts', { eager: true, import: 'routeRecord' })

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
