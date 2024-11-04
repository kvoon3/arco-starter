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

    const [children] = routeRecord.children

    const name = children.name?.toString() || upperFirst(children.path.split('/').at(-1) || '')

    rootRouteRecords.push({
      ...routeRecord,
      name,
      redirect: children.path,
      meta: {
        ...children.meta,
        hideChildrenInMenu: true,
      },
      children: [
        {
          ...children,
          meta: {
            ...children.meta,
            activeMenu: name,
          },
        },
      ],
    })
  }

  return rootRouteRecords
}
