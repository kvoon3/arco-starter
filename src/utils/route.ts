import { toArray } from '@antfu/utils'
import { upperFirst } from 'scule'
import type { AppRouteRecordRaw } from '~/router/routes/types'

/**
 *
 * Generate a human-readable level 1 menu configuration for Arco Vue
 *
 * @author kvoon
 * @see https://github.com/arco-design/arco-design-pro-vue/issues/85#issuecomment-1142289501
 */
export function genRootRouteRecord(routeRecord: AppRouteRecordRaw | AppRouteRecordRaw[]) {
  const routeRecords = toArray(routeRecord)

  const rootRouteRecords: AppRouteRecordRaw[] = []

  for (const routeRecord of routeRecords) {
    if (!routeRecord.children?.length)
      continue

    const [firstChildren, ...restChildren] = routeRecord.children

    const name = firstChildren.name?.toString() || upperFirst(firstChildren.path.split('/').at(-1) || '')

    rootRouteRecords.push({
      ...routeRecord,
      name,
      redirect: firstChildren.path,
      meta: {
        ...firstChildren.meta,
        hideChildrenInMenu: true,
        isRootLevel: true,
        // TODO: better path generation
        firstChildPath: `${routeRecord.path}/${firstChildren.path}`,
      },
      children: [
        {
          ...firstChildren,
          meta: {
            ...firstChildren.meta,
            activeMenu: name,
          },
        },
        ...restChildren,
      ],
    })
  }

  return rootRouteRecords
}
