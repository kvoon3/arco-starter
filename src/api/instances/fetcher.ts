import { ofetch } from 'ofetch'
import { access_token, app_id, app_sign, timestamp } from '~/shared/states'

import defaultConfig from '../api.config'

export const weilaFetch = ofetch.create({
  ...defaultConfig,
  headers: {
    'Content-Type': 'application/json',
  },
  query: {
    app_id,
    'access-token': access_token.value,
    'et': String(timestamp.value),
    'sign': app_sign.value,
  },
})
