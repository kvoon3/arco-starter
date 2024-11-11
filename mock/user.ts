import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
  ['/v1/corp/web/user-selfinfo', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      user: {
        id: 1253437,
        num: '70010607',
        sex: 0,
        name: 'ent15800121',
        bind_phone: '13353236155',
        country_code: '86',
        avatar: 'http://favicon.weila.hk/default/user.png',
      },
    },
  }],
  ['/v1/corp/web/user-change-password', {
    errcode: 0,
    errmsg: '请求成功',
  }],
  ['/v1/corp/web/user-bind-phone', {
    errcode: 0,
    errmsg: '请求成功',
  }],
]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
