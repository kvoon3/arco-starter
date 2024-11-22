<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { RouterLink } from 'vue-router'
import { weilaApiUrl } from '~/api'
import { weilaFetch } from '~/api/instances/fetcher'

definePage({
  meta: {
    menu: {
      label: 'menu.message',
      icon: 'icon-user',
      order: 0,
    },
  },
})

interface GroupModel {
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
}

const route = useRoute('/message/[group_id]-[group_name]')
// const router = useRouter()

const corpStore = useCorpStore()
const { data: corp } = storeToRefs(corpStore)

const { data: groups } = useQuery<GroupModel[]>({
  enabled: computed(() => Boolean(corp.value)),
  queryKey: ['groups', weilaApiUrl['/corp/web/group-getall'], corp],
  queryFn: () => weilaFetch(weilaApiUrl['/corp/web/group-getall'], {
    body: { org_num: String(corp.value!.num) },
  }).then(i => i.groups),
})

// const defaultSelectedKeys = ref<number[]>([groups.value?.[0].id || -1])
// const selectedKeys = ref<number[]>(defaultSelectedKeys.value)

// TODO: use radix vue's listbox
// const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
// const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
</script>

<template>
  <div h-full flex>
    <section relative h-full w80 p2 bg-base>
      <!-- TODO: use list box -->
      <!-- <ListboxRoot class="mx-auto flex flex-col border rounded-lg bg-white text-primary">
        <ListboxContent class="p-[5px]">
          <ListboxGroup>
            <ListboxGroupLabel class="text-mauve11 px-[25px] text-xs leading-[25px]">
              Fruits
            </ListboxGroupLabel>
            <ListboxItem v-for="i in fruits" :key="i" :value="i"
              class="relative h-[25px] w-full flex select-none items-center rounded px-[25px] text-[13px] text-green9 leading-none outline-none data-[state=checked]:bg-green9 data-[state=checked]:text-white data-[disabled]:opacity-50 data-[highlighted]:ring-1 focus:ring-1 data-[highlighted]:ring-green9 focus:ring-green9">
              <ListboxItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </ListboxItemIndicator>
              <span>{{ i }}</span>
            </ListboxItem>
          </ListboxGroup>

          <ListboxGroup class="mt-2">
            <ListboxGroupLabel class="text-mauve11 px-[25px] text-xs leading-[25px]">
              Vegetables
            </ListboxGroupLabel>
            <ListboxItem v-for="i in vegetables" :key="i" :value="i"
              class="relative h-[25px] w-full flex select-none items-center rounded px-[25px] text-[13px] text-green9 leading-none outline-none data-[state=checked]:bg-green9 data-[state=checked]:text-white data-[disabled]:opacity-50 data-[highlighted]:ring-1 focus:ring-1 data-[highlighted]:ring-green9 focus:ring-green9">
              <ListboxItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </ListboxItemIndicator>
              <span>{{ i }}</span>
            </ListboxItem>
          </ListboxGroup>
        </ListboxContent>
      </ListboxRoot> -->
      <a-empty v-if="!groups || !groups.length" absolute position-center />
      <RouterLink v-for="group in groups" :key="group.id" :to="`/message/${group.id}-${group.name}`"
        class="flex items-center gap-2 list-btn" :class="route.params.group_id && group.id === Number(route.params.group_id)
          ? 'bg-gray-100 dark:bg-dark-2'
          : ''
          ">
        <UseImage :src="group.avatar" class="mr-4 h-12 w-12 rounded-full" alt="Group Avatar">
          <template #loading>
            <div class="mr-4 h-12 w-12 animate-pulse rounded-full bg-gray-200" />
          </template>
          <template #error>
            <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-gray-300">
              <span class="text-xs text-gray-500">Error</span>
            </div>
          </template>
        </UseImage>
        <span>{{ group.name }}</span>
      </RouterLink>
    </section>
    <RouterView />
  </div>
</template>
