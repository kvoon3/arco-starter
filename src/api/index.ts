import weilaApiList from '../../generated/mock/weila'
import weilaExtraApiList from '../../generated/mock/weila-extra'

export interface WeilaRes<T = undefined> {
  data?: T

  errmsg: string
  errcode: number

  code?: number
  msg?: string
}

const config = {
  baseURL: '/v1',
  timeout: import.meta.env.DEV
    ? 20 * 1000
    : 5 * 1000,
  method: 'POST',
} as const

export enum WeilaErrorCode {
  SUCCESS = 0,
  TOKEN_INVALID = 31,
}

export type WeilaApiUrl = typeof weilaApiList[number]['url'] | typeof weilaExtraApiList[number]['url']
export type WeilaApiUrlShort = WeilaApiUrl extends `${typeof config.baseURL}${infer Suffix}` ? Suffix : never

function noBaseUrl(url: WeilaApiUrl): WeilaApiUrlShort {
  return (url.startsWith(config.baseURL)
    ? url.slice(config.baseURL.length)
    : url) as WeilaApiUrlShort
}

export const weilaApiFullUrl = {
  ...Object.fromEntries(weilaApiList.map(api => [api.url, api.url])),
  ...Object.fromEntries(weilaExtraApiList.map(api => [api.url, api.url])),
} as Record<WeilaApiUrl, WeilaApiUrl>

/**
 * @description type safe api url
 */
export const weilaApiUrl = {
  ...Object.fromEntries(weilaApiList.map(api => [api.url, api.url].map(noBaseUrl))),
  ...Object.fromEntries(weilaExtraApiList.map(api => [api.url, api.url].map(noBaseUrl))),
} as Record<WeilaApiUrlShort, WeilaApiUrlShort>

export default config
