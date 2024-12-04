<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
const { t } = useI18n()

definePage({
  meta: {
    menu: {
      label: 'menu.workbench',
      order: 0,
      icon: 'icon-common',
    },
  },
})
</script>

<template>
  <DefineTemplate v-slot="{ title, icon }">
    <RouterLink
      to="/workbench/user-track"
      class="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 dark:bg-gray-800 hover:shadow-lg"
    >
      <div class="mb-4 flex items-center">
        <i class="mr-3 text-2xl text-primary-600 dark:text-primary-400" :class="[icon]" />
        <h3 class="text-xl text-gray-900 font-semibold dark:text-gray-100">
          {{ title }}
        </h3>
      </div>
    </RouterLink>
  </DefineTemplate>

  <div p4>
    <a-breadcrumb>
      <RouterLink to="/workbench">
        <a-breadcrumb-item>{{ t('menu.workbench') }}</a-breadcrumb-item>
      </RouterLink>
      <a-breadcrumb-item>{{ t('user-track') }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  <div>
    <div class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      <ReuseTemplate :title="t('user-track')" icon="i-carbon-map" />
    </div>
  </div>
</template>
