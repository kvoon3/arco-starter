<script setup lang="ts">
import { objectEntries } from '@antfu/utils'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { objectOmit } from '@vueuse/core'
import { weilaApiUrl } from '~/api'
import { type MemberModel, TrackType } from '~/api/contact'
import { weilaFetch } from '~/api/instances/fetcher'
import { weilaRequest } from '~/api/instances/request'
import AddDeviceTrigger from './components/AddDeviceTrigger.vue'
import CreateMemberTrigger from './components/CreateMemberTrigger.vue'
import EditMemberModal from './components/EditMemberModal.vue'
import ResetPasswordModal from './components/ResetMemberPasswordModal.vue'

definePage({
  alias: 'member',
})

const { data: corp } = storeToRefs(useCorpStore())
const { t } = useI18n()
const { themeColor } = useAppStore()
const route = useRoute('/contact/member-[[dept_id]]-[[dept_name]]')

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

const trackTypeNameMap = {
  [TrackType.Close]: t('track-type.close'),
  [TrackType.High]: t('track-type.high'),
  [TrackType.Medium]: t('track-type.medium'),
  [TrackType.Low]: t('track-type.low'),
  [TrackType.Keep]: t('track-type.keep'),
}

const url = computed(() => {
  return route.params.dept_id
    ? weilaApiUrl['/corp/web/dept-member-getall']
    : weilaApiUrl['/corp/web/member-getall']
})

