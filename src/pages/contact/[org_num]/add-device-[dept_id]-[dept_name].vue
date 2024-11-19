<script setup lang="ts">
import { Message } from '@arco-design/web-vue';
import { useMutation } from '@tanstack/vue-query';
import { TrackType } from '~/api/contact';
import { weilaRequest } from '~/api/instances/request';
import { sendVerifySms } from '~/api/verify-sms';
import { objectEntries } from '@antfu/utils'

const { t } = useI18n()
const route = useRoute('/contact/[org_num]/add-device-[dept_id]-[dept_name]')
const { themeColor } = useAppStore()

interface AddDevicePayload {
  org_num: number
  verify_code: string
  verify_img_code: string
  name: string
  dept_id: number
  sex: number
  avatar: string
  phone: string
  tts: number
  loc_share: number
  track: TrackType
}

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
    value
  }))

const verifyImg = templateRef('verifyImg')
const addDeviceForm = reactive<AddDevicePayload>({
  org_num: Number(route.params.org_num),
  verify_img_code: '',
  verify_code: '',
  name: '',
  dept_id: Number(route.params.dept_id),
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
  track: TrackType.Close,
})

$inspect(addDeviceForm)

const { mutate: sendSMS, isPending } = useMutation({
  mutationFn: sendVerifySms,
  onSuccess() {
    Message.success(t('sendSMS.success.hint'))
  },
  onError(error) {
    Message.error(error.message || 'Request Error')
    verifyImg.value?.refetch()
  },
})

const { mutate } = useMutation({
  mutationFn: (payload: AddDevicePayload) => weilaRequest.post('/corp/web/member-add-device', {
    ...payload,
    track: Number(payload.track)
  }),
  onSuccess() {
    Message.success(t('message.success'))
    // refetchContact()
  },
  onError() {
    verifyImg.value?.refetch()
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
      <RouterLink :to="`/contact/${route.params.org_num}/dept-${route.params.dept_id}`">
        <a-breadcrumb-item>{{ route.params.dept_name }}</a-breadcrumb-item>
      </RouterLink>
      <a-breadcrumb-item>{{ t('add-device') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="rounded-lg p-6 shadow-md bg-base" mt-2>
      <h2 class="mb-6 text-center text-2xl font-bold">
        {{ t('add-device') }}
      </h2>
      <a-form :model="addDeviceForm" auto-label-width @submit="handleSubmit">
        <a-form-item :label="t('phone-number')" field="phone"
          :rules="[{ required: true, message: t('binding-phone-form.err-msg.phone-number') }]"
          :validate-trigger="['blur', 'change']">
          <a-input v-model="addDeviceForm.phone" />
        </a-form-item>

        <a-form-item :label="t('verify-image-code')" field="verify_img_code"
          :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-image-code') }]"
          :validate-trigger="['blur', 'change']">
          <div class="flex items-center">
            <a-input v-model="addDeviceForm.verify_img_code" class="mr-2 flex-grow" />
            <VerifyImg ref="verifyImg" class="flex-shrink-0" />
          </div>
        </a-form-item>

        <a-form-item :label="t('sms-code')" field="verify_code"
          :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-code') }]"
          :validate-trigger="['blur', 'change']">
          <div class="flex items-center">
            <a-input v-model="addDeviceForm.verify_code" class="mr-2 flex-grow" />
            <a-button :loading="isPending" class="flex-shrink-0"
              @click="() => sendSMS({ phone: addDeviceForm.phone, verify_code: addDeviceForm.verify_img_code, country_code: '86', sms_type: 'add-device' })">
              {{ t('button.send') }}
            </a-button>
          </div>
        </a-form-item>
        <a-form-item field="name" :label="t('name')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="addDeviceForm.name" placeholder="Enter name" />
        </a-form-item>
        <a-form-item field="sex" :label="t('gender')" :validate-trigger="['change', 'blur']">
          <a-radio-group v-model="addDeviceForm.sex">
            <a-radio :value="0">
              {{ t('male') }}
            </a-radio>
            <a-radio :value="1">
              {{ t('female') }}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="avatar" :label="t('member.form.avatar.label')" :validate-trigger="['change', 'blur']">
          <AvatarUploader v-model:src="addDeviceForm.avatar" />
        </a-form-item>
        <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
          <a-switch v-model="addDeviceForm.tts" :checked-value="1" :uncheckted-value="0" :checked-color="themeColor"
            unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="loc_share" :label="t('member.form.loc_share.label')" :validate-trigger="['change', 'blur']">
          <a-switch v-model="addDeviceForm.loc_share" :checked-value="1" :uncheckted-value="0"
            :checked-color="themeColor" unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="track" :label="t('change-member.form.track.label')" :validate-trigger="['change', 'blur']">
          <a-radio-group type="button" :default-value="String(addDeviceForm.track)" v-model="addDeviceForm.track"
            :options="trackOptions"></a-radio-group>
        </a-form-item>
        <a-button type="primary" html-type="submit" :loading="isPending">
          {{ t('button.submit') }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>
