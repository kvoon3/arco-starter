<script lang="ts" setup>
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import { computed } from 'vue'
import GlobalSetting from '~/components/global-setting/index.vue'

const { locale } = useI18n()

const arcoLang = computed(() => ({
  'zh-CN': zhCN,
  'en': enUS,
}[locale.value]))

watchEffect(() => {
  console.log('locale.value', locale.value)
  console.log('arcoLang.value', arcoLang.value)
})
</script>

<template>
  <a-config-provider :locale="arcoLang">
    <router-view />
    <GlobalSetting />
  </a-config-provider>
</template>
