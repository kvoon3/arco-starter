<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
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

interface ChangeMemberPayload {
  org_num: number
  member_id: number
  name: string
  dept_id: number
  sex: 0 | 1
  avatar: string
  phone: string
  tts: 0 | 1
  loc_share: 0 | 1
}

const changeMemberForm = reactive<ChangeMemberPayload>({
  org_num: Number(route.params.org_num),
  dept_id: Number(route.params.dept_id),
  member_id: Number(route.params.user_id),
  name: '',
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
})

const { mutate, isPending } = useMutation({
  mutationFn: async (payload: ChangeMemberPayload) => {
    return await weilaRequest.post('/corp/web/member-change', {
      ...payload,
      tts: Number(payload.tts),
      loc_share: Number(payload.loc_share),
      sex: Number(payload.sex),
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
      <a-breadcrumb-item>{{ t('edit-member') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="rounded-lg p-6 shadow-md bg-base" mt-2>
      <h2 class="mb-6 text-center text-2xl font-bold">
        {{ t('edit-member') }}
      </h2>

      <a-form :model="changeMemberForm" auto-label-width @submit="handleSubmit">
        <a-form-item field="name" :label="t('change-member.form.name.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="changeMemberForm.name" placeholder="Enter name" />
        </a-form-item>
        <a-form-item field="phone" :label="t('change-member.form.phone.label')" :rules="[{ required: true }]"
          :validate-trigger="['change', 'blur']">
          <a-input v-model="changeMemberForm.phone" placeholder="Enter phone number" />
        </a-form-item>
        <a-form-item field="sex" :label="t('change-member.form.gender.label')" :validate-trigger="['change', 'blur']">
          <a-radio-group v-model="changeMemberForm.sex">
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
          <AvatarUploader v-model:src="changeMemberForm.avatar" />
        </a-form-item>
        <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
          <a-switch v-model="changeMemberForm.tts" :checked-value="1" :unchecked-value="0" :checked-color="themeColor"
            unchecked-color="#ddd" />
        </a-form-item>
        <a-form-item field="loc_share" :label="t('change-member.form.loc_share.label')"
          :validate-trigger="['change', 'blur']">
          <a-switch v-model="changeMemberForm.loc_share" :checked-value="1" :unchecked-value="0"
            :checked-color="themeColor" unchecked-color="#ddd" />
        </a-form-item>

        <a-button type="primary" html-type="submit" :loading="isPending">
          {{ t('button.submit') }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>
