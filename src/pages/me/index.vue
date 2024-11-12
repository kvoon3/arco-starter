<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { weilaFetch } from '~/api/instances/fetcher'

const { t } = useI18n()

definePage({
  meta: {
    menu: {
      label: 'menu.me',
      order: 3,
      icon: 'icon-user',
    },
  },
})

interface User {
  id: number
  num: string
  sex: number
  name: string
  bind_phone: string
  country_code: string
  avatar: string
}

const router = useRouter()

const { data } = useQuery({
  queryKey: ['user'],
  queryFn: () => weilaFetch<{ user: User }>('/corp/web/user-selfinfo').then(({ user }) => user),
})

$inspect(data)

const editUserInfoModalState = reactive({
  visible: false,
})
</script>

<template>
  <div class="w-full p2">
    <a-breadcrumb>
      <RouterLink to="/me">
        <a-breadcrumb-item>Me</a-breadcrumb-item>
      </RouterLink>
    </a-breadcrumb>
    <div v-if="data" class="rounded-lg p-6 shadow-md transition-colors duration-200 bg-base">
      <div flex justify-between>
        <div class="mb-6 flex items-center">
          <img :src="data.avatar" :alt="data.name" class="mr-4 h-16 w-16 rounded-full">
          <div>
            <h2 class="text-2xl text-gray-800 font-semibold dark:text-white">
              {{ data.name }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              ID: {{ data.num }}
            </p>
          </div>
        </div>
        <a-modal
          v-model:visible="editUserInfoModalState.visible" title="Edit User Infomation"
          @before-ok="() => void 0"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('user.gender') }}:</span> {{ data.sex === 0 ? t('male') : t('famale') }}</p>
          <p>
            <span class="font-medium">{{ t('user.phone') }}:</span> +{{ data.country_code }} {{ data.bind_phone }}
            <a-button inline-flex size="small" @click="router.push('/me/binding-phone')">
              <template #icon>
                <i i-ph-pen />
              </template>
            </a-button>
          </p>
          <p class="mt-4">
            <a-button inline-flex gap2 size="small" @click="router.push('/me/reset-password')">
              <i i-ph-lock-key />
              {{ t('button.reset-password') }}
            </a-button>
          </p>
        </div>
      </div>
    </div>
    <div v-else class="rounded-lg bg-white p-6 text-center text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-300">
      Loading user information...
    </div>
  </div>
</template>
