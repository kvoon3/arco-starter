<script lang="ts" setup>
import type { OnSubmitParams } from '~/types'
import { objectKeys } from '@antfu/utils'
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import { login } from '~/api/user'
import { accountHistory } from '~/shared/states'

definePage({
  meta: {
    layout: 'first',
    requiresAuth: false,
  },
})

const { t } = useI18n()
const router = useRouter()

interface Form {
  account: string
  password: string
}

const form = reactive<Form>({
  account: '',
  password: '',
})

// const [isRememberPassword, toggleRememberPassword] = useToggle(false)

const { mutate, isPending, data } = useMutation({
  mutationFn: (params: Form) => login(params),
  onSuccess(data) {
    Message.success({
      content: t('login.form.successMsg'),
    })

    if (!data)
      throw new Error('no data')

    router.push('/contact')
  },
})

$inspect(data)

function handleSubmit({ values, errors }: OnSubmitParams<Form>) {
  if (errors && objectKeys(errors).length)
    return

  mutate(values)
}

onMounted(() => {
  const form = document.querySelector('form')
  form?.setAttribute('autocomplete', 'on')
})
</script>

<template>
  <div class="login-form-wrapper">
    <div class="login-form-title" mb-4>
      {{ t('login.form.title') }}
    </div>
    <!-- @vue-expect-error type error -->
    <a-form :model="form" class="login-form" layout="vertical" @submit="handleSubmit">
      <a-form-item field="account" :rules="[{ required: true, message: t('login.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']" hide-label>
        <a-auto-complete v-model="form.account" :data="Array.from(accountHistory)"
          :placeholder="t('login.form.userName.placeholder')" allow-clear>
          <template #prefix>
            <icon-user />
          </template>
        </a-auto-complete>
      </a-form-item>
      <a-form-item field="password" :rules="[{ required: true, message: t('login.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']" hide-label>
        <a-input-password v-model="form.password"
          :input-attrs="{ password: 'password', autocomplete: 'current-password' }"
          :placeholder="t('login.form.password.placeholder')" allow-clear>
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
          <RouterLink to="/reset-password">
            <a-link>{{ t('login.form.forgetPassword') }}</a-link>
          </RouterLink>
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
