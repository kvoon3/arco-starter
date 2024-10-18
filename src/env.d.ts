/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component

  // TODO: not work
  // interface ComponentCustomProperties {
  //   $t: (key: string) => string;
  //   $tm: (key: string) => []|{[p: string]: any};
  // }
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}
