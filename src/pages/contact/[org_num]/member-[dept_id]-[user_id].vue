<script setup lang="ts">
import { objectEntries } from '@antfu/utils'
import { type DescData, Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import md5 from 'md5'
import type { MemberModel } from '~/api/contact'
import { TrackType } from '~/api/contact'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()
const route = useRoute('/contact/[org_num]/member-[dept_id]-[user_id]')
const router = useRouter()

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

  if(Number(route.params.dept_id) === 0)
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

    if (key === 'track') {
      _data.push({
        label: t('track'),
        value: TrackTypeNameMap[value as TrackType],
      })
    }
    else if (key === 'created') {
      _data.push({
        label: t('created'),
        value: new Date(value).toLocaleString(),
      })
    }
    else if (key === 'loc_share') {
      _data.push({
        label: t('loc_share'),
        value: value ? t('open') : t('close'),
      })
    }
    else if(key === 'phone' || key === 'tts') {
      _data.push({
        label: key,
        value: String(value),
      })
    }
  }

  return _data
})

const isChangingMemberState = ref(false)
const memberState = ref(member.value?.state)

const MemberStateNameMap = {
  1: t('member-state.enabled'),
  0: t('member-state.paused'),
}

async function toggleMemberState(state: 1 | 0) {
  isChangingMemberState.value = true

  const res = await weilaRequest.post<MemberModel>('/corp/web/member-change-state', {
    state,
    user_id: member.value!.user_id,
    org_num: member.value!.user_num,
  })

  isChangingMemberState.value = false

  if (res.data?.state)
    memberState.value = res.data.state

  return true
}

interface ChangeMemberPayload {
  org_num: number
  member_id: number
  name: string
  dept_id: number
  sex: 0 | 1
  avatar: string
  phone: string
  tts: 0 | 1
  loc_share: 0 | 1
  track: TrackType
}

const { mutate: changeMember } = useMutation({
  mutationFn: (payload: ChangeMemberPayload) => weilaRequest.post('/corp/web/member-change', payload),
  onSuccess() {
    Message.success(t('message.success'))
    refetch()
  },
})

const changeMemberModalVisible = ref(false)
const changeMemberForm = reactive<ChangeMemberPayload>({
  org_num: Number(route.params.org_num),
  dept_id: Number(route.params.dept_id),
  member_id: Number(route.params.user_id),
  name: '',
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
  track: TrackType.Close,
})

watch(changeMemberModalVisible, (newValue) => {
  if (newValue) {
    // Reset form when modal opens
    Object.assign(changeMemberForm, {
      org_num: Number(route.params.org_num),
      dept_id: Number(route.params.dept_id),
      member_id: Number(route.params.user_id),
      name: member.value?.name || '',
      sex: member.value?.sex || 0,
      avatar: member.value?.avatar || '',
      phone: member.value?.phone || '',
      tts: member.value?.tts || 0,
      loc_share: member.value?.loc_share || 0,
      track: member.value?.track || TrackType.Close,
    })
  }
})

const { mutate: deleteMember } = useMutation({
  mutationFn: () => weilaRequest.post('/corp/web/member-delete', {
    org_num: Number(route.params.org_num),
    member_id: Number(route.params.user_id),
  }),
  onSuccess() {
    Message.success(t('message.success'))
    router.push(`/contact/${route.params.org_num}/dept-${route.params.dept_id}`)
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
  org_num: Number(route.params.org_num),
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
  <div p4 bg-base>
    <a-breadcrumb>
      <a-breadcrumb-item v-if="dept" cursor-pointer @click="router.push(`/contact/${route.params.org_num}/dept-${route.params.dept_id}`)">
        {{ dept?.name }}
      </a-breadcrumb-item>
      <a-breadcrumb-item v-if="member">
        {{ member?.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div v-if="member" class="w-full overflow-hidden rounded-lg shadow-md">
      <div class="p-6">
        <div flex justify-between>
          <div class="mb-4 flex items-center">
            <UseImage
              v-if="member.avatar"
              :src="member.avatar"
              class="mr-4 h-16 w-16 rounded-full"
            />
            <div>
              <div class="flex items-center">
                <h2 class="mr-2 text-2xl text-gray-800 font-bold dark:text-white">
                  {{ member.name }}
                </h2>
                <i v-if="member.sex === 0" i-carbon-gender-male class="text-blue-500" />
                <i v-else-if="member.sex === 1" i-carbon-gender-female i- class="text-pink-500" />
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ member.user_num }}
              </p>
            </div>
          </div>
          <div space-x-2>
            <a-button @click="changeMemberModalVisible = true">
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
          <span class="mr-2 text-gray-700 dark:text-gray-300">{{ t('member.state') }}: {{ MemberStateNameMap[member.state] }}</span>
          <!-- @vue-expect-error type error -->
          <a-switch
            v-model="memberState"
            :loading="isChangingMemberState"
            :checked-color="themeColor" unchecked-color="#ddd"
            :checked-value="1"
            :unchecked-value="0"
            :before-change="(v: 0 | 1) => toggleMemberState(v)"
          />
        </div>
      </div>
    </div>
    <a-empty v-else />
  </div>
  <a-modal v-model:visible="deleteMemberModalVisible" :title="t('delete.modal.title')" @before-ok="(done) => deleteMember(void 0, { onSuccess: () => done(true), onError: () => done(false) })">
    <div>
      <p>
        {{ t('delete.modal.content') }}
      </p>
      <p color-red>
        {{ t('delete.modal.hint') }}
      </p>
    </div>
  </a-modal>

  <a-modal v-model:visible="changeMemberModalVisible" :title="t('change-member.form.title')" @before-ok="(done) => changeMember(changeMemberForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="changeMemberForm">
      <a-form-item field="name" :label="t('change-member.form.name.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="changeMemberForm.name" placeholder="Enter name" />
      </a-form-item>
      <a-form-item field="phone" :label="t('change-member.form.phone.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="changeMemberForm.phone" placeholder="Enter phone number" />
      </a-form-item>
      <a-form-item field="sex" :label="t('change-member.form.gender.label')" :validate-trigger="['change', 'blur']">
        <a-radio-group v-model="changeMemberForm.sex">
          <a-radio :value="0">
            {{ t('male') }}
          </a-radio>
          <a-radio :value="1">
            {{ t('female') }}
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="avatar" :label="t('change-member.form.avatar.label')" :validate-trigger="['change', 'blur']">
        <AvatarUploader v-model:src="changeMemberForm.avatar" />
      </a-form-item>
      <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
        <a-switch v-model="changeMemberForm.tts" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
      <a-form-item field="loc_share" :label="t('change-member.form.loc_share.label')" :validate-trigger="['change', 'blur']">
        <a-switch v-model="changeMemberForm.loc_share" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal v-model:visible="resetMemberPasswordModalVisible" :title="t('reset-password.form.title')" @before-ok="(done) => resetMemberPassword(resetMemberPasswordForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="resetMemberPasswordForm">
      <a-form-item field="password" :label="t('reset-password.form.password.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="resetMemberPasswordForm.password" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
