<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import md5 from 'md5'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()
const route = useRoute('/contact/[org_num]/add-member-[dept_id]-[dept_name]')
const { themeColor } = useAppStore()

interface NewMemberPayload {
  org_num: number
  name: string
  password: string
  dept_id: number
  sex: number
  avatar: string
  phone: string
  tts: number
  loc_share: number
}

const createMemberModalVisible = ref(false)
const createMemberForm = reactive<NewMemberPayload>({
  org_num: Number(route.params.org_num),
  name: '',
  password: '',
  dept_id: Number(route.params.dept_id),
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
})

const { mutate, isPending } = useMutation({
  mutationFn: (payload: NewMemberPayload) => {
    return weilaRequest.post('/corp/web/member-create', {
      ...payload,
      password: md5(payload.password),
      tts: payload.tts ? 1 : 0,
      loc_share: payload.loc_share ? 1 : 0,
    })
  },
  onSuccess() {
    createMemberModalVisible.value = false
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
      <RouterLink :to="`/contact/${route.params.org_num}/dept-${route.params.dept_id}`">
        <a-breadcrumb-item>{{ route.params.dept_name }}</a-breadcrumb-item>
      </RouterLink>
      <a-breadcrumb-item>{{ t('add-member') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="rounded-lg p-6 shadow-md bg-base" mt-2>
      <h2 class="mb-6 text-center text-2xl font-bold">
        {{ t('add-member') }}
      </h2>

      <a-form :model="createMemberForm" auto-label-width @submit="handleSubmit">
        <a-form-item field="name" :label="t('member.form.name.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="createMemberForm.name" placeholder="Enter name" />
        </a-form-item>
        <a-form-item field="phone" :label="t('member.form.phone.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="createMemberForm.phone" placeholder="Enter phone number" />
        </a-form-item>
        <a-form-item field="password" :label="t('member.form.password.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input-password v-model="createMemberForm.password" placeholder="Enter password" />
        </a-form-item>
        <a-form-item field="sex" :label="t('member.form.gender.label')" :validate-trigger="['change', 'blur']">
          <a-radio-group v-model="createMemberForm.sex">
            <a-radio :value="0">
              {{ t('male') }}
            </a-radio>
            <a-radio :value="1">
              {{ t('female') }}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="avatar" :label="t('member.form.avatar.label')" :validate-trigger="['change', 'blur']">
          <AvatarUploader v-model:src="createMemberForm.avatar" />
        </a-form-item>
        <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
          <a-switch v-model="createMemberForm.tts" :checked-value="1" :unchecked-value="0" :checked-color="themeColor"
            unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="loc_share" :label="t('member.form.loc_share.label')" :validate-trigger="['change', 'blur']">
          <a-switch v-model="createMemberForm.loc_share" :checked-value="1" :unchecked-value="0"
            :checked-color="themeColor" unchecked-color="#ddd" />
        </a-form-item>
        <a-button type="primary" html-type="submit" :loading="isPending">
          {{ t('button.submit') }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>
