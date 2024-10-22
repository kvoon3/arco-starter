import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import SvgLoader from 'vite-svg-loader'

import ConfigArcoStyleImportPlugin from './plugin/arcoStyleImport'

export default defineConfig({
  plugins: [
    // DO not use it currently, See `https://github.com/posva/unplugin-vue-router/discussions/429`
    VueDevTools(),

    UnoCSS(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/layout',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    // Components({
    //   // allow auto load markdown components under `./src/components/`
    //   extensions: ['vue', 'md'],
    //   // allow auto import and register components used in markdown
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //   dts: 'src/components.d.ts',
    // }),

    Vue(),

    VueJsx(),

    SvgLoader({ svgoConfig: {} }),

    ConfigArcoStyleImportPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less',
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})
