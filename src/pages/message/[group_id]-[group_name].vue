<script setup lang="ts">
import addMembersModal from './components/add-members-modal.vue'
import Settings from './components/settings.vue'

const route = useRoute('/message/[group_id]-[group_name]')
const messages = ref([
  { id: 1, sender: 'Alice', content: 'Hello everyone!' },
  { id: 2, sender: 'Bob', content: 'Hi Alice, how are you?' },
  { id: 3, sender: 'Charlie', content: 'Hey guys, what\'s up?' },
])
const newMessage = ref('')

function sendMessage() {
  if (newMessage.value.trim()) {
    messages.value.push({
      id: messages.value.length + 1,
      sender: 'You',
      content: newMessage.value,
    })
    newMessage.value = ''
  }
}

const addMembersModalVisible = ref(false)
const settingsVisible = ref(false)
</script>

<template>
  <main class="h-full w-full flex flex-col text-gray-900 bg-base dark:text-gray-100">
    <header class="chat-header flex items-center justify-between bg-gray-100 p-4 dark:bg-dark-300">
      <h1 class="text-2xl font-bold">
        {{ route.params.group_name }}
      </h1>
      <nav class="space-x-2">
        <a-button
          class="rounded bg-green-500 px-4 py-2 text-white transition dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700" @click="addMembersModalVisible = true"
        >
          <template #icon>
            <IconUserAdd />
          </template>
        </a-button>
        <a-button class="rounded bg-blue-500 px-4 py-2 text-white transition dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700" @click="settingsVisible = true">
          <template #icon>
            <IconSettings />
          </template>
        </a-button>
      </nav>
    </header>

    <section class="chat-messages flex-grow overflow-y-auto p-4">
      <ul class="space-y-4">
        <li v-for="message in messages" :key="message.id" class="rounded-lg bg-gray-50 p-3 dark:bg-dark-800">
          <strong class="font-semibold">{{ message.sender }}:</strong>
          <p class="mt-1">
            {{ message.content }}
          </p>
        </li>
      </ul>
    </section>

    <footer class="chat-input p-4 bg-base">
      <form class="flex" @submit.prevent="sendMessage">
        <input
          v-model="newMessage"
          type="text"
          placeholder="输入消息..."
          class="dark:bg-black-600 flex-grow border border-gray-300 rounded-l p-2 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button
          type="submit"
          class="rounded-r bg-blue-500 px-4 py-2 text-white transition dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          发送
        </button>
      </form>
    </footer>
  </main>

  <addMembersModal v-model:visible="addMembersModalVisible" :group-id="Number(route.params.group_id)" />

  <a-drawer
    v-model:visible="settingsVisible"
    :width="500"
    placement="right"
    unmount-on-close
  >
    <template #title>
      Group Settings
    </template>
    <Settings :group-id="Number(route.params.group_id)" />
  </a-drawer>
</template>
