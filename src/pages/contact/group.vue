<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { ref } from 'vue'
import { weilaFetch } from '~/api/instances/fetcher'
import { weilaRequest } from '~/api/instances/request'

const { t } = useI18n()

const { data: groups, refetch } = useQuery<{
  id: number
  name: string
  avatar: string
  creator: number
  type: number
  user_count: number
  member_version: number
  burst_mode: number
  shutup: number
  created: number
}[]>({
  queryKey: ['/group-getall', 'groups'],
  queryFn: () => weilaFetch('/corp/web/group-getall', {
    body: { org_num: 100080 },
  }).then(i => i.groups),
})

const visible = ref(false)

interface CreateGroupPayload {
  org_num: number
  name: string
  avatar: string
  burst_mode: number
}

const form = ref<CreateGroupPayload>({
  org_num: 100073,
  name: '',
  avatar: '',
  burst_mode: 0,
})

const [isMultiCheck, toggleMultiCheck] = useToggle(false)
const checkedGroupIds = ref<number[]>([])
const checkedGroup = computed(() => checkedGroupIds.value.map((id) => 
  groups.value?.find(group => group.id === id)
))

$inspect(checkedGroupIds)

function showModal() {
  visible.value = true
}

const { mutate: createGroup } = useMutation({
  mutationFn: (payload: CreateGroupPayload) => weilaRequest.post('/corp/web/group-create', payload),
  onSuccess: (_, payload) => {
    visible.value = false
    Message.success(`Group (${payload.name}) created successfully`)
    refetch()
  },
})

const deleteModalVisible = ref(false)
async function deleteGroups() {
  const checkedIds = checkedGroupIds.value
  let hasError = false

  try {
    await Promise.all(checkedIds.map(async (id) => {
      try {
        await weilaRequest.post('/corp/web/group-delete', { group_id: id })
      }
      catch (error) {
        console.error(`Error deleting group ${id}:`, error)
        hasError = true
      }
    }))

    if (hasError) {
      Message.error('Some groups could not be deleted. Please try again.')
    }
    else {
      Message.success('All selected groups were deleted successfully')
    }
  }
  catch (error) {
    console.error('Error in deleteGroups:', error)
    Message.error('An error occurred while deleting groups')
  }

  checkedGroupIds.value = []
  refetch()
}
</script>

<template>
  <div p4 space-y-4>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        {{ t('group.my-groups') }}
      </h1>
    </div>
    <div class="flex items-center justify-between text-lg">
      <div space-x-2>
        <a-button type="outline" @click="() => toggleMultiCheck()" v-if="groups?.length">
          <template #icon>
            <IconCheck />
          </template>
          {{
            isMultiCheck
              ? `${t('selected')} ${checkedGroupIds.length} / ${groups?.length || 0}`
              : t('batch-operation')
          }}
        </a-button>
      </div>
      <div space-x-2>
        <a-button v-if="isMultiCheck && checkedGroupIds.length" status="danger" @click="deleteModalVisible = true">
          <template #icon>
            <IconDelete />
          </template>
          {{ t('button.delete') }}
        </a-button>
        <a-button type="primary" class="bg-blue-500 hover:bg-blue-600" @click="showModal">
          <template #icon>
            <IconPlus />
          </template>
          {{ t('button.create') }}
        </a-button>
      </div>
    </div>

    <div>
      <a-checkbox-group v-model:model-value="checkedGroupIds" w-full space-y-1 bg-base>
        <button v-for="group in groups" :key="group.id" class="flex items-center list-btn">
          <a-checkbox v-show="isMultiCheck" :value="group.id" />
          <RouterLink :to="`/message/${group.id}-${group.name}`" flex grow-1>
            <UseImage
              :src="group.avatar"
              class="mr-4 h-12 w-12 rounded-full"
              alt="Group Avatar"
            >
              <template #loading>
                <div class="mr-4 h-12 w-12 animate-pulse rounded-full bg-gray-200" />
              </template>
              <template #error>
                <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-gray-300">
                  <span class="text-xs text-gray-500">Error</span>
                </div>
              </template>
            </UseImage>
            <div class="flex-grow">
              <h2 class="text-lg font-semibold">
                {{ group.name }}
              </h2>
              <p class="text-sm text-gray-500">
                {{ t('members') }}: {{ group.user_count }}
              </p>
            </div>
            <span class="text-sm text-gray-400">Created: {{ new Date(group.created * 1000).toLocaleDateString() }}</span>
          </RouterLink>
        </button>
      </a-checkbox-group>
    </div>

    <!-- <div class="space-y-3 bg-base">
      <div v-for="group in groups" :key="group.id" class="flex items-center list-btn"></div>
    </div> -->

    <a-modal v-model:visible="deleteModalVisible" :title="t('delete.modal.title')" @ok="deleteGroups">
      <p>
        {{ t('delete.modal.content') }}
        <span color-red>{{ t('delete.modal.hint') }}</span>
      </P>
      <ul list-decimal list-inside>
        <li v-for="group, key in checkedGroup" :key>
          {{ group?.name }}({{ group?.id }})
        </li>
      </ul>
    </a-modal>

    <a-modal v-model:visible="visible" :title="t('group.create')" @before-ok="(done) => createGroup(form, { onSuccess: () => done(true) })">
      <a-form :model="form" layout="vertical">
        <a-form-item :label="t('name')" field="name" :validate-trigger="['blur', 'change']" :rules="{ required: true }">
          <a-input v-model="form.name" />
        </a-form-item>
        <a-form-item :label="t('avatar')" field="avatar">
          <AvatarUploader v-model:src="form.avatar" />
        </a-form-item>
        <a-form-item :label="t('burst-mode')">
          <a-input-number
            v-model="form.burst_mode"
            :min="0"
            :max="2"
            :precision="0"
          />
          <!-- <div class="mt-1 text-sm text-gray-500">
            0: Queue, 1: Grab Mic, 2: Interrupt
          </div> -->
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
