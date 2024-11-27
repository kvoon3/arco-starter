<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { ref } from 'vue'
import type { GroupModel } from '~/api/contact'
import { weilaFetch } from '~/api/instances/fetcher'
import CreateGroupModal from './components/CreateGroupModal.vue'
import DeleteGroupModal from './components/DeleteGroupModal.vue'
import EditGroupModal from './components/EditGroupModal.vue'

const { t } = useI18n()

const corpStore = useCorpStore()
const { data: corp } = storeToRefs(corpStore)
const router = useRouter()

const { data: groups, refetch } = useQuery<GroupModel[]>({
  enabled: computed(() => typeof corp.value?.num === 'number'),
  queryKey: ['/group-getall', 'groups', corp],
  queryFn: () => weilaFetch('/corp/web/group-getall', {
    body: { org_num: String(corp.value!.num) },
  }).then(i => i.groups),
})

$inspect(groups)

const selectedGroup = ref<GroupModel | undefined>(undefined)

const checkedGroupIds = ref<number[]>([])

$inspect(checkedGroupIds)

function onSelect(group: GroupModel, e: PointerEvent) {
  const whitelistEl = ['.arco-btn']
  // @ts-expect-error type error: no closest attr
  if (whitelistEl.find(className => e.target?.closest(className))) {
    return void 0
  }

  router.push(`/contact/group-${group.id}-${group.name}`)
}
</script>

<template>
  <div w-full p4 space-y-4>
    <a-breadcrumb>
      <a-breadcrumb-item>{{ t('submenu.group-manage') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div w-full rounded p4 space-y-4 bg-base>
      <section space-x-2>
        <CreateGroupModal @success="refetch">
          <a-button type="primary">
            {{ t('button.create-group') }}
          </a-button>
        </CreateGroupModal>
      </section>
      <!-- @vue-expect-error type error -->
      <a-table :data="groups" size="medium" :column-resizable="true" :scroll="{
        x: 1000,
        y: 600,
      }" :scrollbar="true" @row-click="(...args) => onSelect(...args)">
        <template #columns>
          <a-table-column :title="t('avatar')">
            <template #cell="{ record: { avatar } }">
              <UseImage class="size-20 border rounded-lg" :src="avatar">
                <template #loading>
                  <div class="h-full w-full flex items-center justify-center">
                    <i class="i-carbon-progress-bar-round text-2xl text-gray-500" />
                  </div>
                </template>

                <template #error>
                  <div class="h-full w-full flex items-center justify-center">
                    <i class="i-carbon-no-image text-2xl text-red-500" />
                  </div>
                </template>
              </UseImage>
            </template>
          </a-table-column>
          <a-table-column :title="t('name')">
            <template #cell="{ record: { name } }">
              {{ name }}
            </template>
          </a-table-column>
          <a-table-column :title="t('user-count')">
            <template #cell="{ record: { user_count } }">
              {{ user_count }}
            </template>
          </a-table-column>
          <a-table-column :title="t('burst-mode')">
            <template #cell="{ record: { burst_mode } }">
              <a-tag>
                {{
                  {
                    0: t('burst-mode-0'),
                    1: t('burst-mode-1'),
                    2: t('burst-mode-2'),
                  }[burst_mode as number]
                }}
              </a-tag>
            </template>
          </a-table-column>
          <a-table-column :title="t('shutup')">
            <template #cell="{ record: { shutup } }">
              <a-tag :color="shutup === 0 ? 'orange' : 'green'">
                {{
                  {
                    0: t('shutup-enable'),
                    1: t('shutup-disable'),
                  }[shutup as number]
                }}
              </a-tag>
            </template>
          </a-table-column>
          <a-table-column :title="t('controls')">
            <template #cell="{ record }">
              <div flex gap2>
                <EditGroupModal :group="selectedGroup" @success="refetch">
                  <a-button @click="() => selectedGroup = record">
                    {{ t('button.edit') }}
                  </a-button>
                </EditGroupModal>
                <DeleteGroupModal :group="record" @success="() => refetch()">
                  <a-button status="danger" @click="() => selectedGroup = record">
                    {{ t('button.delete') }}
                  </a-button>
                </DeleteGroupModal>
              </div>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>
  </div>
</template>
