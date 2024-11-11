import { weilaFetch } from './instances/fetcher'

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

export async function corpFetcher() {
  const { corp } = await weilaFetch<{ corp?: CorpModel }>('/corp/web/org-my-org')

  return corp
}
