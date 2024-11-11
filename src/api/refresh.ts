import { access_token, expires_in, refresh_token } from '~/shared/states'
import { weilaRequest } from './instances/request'

export async function tryRefreshToken() {
  if (!refresh_token.value)
    throw new Error('No refresh token')

  const { errcode, data } = await weilaRequest.post<{
    access_token: string
    expires_in: number
    refresh_token: string
  }>('/sessions/refresh', {
    refresh_token: refresh_token.value,
  })

  if (errcode !== 0)
    throw new Error('Refresh token failed')

  if (!data)
    throw new Error('no data')

  access_token.value = data.access_token
  expires_in.value = data.expires_in
  refresh_token.value = data.refresh_token
}
