export const access_token = useLocalStorage('token', '')

export const isLogin = computed(() => Boolean(access_token.value))
