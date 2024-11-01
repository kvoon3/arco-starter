<script lang="ts" setup>
import { objectKeys } from '@antfu/utils'
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'

import { useI18n } from 'vue-i18n'
import { login } from '~/api/user'
import { access_token } from '~/shared/states'
import type { OnSubmitParams } from '~/types'

const { t } = useI18n()
const router = useRouter()

interface Form {
  account: string
  password: string
}

const loginType = ref<'name' | 'phone'>('name')

const form = reactive<Form>({
  account: '',
  password: '',
})

// const [isRememberPassword, toggleRememberPassword] = useToggle(false)

const { mutate, isPending, data } = useMutation({
  async mutationFn(params: Form) {
    return await login(params, loginType)
  },
  onSuccess(data) {
    Message.success({
      content: t('register.form.successMsg'),
    })

    access_token.value = data.access_token

    router.push('/contact')
  },
  onError(error) {
    Message.error({
      content: error.message || 'Request Error',
      duration: 5 * 1000,
    })
  },
})

inspect(data)

function handleSubmit({ values, errors }: OnSubmitParams<Form>) {
  if (errors && objectKeys(errors).length)
    return

  mutate(values)
}
</script>

<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">
      {{ t('login.form.title') }}
    </div>
    <div class="login-form-sub-title">
      {{ t('login.form.title') }}
    </div>
    <!-- <div class="login-form-error-msg">
      {{ errorMessage }}
    </div> -->

    <a-radio-group v-model="loginType" my4>
      <a-radio value="name">
        {{ t('login.type.username') }}
      </a-radio>
      <a-radio value="phone">
        {{ t('login.type.phone') }}
      </a-radio>
    </a-radio-group>
    <!-- @vue-expect-error type error -->
    <a-form
      :model="form"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="account"
        :rules="[{ required: true, message: t('login.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="form.account"
          :placeholder="t('login.form.userName.placeholder')"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: t('login.form.password.errMsg') }]"
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
        <div class="login-form-password-actions">
          <!-- <a-checkbox
            checked="rememberPassword"
            :model-value="isRememberPassword"
            @change="() => toggleRememberPassword()"
          >
            {{ t('login.form.rememberPassword') }}
          </a-checkbox> -->
          <router-link to="reset-password">
            <a-link>{{ t('login.form.forgetPassword') }}</a-link>
          </router-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="isPending">
          {{ t('login.form.login') }}
        </a-button>
        <router-link to="/register">
          <a-button type="text" long class="login-form-register-btn">
            {{ t('login.form.register') }}
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
