import type { WeilaRes } from '..'
import { Message } from '@arco-design/web-vue'
import { ofetch } from 'ofetch'
import { access_token, app_id, app_sign, isLogin, isNeedRefresh, logout, timestamp } from '~/shared/states'
import defaultConfig, { isPublicApi, WeilaErrorCode, weilaLogoutErrorCodes } from '..'
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
      isLogin.value
      && isNeedRefresh.value
      && !isPublicApi(request.toString())
    ) {
      tryRefreshToken()
    }
  },
  onResponse({ response }) {
    const { errcode, errmsg } = response._data as WeilaRes

    if (errcode === WeilaErrorCode.SUCCESS) {
      // response._data = { data: undefined, ...response._data.data }
      response._data = response._data.data
    }
    else if (
      weilaLogoutErrorCodes
        .findIndex(i => errcode === i) >= 0
    ) {
      logout()
    }
    else {
      Message.error(`${errcode} ${errmsg}`)
    }
  },
  onResponseError({ error }) {
    Message.error(error?.message || 'Unknown Fetch Error')
  },
})
