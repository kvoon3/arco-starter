import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { access_token, app_id, app_sign, timestamp } from '~/shared/states'

import defaultConfig from '../api.config'

interface WeilaRes<T = undefined> {
  data: T

  errmsg: string
  errcode: number

  code?: number
  msg?: string
}

interface WeilaRequestInstance extends AxiosInstance {
  post: <T = any, R = WeilaRes<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<R>
}

interface WeilaRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
  params?: {
    'access-token': string
    'app_id': string
    'et': string
    'sign': string
  }
  data?: D
}

export const weilaRequest: WeilaRequestInstance = axios.create({
  ...defaultConfig,
})

weilaRequest.interceptors.request.use(
  (config: WeilaRequestConfig) => {
    if (config && access_token.value) {
      config.params = {
        ...config.params,
        app_id,
        'access-token': access_token.value,
        'et': String(timestamp.value),
        'sign': app_sign.value,
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

weilaRequest.interceptors.response.use(
  // @ts-expect-error type error
  (response: AxiosResponse<WeilaRes>) => {
    if (response.data.errcode === 0 || response.data?.code === 200) {
      return response.data
    }
    else {
      throw new Error(response.data.errmsg)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)
