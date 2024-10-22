import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(ArcoVue, {})
  app.use(ArcoVueIcon)
}
