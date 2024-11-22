<script setup lang="ts">
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
// const memberRoute = useRoute('/contact/[org_num]/member-[dept_id]-[user_id]')
// const deptRoute = useRoute('/contact/[org_num]/dept-[dept_id]')

const createCorpModalState = reactive({
  visible: false,
})

const corpStore = useCorpStore()
const { refetch } = corpStore
const { data: corp } = storeToRefs(corpStore)

const orgForm = templateRef('orgForm')
</script>

<template>
  <div h-full flex>
    <section h-full w80 border-r-1 p2 dark:border-gray-700 bg-base>
      <a-menu>
        <a-menu-item key="group" @click="router.push('/contact/group')">
          {{ t('submenu.group-manage') }}
        </a-menu-item>
        <a-menu-item key="dept" @click="router.push('/contact/dept')">
          {{ t('submenu.dept-manage') }}
        </a-menu-item>
        <a-menu-item key="member" @click="router.push('/contact/member')">
          {{ t('submenu.member-manage') }}
        </a-menu-item>
        <a-menu-item key="create corp" @click="createCorpModalState.visible = true">
          {{ t('corp.create.form.title') }}
        </a-menu-item>
      </a-menu>
    </section>
    <section h-full w-full>
      <RouterView />
    </section>
  </div>

  <a-modal v-model:visible="createCorpModalState.visible" :title="t('corp.create.form.title')"
    @before-ok="(done) => orgForm?.submit().then(() => { done(true); refetch() }).catch(() => done(false))">
    <OrgForm ref="orgForm" />
  </a-modal>
</template>
