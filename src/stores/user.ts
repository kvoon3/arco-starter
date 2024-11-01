import { cloneDeep } from 'lodash'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LoginModel } from '~/api/user'

export type Role = '' | '*' | 'admin' | 'user'

export const useUserStore = defineStore('user', () => {
  const state = ref<LoginModel | undefined>(undefined)

  const role = computed<Role>(() => '*')
  const userInfo = computed(() => cloneDeep(state.value?.user))
  const orgInfo = computed(() => cloneDeep(state.value?.org))
  const accountInfo = computed(() => cloneDeep(state.value?.account))

  return {
    role,
    userInfo,
    orgInfo,
    accountInfo,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
