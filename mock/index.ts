import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/v1/corp/web/dept-getall',
    method: 'post',
    response: () => {
      return {
        errcode: 0,
        errmsg: '请求成功',
        data: {
          depts: [
            {
              id: 1,
              name: '研发部12',
            },
            {
              id: 2,
              name: '研发部2',
            },
            {
              id: 3,
              name: '研发部2',
            },
            {
              id: 4,
              name: '研发部2',
            },
            {
              id: 5,
              name: '研发部2',
            },
          ],
        },
      }
    },
  },
  {
    url: '/v1/corp/web/get-address-list',
    method: 'post',
    response: () => {
      return {
        errcode: 0,
        errmsg: '请求成功',
        data: {
          address_list: {
            version: 1730434624,
            members: [
              {
                user_id: 1253444,
                dept_id: 0,
                country_code: '86',
                phone: '13353236154',
                type: 255,
                tts: 1,
                loc_share: 0,
                track: 0,
                state: 0,
                created: 1730274537,
                user_num: '70015325',
                sex: 0,
                name: 'ent19949504',
                avatar: 'http://favicon.weila.hk/default/user.png',
              },
            ],
            depts: [
              {
                id: 6,
                name: '研发部2',
                members: [
                  {
                    user_id: 1253446,
                    dept_id: 6,
                    country_code: '86',
                    phone: '18611111111',
                    type: 0,
                    tts: 1,
                    loc_share: 0,
                    track: 0,
                    state: 0,
                    created: 1730279383,
                    user_num: '70011173',
                    sex: 0,
                    name: '222222',
                    avatar: 'http://favicon.weila.hk/default/user.png',
                  },
                  {
                    user_id: 1253448,
                    dept_id: 6,
                    country_code: '86',
                    phone: '18611111111',
                    type: 1,
                    tts: 1,
                    loc_share: 0,
                    track: 0,
                    state: 0,
                    created: 1730434624,
                    user_num: '30015839',
                    sex: 0,
                    name: '222222',
                    avatar: 'http://favicon.weila.hk/default/group.png',
                  },
                ],
              },
            ],
          },
        },
      }
    },
  },
] as MockMethod[]
