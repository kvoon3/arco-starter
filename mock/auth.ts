import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
  [
    '/v1/corp/web/send-sms-verifycode',
    {
      errcode: 0,
      errmsg: '请求成功',
    },
  ],

  [
    '/v1/corp/web/regist',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        user_name: '20100114',
        country_code: '0',
        password: 'f3072627eff7ae270288d7804842c321',
      },
    },
  ],

  ['/v1/corp/web/login-by-phone', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      user: {
        id: 1253444,
        num: '70015325',
        sex: 0,
        name: 'ent19949504',
        bind_phone: '13353236154',
        country_code: '86',
        avatar: 'http://favicon.weila.hk/default/user.png',
      },
      account: {
        user_name: '70015325',
        country_code: '0',
        password: '9274b15d3267407d7f073267733eb1b0',
      },
      org: {
        num: 100073,
        name: '微喇测试',
        avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/a/7ddf8c72.jpg',
        created: 1730274806,
        member_cnt: 7,
        group_cnt: 2,
        group_ver: 1730707540,
        address_ver: 1730454374,
        device_cnt: 0,
        device_ver: 1,
      },
      access_token: '27c468a61c57ce0b9a09e2f72cb9b365',
      expires_in: 86400,
      refresh_token: '201e4a25ecf1213a55a5ea27003d6d6e',
    },
  }],

  ['/v1/corp/web/login-by-name', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      user: {
        id: 1253447,
        num: '70010885',
        sex: 0,
        name: 'ent44094209',
        bind_phone: '16675441248',
        country_code: '86',
        avatar: 'http://favicon.weila.hk/default/user.png',
      },
      account: {
        user_name: '70010885',
        country_code: '0',
        password: '73c18c320f3d13b2b2b66fbac937e66a',
      },
      org: {
        num: 100080,
        name: 'kvoon-org',
        avatar: 'https://picsum.photos/200?random=1730457465401',
        created: 1730457462,
        member_cnt: 1,
        group_cnt: 0,
        group_ver: 1,
        address_ver: 1730859173,
        device_cnt: 0,
        device_ver: 1,
      },
      access_token: '4e74b04be33083d0d4337956d6d0db82',
      expires_in: 86400,
      refresh_token: 'c68e0bac0cb2d0b03248f3b3b2fbaed5',
    },
  }],

  ['/v1/sessions/refresh', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      access_token: '1e7593558560b0c816c73f55e4a3ce66',
      expires_in: 86400,
      refresh_token: 'cb17207d38a8c731e1be101c3f80334b',
    },
  }],

  ['/v1/corp/web/reset-password', {
    errcode: 0,
    errmsg: '请求成功',
  }],

]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
