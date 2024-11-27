<script setup lang="ts">
import type { UploadRequest as UploadReq, RequestOption as UploadReqOpt } from '@arco-design/web-vue/es/upload/interfaces'
import Message from '@arco-design/web-vue/es/message'
// import { UseImage } from '@vueuse/components'
// import { useFileSystemAccess } from '@vueuse/core'
import imageCompression from 'browser-image-compression'
import { weilaRequest } from '~/api/instances/request'
// import TheCropper from './TheCropper.vue'

// TODO: upload to server manually

const src = defineModel('src', { default: '' })
const { t } = useI18n()

// const { file, open } = useFileSystemAccess({
//   types: [
//     {
//       description: 'Images',
//       accept: {
//         'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp', '.bmp', '.tiff', '.svg'],
//       },
//     },
//   ],
// })

const isCropperModalVisible = ref(false)

// watch(file, async (f) => {
//   if (f)
//     isCropperModalVisible.value = true
// })

// function useUpload(option: UP) {

// function useUpload(option: UploadReqOpt) {
//   return option
// }

function uploadAvatar(option: UploadReqOpt): UploadReq {
  const { onProgress, onError, onSuccess, fileItem } = option

  // isCropperModalVisible.value = true

  // Compress the image
  imageCompression(fileItem.file as File, {
    maxSizeMB: 4, // Compress to maximum 1MB
    maxWidthOrHeight: 1920, // Limit width/height to 1920px
    useWebWorker: true,
  })
    .then((compressedFile) => {
      const formData = new FormData()
      formData.append('file', compressedFile)
      return weilaRequest.post<{ url: string }>('/corp/web/avatar-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            onProgress(percent)
          }
        },
      })
    })
    .then(({ data, errmsg, errcode }) => {
      if (data?.url) {
        src.value = data.url
        onSuccess(data)
      }
      else {
        throw new Error(`${errcode} ${errmsg}`)
      }
    })
    .catch((error) => {
      Message.error((error as Error)?.message || String(error))
      onError(error as Error)
    })

  return {
    abort() {
      // Implement abort logic if needed
    },
  }
}

// function onSave(img: Blob) {
//   console.log('img', img)
// }

defineExpose({
  // state,
})
</script>

<template>
  <a-upload :default-file-list="src ? [{ uid: '1', url: src }] : void 0" :custom-request="uploadAvatar" :limit="1"
    list-type="picture" />
  <!-- <div @click="() => open()">
    <UseImage v-if="src" :src alt="upload avatar" class="mb-2 h-20 w-20 cursor-pointer rounded object-cover">
      <template #loading>
        <div class="h-20 w-20 animate-pulse rounded bg-gray-200" />
      </template>
<template #error>
        <div class="h-20 w-20 flex items-center justify-center rounded bg-gray-300">
          <i i-carbon-error class="text-3xl text-gray-500" />
        </div>
      </template>
</UseImage>
<div v-else flex="~ center" size-20 rounded bg-gray:20>
  <i i-carbon-add inline-block size-14 />
</div>
</div> -->
  <DialogRoot v-model:open="isCropperModalVisible">
    <DialogTrigger>
      <!-- no -->
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="data-[state=open]:animate-overlayShow fixed inset-0 z-100 bg-black:60" />
      <DialogContent
        class="fixed left-[50%] top-[50%] z-[100] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-ease-in focus:outline-none">
        <DialogTitle class="m0 text-center text-lg font-semibold leading-loose">
          {{ t('crop.avatar') }}
        </DialogTitle>

        <!-- <TheCropper :file="file" @save="onSave" /> -->

        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <a-button>
              {{ t('button.cancel') }}
            </a-button>
          </DialogClose>
          <a-button type="primary">
            {{ t('button.submit') }}
          </a-button>
        </div>
        <DialogClose
          class="text-grass11 absolute right-[10px] top-[10px] h-[25px] w-[25px] inline-flex appearance-none items-center justify-center rounded hover:bg-gray2 focus:shadow-[0_0_0_2px] focus:shadow-gray7 focus:outline-none"
          aria-label="Close">
          <i i-carbon-close />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
