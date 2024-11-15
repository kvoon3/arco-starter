<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { UseImage } from '@vueuse/components'
import { RouterLink } from 'vue-router'
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

const { data: groups } = useQuery<GroupModel[]>({
  queryKey: ['groups'],
  queryFn: () => weilaFetch('/corp/web/group-getall').then(i => i.groups),
})
</script>

<template>
  <div h-full flex>
    <section h-full w80 p2 bg-base relative>
      <a-empty v-if="!groups || !groups.length" absolute position-center />
      <RouterLink
        v-for="group in groups"
        :key="group.id" :to="`/message/${group.id}-${group.name}`"
        class="flex items-center gap-2 list-btn"
        :class="route.params.group_id && group.id === Number(route.params.group_id)
          ? 'bg-gray-100 dark:bg-dark-2'
          : ''
        "
      >
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
        <span>{{ group.name }}</span>
      </RouterLink>
    </section>
    <RouterView />
  </div>
</template>
