// config/vite.config.dev.ts
import { mergeConfig } from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0/node_modules/vite/dist/node/index.js";

// config/vite.config.ts
import { resolve } from "node:path";
import ViteYaml from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/@modyfi+vite-plugin-yaml@1.1.0_rollup@4.24.2_vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0_/node_modules/@modyfi/vite-plugin-yaml/dist/index.js";
import Vue from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unocss@0.63.6_postcss@8.4.47_rollup@4.24.2_typescript@5.6.3_vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unplugin-auto-import@0.18.3_@nuxt+kit@3.13.2_rollup@4.24.2_webpack-sources@3.2.3__@vueuse+cor_3ub3tweqoootzmcftqcfvrxzyy/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_@nuxt+kit@3.13.2_rollup@4.24.2_webpack-so_6u2dm66szt3hdx66l2vp6uhzca/node_modules/unplugin-vue-components/dist/vite.js";
import VueMacros from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unplugin-vue-macros@2.13.3_@vueuse+core@11.1.0_vue@3.5.12_typescript@5.6.3___esbuild@0.23.1_r_zhx7e2f6fopwu2w6cih4rrg7hi/node_modules/unplugin-vue-macros/dist/vite.js";
import { VueRouterAutoImports } from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.24.2_vue-router@4.4.5_vue@3.5.12_typescript@5.6.3___vue@3_27pr546dvjegmoh6itgbmc5yu4/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.24.2_vue-router@4.4.5_vue@3.5.12_typescript@5.6.3___vue@3_27pr546dvjegmoh6itgbmc5yu4/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0/node_modules/vite/dist/node/index.js";
import { viteMockServe as ViteMockServe } from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.23.1_mockjs@1.1.0_vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0_/node_modules/vite-plugin-mock/dist/index.mjs";
import Layouts from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.4.10_@types+node@22.8.1_less@4.2.0_terser@5.36.0__vue-r_mfumfubauyszwyh3aoajz3cqve/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import SvgLoader from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.12_typescript@5.6.3_/node_modules/vite-svg-loader/index.js";

// config/plugin/arcoStyleImport.ts
import { vitePluginForArco } from "file:///C:/Users/admin/weila/weila-com-manager/node_modules/.pnpm/@arco-plugins+vite-vue@1.4.5/node_modules/@arco-plugins/vite-vue/lib/index.js";
function configArcoStyleImportPlugin() {
  const arcoResolverPlugin = vitePluginForArco({});
  return arcoResolverPlugin;
}

// config/vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\admin\\weila\\weila-com-manager\\config";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__vite_injected_original_dirname, "../src")
      },
      {
        find: "assets",
        replacement: resolve(__vite_injected_original_dirname, "../src/assets")
      },
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js"
        // Resolve the i18n warning issue
      },
      {
        find: "vue",
        replacement: "vue/dist/vue.esm-bundler.js"
        // compile template
      }
    ],
    extensions: [".ts", ".js"]
  },
  define: {
    "process.env": {}
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            "src/assets/style/breakpoint.less"
          )}";`
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    cors: true,
    proxy: {
      "/v1": {
        target: "http://demo.weila.hk",
        // target: 'http://192.168.0.125:8088',
        changeOrigin: true
      }
    }
  },
  plugins: [
    ViteMockServe({
      mockPath: "generated/mock",
      enable: false
    }),
    ViteYaml(),
    // InlineEnum(),
    // DO not use it currently, See `https://github.com/posva/unplugin-vue-router/discussions/429`
    // VueDevTools(),
    UnoCSS(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "src/layout",
      defaultLayout: "default"
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        "pinia",
        VueRouterAutoImports,
        {
          from: "@vueuse/components",
          imports: ["UseImage"]
        }
        // {
        //   from: '@tanstack/vue-form',
        //   imports: ['useForm'],
        // },
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores",
        "src/layout",
        "src/utils"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    VueMacros({
      plugins: {
        vue: Vue(),
        vueRouter: VueRouter({
          extensions: [".vue"],
          exclude: ["**/components/**"]
        })
      }
    }),
    SvgLoader({ svgoConfig: {} }),
    configArcoStyleImportPlugin()
  ]
});

