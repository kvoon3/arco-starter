import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

const urlRes: Array<[string, WeilaRes<any>]> = [
  [
    '/v1/corp/web/group-create',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        id: 80000528,
        name: '测试群3',
        avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg',
        user_count: 0,
        member_version: 1,
        burst_mode: 0,
        shutup: 0,
        created: 1730452576,
      },
    },
  ],
  [
    '/v1/corp/web/group-getall',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        groups: [
          {
            id: 80000528,
            name: '测试群3',
            avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg',
            creator: 1253444,
            type: 17,
            user_count: 2,
            member_version: 3,
            burst_mode: 0,
            shutup: 0,
            created: 1730452576,
          },
          {
            id: 80010090,
            name: '测试群4',
            avatar: 'http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80010090/a/707546dd.jpg',
            creator: 1253444,
            type: 17,
            user_count: 0,
            member_version: 1,
            burst_mode: 0,
            shutup: 0,
            created: 1730452310,
          },
        ],
      },
    },
  ],
  [
    '/v1/corp/web/group-delete',
    {
      errcode: 0,
      errmsg: '请求成功',
    },
  ],
  [
    '/v1/corp/web/group-member-add',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        members: [
          {
            user_id: 1253448,
            user_num: '30015839',
            sex: 0,
            name: '222222',
            avatar: 'http://favicon.weila.hk/default/group.png',
          },
        ],
      },
    },
  ],
  ['/v1/corp/web/group-member-change', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      members: [
        {
          user_id: 1253448,
          user_num: '30015839',
          sex: 0,
          name: '222222',
          avatar: 'http://favicon.weila.hk/default/group.png',
        },
      ],
    },
  }],
  [
    '/v1/corp/web/group-member-delete',
    {
      errcode: 0,
      errmsg: '请求成功',
      data: {
        members: [
          {
            user_id: 1253444,
            prority: 0,
            tts: 0,
            loc_share: 0,
            user_num: '70015325',
            sex: 0,
            name: 'ent19949504',
            avatar: 'http://favicon.weila.hk/default/user.png',
          },
          {
            user_id: 1253446,
            prority: 0,
            tts: 0,
            loc_share: 0,
            user_num: '70011173',
            sex: 0,
            name: '222222',
            avatar: 'http://favicon.weila.hk/default/user.png',
          },
        ],
      },
    },
  ],
  ['/v1/corp/web/group-member-getall', {
    errcode: 0,
    errmsg: '请求成功',
    data: {
      members: [
        {
          user_id: 1253448,
          user_num: '30015839',
          sex: 0,
          name: 'kvoon',
          avatar: 'https://picsum.photos/200',
        },
        {
          user_id: 1253441,
          user_num: '30015831',
          sex: 1,
          name: 'kvoon3',
          avatar: 'https://picsum.photos/200',
        },
      ],
    },
  }],
]

export default urlRes.map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]
