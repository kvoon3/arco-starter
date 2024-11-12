<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { ContactModel, CreateDeptPayload } from '~/api/contact'
import { weilaFetch } from '~/api/instances/fetcher'
import { weilaRequest } from '~/api/instances/request'

const route = useRoute('/contact/[org_num]/details')

const { data: contact } = useQuery({
  queryKey: ['contact', route.params.org_num],
  queryFn: () => (weilaFetch<ContactModel>(
    '/corp/web/get-address-list',
    { body: { org_num: route.params.org_num } },
  ).then(i => i.address_list)),
})

const deptForm = reactive<CreateDeptPayload>({
  org_num: route.params.org_num,
  name: '',
})

const createDeptModalVisible = ref(false)

const { mutate: createDept } = useMutation({
  mutationFn: (payload: CreateDeptPayload) => weilaRequest.post('/corp/web/dept-create', payload),
  onSuccess: () => {
  },
})

$inspect(contact)
</script>

<template>
  <div p4 space-y-2>
    <div>
      <a-button flex items-center gap2 rounded @click="createDeptModalVisible = true">
        <i i-ph-plus-circle /> New Dept
      </a-button>
      <a-modal
        v-model:visible="createDeptModalVisible" title="Create New Department"
        @before-ok="() => createDept(deptForm)"
      >
        <a-form :model="deptForm">
          <a-form-item field="name" label="name" :validate-trigger="['blur', 'change']" :rules="{ required: true }">
            <a-input v-model="deptForm.name" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <div rounded bg-base>
      <MemberList :org-number="Number(route.params.org_num)" :members="contact?.members" />

      <!-- <a-tree
        :data="contact?.depts"
        :field-names="{
          key: 'id',
          title: 'name',
          children: 'members',
        }"
      /> -->
    </div>
  </div>
</template>
