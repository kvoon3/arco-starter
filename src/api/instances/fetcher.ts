import type { WeilaRes } from '..'
import { Message } from '@arco-design/web-vue'
import { ofetch } from 'ofetch'
import { access_token, app_id, app_sign, isNeedRefresh, timestamp } from '~/shared/states'
import defaultConfig, { WeilaErrorCode } from '..'
import { tryRefreshToken } from '../refresh'

export const weilaFetch = ofetch.create({
  ...defaultConfig,
  headers: {
    'Content-Type': 'application/json',
  },
  onRequest({ request, options }) {
    options.query = {
      app_id,
      'access-token': access_token.value,
      'et': String(timestamp.value),
      'sign': app_sign.value,
      ...options.query,
    }

    if (
      isNeedRefresh.value
      && !(request.toString()).endsWith('refresh')
    ) {
      tryRefreshToken()
    }
  },
  onResponse({ response }) {
    const { errcode, errmsg } = response._data as WeilaRes

    if (errcode === WeilaErrorCode.SUCCESS)
      response._data = response._data.data
    else if (errcode === WeilaErrorCode.TOKEN_INVALID)
      location.href = '/login'
    else
      throw new Error(`${errcode} ${errmsg}`)
  },
  onResponseError({ error }) {
    Message.error(error?.message || 'Unknown Fetch Error')
  },
})
