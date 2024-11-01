import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { access_token } from '~/shared/states'

interface WeilaRes<T = undefined> {
  data: T

  errmsg: string
  errcode: number

  code?: number
  msg?: string
}

interface WeilaApiInstance extends AxiosInstance {
  post: <T = any, R = WeilaRes<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<R>
}

interface WeilaRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
  params?: { 'access-token': string }
  data?: D
}

export const weilaApi: WeilaApiInstance = axios.create({
  // TODO: use base url with tanstack
  baseURL: '',
  method: 'post',
  timeout: 5000,
})

weilaApi.interceptors.request.use(
  (config: WeilaRequestConfig) => {
    if (config && access_token.value)
      config.params = { ...config.params, 'access-token': access_token.value }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

weilaApi.interceptors.response.use(
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
