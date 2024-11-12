<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useMutation } from '@tanstack/vue-query'
import { weilaRequest } from '~/api/instances/request'

const { groupId } = defineProps<{ groupId: number }>()

const emit = defineEmits(['onSuccess', 'onError'])

const addMemberModalVisible = defineModel<boolean>('visible')

const { t } = useI18n()

interface AddMemberPayload {
  group_id: number
  member_ids: number[]
}

const addMemberForm = reactive<AddMemberPayload>({
  group_id: groupId,
  member_ids: [],
})

const { mutate: addMember } = useMutation({
  mutationFn: (payload: AddMemberPayload) =>
    weilaRequest.post('/corp/web/group-member-add', payload),
  onSuccess: () => {
    Message.success('Member added successfully')
    emit('onSuccess')
    // refetch()
    // addMemberModalVisible.value = false
  },
  onError: (error) => {
    Message.error(`Failed to add member: ${error.message}`)
    emit('onError')
  },
})
</script>

<template>
  <a-modal v-model:visible="addMemberModalVisible" :title="t('button.add-member')" @before-ok="(done) => addMember(addMemberForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="addMemberForm" layout="vertical">
      <a-form-item label="ID" name="member_ids">
        <a-input-tag
          v-model="addMemberForm.member_ids"
          :min-tag-text-length="1"
          :max-tag-text-length="10"
          :max="10"
          allow-clear
          class="w-full"
          placeholder="Enter member IDs and press Enter"
          unique-value
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
