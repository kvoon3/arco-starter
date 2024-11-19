import { resolve } from 'node:path'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import InlineEnum from 'unplugin-inline-enum/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { viteMockServe as ViteMockServe } from 'vite-plugin-mock'
// import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import SvgLoader from 'vite-svg-loader'
import ConfigArcoStyleImportPlugin from './plugin/arcoStyleImport'

export default defineConfig({
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

  server: {
    cors: true,
    proxy: {
      '/v1': {
        target: 'http://demo.weila.hk',
        // target: 'http://192.168.0.125:8088',
        changeOrigin: true,
      },
    },
  },

  plugins: [

    ViteMockServe({
      mockPath: 'generated/mock',
      enable: true,
    }),

    ViteYaml(),

    // InlineEnum(),

    // DO not use it currently, See `https://github.com/posva/unplugin-vue-router/discussions/429`
    // VueDevTools(),

    UnoCSS(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layout',
      defaultLayout: 'default',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
        VueRouterAutoImports,
        {
          from: '@vueuse/components',
          imports: ['UseImage'],
        },
        // {
        //   from: '@tanstack/vue-form',
        //   imports: ['useForm'],
        // },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/layout',
        'src/utils',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    VueMacros({
      plugins: {
        vue: Vue(),
        vueRouter: VueRouter({
          extensions: ['.vue'],
          exclude: ['**/components/**'],
        }),
      },
    }),

    SvgLoader({ svgoConfig: {} }),

    ConfigArcoStyleImportPlugin(),
  ],
})
