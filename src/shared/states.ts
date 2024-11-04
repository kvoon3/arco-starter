import md5 from 'md5'

export const access_token = useLocalStorage('token', '')
export const isLogin = computed(() => Boolean(access_token.value))

export const app_id = '102036'
export const timestamp = useTimestamp({ offset: 0 })
export const app_sign = computed(() => md5(`${timestamp.value}${app_id}`))
