import CryptoJS from 'crypto-js'
import md5 from 'md5'
import { ENCRYPTION_KEY } from './const'

/**
 * Authentication
 */

// Time buffer (in milliseconds) before the token actually expires
// 4 hours = 1000 ms * 60 seconds * 60 minutes * 4 hours
const EXPIRES_BUFFER = 1000 * 60 * 60 * 4

export const timestamp = useTimestamp({ offset: 0 })

export const app_id = '102036'
export const app_sign = computed(() => md5(`${timestamp.value}${app_id}`))

export const access_token = useLocalStorage('token', '')
export const refresh_token = useLocalStorage('refresh_token', '')
export const expires_in = useLocalStorage('expires_in', -1)
export const last_login_time = useLocalStorage('last_login_time', -1)

export function logout() {
  return new Promise((resolve) => {
    access_token.value = ''
    refresh_token.value = ''
    last_login_time.value = -1
    expires_in.value = -1
    resolve(void 0)
  })
}

export const accountHistoryRecord = useLocalStorage('account-history-record', new Map<string, string>(), {
  serializer: {
    read: (v: string) => {
      const decrypted = CryptoJS.AES.decrypt(v, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8)
      return new Map(JSON.parse(decrypted))
    },
    write: (v: Map<string, string>) => {
      const jsonString = JSON.stringify(Array.from(v.entries()))
      return CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString()
    },
  },
})

watch(access_token, (token) => {
  if (token)
    last_login_time.value = timestamp.value
})

export const isLogin = computed(() =>
  Boolean(access_token.value)
  && Boolean(refresh_token.value)
  && Boolean(last_login_time.value)
  && Boolean(expires_in.value),
)

export const isNeedRefresh = computed(() =>
  timestamp.value - last_login_time.value > (expires_in.value * 1000) - EXPIRES_BUFFER,
)

/**
 * Theme
 */

export const isDark = useDark()
// https://arco.design/vue/docs/dark
watchEffect(() => {
  isDark.value
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme')
})
