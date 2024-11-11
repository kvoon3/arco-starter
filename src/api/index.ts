export interface WeilaRes<T = undefined> {
  data?: T

  errmsg: string
  errcode: number

  code?: number
  msg?: string
}

export default {
  baseURL: '/v1',
  timeout: import.meta.env.DEV
    ? 20 * 1000
    : 5 * 1000,
  method: 'POST',
}

export enum WeilaErrorCode {
  SUCCESS = 0,
  TOKEN_INVALID = 31,
}
