<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { weilaFetch } from '~/api/instances/fetcher'
import { weilaRequest } from '~/api/instances/request'

interface OrgModel {
  num: number
  name: string
  avatar: string
  intro: string
  created: number
  member_cnt: number
  group_cnt: number
  group_ver: number
  address_ver: number
  device_cnt: number
  device_ver: number
}

const form = reactive({
  name: 'kvoon-org',
  avatar: `https://picsum.photos/200?random=${Date.now()}`,
})

const { mutate } = useMutation({
  async mutationFn(params: { name: string, avatar: string }) {
    const { data: { org } } = await weilaRequest.post<{ org: OrgModel }>('/v1/corp/web/organization-create', params)

    return org
  },
})

const { data, error, isFetching } = useQuery({
  queryKey: ['my-org'],
  refetchOnWindowFocus: false,
  async queryFn() {
    const res = await weilaFetch('/v1/corp/web/organization-my-org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res
  },
})

$inspect(data)
$inspect(error)
$inspect(isFetching)
</script>

<template>
  <div h-full w80 bg-white p2 dark:bg-dark>
    <button class="btn">
      <i i-ph-person-duotone inline-block /> My Group
    </button>
    <a-divider orientation="left">
      Organazition
    </a-divider>
    <button
      class="btn"
      @click="() => mutate(form)"
    >
      <i i-ph-plus inline-block /> Create Organazition
    </button>
  </div>
</template>

<style scoped>
.btn {
  --uno: 'hover:op100 hover:bg-gray-200 w-full rounded px4 py2 text-start leading-loose op75 transition-all duration-80 active:color-primary visited:color-primary flex items-center gap-2';
}
</style>
