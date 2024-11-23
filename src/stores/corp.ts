import { objectPick } from '@antfu/utils'
import { useQuery } from '@tanstack/vue-query'
import { weilaFetch } from '~/api/instances/fetcher'

export interface CorpModel {
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

export const useCorpStore = defineStore('corp', () => {
  const query = useQuery({
    queryKey: ['my-org'],
    queryFn: () => weilaFetch<{ corp?: CorpModel }>('/corp/web/org-my-org').then(i => i.corp),
  })
  return objectPick(query, [
    'data',
    'isFetching',
    'isSuccess',
    'refetch',
  ])
})
