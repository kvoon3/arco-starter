import DistZip from 'unplugin-dist-zip/vite'
import ImageMin from 'unplugin-imagemin/vite'
import { mergeConfig } from 'vite'
import { name } from '../package.json'
import configArcoResolverPlugin from './plugin/arcoResolver'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'
import baseConfig from './vite.config.base'

export default mergeConfig(
  baseConfig,
  {
    mode: 'production',
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            chart: ['echarts', 'vue-echarts'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configArcoResolverPlugin(),
      // @ts-expect-error type error
      ImageMin(),
      DistZip({
        filename() {
          const date = new Date()

          const formattedDate = date.getFullYear().toString()
            + (date.getMonth() + 1).toString().padStart(2, '0')
            + date.getDate().toString().padStart(2, '0')
            + date.getHours().toString().padStart(2, '0')
            + date.getMinutes().toString().padStart(2, '0')
            + date.getSeconds().toString().padStart(2, '0')

          return `${name}_${formattedDate}`
        },
      }),
    ],
  },
)
