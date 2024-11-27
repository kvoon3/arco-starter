<script setup lang="ts">
import { objectEntries } from '@antfu/utils'
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import { TrackType } from '~/api/contact'
import { weilaRequest } from '~/api/instances/request'

const route = useRoute('/contact/[org_num]/edit-member-[dept_id]-[user_id]')
const { t } = useI18n()

const { themeColor } = useAppStore()

const contactStore = useContactStore()
const { data: contact } = storeToRefs(contactStore)

const dept = computed(() =>
  contact.value?.depts?.find(item => String(item.id) === route.params.dept_id),
)

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

const trackOptions = objectEntries(TrackTypeNameMap)
  .map(([value, key]) => ({
    label: key,
    value,
  }))

interface Payload {
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

const form = reactive<Payload>({
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

const { mutate, isPending } = useMutation({
  mutationFn: async (payload: Payload) => {
    return await weilaRequest.post('/corp/web/member-change', {
      ...payload,
      tts: Number(payload.tts),
      loc_share: Number(payload.loc_share),
      sex: Number(payload.sex),
      track: Number(payload.track),
    })
  },
  onSuccess() {
    Message.success(t('message.success'))
  },
})

function handleSubmit({ values, errors }: any) {
  if (errors)
    return

  mutate(values)
}
</script>

<template>
  <div p4>
    <a-breadcrumb>
      <RouterLink v-if="dept" :to="`/contact/${route.params.org_num}/dept-${route.params.dept_id}`">
        <a-breadcrumb-item>{{ dept.name }}</a-breadcrumb-item>
      </RouterLink>
      <RouterLink v-if="member"
        :to="`/contact/${route.params.org_num}/member-${route.params.dept_id}-${route.params.user_id}`">
        <a-breadcrumb-item>{{ member.name }}</a-breadcrumb-item>
      </RouterLink>
      <a-breadcrumb-item>{{ t('edit-device') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="rounded-lg p-6 shadow-md bg-base" mt-2>
      <h2 class="mb-6 text-center text-2xl font-bold">
        {{ t('edit-device') }}
      </h2>

      <a-form :model="form" auto-label-width @submit="handleSubmit">
        <a-form-item field="name" :label="t('change-member.form.name.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="form.name" placeholder="Enter name" />
        </a-form-item>
        <a-form-item field="phone" :label="t('change-member.form.phone.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="form.phone" placeholder="Enter phone number" />
        </a-form-item>
        <a-form-item field="sex" :label="t('change-member.form.gender.label')" :validate-trigger="['change', 'blur']">
          <a-radio-group v-model="form.sex">
            <a-radio :value="0">
              {{ t('male') }}
            </a-radio>
            <a-radio :value="1">
              {{ t('female') }}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="avatar" :label="t('change-member.form.avatar.label')"
          :validate-trigger="['change', 'blur']">
          <AvatarUploader v-model:src="form.avatar" />
        </a-form-item>
        <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
          <a-switch v-model="form.tts" :checked-value="1" :unchecked-value="0" :checked-color="themeColor"
            unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="loc_share" :label="t('change-member.form.loc_share.label')"
          :validate-trigger="['change', 'blur']">
          <a-switch v-model="form.loc_share" :checked-value="1" :unchecked-value="0" :checked-color="themeColor"
            unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="track" :label="t('change-member.form.track.label')" :validate-trigger="['change', 'blur']">
          <a-radio-group v-model="form.track" type="button" :default-value="String(form.track)"
            :options="trackOptions" />
        </a-form-item>

        <a-button type="primary" html-type="submit" :loading="isPending">
          {{ t('button.submit') }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>
