<script setup lang="ts">
import { objectEntries, objectKeys } from '@antfu/utils'
import { useQuery } from '@tanstack/vue-query'
import { weilaApiUrl } from '~/api'
import { weilaFetch } from '~/api/instances/fetcher'

const { data: corp } = storeToRefs(useCorpStore())

interface Member {
  user_id: number
  user_num: string
  sex: 0
  name: string
  avatar: string
  dept_id: 0
  country_code: string
  phone: string
  type: number
  tts: number
  loc_share: number
  track: number
  state: 0 | 1
  create: number
  online: number
  dept_name: string

}

const { data: members } = useQuery<Array<Member>>({
  enabled: computed(() => Boolean(corp.value)),
  queryKey: [weilaApiUrl['/corp/web/member-getall'], corp.value],
  queryFn: () => weilaFetch(weilaApiUrl['/corp/web/member-getall'], {
    body: {
      org_num: corp.value!.num,
    },
  }).then(i => i.members),
})

$inspect(members)

const cols = computed(() => {
  const first = members.value?.[0]
  if (!first)
    return []
  return objectKeys(first).map(key => ({ title: key, dataIndex: key }))
})

$inspect(cols)
const scroll = {
  x: 2000,
  y: 200,
}
</script>

<template>
  <div p4>
    <a-table w-300 :columns="cols" :data="members" :scroll="scroll" :scrollbar="true" />
  </div>
</template>
