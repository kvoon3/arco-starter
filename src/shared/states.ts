import md5 from 'md5'

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

watch(access_token, (token) => {
  if (token)
    last_login_time.value = timestamp.value
})

export const isLogin = computed(() =>
  access_token.value
  && refresh_token.value
  && last_login_time
  && expires_in,
)
export const isNeedRefresh = computed(() =>
  isLogin
  && timestamp.value - last_login_time.value > (expires_in.value * 1000) - EXPIRES_BUFFER,
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
