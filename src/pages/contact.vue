<script setup lang="ts">
import { objectKeys } from '@antfu/utils'
import { reactive } from 'vue'
import OrgForm from './contact/components/org-form.vue'

definePage({
  alias: ['/'],
  meta: {
    menu: { label: 'menu.contact', order: 1, icon: 'icon-user-group' },
  },
})

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const menus = reactive({
  '/contact/group': t('submenu.group-manage'),
  '/contact/dept': t('submenu.dept-manage'),
  '/contact/member': t('submenu.member-manage'),
} as const)

const defaultSelectedKey = objectKeys(menus).find((menu) => {
  return Boolean(route.matched.find(i => i.path.includes(menu)))
})

const createCorpModalState = reactive({
  visible: false,
})

const { data: corp, isSuccess, refetch } = useCorpStore()

const orgForm = templateRef('orgForm')
</script>

<template>
  <div h-full flex>
    <section h-full w80 border-r-1 p2 dark:border-gray-700 bg-base>
      <a-menu :default-selected-keys="[defaultSelectedKey]">
        <a-menu-item v-for="label, path in menus" :key="path" @click="router.push(path)">
          {{ label }}
        </a-menu-item>
        <a-menu-item v-if="isSuccess && corp" key="create corp" @click="createCorpModalState.visible = true">
          {{ t('corp.create.form.title') }}
        </a-menu-item>
      </a-menu>
    </section>
    <section h-full w-full>
      <RouterView h-full w-full />
    </section>
  </div>

  <a-modal
    v-model:visible="createCorpModalState.visible" :title="t('corp.create.form.title')"
    @before-ok="(done) => orgForm?.submit().then(() => { done(true); refetch() }).catch(() => done(false))"
  >
    <OrgForm ref="orgForm" />
  </a-modal>
</template>
