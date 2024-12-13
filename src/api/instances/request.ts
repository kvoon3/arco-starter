import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { WeilaRes } from '..'
import { Message } from '@arco-design/web-vue'
import axios from 'axios'
import { access_token, app_id, app_sign, isLogin, isNeedRefresh, logout, timestamp } from '~/shared/states'
import defaultConfig, { isPublicApi, WeilaErrorCode, weilaLogoutErrorCodes } from '..'
import { tryRefreshToken } from '../refresh'

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

    // mock gen full url to judge whether need refresh
    if (
      isLogin.value
      && isNeedRefresh.value
      && config.url
      && !isPublicApi(config.url)
    ) {
      tryRefreshToken()
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
    const { errcode, code } = response.data

    if (errcode === WeilaErrorCode.SUCCESS || code === 200) {
      return response.data
      // return { data: undefined, ...response.data }
    }
    else if (
      weilaLogoutErrorCodes
        .findIndex(i => errcode === i) >= 0
    ) {
      logout()
    }
    else {
      const message = `${response.data.errcode} ${response.data.errmsg}`
      Message.error(message)
      throw new Error(message)
    }
  },
  (error: Error) => {
    Message.error(error.message)
    return Promise.reject(error)
  },
)
