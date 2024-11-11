<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import type { CorpModel } from '~/api/corp'
import { weilaRequest } from '~/api/instances/request'

const props = defineProps<{
  orgNumber?: number
}>()

const type = computed<'create' | 'edit'>(() => props?.orgNumber ? 'edit' : 'create')

const form = reactive({
  name: '',
  avatar: '',
})

// For arco use
async function submit() {
  const url = type.value === 'create'
    ? '/organization-create'
    : '/organization-change'

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
    <a-form-item field="name" label="Name">
      <a-input v-model="form.name" />
    </a-form-item>
    <a-form-item field="avatar" label="Avatar">
      <avatar-uploader v-model:src="form.avatar" />
    </a-form-item>
  </a-form>
</template>
