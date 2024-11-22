import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
  // pinia.use(piniaPluginPersistedstate)
}
