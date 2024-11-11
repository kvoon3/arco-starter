<script setup lang="ts">
import type { UploadRequest as UploadReq, RequestOption as UploadReqOpt } from '@arco-design/web-vue/es/upload/interfaces'
import Message from '@arco-design/web-vue/es/message'
import imageCompression from 'browser-image-compression'
import { weilaRequest } from '~/api/instances/request'

const src = defineModel('src', { default: '' })

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
</script>

<template>
  <a-upload :custom-request="uploadAvatar" :limit="1" list-type="picture" />
</template>
