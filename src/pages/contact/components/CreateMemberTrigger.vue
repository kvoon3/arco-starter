<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import md5 from 'md5'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()
const { themeColor } = useAppStore()
const corpStore = useCorpStore()
const contactStore = useContactStore()
const formRef = templateRef('formRef')

const open = ref(false)

interface NewMemberPayload {
  org_num: number
  name: string
  password: string
  dept_id: 0
  sex: number
  avatar: string
  phone: string
  tts: number
  loc_share: number
}

const form = reactive<NewMemberPayload>({
  org_num: corpStore.data?.num || 0,
  name: '',
  password: '',
  dept_id: 0,
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
})

corpStore.$subscribe((_, state) => {
  if (state.data)
    form.org_num = state.data.num
})

function handleSubmit() {
  return formRef.value?.validate((errors) => {
    if (errors)
      return

    createMember(form, {
      onSuccess: () => {
        formRef.value?.resetFields()
      },
    })
  })
}

const { mutate: createMember, isPending } = useMutation({
  mutationFn: (payload: NewMemberPayload) => {
    return weilaRequest.post('/corp/web/member-create', {
      ...payload,
      password: md5(payload.password),
      tts: payload.tts ? 1 : 0,
      loc_share: payload.loc_share ? 1 : 0,
    })
  },
  onSuccess() {
    // createMemberModalVisible.value = false
    Message.success(t('message.success'))
    contactStore.refetch()
    open.value = false
  },
})
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger class="list-btn">
      <i i-ph-plus inline-block /> {{ t('button.create-member') }}
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="data-[state=open]:animate-overlayShow fixed inset-0 z-100 bg-black:60" />
      <DialogContent
        class="fixed left-[50%] top-[50%] z-[100] max-h-[85vh] max-w-[450px] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-ease-in focus:outline-none"
      >
        <DialogTitle class="m0 text-center text-lg font-semibold leading-loose">
          {{ t('button.add-member') }}
        </DialogTitle>
        <a-form ref="formRef" :model="form" @submit="handleSubmit">
          <a-form-item
            field="name" :label="t('member.form.name.label')" :rules="[{ required: true }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input v-model="form.name" placeholder="Enter name" />
          </a-form-item>
          <a-form-item
            field="phone" :label="t('member.form.phone.label')" :rules="[{ required: true }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input v-model="form.phone" placeholder="Enter phone number" />
          </a-form-item>
          <a-form-item
            field="password" :label="t('member.form.password.label')" :rules="[{ required: true }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-password v-model="form.password" placeholder="Enter password" />
          </a-form-item>
          <a-form-item field="sex" :label="t('member.form.gender.label')" :validate-trigger="['change', 'blur']">
            <a-radio-group v-model="form.sex">
              <a-radio :value="0">
                {{ t('male') }}
              </a-radio>
              <a-radio :value="1">
                {{ t('female') }}
              </a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item field="avatar" :label="t('member.form.avatar.label')" :validate-trigger="['change', 'blur']">
            <AvatarUploader v-model:src="form.avatar" />
          </a-form-item>
          <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
            <a-switch
              v-model="form.tts" :checked-value="1" :uncheckted-value="0" :checked-color="themeColor"
              unchecked-color="#ddd"
            />
          </a-form-item>
          <a-form-item
            field="loc_share" :label="t('member.form.loc_share.label')"
            :validate-trigger="['change', 'blur']"
          >
            <a-switch
              v-model="form.loc_share" :checked-value="1" :uncheckted-value="0" :checked-color="themeColor"
              unchecked-color="#ddd"
            />
          </a-form-item>
        </a-form>

        <div class="mt-[25px] flex justify-end">
          <a-button type="text" @click="() => formRef?.resetFields()">
            {{ t('button.reset') }}
          </a-button>
          <DialogClose as-child>
            <a-button>
              {{ t('button.cancel') }}
            </a-button>
          </DialogClose>
          <a-button type="primary" :loading="isPending" @click="(e) => formRef?.handleSubmit(e)">
            {{ t('button.submit') }}
          </a-button>
        </div>
        <DialogClose
          class="text-grass11 absolute right-[10px] top-[10px] h-[25px] w-[25px] inline-flex appearance-none items-center justify-center rounded-full hover:bg-gray2 focus:shadow-[0_0_0_2px] focus:shadow-gray7 focus:outline-none"
          aria-label="Close"
        >
          <i i-carbon-close />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
