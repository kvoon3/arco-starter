<script setup lang="ts">
import { objectKeys } from '@antfu/utils'
import { reactive } from 'vue'
import CreateCorpModal from './contact/components/CreateCorpModal.vue'

definePage({
  alias: ['/'],
  meta: {
    menu: { label: 'menu.contact', order: 1, icon: 'icon-user-group' },
  },
})

const { t } = useI18n()
const router = useRouter()

const corpStore = useCorpStore()
const { refetch } = corpStore
const { data: corp, isFetching } = storeToRefs(useCorpStore())

const isCreateCorpModalVisible = ref(false)

const menus = reactive({
  '/contact/org': t('corp-info'),
  '/contact/group': t('submenu.group-manage'),
  '/contact/dept': t('submenu.dept-manage'),
  '/contact/member': t('submenu.member-manage'),
} as const)

const selectedKeys = ref<(string | undefined)[]>([])

watch(router.currentRoute, (curRoute) => {
  selectedKeys.value = [objectKeys(menus).find((menu) => {
    return Boolean(curRoute.matched.find((i) => {
      return i.path.includes(menu)
    }))
  })]
}, { immediate: true })
</script>

<template>
  <div h-full flex>
    <section h-full w60 shrink-0 border-r-1 p2 dark:border-gray-700 bg-base>
      <a-skeleton v-if="isFetching" animation>
        <a-space direction="vertical" :style="{ width: '100%' }" size="large">
          <a-skeleton-line :rows="4" />
        </a-space>
      </a-skeleton>
      <a-menu v-else v-model:selected-keys="selectedKeys" auto-open-selected :default-open-keys="['root']">
        <a-sub-menu v-if="corp" key="root">
          <template #title>
            {{ corp.name }}
          </template>
          <a-menu-item v-for="label, path in menus" :key="path" @click="router.push(path)">
            {{ label }}
          </a-menu-item>
        </a-sub-menu>
        <button v-if="!corp" hover="bg-primary-300" bg-primary color-white list-btn
          @click="isCreateCorpModalVisible = true">
          {{ t('corp.create.form.title') }}
        </button>
      </a-menu>
    </section>
    <section h-full w-full>
      <RouterView h-full w-full />
    </section>
  </div>

  <CreateCorpModal v-model:open="isCreateCorpModalVisible" @success="refetch" />
</template>