// config/vite.config.dev.ts
var vite_config_dev_default = mergeConfig(
  {
    mode: "development",
    server: {
      open: false,
      fs: {
        strict: true
      }
    },
    plugins: []
  },
  vite_config_default
);
export {
  vite_config_dev_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29uZmlnL3ZpdGUuY29uZmlnLmRldi50cyIsICJjb25maWcvdml0ZS5jb25maWcudHMiLCAiY29uZmlnL3BsdWdpbi9hcmNvU3R5bGVJbXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFx3ZWlsYVxcXFx3ZWlsYS1jb20tbWFuYWdlclxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFkbWluXFxcXHdlaWxhXFxcXHdlaWxhLWNvbS1tYW5hZ2VyXFxcXGNvbmZpZ1xcXFx2aXRlLmNvbmZpZy5kZXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkbWluL3dlaWxhL3dlaWxhLWNvbS1tYW5hZ2VyL2NvbmZpZy92aXRlLmNvbmZpZy5kZXYudHNcIjtpbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgYmFzZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcbiAge1xuICAgIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gICAgc2VydmVyOiB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGZzOiB7XG4gICAgICAgIHN0cmljdDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXSxcbiAgfSxcbiAgYmFzZUNvbmZpZyxcbilcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcd2VpbGFcXFxcd2VpbGEtY29tLW1hbmFnZXJcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFx3ZWlsYVxcXFx3ZWlsYS1jb20tbWFuYWdlclxcXFxjb25maWdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkbWluL3dlaWxhL3dlaWxhLWNvbS1tYW5hZ2VyL2NvbmZpZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgVml0ZVlhbWwgZnJvbSAnQG1vZHlmaS92aXRlLXBsdWdpbi15YW1sJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbi8vIGltcG9ydCBJbmxpbmVFbnVtIGZyb20gJ3VucGx1Z2luLWlubGluZS1lbnVtL3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIGFzIFZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuLy8gaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IFN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQgQ29uZmlnQXJjb1N0eWxlSW1wb3J0UGx1Z2luIGZyb20gJy4vcGx1Z2luL2FyY29TdHlsZUltcG9ydCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICd+JyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAnYXNzZXRzJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2Fzc2V0cycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ3Z1ZS1pMThuJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6ICd2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLmNqcy5qcycsIC8vIFJlc29sdmUgdGhlIGkxOG4gd2FybmluZyBpc3N1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ3Z1ZScsXG4gICAgICAgIHJlcGxhY2VtZW50OiAndnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzJywgLy8gY29tcGlsZSB0ZW1wbGF0ZVxuICAgICAgfSxcbiAgICBdLFxuICAgIGV4dGVuc2lvbnM6IFsnLnRzJywgJy5qcyddLFxuICB9LFxuXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudic6IHt9LFxuICB9LFxuXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIGxlc3M6IHtcbiAgICAgICAgbW9kaWZ5VmFyczoge1xuICAgICAgICAgIGhhY2s6IGB0cnVlOyBAaW1wb3J0IChyZWZlcmVuY2UpIFwiJHtyZXNvbHZlKFxuICAgICAgICAgICAgJ3NyYy9hc3NldHMvc3R5bGUvYnJlYWtwb2ludC5sZXNzJyxcbiAgICAgICAgICApfVwiO2AsXG4gICAgICAgIH0sXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHNlcnZlcjoge1xuICAgIGNvcnM6IHRydWUsXG4gICAgcHJveHk6IHtcbiAgICAgICcvdjEnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9kZW1vLndlaWxhLmhrJyxcbiAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMC4xMjU6ODA4OCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG5cbiAgICBWaXRlTW9ja1NlcnZlKHtcbiAgICAgIG1vY2tQYXRoOiAnZ2VuZXJhdGVkL21vY2snLFxuICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICB9KSxcblxuICAgIFZpdGVZYW1sKCksXG5cbiAgICAvLyBJbmxpbmVFbnVtKCksXG5cbiAgICAvLyBETyBub3QgdXNlIGl0IGN1cnJlbnRseSwgU2VlIGBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlci9kaXNjdXNzaW9ucy80MjlgXG4gICAgLy8gVnVlRGV2VG9vbHMoKSxcblxuICAgIFVub0NTUygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKHtcbiAgICAgIGxheW91dHNEaXJzOiAnc3JjL2xheW91dCcsXG4gICAgICBkZWZhdWx0TGF5b3V0OiAnZGVmYXVsdCcsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgJ3BpbmlhJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICBmcm9tOiAnQHZ1ZXVzZS9jb21wb25lbnRzJyxcbiAgICAgICAgICBpbXBvcnRzOiBbJ1VzZUltYWdlJ10sXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBmcm9tOiAnQHRhbnN0YWNrL3Z1ZS1mb3JtJyxcbiAgICAgICAgLy8gICBpbXBvcnRzOiBbJ3VzZUZvcm0nXSxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgJ3NyYy9zdG9yZXMnLFxuICAgICAgICAnc3JjL2xheW91dCcsXG4gICAgICAgICdzcmMvdXRpbHMnLFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgVnVlTWFjcm9zKHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgdnVlOiBWdWUoKSxcbiAgICAgICAgdnVlUm91dGVyOiBWdWVSb3V0ZXIoe1xuICAgICAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZSddLFxuICAgICAgICAgIGV4Y2x1ZGU6IFsnKiovY29tcG9uZW50cy8qKiddLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICBTdmdMb2FkZXIoeyBzdmdvQ29uZmlnOiB7fSB9KSxcblxuICAgIENvbmZpZ0FyY29TdHlsZUltcG9ydFBsdWdpbigpLFxuICBdLFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcd2VpbGFcXFxcd2VpbGEtY29tLW1hbmFnZXJcXFxcY29uZmlnXFxcXHBsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcd2VpbGFcXFxcd2VpbGEtY29tLW1hbmFnZXJcXFxcY29uZmlnXFxcXHBsdWdpblxcXFxhcmNvU3R5bGVJbXBvcnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkbWluL3dlaWxhL3dlaWxhLWNvbS1tYW5hZ2VyL2NvbmZpZy9wbHVnaW4vYXJjb1N0eWxlSW1wb3J0LnRzXCI7LyoqXG4gKiBUaGVtZSBpbXBvcnRcbiAqIFx1NjgzN1x1NUYwRlx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FyY28tZGVzaWduL2FyY28tcGx1Z2lucy9ibG9iL21haW4vcGFja2FnZXMvcGx1Z2luLXZpdGUtdnVlL1JFQURNRS5tZFxuICogaHR0cHM6Ly9hcmNvLmRlc2lnbi92dWUvZG9jcy9zdGFydFxuICovXG5pbXBvcnQgeyB2aXRlUGx1Z2luRm9yQXJjbyB9IGZyb20gJ0BhcmNvLXBsdWdpbnMvdml0ZS12dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ0FyY29TdHlsZUltcG9ydFBsdWdpbigpIHtcbiAgY29uc3QgYXJjb1Jlc29sdmVyUGx1Z2luID0gdml0ZVBsdWdpbkZvckFyY28oe30pXG4gIHJldHVybiBhcmNvUmVzb2x2ZXJQbHVnaW5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlUsU0FBUyxtQkFBbUI7OztBQ0FwQyxTQUFTLGVBQWU7QUFDN1YsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFFdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZUFBZTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGlCQUFpQixxQkFBcUI7QUFFL0MsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZUFBZTs7O0FDUnRCLFNBQVMseUJBQXlCO0FBRW5CLFNBQVIsOEJBQStDO0FBQ3BELFFBQU0scUJBQXFCLGtCQUFrQixDQUFDLENBQUM7QUFDL0MsU0FBTztBQUNUOzs7QURYQSxJQUFNLG1DQUFtQztBQWlCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxRQUFRO0FBQUEsTUFDMUM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2pEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxLQUFLO0FBQUEsRUFDM0I7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLGVBQWUsQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixZQUFZO0FBQUEsVUFDVixNQUFNLDhCQUE4QjtBQUFBLFlBQ2xDO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLFFBQ0EsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBO0FBQUEsUUFFUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBRVAsY0FBYztBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLElBRUQsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLElBT1QsT0FBTztBQUFBO0FBQUEsSUFHUCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sU0FBUyxDQUFDLFVBQVU7QUFBQSxRQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUE7QUFBQSxJQUdELFdBQVc7QUFBQTtBQUFBLE1BRVQsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBO0FBQUEsTUFFeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsTUFDekMsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBRUQsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsUUFDVCxXQUFXLFVBQVU7QUFBQSxVQUNuQixZQUFZLENBQUMsTUFBTTtBQUFBLFVBQ25CLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxRQUM5QixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsVUFBVSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFBQSxJQUU1Qiw0QkFBNEI7QUFBQSxFQUM5QjtBQUNGLENBQUM7OztBRDFJRCxJQUFPLDBCQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLFFBQ0YsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUM7QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
