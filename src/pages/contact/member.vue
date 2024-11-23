<script setup lang="ts">
import { objectEntries } from '@antfu/utils'
import { useQuery } from '@tanstack/vue-query'
import { weilaApiUrl } from '~/api'
import type { MemberModel } from '~/api/contact'
import { weilaFetch } from '~/api/instances/fetcher'
import AddDeviceTrigger from './components/AddDeviceTrigger.vue'
import CreateMemberTrigger from './components/CreateMemberTrigger.vue'
import EditMemberModal from './components/EditMemberModal.vue'

const { data: corp } = storeToRefs(useCorpStore())
const { t } = useI18n()

const memberIdxTitleMap: Partial<Record<keyof MemberModel, string>> = {
  name: t('name'),
  sex: t('gender'),
  avatar: t('avatar'),
  phone: t('phone'),
  tts: 'TTS',
  loc_share: t('loc_share'),
  track: t('track'),
  state: t('member.state'),
  created: t('created'),
  online: t('state.online'),
  dept_name: t('dept.name'),
}

const { data: members } = useQuery<Array<MemberModel>>({
  enabled: computed(() => Boolean(corp.value)),
  queryKey: [weilaApiUrl['/corp/web/member-getall'], corp.value],
  queryFn: () => weilaFetch(weilaApiUrl['/corp/web/member-getall'], {
    body: {
      org_num: corp.value!.num,
    },
  }).then(i => i.members),
})

$inspect(members)

const cols = computed(() => {
  const first = members.value?.[0]
  if (!first)
    return []
  return objectEntries(memberIdxTitleMap).map(([dataIndex, title]) => ({ title, dataIndex }))
})

$inspect(cols)

const isEditModalVisible = ref(false)
const selectedMember = ref<MemberModel | undefined>(undefined)

function onSelect(member: MemberModel) {
  selectedMember.value = member
  isEditModalVisible.value = true
  // router.push(`/contact/member-${member.dept_id}-${member.user_id}`)
}
</script>

<template>
  <div w-full p4 space-y-4>
    <a-breadcrumb>
      <a-breadcrumb-item>{{ t('submenu.member-manage') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ t('member-list') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div rounded p4 space-y-4 bg-base>
      <section space-x-2>
        <CreateMemberTrigger />
        <AddDeviceTrigger />
      </section>
      <a-table
        :columns="cols" :data="members" column-resizable w-350 :scroll="{
          x: 2000,
          y: 200,
        }" :scrollbar="true" @row-click="(m) => onSelect(m as any)"
      />
    </div>
  </div>

  <EditMemberModal v-model:open="isEditModalVisible" :member="selectedMember" />
  <!-- <template #optional="{ record }">
        <a-button>123</a-button>
      </template> -->
</template>
