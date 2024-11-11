<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import { weilaRequest } from '~/api/instances/request'
import { sendVerifySms } from '~/api/verify-sms'

const { t } = useI18n()

interface BindingPhonePayload {
  phone: string
  password: string
  verify_code: string
  verify_img_code: string
}

const verifyImg = templateRef('verifyImg')

const form = reactive<BindingPhonePayload>({
  phone: '',
  password: '',
  verify_code: '',
  verify_img_code: '',
})

const { mutate: sendSMS, isPending } = useMutation({
  mutationFn: sendVerifySms,
  onSuccess() {
    Message.success(t('sendSMS.success.hint'))
  },
  onError(error) {
    Message.error(error.message || 'Request Error')
  },
})

const { mutate: submit, isPending: isSubmiting } = useMutation({
  mutationFn: (data: BindingPhonePayload) => weilaRequest.post('/corp/web/user-bind-phone', data),
  onSuccess() {
    Message.success('Success')
  },
  onError(error) {
    Message.error(error.message || 'Request Error')

    verifyImg.value?.refetch()
  },
})
</script>

<template>
  <div p2>
    <a-breadcrumb>
      <RouterLink to="/me">
        <a-breadcrumb-item>Me</a-breadcrumb-item>
      </RouterLink>
      <a-breadcrumb-item>Binding Phone</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 class="mb-6 text-center text-2xl font-bold">
        {{ t('binding-phone-form.title') }}
      </h2>

      <a-form :model="form" layout="vertical" @submit="() => submit(form)">
        <a-form-item :label="t('phone-number')" field="phone" :rules="[{ required: true, message: t('binding-phone-form.err-msg.phone-number') }]" :validate-trigger="['blur', 'change']">
          <a-input v-model="form.phone" />
        </a-form-item>

        <a-form-item :label="t('verify-image-code')" field="verify_img_code" :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-image-code') }]" :validate-trigger="['blur', 'change']">
          <div class="flex items-center">
            <a-input v-model="form.verify_img_code" class="mr-2 flex-grow" />
            <VerifyImg ref="verifyImg" class="flex-shrink-0" />
          </div>
        </a-form-item>

        <a-form-item :label="t('sms-code')" field="verify_code" :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-code') }]" :validate-trigger="['blur', 'change']">
          <div class="flex items-center">
            <a-input v-model="form.verify_code" class="mr-2 flex-grow" />
            <a-button :loading="isPending" class="flex-shrink-0" @click="() => sendSMS({ phone: form.phone, verify_code: form.verify_code, country_code: '86', sms_type: 'bind-phone' })">
              {{ t('button.send') }}
            </a-button>
          </div>
        </a-form-item>

        <a-form-item :label="t('password')" field="password" :rules="[{ required: true, message: t('binding-phone-form.err-msg.password') }]" :validate-trigger="['blur', 'change']">
          <a-input-password v-model="form.password" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" :loading="isSubmiting" class="w-full">
            {{ t('button.submit') }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
