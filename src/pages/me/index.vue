<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { weilaFetch } from '~/api/instances/fetcher'

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
  <div class="w-full p-4">
    <div v-if="data" class="rounded-lg bg-white p-6 shadow-md transition-colors duration-200 dark:bg-gray-800">
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
          <p><span class="font-medium">Gender:</span> {{ data.sex === 0 ? 'Male' : 'Female' }}</p>
          <p>
            <span class="font-medium">Phone:</span> +{{ data.country_code }} {{ data.bind_phone }}
            <a-button ml2 inline-flex gap2 size="small" @click="router.push('/me/binding-phone')">
              <i i-ph-pen />
              Change
            </a-button>
          </p>
          <p class="mt-4">
            <a-button inline-flex gap2 size="small" @click="router.push('/me/reset-password')">
              <i i-ph-lock-key />
              Reset Password
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
