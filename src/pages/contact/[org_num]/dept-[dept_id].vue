<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation } from '@tanstack/vue-query'
import type { MemberModel } from '~/api/contact'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()
const router = useRouter()
const route = useRoute('/contact/[org_num]/dept-[dept_id]')

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

const editDeptModalVisible = ref(false)
const editDeptForm = reactive({
  org_num: Number(route.params.org_num),
  dept_id: Number(route.params.dept_id),
  name: dept.value?.name || '',
})

const { mutate: editDept } = useMutation({
  mutationFn: (payload: { org_num: number; dept_id: number; name: string }) =>
    weilaRequest.post('/corp/web/dept-change', payload),
  onSuccess() {
    editDeptModalVisible.value = false
    Message.success(t('message.success'))
    refetchContact()
  },
  onError(error) {
    Message.error(error.message || 'Request Error')
  },
})


const deleteDeptModalVisible = ref(false)
const { mutate: deleteDept } = useMutation({
  mutationFn: (payload: {
    org_num: number
    dept_id: number
  }) => weilaRequest.post('/corp/web/dept-delete', payload),
  onSuccess() {
    Message.success(t('message.success'))
    refetchContact()
  },
  onError(error) {
    Message.error(error.message || 'Request Error')
  },
})




</script>

<template>
  <div p4 space-y-4>
    <a-breadcrumb>
      <a-breadcrumb-item v-if="dept">
        {{ dept.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div flex justify-between>
      <div flex gap2>
        <a-button type="primary"
          @click="router.push(`/contact/${route.params.org_num}/add-member-${route.params.dept_id}-${dept?.name}`)">
          <template #icon>
            <IconUserAdd />
          </template>
          {{ t('button.add-member') }}
        </a-button>

        <a-button type="primary"
          @click="router.push(`/contact/${route.params.org_num}/add-device-${route.params.dept_id}-${dept?.name}`)">
          <!-- <a-button type="primary" @click="addDeviceModalVisible = true"> -->
          <template #icon>
            <IconRobotAdd />
          </template>
          {{ t('button.add-device') }}
        </a-button>
      </div>
      <div>
        <a-button @click="editDeptModalVisible = true">
          <template #icon>
            <IconEdit />
          </template>
          {{ t('button.edit-dept') }}
        </a-button>
        <a-button status="danger" @click="deleteDeptModalVisible = true">
          <template #icon>
            <IconDelete />
          </template>
          {{ t('button.delete-dept') }}
        </a-button>
      </div>
    </div>
    <a-empty v-if="!dept?.members.length" />
    <MemberList :org-number="Number(route.params.org_num)" classes="bg-base" :members="dept?.members" @on-select="onSelect" />
  </div>

  <a-modal v-model:visible="editDeptModalVisible" :title="t('button.edit-dept')"
    @before-ok="(done) => editDept(editDeptForm, { onSuccess: () => done(true), onError: () => done(false) })">
    <a-form :model="editDeptForm">
      <a-form-item field="name" :label="t('dept.form.name.label')" :rules="[{ required: true }]"
        :validate-trigger="['change', 'blur']">
        <a-input v-model="editDeptForm.name" />
      </a-form-item>
    </a-form>
  </a-modal>


  <a-modal v-model:visible="deleteDeptModalVisible" :title="t('delete.modal.title')" @before-ok="(done) => deleteDept({
    org_num: Number(route.params.org_num),
    dept_id: Number(route.params.dept_id)
  }, { onSuccess: () => done(true), onError: () => done(false) })">
    <div>
      <p>
        {{ t('delete.modal.content') }}
      </p>
      <p color-red>
        {{ t('delete.modal.hint') }}
      </p>
    </div>
  </a-modal>
</template>
