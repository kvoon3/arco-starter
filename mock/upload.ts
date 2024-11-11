import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
  [
    '/v1/corp/web/avatar-upload',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        url: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png',
      },
    },
  ],
  [
    '/v1/corp/web/file-upload',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        url: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png',
      },
    },
  ],
]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
