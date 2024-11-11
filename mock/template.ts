import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
