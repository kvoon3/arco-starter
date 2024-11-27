<script setup lang="ts">
import Message from '@arco-design/web-vue/es/message'
import { UseImage } from '@vueuse/components'
import { useFileSystemAccess } from '@vueuse/core'
import { defineEmits } from 'unplugin-vue-macros/macros'
import { defineExpose } from 'vue'
import { weilaRequest } from '~/api/instances/request'
import TheCropper from '~/components/TheCropper.vue'

// TODO: upload to server manually

const emits = defineEmits<{
  uploading: (precent: number) => void
}>()
const src = defineModel('src', { default: '' })
const { t } = useI18n()

const compressedFile = shallowRef<Blob | null>(null)
const isCropperModalVisible = ref(false)

const { file, open } = useFileSystemAccess({
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp', '.bmp', '.tiff', '.svg'],
      },
    },
  ],
})

watch(file, () => {
  isCropperModalVisible.value = true
})

function upload() {
  console.log('upload')

  if (!compressedFile.value)
    return

  const formData = new FormData()
  formData.append('file', compressedFile.value)

  return weilaRequest.post<{ url: string }>('/corp/web/avatar-upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      if (progressEvent.total) {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        emits('uploading', percent)
      }
    },
  })
    .then(({ data, errmsg, errcode }) => {
      if (data?.url) {
        return src.value = data.url
      }
      else {
        throw new Error(`${errcode} ${errmsg}`)
      }
    })
    .catch((error) => {
      Message.error((error as Error)?.message || String(error))
    })
}

async function onSave(file: File) {
  isCropperModalVisible.value = false

  src.value = URL.createObjectURL(file)
  compressedFile.value = file
}

defineExpose({
  upload,
})
</script>

<template>
  <div @click="() => open()">
    <UseImage v-if="src" :src="src" alt="upload avatar" class="mb-2 h-20 w-20 cursor-pointer rounded object-cover">
      <template #loading>
        <div class="h-20 w-20 animate-pulse rounded bg-gray-200" />
      </template>
      <template #error>
        <div class="h-20 w-20 flex items-center justify-center rounded bg-gray-300">
          <i i-carbon-error class="text-3xl text-gray-500" />
        </div>
      </template>
    </UseImage>
    <div v-else flex="~ center" rounded bg-gray:20 size-20>
      <i i-carbon-add inline-block size-14 />
    </div>
  </div>

  <DialogRoot v-model:open="isCropperModalVisible">
    <DialogPortal>
      <DialogOverlay class="data-[state=open]:animate-overlayShow fixed inset-0 z-100 bg-black:60" />
      <DialogContent
        class="fixed left-[50%] top-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-ease-in focus:outline-none">
        <DialogTitle class="m0 text-center text-lg font-semibold leading-loose">
          {{ t('crop.avatar') }}
        </DialogTitle>

        <TheCropper :file="file" @save="onSave" />

        <DialogClose
          class="text-grass11 absolute right-[10px] top-[10px] h-[25px] w-[25px] inline-flex appearance-none items-center justify-center rounded-full hover:bg-gray2 focus:shadow-[0_0_0_2px] focus:shadow-gray7 focus:outline-none"
          aria-label="Close">
          <i i-carbon-close />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
