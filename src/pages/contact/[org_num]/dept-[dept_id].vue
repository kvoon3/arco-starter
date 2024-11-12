<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import md5 from 'md5'
import type { MemberModel, TrackType } from '~/api/contact'
import { weilaRequest } from '~/api/instances/request'
import { sendVerifySms } from '~/api/verify-sms'

const { t } = useI18n()
const router = useRouter()
const route = useRoute('/contact/[org_num]/dept-[dept_id]')

const { themeColor } = useAppStore()

const contactStore = useContactStore()
const { refetch: refetchContact } = contactStore
const { data: contact } = storeToRefs(contactStore)

const dept = computed(() => {
  if (!route.params.dept_id)
    return undefined

  return contact.value?.depts.find(dept => dept.id === Number(route.params.dept_id))
})

function onSelect(member: MemberModel) {
  router.push(`/contact/${route.params.org_num}/member-${route.params.dept_id}-${member.user_id}`)
}

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

const { mutate: createMember } = useMutation({
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
    refetchContact()
  },
})

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

const verifyImg = templateRef('verifyImg')
const addDeviceModalVisible = ref(false)
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
  track: 0,
})

$inspect(addDeviceForm)

const { mutate: addDevice } = useMutation({
  mutationFn: (payload: AddDevicePayload) => weilaRequest.post('/corp/web/member-add-device', payload),
  onSuccess() {
    createMemberModalVisible.value = false
    Message.success(t('message.success'))
    refetchContact()
  },
  onError() {
    verifyImg.value?.refetch()
  },
})

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
</script>

<template>
  <div>
    <div p4 space-y-4>
      <a-breadcrumb>
        <a-breadcrumb-item v-if="dept">
          {{ dept.name }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <div flex gap2>
        <a-button
          type="primary"
          @click="createMemberModalVisible = true"
        >
          <template #icon>
            <IconUserAdd />
          </template>
          {{ t('button.add-member') }}
        </a-button>

        <a-button type="primary" @click="addDeviceModalVisible = true">
          <template #icon>
            <IconRobotAdd />
          </template>
          {{ t('button.add-device') }}
        </a-button>
      </div>

      <div v-if="!dept?.members.length">
        <div>No members</div>
      </div>
      <MemberList :org-number="Number(route.params.org_num)" classes="bg-base" :members="dept?.members" @on-select="onSelect" />
    </div>
  </div>

  <a-modal v-model:visible="createMemberModalVisible" title="Create Member" @before-ok="(done) => createMember(createMemberForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="createMemberForm">
      <a-form-item field="name" :label="t('member.form.name.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="createMemberForm.name" placeholder="Enter name" />
      </a-form-item>
      <a-form-item field="phone" :label="t('member.form.phone.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="createMemberForm.phone" placeholder="Enter phone number" />
      </a-form-item>
      <a-form-item field="password" :label="t('member.form.password.label')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input-password v-model="createMemberForm.password" placeholder="Enter password" />
      </a-form-item>
      <a-form-item field="sex" :label="t('member.form.gender.label')" :validate-trigger="['change', 'blur']">
        <a-radio-group v-model="createMemberForm.sex">
          <a-radio :value="0">
            Male
          </a-radio>
          <a-radio :value="1">
            Female
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="avatar" :label="t('member.form.avatar.label')" :validate-trigger="['change', 'blur']">
        <AvatarUploader v-model:src="createMemberForm.avatar" />
      </a-form-item>
      <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
        <a-switch v-model="createMemberForm.tts" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
      <a-form-item field="loc_share" :label="t('member.form.loc_share.label')" :validate-trigger="['change', 'blur']">
        <a-switch v-model="createMemberForm.loc_share" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal v-model:visible="addDeviceModalVisible" title="Add Device" @before-ok="(done) => addDevice(addDeviceForm, { onSuccess: () => done(true) })">
    <a-form :model="addDeviceForm" max-h-60vh w-fit of-scroll>
      <a-form-item :label="t('phone-number')" field="phone" :rules="[{ required: true, message: t('binding-phone-form.err-msg.phone-number') }]" :validate-trigger="['blur', 'change']">
        <a-input v-model="addDeviceForm.phone" />
      </a-form-item>

      <a-form-item :label="t('verify-image-code')" field="verify_img_code" :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-image-code') }]" :validate-trigger="['blur', 'change']">
        <div class="flex items-center">
          <a-input v-model="addDeviceForm.verify_img_code" class="mr-2 flex-grow" />
          <VerifyImg ref="verifyImg" class="flex-shrink-0" />
        </div>
      </a-form-item>

      <a-form-item :label="t('sms-code')" field="verify_code" :rules="[{ required: true, message: t('binding-phone-form.err-msg.verify-code') }]" :validate-trigger="['blur', 'change']">
        <div class="flex items-center">
          <a-input v-model="addDeviceForm.verify_code" class="mr-2 flex-grow" />
          <a-button :loading="isPending" class="flex-shrink-0" @click="() => sendSMS({ phone: addDeviceForm.phone, verify_code: addDeviceForm.verify_img_code, country_code: '86', sms_type: 'add-device' })">
            {{ t('button.send') }}
          </a-button>
        </div>
      </a-form-item>
      <a-form-item field="name" :label="t('name')" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="addDeviceForm.name" placeholder="Enter name" />
      </a-form-item>
      <a-form-item field="sex" :label="t('gender')" :validate-trigger="['change', 'blur']">
        <a-radio-group v-model="addDeviceForm.sex">
          <a-radio :value="0">
            Male
          </a-radio>
          <a-radio :value="1">
            Female
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="avatar" :label="t('member.form.avatar.label')" :validate-trigger="['change', 'blur']">
        <AvatarUploader v-model:src="addDeviceForm.avatar" />
      </a-form-item>
      <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
        <a-switch v-model="addDeviceForm.tts" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
      <a-form-item field="loc_share" :label="t('member.form.loc_share.label')" :validate-trigger="['change', 'blur']">
        <a-switch v-model="addDeviceForm.loc_share" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
      <a-form-item field="track" :label="t('member.form.track.label')" :validate-trigger="['change', 'blur']">
        <a-switch v-model="addDeviceForm.track" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
