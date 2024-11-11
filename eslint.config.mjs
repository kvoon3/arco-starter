import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default antfu(
  {
    unocss: true,
    vue: true,
    typescript: true,
    formatters: true,
  },
  pluginQuery.configs['flat/recommended'],
)
