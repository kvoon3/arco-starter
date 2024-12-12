import { objectPick } from '@antfu/utils'
import { useQuery } from '@tanstack/vue-query'
import { weilaFetch } from '~/api/instances/fetcher'
import { isLogin } from '~/shared/states'

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
    enabled: computed(() => isLogin.value),
    queryKey: ['my-org'],
    queryFn: () => weilaFetch<{ corp?: CorpModel }>('/corp/web/org-my-org').then(i => i.corp),
  })

  const org_num = computed(() => query.data.value?.num)

  return {
    ...objectPick(query, [
      'data',
      'isFetching',
      'isSuccess',
      'refetch',
      'isStale',
    ]),
    org_num,
  }
})
