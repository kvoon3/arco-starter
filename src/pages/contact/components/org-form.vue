<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import type { CorpModel } from '~/api/corp'
import { weilaRequest } from '~/api/instances/request'

const props = defineProps<{
  orgNumber?: number
  corpName?: string
  avatar?: string
}>()

const type = computed<'create' | 'edit'>(() => props?.orgNumber ? 'edit' : 'create')

const form = reactive({
  name: props.corpName,
  avatar: props.avatar,
})

const { t } = useI18n()

// For arco use
async function submit() {
  const url = type.value === 'create'
    ? '/corp/web/org-create'
    : '/corp/web/org-change'

  const params = type.value === 'create'
    ? { name: form.name, avatar: form.avatar }
    : { org_num: props.orgNumber, name: form.name, avatar: form.avatar }

  try {
    const { errcode, errmsg } = await weilaRequest.post<{ org: CorpModel }>(url, params)
    if (errcode !== 0)
      throw new Error(`${errcode} ${errmsg}`)

    return true
  }
  catch (error) {
    // @ts-expect-error type error
    Message.error(error?.message || error)
    return false
  }
}

defineExpose({
  submit,
  type,
})
</script>

<template>
  <a-form :model="form">
    <a-form-item field="name" :label="t('org-form.name.label')">
      <a-input v-model="form.name" />
    </a-form-item>
    <a-form-item field="avatar" :label="t('org-form.avatar.label')">
      <avatar-uploader v-model:src="form.avatar" />
    </a-form-item>
  </a-form>
</template>
