<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import type { MemberModel, TrackType } from '~/api/contact'
import { MemberType } from '~/api/contact'

import { weilaRequest } from '~/api/instances/request'

defineProps<{
  orgNumber: number
  members?: MemberModel[]
  classes?: string | string[]
}>()

const emits = defineEmits(['onSelect'])

interface ChangeMemberPayload {
  org_num: number
  member_id: number
  name: string
  dept_id: number
  sex: number
  avatar: string
  phone: string
  tts: number
  loc_share: number
  track: TrackType
}

const changeMemberModalVisible = ref(false)
const changeMemberForm = ref<ChangeMemberPayload>({
  org_num: 0,
  member_id: 0,
  name: '',
  dept_id: 0,
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
  track: 0,
})

const { mutate: changeMember } = useMutation({
  mutationFn: (payload: ChangeMemberPayload) => weilaRequest.post('/corp/web/member-change', payload),
  onSuccess() {
    Message.success('Change Success')
  },
})
</script>

<template>
  <div :class="classes">
    <a-trigger v-for="member in members" :key="member.user_id" position="rt" trigger="hover">
      <div
        class="flex items-center py-2 space-x-4 list-btn"
        @click="() => emits('onSelect', member)"
      >
        <UseImage
          :src="member.avatar"
          :alt="member.name"
          class="h-10 w-10 rounded-full object-cover"
        >
          <template #loading>
            <div class="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
          </template>
          <template #error>
            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300">
              <i i-carbon-account class="text-gray-500" />
            </div>
          </template>
        </UseImage>
        <div class="flex-grow">
          <div class="flex items-center gap2 font-medium">
            {{ member.name }}
            <i :class="member.type === MemberType.User ? 'i-carbon-user' : 'i-carbon-edge-device'" inline-block />
            <i v-if="member.sex === 0" i-carbon-gender-male class="text-blue-500" />
            <i v-else i-carbon-gender-female class="text-pink-500" />
          </div>
          <div class="text-sm text-gray-500">
            {{ member.phone }}
          </div>
        </div>
      </div>
      <template #content>
        <div class="member-card relative w-64 border rounded p-4 bg-base">
          <!-- <section absolute right-4 top-4 flex justify-end>
            <a-button
              v-if="member.type === MemberType.User" @click="() => {
                changeMemberForm.org_num = orgNumber;
                changeMemberForm.member_id = member.user_id;
                changeMemberForm.name = member.name;
                changeMemberForm.dept_id = member.dept_id;
                changeMemberForm.sex = member.sex;
                changeMemberForm.avatar = member.avatar;
                changeMemberForm.phone = member.phone;
                changeMemberForm.tts = member.tts;
                changeMemberForm.loc_share = member.loc_share;
                changeMemberForm.track = member.track;
                changeMemberModalVisible = true;
              }"
            >
              <template #icon>
                <IconEdit />
              </template>
            </a-button>

            <a-button>
              <template #icon>
                <IconDelete />
              </template>
            </a-button>
          </section> -->
          <div class="mb-4 flex flex-col items-center">
            <UseImage
              :src="member.avatar"
              :alt="member.name"
              class="mb-2 h-20 w-20 rounded-full object-cover"
            >
              <template #loading>
                <div class="h-20 w-20 animate-pulse rounded-full bg-gray-200" />
              </template>
              <template #error>
                <div class="h-20 w-20 flex items-center justify-center rounded-full bg-gray-300">
                  <i i-carbon-account class="text-3xl text-gray-500" />
                </div>
              </template>
            </UseImage>
            <h3 class="text-lg font-semibold">
              {{ member.name }}
            </h3>
          </div>
          <div class="space-y-2">
            <p><strong>User ID:</strong> {{ member.user_id }}</p>
            <p><strong>Department ID:</strong> {{ member.dept_id }}</p>
            <p><strong>Phone:</strong> {{ member.phone }}</p>
            <p><strong>User Number:</strong> {{ member.user_num }}</p>
            <p><strong>Gender:</strong> {{ member.sex === 0 ? 'Male' : 'Female' }}</p>
            <p><strong>Type:</strong> {{ member.type }}</p>
            <p><strong>State:</strong> {{ member.state }}</p>
            <p><strong>Created:</strong> {{ new Date(member.created * 1000).toLocaleString() }}</p>
          </div>
        </div>
      </template>
    </a-trigger>
  </div>

  <a-modal
    v-model:visible="changeMemberModalVisible"
    title="Change Member"
    @before-ok="(done) => changeMember(changeMemberForm, { onSuccess: () => done(true), onError: () => done(false) })"
  >
    <a-form :model="changeMemberForm" layout="vertical">
      <a-form-item label="Name" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="changeMemberForm.name" />
      </a-form-item>
      <a-form-item label="Department ID" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input-number v-model="changeMemberForm.dept_id" />
      </a-form-item>
      <a-form-item field="sex" label="Gender" :validate-trigger="['change', 'blur']">
        <a-radio-group v-model="changeMemberForm.sex">
          <a-radio :value="0">
            Male
          </a-radio>
          <a-radio :value="1">
            Female
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Phone" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="changeMemberForm.phone" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
