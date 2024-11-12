import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
  [
    '/v1/corp/web/org-create',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        org: {
          num: 100021,
          name: '微喇测试',
          avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg',
          intro: '111111111111111111111',
          created: 1730198941,
          member_cnt: 1,
          group_cnt: 0,
          group_ver: 1,
          address_ver: 1,
          device_cnt: 0,
          device_ver: 1,
        },
      },
    },
  ],

  ['/v1/corp/web/org-change', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      corp: {
        num: 100021,
        name: '222222',
        avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg?v=1730198963',
        intro: '123123123',
        created: 1730198941,
        member_cnt: 1,
        group_cnt: 0,
        group_ver: 1,
        address_ver: 1,
        device_cnt: 0,
        device_ver: 1,
      },
    },
  }],
  ['/v1/corp/web/org-my-org', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      corp: {
        num: 100040,
        name: '222222',
        avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg?v=1730197031',
        intro: '123123123',
        created: 1730196879,
        member_cnt: 1,
        group_cnt: 0,
        group_ver: 1,
        address_ver: 1,
        device_cnt: 0,
        device_ver: 1,
      },
    },
  }],
]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
