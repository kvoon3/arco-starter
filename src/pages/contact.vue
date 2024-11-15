<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { reactive } from 'vue'
import type { DepartmentModel, MemberModel } from '~/api/contact'
import { corpFetcher } from '~/api/corp'
import OrgForm from './contact/components/org-form.vue'
import { weilaRequest } from '~/api/instances/request'
import { Message } from '@arco-design/web-vue'
import md5 from 'md5'

definePage({
  meta: {
    menu: { label: 'menu.contact', order: 1, icon: 'icon-user-group' },
  },
})

const { themeColor } = useAppStore()

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

const { updateOrgNumber } = contactStore
const { data: contact } = storeToRefs(contactStore)

watchEffect(() => {
  if (corp.value?.num)
    updateOrgNumber(corp.value.num)
})

const orgForm = templateRef('orgForm')

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

const selectedKeys = ref<string[]>([])
$inspect(selectedKeys)
const unfoldedDeptId = ref<string[]>([])
$inspect(unfoldedDeptId)
watch(unfoldedDeptId, ([id]) => {
  if (id)
    router.push(`/contact/${corp?.value?.num}/dept-${id}`)
})


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

const createMemberModalVisible = ref(false)
const createMemberForm = reactive<NewMemberPayload>({
  org_num: contactStore.org_num,
  name: '',
  password: '',
  dept_id: 0,
  sex: 0,
  avatar: '',
  phone: '',
  tts: 0,
  loc_share: 0,
})
contactStore.$subscribe((_, state) => {
  createMemberForm.org_num = state.org_num
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
    contactStore.refetch()
  },
})
</script>

<template>
  <div h-full flex>
    <section h-full w80 border-r-1 dark:border-gray-700 p2 bg-base>
      <!-- <button class="list-btn" @click="router.push('/contact/group')">
        <i i-ph-person-duotone inline-block /> {{ t('group.my-groups') }}
      </button>
      <a-divider orientation="left">
        {{ t('organazition') }}
      </a-divider>
      <button v-if="corp" class="list-btn" @click="router.push('/contact/org')">
        <UseImage :src="corp.avatar" class="size-6 rounded" alt="corp avatar">
          <template #loading>
            <i i-ph-user-circle-duotone size-6 animate-pulse />
          </template>
          <template #error>
            <i i-ph-user-circle-duotone size-6 />
          </template>
        </UseImage>
        {{ corp.name }}
      </button> -->

      <a-menu v-model:selected-keys="selectedKeys" v-model:open-keys="unfoldedDeptId">
        <a-menu-item @click="router.push('/contact/group')">
          <template #icon>
            <i i-ph-users-three-duotone inline-block />
          </template>
          {{ t('group.my-groups') }}
        </a-menu-item>

        <a-menu-item-group :title="t('organazition')">
          <a-menu-item v-if="corp" @click="router.push('/contact/org')">
            <template #icon>
              <UseImage :src="corp.avatar" class="size-6 rounded" alt="corp avatar">
                <template #loading>
                  <i i-ph-user-circle-duotone size-6 animate-pulse />
                </template>
                <template #error>
                  <i i-ph-user-circle-duotone size-6 />
                </template>
              </UseImage>
            </template>
            {{ corp.name }}
          </a-menu-item>
          <a-menu-item v-else @click="createCorpModalState.visible = true">
            <template #icon>
              <i i-ph-plus-circle-duotone inline-block />
            </template>
            {{ t('corp.create.form.title') }}
          </a-menu-item>
          <!-- <a-sub-menu v-for="dept in contact?.depts" :key="dept.id" selectable>
            <template #icon>
              <i i-ph-folder-duotone inline-block />
            </template>
            <template #title>
              {{ dept.name }}
            </template>
            <a-menu-item v-for="member in dept.members" :key="member.user_id" @click="selectNode([String(member.user_id)], { node: member })">
              <template #icon>
                <UseImage :src="member.avatar" class="size-5 rounded" alt="member avatar">
                  <template #loading>
                    <i i-ph-user-circle-duotone size-5 animate-pulse />
                  </template>
                  <template #error>
                    <i i-ph-user-circle-duotone size-5 />
                  </template>
                </UseImage>
              </template>
              {{ member.name }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item @click="createCorpModalState.visible = true">
            <template #icon>
              <i i-ph-plus-circle-duotone inline-block />
            </template>
            {{ t('dept.create') }}
          </a-menu-item> -->
        </a-menu-item-group>
      </a-menu>

      <!-- @vue-expect-error type error when use custom field names -->
      <a-tree
        :data="contact?.members"
        :field-names="{
          key: 'user_id',
          title: 'name',
        }"

        :block-node="true"
        @select="selectNode"
      />


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
        <i i-ph-plus inline-block /> {{ t('dept.create') }}
      </button>
      <button class="list-btn" @click="() => createMemberModalVisible = true">
        <i i-ph-plus inline-block /> {{ t('button.create-member') }}
      </button>
    </section>
    <section h-full w-full>
      <RouterView />
    </section>
  </div>

  <a-modal v-model:visible="createMemberModalVisible" :title="t('button.add-member')" @before-ok="(done) => createMember(createMemberForm, { onSuccess: () => done(true), onError: () => done(false) })">
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

  <a-modal v-model:visible="createCorpModalState.visible" :title="t('corp.create.form.title')">
    <OrgForm ref="orgForm" />
  </a-modal>
</template>
