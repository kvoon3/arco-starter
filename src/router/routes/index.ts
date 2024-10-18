import type { RouteRecordNormalized } from 'vue-router'
import { mergeArrayable } from '@antfu/utils'
import { objectEntries } from '@vueuse/core'

type PathToRoute = string
type PathRouteRecordMap = Record<PathToRoute, RouteRecordNormalized | RouteRecordNormalized []>

const commonPathRouteRecordMap: PathRouteRecordMap
  = import.meta.glob('./common/*.ts', { eager: true, import: 'routeRecord' })

const externalPathRouteRecordMap: PathRouteRecordMap
  = import.meta.glob('./external/*.ts', { eager: true, import: 'routeRecord' })

const [appRoutes, appExternalRoutes]: Array<RouteRecordNormalized[]> = [
  commonPathRouteRecordMap,
  externalPathRouteRecordMap,
].map(pathRoutesMap =>
  objectEntries(pathRoutesMap).reduce(
    (routes, [_, route]) => mergeArrayable(routes, route),
    [] as RouteRecordNormalized[],
  ),
)

// eslint-disable-next-line perfectionist/sort-named-exports
export { appRoutes, appExternalRoutes }
