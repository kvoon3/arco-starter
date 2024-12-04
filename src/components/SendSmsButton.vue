<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import type { SendVerifySmsModel } from '~/api/verify-sms'
import { sendVerifySms } from '~/api/verify-sms'

defineProps<{
  classes?: string | string[]
  opts: SendVerifySmsModel
}>()

const emits = defineEmits(['success', 'error'])

const { t } = useI18n()

const state = ref<'idle' | 'countdown'>('idle')

const { count, dec, reset } = useCounter(60)

useIntervalFn(() => {
  if (state.value === 'countdown') {
    dec(1)
    if (count.value <= 0) {
      reset()
      state.value = 'idle'
    }
  }
}, 1000)

const { mutate: sendSMS, isPending } = useMutation({
  mutationFn: sendVerifySms,
  onSuccess() {
    Message.success({
      content: t('sendSMS.success.hint'),
    })
    emits('success')
    state.value = 'countdown'
  },
  onError() {
    emits('error')
  },
})
</script>

<template>
  <a-button :loading="isPending" :disabled="state === 'countdown'" min-w-30 :class="classes" type="primary"
    @click="() => sendSMS(opts)">
    {{ state === 'idle' ? t('register.form.getSMS') : count }}
  </a-button>
</template>
