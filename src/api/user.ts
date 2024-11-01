import type { RouteRecordNormalized } from 'vue-router'
import axios from 'axios'
import md5 from 'md5'
import { weilaApi } from '.'

export interface LoginModel {
  user: {
    id: number
    num: string
    sex: number
    name: string
    bind_phone: string
    country_code: string
    avatar: string
  }
  account: {
    user_name: string
    country_code: string
    password: string
  }
  org: {
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
  access_token: string
}

export interface LoginData {
  username: string
  password: string
}

export interface LoginRes {
  token: string
}

// export function login(data: LoginData) {
//   return axios.post<LoginRes>('/api/user/login', data)
// }

export async function login(
  params: { account: string, password: string },
  loginType: MaybeRef<'phone' | 'name'>,
) {
  const {
    account,
    password,
  } = params

  const type = unref(loginType)

  const { data } = await weilaApi.post<LoginModel>(
    `/v1/corp/web/login-by-${type}`,
    {
      [type === 'phone' ? 'phone' : 'user_name']: account,
      password: md5(password),
    },
  )

  return data
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu')
}
