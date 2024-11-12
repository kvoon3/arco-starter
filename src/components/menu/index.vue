<script setup lang="ts">
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { isString, toString } from '@antfu/utils'
import { routes } from 'vue-router/auto-routes'

const router = useRouter()
const { t } = useI18n()

function* traverse(routes: RouteRecordRaw[]): Generator<RouteRecordRaw> {
  for (const route of routes) {
    if (route.children && route.children.length > 0) {
      yield * traverse(route.children)
    }

    yield route
  }
}

// @unocss-include
const menus = ref<{
  label: string
  path: string
  icon?: string
  order: number
}[]>([])

for (const route of traverse(routes)) {
  const { menu } = route.meta || {}
  // FIXME: type
  const path = route.name as string

  if (menu) {
    const {
      order = 99,
    } = menu
    menus.value.push(
      isString(menu)
        ? { label: menu, path, icon: undefined, order }
        : { label: menu.label, path, icon: menu.icon, order },
    )

    menus.value.sort((a, b) => a.order - b.order)
  }
}

const selectedKeys = ref<string[]>([])

function goto(path: string) {
  router.push(path)
}
</script>

<template>
  <a-menu v-model:selected-keys="selectedKeys" mode="pop">
    <a-menu-item v-for="menu in menus" :key="menu.path" @click="() => goto(menu.path)">
      <template #icon>
        <component :is="menu.icon" v-if="menu.icon" />
      </template>
      {{ t(menu.label) }}
    </a-menu-item>
  </a-menu>
</template>

<!-- <script lang="tsx">
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { compile, computed, defineComponent, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '~/stores/app'
import { openWindow, regexUrl } from '~/utils'
import { listenerRouteChange } from '~/utils/route-listener'
import useMenuTree from './use-menu-tree'

export default defineComponent({
  emit: ['collapse'],
  setup() {
    const { t } = useI18n()
    const appStore = useAppStore()
    const router = useRouter()
    const route = useRoute()
    const { menuTree } = useMenuTree()
    const collapsed = computed({
      get() {
        if (appStore.device === 'desktop')
          return appStore.menuCollapse
        return false
      },
      set(value: boolean) {
        appStore.updateSettings({ menuCollapse: value })
      },
    })

    const topMenu = computed(() => appStore.topMenu)
    const openKeys = ref<string[]>([])
    const selectedKey = ref<string[]>([])

    const goto = (item: RouteRecordRaw) => {
      // Open external link
      if (regexUrl.test(item.path)) {
        openWindow(item.path)
        selectedKey.value = [item.name as string]
        return
      }
      // Eliminate external link side effects
      const { hideInMenu, activeMenu } = item.meta as RouteMeta
      if (route.name === item.name && !hideInMenu && !activeMenu) {
        selectedKey.value = [item.name as string]
        return
      }

      const to = item.meta?.isRootLevel
        ? item.meta.firstChildPath
        : { name: item.name }

      if (to)
        router.push(to)
      else
        throw new Error('not find route')
    }
    const findMenuOpenKeys = (target: string) => {
      const result: string[] = []
      let isFind = false
      const backtrack = (item: RouteRecordRaw, keys: string[]) => {
        if (item.name === target) {
          isFind = true
          result.push(...keys)
          return
        }
        if (item.children?.length) {
          item.children.forEach((el) => {
            backtrack(el, [...keys, el.name as string])
          })
        }
      }
      menuTree.value.forEach((el: RouteRecordRaw) => {
        if (isFind)
          return // Performance optimization
        backtrack(el, [el.name as string])
      })
      return result
    }
    listenerRouteChange((newRoute) => {
      const { requiresAuth, activeMenu, hideInMenu } = newRoute.meta
      if (requiresAuth && (!hideInMenu || activeMenu)) {
        const menuOpenKeys = findMenuOpenKeys(
          (activeMenu || newRoute.name) as string,
        )

        const keySet = new Set([...menuOpenKeys, ...openKeys.value])
        openKeys.value = [...keySet]

        selectedKey.value = [
          activeMenu || menuOpenKeys[menuOpenKeys.length - 1],
        ]
      }
    }, true)
    const setCollapse = (val: boolean) => {
      if (appStore.device === 'desktop')
        appStore.updateSettings({ menuCollapse: val })
    }

    const renderSubMenu = () => {
      function travel(_route: RouteRecordRaw[], nodes = []) {
        if (_route) {
          _route.forEach((element) => {
            // This is demo, modify nodes as needed
            const icon = element?.meta?.icon
              ? () => h(compile(`<${element?.meta?.icon}/>`))
              : null
            const node
                = element?.children && element?.children.length !== 0
                  ? (
                      <a-sub-menu
                        key={element?.name}
                        v-slots={{
                          icon,
                          title: () => h(compile(t(element?.meta?.locale || ''))),
                        }}
                      >
                        {travel(element?.children)}
                      </a-sub-menu>
                    )
                  : (
                      <a-menu-item
                        key={element?.name}
                        v-slots={{ icon }}
                        onClick={() => goto(element)}
                      >
                        {t(element?.meta?.locale || '')}
                      </a-menu-item>
                    )
            nodes.push(node as never)
          })
        }
        return nodes
      }
      return travel(menuTree.value)
    }

    return () => (
      <a-menu
        mode={topMenu.value ? 'horizontal' : 'vertical'}
        v-model:collapsed={collapsed.value}
        v-model:open-keys={openKeys.value}
        show-collapse-button={appStore.device !== 'mobile'}
        auto-open={false}
        selected-keys={selectedKey.value}
        auto-open-selected={true}
        level-indent={34}
        style="height: 100%;width:100%;"
        onCollapse={setCollapse}
      >
        {renderSubMenu()}
      </a-menu>
    )
  },
})
</script>

<style lang="less" scoped>
  :deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style> -->
