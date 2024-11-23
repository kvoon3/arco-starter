<script setup lang="ts">
import type { UploadRequest as UploadReq, RequestOption as UploadReqOpt } from '@arco-design/web-vue/es/upload/interfaces'
import Message from '@arco-design/web-vue/es/message'
import imageCompression from 'browser-image-compression'
import { weilaRequest } from '~/api/instances/request'

// TODO: upload to server manually

// const props = withDefaults(defineProps<{
//   enableUpload?: boolean
// }>(), {
//   enableUpload: true,
// })

const src = defineModel('src', { default: '' })

// type State =
//   'idle'
//   | 'uploading'
//   | 'compressing'
//   | 'compressed'
//   | 'done'
//   | 'error'

// let state: State = 'idle'
const file = shallowRef<File | null>(null)
const file_compressed = shallowRef<File | null>(null)

watch(file, async (f) => {
  if (!f)
    return

  file_compressed.value = await imageCompression(f, {
    maxSizeMB: 4, // Compress to maximum 1MB
    maxWidthOrHeight: 1920, // Limit width/height to 1920px
    useWebWorker: true,
  })
})

// if (!props.enableUpload) {
//   watchOnce(() => props.enableUpload, (enabled /* must be true */) => {
//   })
// }

function uploadAvatar(option: UploadReqOpt): UploadReq {
  const { onProgress, onError, onSuccess, fileItem } = option

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

defineExpose({
  // state,
})
</script>

<template>
  <a-upload
    :default-file-list="[{ uid: '1', url: src }]" :custom-request="uploadAvatar" :limit="1"
    list-type="picture"
  />
</template>