const { data: members, refetch } = useQuery<Array<MemberModel>>({
  enabled: computed(() => Boolean(corp.value)),
  queryKey: [url, corp, route.params.dept_id],
  queryFn: () => weilaFetch(url.value, {
    body: {
      org_num: corp.value!.num,
      dept_id: route.params.dept_id,
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

const selectedMember = ref<MemberModel | undefined>(undefined)

const isEditModalVisible = ref(false)
const isResetPasswordModalVisible = ref(false)

function onSelect(member: MemberModel, _: PointerEvent) {
  selectedMember.value = member

  // const whitelistEl = ['.arco-switch', '.arco-btn']

  // // @ts-expect-error type error: no closest attr
  // if (whitelistEl.find(className => e.target?.closest(className))) {
  //   return
  // }

  // isEditModalVisible.value = true
  // router.push(`/contact/member-${member.dept_id}-${member.user_id}`)
}

const { mutateAsync: changeMemberState } = useMutation({
  mutationFn: (payload: { member_id: number, state: 0 | 1 }) => weilaRequest.post(weilaApiUrl['/corp/web/member-change-state'], {
    org_num: corp.value!.num,
    ...payload,
  }),
})

function toggleMemberState(targetId: number, state: 0 | 1) {
  const newState = state ? 0 : 1
  return changeMemberState({
    member_id: targetId,
    state: newState,
  })
    // NOTE: arco switch need a boolean return
    .then(({ data }) => data.state === newState)
    .catch(() => false)
}
</script>

<template>
  <div w-full p4 space-y-4>
    <a-breadcrumb>
      <a-breadcrumb-item>{{ t('submenu.member-manage') }}</a-breadcrumb-item>
      <!-- <a-breadcrumb-item>{{ t('member-list') }}</a-breadcrumb-item> -->
    </a-breadcrumb>
    <div w-full rounded p4 space-y-4 bg-base>
      <section space-x-2>
        <CreateMemberTrigger>
          <a-button type="primary">
            <i i-ph-plus inline-block /> {{ t('button.create-member') }}
          </a-button>
        </CreateMemberTrigger>
        <AddDeviceTrigger>
          <a-button type="primary">
            <i i-ph-plus inline-block /> {{ t('button.add-device') }}
          </a-button>
        </AddDeviceTrigger>
      </section>
      <!-- @vue-expect-error type error when arco's row-click -->
      <a-table :columns="cols" :data="members" :column-resizable="true" :scroll="{
        x: 700,
        y: 600,
      }" :scrollbar="true" @row-click="(...args) => onSelect(...args)">
        <template #columns>
          <a-table-column :title="memberIdxTitleMap.state">
            <template #cell="{ record: { state, user_id } }">
              <a-switch :default-checked="Boolean(!state)" :checked-value="0" :unchecked-value="1"
                :checked-color="themeColor" unchecked-color="#ddd" :before-change="(state) => toggleMemberState(
                  user_id,
                  Number(state) ? 0 : 1,
                )">
                <template #checked>
                  {{ t('member-state.enabled') }}
                </template>
                <template #unchecked>
                  {{ t('member-state.paused') }}
                </template>
              </a-switch>
            </template>
          </a-table-column>
          <a-table-column :title="memberIdxTitleMap.online">
            <template #cell="{ record: { online } }">
              {{ online ? t('online') : t('offline') }}
            </template>
          </a-table-column>
          <a-table-column :title="memberIdxTitleMap.avatar">
            <template #cell="{ record: { avatar } }">
              <UseImage class="min-w-20 border rounded-lg size-20" :src="avatar">
                <template #loading>
                  <div class="h-full w-full flex items-center justify-center">
                    <i class="i-carbon-progress-bar-round text-2xl text-gray-500" />
                  </div>
                </template>

                <template #error>
                  <div class="h-full w-full flex items-center justify-center">
                    <i class="i-carbon-no-image text-2xl text-red-500" />
                  </div>
                </template>
              </UseImage>
            </template>
          </a-table-column>
          <a-table-column :title="t('weila-number')">
            <template #cell="{ record: { user_num } }">
              {{ user_num }}
            </template>
          </a-table-column>
          <a-table-column :title="t('created')">
            <template #cell="{ record: { created } }">
              {{ new Date(created * 1000).toLocaleDateString() }}
            </template>
          </a-table-column>

          <a-table-column
            v-for="(val, key) in objectOmit(memberIdxTitleMap, ['avatar', 'sex', 'tts', 'track', 'online', 'state', 'loc_share', 'created'])"
            :key :title="val" :data-index="key" />
          <a-table-column :title="memberIdxTitleMap.loc_share">
            <template #cell="{ record: { loc_share } }">
              <a-tag v-if="loc_share" color="green">
                {{ t('open') }}
              </a-tag>
              <a-tag v-else color="gray">
                {{ t('close') }}
              </a-tag>
            </template>
          </a-table-column>
          <a-table-column :title="memberIdxTitleMap.tts">
            <template #cell="{ record: { tts } }">
              <a-tag v-if="tts" color="green">
                {{ t('open') }}
              </a-tag>
              <a-tag v-else color="gray">
                {{ t('close') }}
              </a-tag>
            </template>
          </a-table-column>
          <a-table-column :title="memberIdxTitleMap.track">
            <template #cell="{ record: { track } }">
              <a-tag>
                <!-- @vue-expect-error type error -->
                {{ trackTypeNameMap[track] }}
              </a-tag>
            </template>
          </a-table-column>
          <!-- TODO: 解决遮挡问题 -->
          <a-table-column :title="t('controls')" fixed="right" :width="200">
            <template #cell>
              <div flex gap2>
                <!-- <a-dropdown :popup-max-height="false">
                  <a-button>No Max Height <icon-down /></a-button>
                  <template #content>
                    <EditModal :member="selectedMember" @success="refetch">
                      <a-doption>{{ t('button.edit') }}</a-doption>
                    </EditModal>
                  </template>
  </a-dropdown> -->
                <!-- TODO: style finish -->
                <a-dropdown :popup-max-height="false">
                  <a-button>{{ t('controls') }}<icon-down /></a-button>
                  <template #content>
                    <a-doption @click="isEditModalVisible = true">
                      {{ t('button.edit') }}
                    </a-doption>
                    <a-doption @click="isResetPasswordModalVisible = true">
                      {{ t('reset-password.button') }}
                    </a-doption>
                  </template>
                </a-dropdown>
                <!-- <EditModal :member="selectedMember" @success="refetch">
                  <a-button>
                    {{ t('button.edit') }}
                  </a-button>
                </EditModal>
                <ResetPasswordModal :member="selectedMember">
                  <a-button>
                    {{ t('reset-password.button') }}
                  </a-button>
                </ResetPasswordModal> -->
              </div>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
  </div>

  <EditMemberModal v-model:open="isEditModalVisible" :member="selectedMember" @success="refetch" />
  <ResetPasswordModal v-model:open="isResetPasswordModalVisible" :member="selectedMember" />
</template>
