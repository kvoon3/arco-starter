<script setup lang="ts">
import { objectEntries } from '@antfu/utils'
import { type DescData, Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import md5 from 'md5'
import { storeToRefs } from 'pinia'
import type { MemberModel } from '~/api/contact'
import { MemberType, TrackType } from '~/api/contact'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()
const route = useRoute('/contact/deprecated-member-[dept_id]-[user_id]')
const router = useRouter()

const corpStore = useCorpStore()
const org_num = ref(0)

corpStore.$subscribe((_, state) => org_num.value = state.data?.num || 0, { immediate: true })

const { themeColor } = useAppStore()
const contactStore = useContactStore()
const { data: contact } = storeToRefs(contactStore)
const { refetch } = contactStore

const dept = computed(() => {
  if (!route.params.dept_id)
    return undefined

  return contact.value?.depts.find(dept => dept.id === Number(route.params.dept_id))
})

const member = computed(() => {
  if (!route.params.user_id)
    return undefined

  if (Number(route.params.dept_id) === 0)
    return contact.value?.members.find(member => member.user_id === Number(route.params.user_id))

  return dept.value?.members.find(member => member.user_id === Number(route.params.user_id))
})

const TrackTypeNameMap = {
  [TrackType.Close]: t('track-type.close'),
  [TrackType.High]: t('track-type.high'),
  [TrackType.Medium]: t('track-type.medium'),
  [TrackType.Low]: t('track-type.low'),
  [TrackType.Keep]: t('track-type.keep'),
}

const data = computed(() => {
  const _data: DescData[] = []

  if (!member.value)
    return _data

  for (const [key, value] of objectEntries(member.value)) {
    if (key === 'track' && member.value.type === MemberType.Device) {
      _data.push({
        label: t('track'),
        value: TrackTypeNameMap[value as TrackType],
      })
    }
    else if (key === 'created') {
      _data.push({
        label: t('created'),
        value: new Date(Number(value) * 1000).toLocaleString(),
      })
    }
    else if (key === 'loc_share') {
      _data.push({
        label: t('loc_share'),
        value: value ? t('open') : t('close'),
      })
    }
    else if (key === 'phone') {
      _data.push({
        label: t('phone'),
        value: String(value),
      })
    }
    else if (key === 'tts') {
      _data.push({
        label: 'TTS',
        value: value ? t('open') : t('close'),
      })
    }
  }

  return _data
})

const isChangingMemberState = ref(false)
const memberState = computed({
  get: () => member.value?.state ?? 0,
  set: (val) => {
    if (member.value)
      member.value.state = val
  },
})

const MemberStateNameMap = {
  0: t('member-state.enabled'),
  1: t('member-state.paused'),
}

async function toggleMemberState(state: 1 | 0) {
  isChangingMemberState.value = true

  const res = await weilaRequest.post<MemberModel>('/corp/web/member-change-state', {
    state,
    member_id: member.value!.user_id,
    org_num: org_num.value,
  })

  isChangingMemberState.value = false

  if (res.data?.state)
    memberState.value = res.data.state

  return true
}

const { mutate: deleteMember } = useMutation({
  mutationFn: () => weilaRequest.post('/corp/web/member-delete', {
    org_num: org_num?.value,
    member_id: Number(route.params.user_id),
  }),
  onSuccess() {
    Message.success(t('message.success'))
    router.push(`/contact/${org_num.value}/dept-${route.params.dept_id}`)
  },
})
const deleteMemberModalVisible = ref(false)

interface ResetMemberPasswordPayload {
  org_num: number
  member_id: number
  password: string
}

const resetMemberPasswordModalVisible = ref(false)
const resetMemberPasswordForm = reactive<ResetMemberPasswordPayload>({
  org_num: org_num.value,
  member_id: Number(route.params.user_id),
  password: '',
})

const { mutate: resetMemberPassword } = useMutation({
  mutationFn: (payload: ResetMemberPasswordPayload) => weilaRequest.post('/corp/web/member-reset-password', {
    ...payload,
    password: md5(payload.password),
  }),
  onSuccess() {
    Message.success(t('message.success'))
  },
})
</script>

<template>
  <div p4 space-y-4>
    <a-breadcrumb>
      <a-breadcrumb-item>{{ t('submenu.member-manage') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ t('member-list') }}</a-breadcrumb-item>
      <a-breadcrumb-item>User name</a-breadcrumb-item>
    </a-breadcrumb>
    <div v-if="member" class="w-full of-hidden rounded p4 space-y-4 bg-base">
      <div class="p-6">
        <div flex justify-between>
          <div class="mb-4 flex items-center">
            <UseImage v-if="member.avatar" :src="member.avatar" class="mr-4 h-16 w-16 rounded-full" />
            <div>
              <div class="flex items-center">
                <h2 class="mr-2 text-2xl text-gray-800 font-bold dark:text-white">
                  {{ member.name }}
                </h2>
                <i v-if="member.sex === 0" i-carbon-gender-male class="text-blue-500" />
                <i v-else-if="member.sex === 1" i- i-carbon-gender-female class="text-pink-500" />
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ member.user_num }}
              </p>
            </div>
          </div>
          <div space-x-2>
            <a-button @click=" member.type === MemberType.Device
              ? router.push(`/contact/${org_num}/edit-device-${route.params.dept_id}-${route.params.user_id}`)
              : router.push(`/contact/${org_num}/edit-member-${route.params.dept_id}-${route.params.user_id}`)
              ">
              {{ t('button.edit') }}
            </a-button>
            <a-button @click="resetMemberPasswordModalVisible = true">
              {{ t('reset-password.button') }}
            </a-button>
            <a-button status="danger" @click="deleteMemberModalVisible = true">
              {{ t('button.delete') }}
            </a-button>
          </div>
        </div>
        <a-descriptions :data="data" bordered />
        <div class="mt-6 flex items-center">
          <span class="mr-2 text-gray-700 dark:text-gray-300">{{ t('member.state') }}: {{
            MemberStateNameMap[member.state] }}</span>
          <!-- @vue-expect-error type error -->
          <a-switch v-model="memberState" :loading="isChangingMemberState" :checked-value="0" :unchecked-value="1"
            :checked-color="themeColor" unchecked-color="#ddd"
            :before-change="(v: 0 | 1) => toggleMemberState(v).then(refetch)" />
        </div>
      </div>
    </div>
    <a-empty v-else />
  </div>

  <a-modal v-model:visible="deleteMemberModalVisible" :title="t('delete.modal.title')"
    @before-ok="(done) => deleteMember(void 0, { onSuccess: () => done(true), onError: () => done(false) })">
    <div>
      <p>
        {{ t('delete.modal.content') }}
      </p>
      <p color-red>
        {{ t('delete.modal.hint') }}
      </p>
    </div>
  </a-modal>

  <a-modal v-model:visible="resetMemberPasswordModalVisible" :title="t('reset-password.form.title')"
    @before-ok="(done) => resetMemberPassword(resetMemberPasswordForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="resetMemberPasswordForm">
      <a-form-item field="password" :label="t('reset-password.form.password.label')" :rules="[{ required: true }]"
        :validate-trigger="['change', 'blur']">
        <a-input v-model="resetMemberPasswordForm.password" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
