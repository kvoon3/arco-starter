<script lang="ts" setup>
import { objectKeys } from '@antfu/utils'
import { Modal } from '@arco-design/web-vue'
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import md5 from 'md5'
import { h } from 'vue'
import { weilaRequest } from '~/api/instances/request'
import { sendVerifySms } from '~/api/verify-sms'
import type { OnSubmitParams } from '~/types'

definePage({
  meta: {
    layout: 'first',
  },
})

const router = useRouter()
const { t } = useI18n()
const errorMessage = ref('')

const { text: copiedUserName, copy, copied, isSupported } = useClipboard()

watchEffect(() => {
  if (!copied.value)
    return

  Message.success(`${t('account.username.copied')}: ${copiedUserName}`)
})

interface Form {
  phone: string
  verify_code: string
  img_verify_code: string
  password: string
}

const form = reactive<Form>({
  phone: '',
  verify_code: '',
  img_verify_code: '',
  password: '',
})

$inspect(form)

const { mutate: sendSMS } = useMutation({
  mutationFn: sendVerifySms,
  onSuccess() {
    Message.success({
      content: t('sendSMS.success.hint'),
    })
  },
  onError(error) {
    Message.error({
      content: error.message || 'Request Error',
      duration: 5 * 1000,
    })
  },
})

const { mutate: register } = useMutation({
  async mutationFn(params: Omit<Form, 'img_verify_code'>) {
    const { data } = await weilaRequest.post<{
      user_name: string
      country_code: string
      password: string // temp password
    }>('/regist', params)

    if (!data)
      throw new Error('Request Error')

    Modal.info({
      title: t('register.form.successMsg'),
      content: () => [
        h('span', undefined, `${t('account.txt')}: ${data.user_name}`),
      ],
      onBeforeOk() {
        return isSupported.value
          ? copy(data.user_name)
          : Promise.resolve()
      },
    })
  },
  onSuccess() {
    Message.success({
      content: t('register.form.successMsg'),
    })
    router.push('/login')
  },
  onError(error) {
    Message.error({
      content: error.message || 'Request Error',
      duration: 5 * 1000,
    })
  },
})

function handleSubmit({ values, errors }: OnSubmitParams<Omit<Form, 'img_verify_code'>>) {
  if (errors && objectKeys(errors).length)
    return

  register({
    phone: values.phone,
    verify_code: values.verify_code,
    password: md5(values.password),
  })
}
</script>

<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">
      {{ t('register.form.title') }}
    </div>
    <div class="login-form-sub-title">
      {{ t('register.form.title') }}
    </div>
    <div class="login-form-error-msg">
      {{ errorMessage }}
    </div>
    <!-- @vue-expect-error type error -->
    <a-form
      :model="form"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="phone"
        :rules="[{ required: true, message: t('register.form.phone.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model="form.phone" :placeholder="t('register.form.phone.placeholder')" allow-clear w-320px>
          <template #prepend>
            +86
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        field="img_verify_code"
        :rules="[{ required: true, message: t('register.form.imgVerifyCode.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model:model-value="form.img_verify_code" :placeholder="t('register.form.imgVerifyCode.placeholder')" allow-clear mr4 w50 />
        <verify-img />
      </a-form-item>

      <a-form-item
        field="verify_code"
        :rules="[{ required: true, message: t('register.form.verifyCode.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input v-model:model-value="form.verify_code" :placeholder="t('register.form.verifyCode.placeholder')" allow-clear mr4 w-auto />
        <a-button
          type="primary" @click="() => sendSMS({
            phone: form.phone,
            country_code: '86',
            sms_type: 'regist',
            verify_code: form.img_verify_code,
          })"
        >
          {{ t('register.form.getSMS') }}
        </a-button>
      </a-form-item>

      <a-form-item
        field="password"
        :rules="[{ required: true, message: t('register.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="form.password"
          :placeholder="t('login.form.password.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>

      <a-space :size="16" direction="vertical">
        <a-button type="primary" long html-type="submit">
          {{ t('register.form.submit') }}
        </a-button>

        <router-link to="/login">
          <a-button type="text" long class="login-form-register-btn">
            {{ t('register.form.login') }}
          </a-button>
        </router-link>
      </a-space>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
  .login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
