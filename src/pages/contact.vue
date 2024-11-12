<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import md5 from 'md5'
import { reactive } from 'vue'
import type { DepartmentModel, MemberModel } from '~/api/contact'
import { corpFetcher } from '~/api/corp'
import { weilaFetch } from '~/api/instances/fetcher'
import { weilaRequest } from '~/api/instances/request'
import { themeColor } from '~/config/settings.json'
import OrgForm from './contact/components/org-form.vue'

const { t } = useI18n()
const router = useRouter()

const createCorpModalState = reactive({
  visible: false,
})

const { data: corp } = useQuery({
  queryKey: ['my-org'],
  queryFn: corpFetcher,
})

const contactStore = useContactStore()

const { updateOrgNumber, refetch: refetchContact } = contactStore
const { data: contact } = storeToRefs(contactStore)

watchEffect(() => {
  if (corp.value?.num)
    updateOrgNumber(corp.value.num)
})

const orgForm = templateRef('orgForm')

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
  org_num: 0,
  name: '',
  password: '',
  dept_id: 0,
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
})

$inspect(createMemberForm)

const { mutate: createMember } = useMutation({
  mutationFn: (payload: NewMemberPayload) => {
    return weilaFetch('/corp/web/member-create', {
      body: {
        ...payload,
        password: md5(payload.password),
        tts: payload.tts ? 1 : 0,
        loc_share: payload.loc_share ? 1 : 0,
      },
    })
  },
  onSuccess() {
    createMemberModalVisible.value = false
    refetchContact()
  },
})

interface DeleteDeptPayload {
  org_num: number
  dept_id: number
}

const { mutate: deleteDept } = useMutation({
  mutationFn: (payload: DeleteDeptPayload) => {
    return weilaRequest.post('/corp/web/dept-delete', payload)
  },
  onSuccess() {
    refetchContact()
  },
})

interface EditDeptPayload {
  org_num: number
  dept_id: number
  name: string
}

const editDeptModalVisible = ref(false)
const editDeptForm = reactive<EditDeptPayload>({
  org_num: 0,
  dept_id: 0,
  name: '',
})

const { mutate: editDept } = useMutation({
  mutationFn: (payload: EditDeptPayload) => {
    return weilaRequest.post('/corp/web/dept-change', payload)
  },
  onSuccess() {
    Message.success('Success')
    refetchContact()
  },
})

function selectNode(
  [id]: [string],
  nodeData: { node: (MemberModel | DepartmentModel) },
) {
  const { node } = nodeData
  const type = 'user_id' in node ? 'member' : 'dept'
  if (type === 'dept') {
    router.push(`/contact/${corp?.value?.num}/dept-${id}`)
  }
  else if (type === 'member') {
    const { dept_id, user_id } = node as MemberModel
    router.push(`/contact/${corp?.value?.num}/member-${dept_id}-${user_id}`)
  }
}
</script>

<template>
  <div h-full flex>
    <section h-full w80 border-r-1 p2 bg-base>
      <button class="list-btn" @click="router.push('/contact/group')">
        <i i-ph-person-duotone inline-block /> {{ t('group.my-groups') }}
      </button>
      <a-divider orientation="left">
        Organazition
      </a-divider>
      <button v-if="corp" class="list-btn" @click="router.push('/contact/org')">
        <UseImage :src="corp.avatar" class="size-6 rounded" alt="corp avatar">
          <template #loading>
            <i i-ph-user-circle-dashed-duotone size-6 animate-pulse />
          </template>
          <template #error>
            <i i-ph-user-circle-dashed-duotone size-6 />
          </template>
        </UseImage>
        {{ corp.name }}
      </button>
      <!-- <button class="list-btn" @click="router.push(`/contact/${corp?.num}/details`)">
        <i i-carbon-text-new-line />  Organizational structure
      </button> -->
      <!-- @vue-expect-error type error when use custom field names -->
      <a-tree
        :data="contact?.depts"
        :field-names="{
          key: 'id',
          title: 'name',
          children: 'members',
        }"
        :block-node="true"
        @select="selectNode"
      />
      <button class="list-btn" @click="() => createCorpModalState.visible = true">
        <i i-ph-plus inline-block /> Create Organazition
      </button>
      <a-modal
        v-model:visible="createCorpModalState.visible" title="Create Organazition"
      >
        <OrgForm ref="orgForm" />
      </a-modal>
    </section>
    <section h-full w-full>
      <RouterView />
    </section>
  </div>

  <a-modal v-model:visible="editDeptModalVisible" title="Edit Department" @before-ok="(done) => editDept(editDeptForm, { onSuccess: () => done(true) })">
    <a-form :model="editDeptForm">
      <a-form-item field="name" label="Name" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="editDeptForm.name" placeholder="Enter department name" />
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal v-model:visible="createMemberModalVisible" title="Create Member" @before-ok="(done) => createMember(createMemberForm, { onSuccess: () => done(true) })">
    <a-form :model="createMemberForm">
      <a-form-item field="name" label="Name" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="createMemberForm.name" placeholder="Enter name" />
      </a-form-item>
      <a-form-item field="phone" label="Phone" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input v-model="createMemberForm.phone" placeholder="Enter phone number" />
      </a-form-item>
      <a-form-item field="password" label="Password" :rules="[{ required: true }]" :validate-trigger="['change', 'blur']">
        <a-input-password v-model="createMemberForm.password" placeholder="Enter password" />
      </a-form-item>
      <a-form-item field="sex" label="Gender" :validate-trigger="['change', 'blur']">
        <a-radio-group v-model="createMemberForm.sex">
          <a-radio :value="0">
            Male
          </a-radio>
          <a-radio :value="1">
            Female
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="avatar" label="Avatar" :validate-trigger="['change', 'blur']">
        <AvatarUploader v-model:src="createMemberForm.avatar" />
      </a-form-item>
      <a-form-item field="tts" label="TTS" :validate-trigger="['change', 'blur']">
        <a-switch v-model="createMemberForm.tts" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
      <a-form-item field="loc_share" label="Location Sharing" :validate-trigger="['change', 'blur']">
        <a-switch v-model="createMemberForm.loc_share" :checked-color="themeColor" unchecked-color="#ddd" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
