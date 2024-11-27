<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import Cropper from 'cropperjs'
import { defineEmits } from 'unplugin-vue-macros/macros'
import lg from '~/assets/images/login-banner.png'

const props = withDefaults(defineProps<{
  file: File
  width?: number
  height?: number
}>(), {
  width: 40,
  height: 40,
})

const emits = defineEmits<{
  save: (img: Blob) => void
}>()

const { t } = useI18n()

const src = ref('')
watchImmediate(() => props.file, (file) => {
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        src.value = e.target.result
      }
    }
    reader.readAsDataURL(file)
  }
  else {
    src.value = ''
  }
})

const img = templateRef<HTMLImageElement>('img')
const cropper = ref<Cropper | undefined>(undefined)

const _aspectRatio = ref<'1:1' | '16:9'>('1:1')
const aspectRatio = computed(() => {
  if (_aspectRatio.value === '16:9')
    return 16 / 9
  else
    return 1
})
watch(aspectRatio, (val) => {
  if (val)
    cropper.value!.setAspectRatio(val)
})

watchImmediate([src, img], ([src, img]) => {
  if (!src || !img)
    return

  cropper.value = new Cropper(img, reactive({
    aspectRatio,
  }))
})

function save() {
  if (!cropper.value) {
    Message.error('cropper not ready')
    return
  }

  cropper.value?.getCroppedCanvas().toBlob((blob) => {
    if (blob)
      emits('save', blob)
    else
      Message.error('no data')
  })
}
</script>

<template>
  <div :style="{ width: `${width}rem`, height: `${height}rem` }" relative>
    <img ref="img" :src="src" block w-full>
    <ToolbarRoot
      class="shadow-blackA7 absolute bottom-4 position-x-center max-w-[610px] w-fit flex rounded-md bg-white p-[10px] shadow-[0_2px_10px] !min-w-max"
      aria-label="Formatting options">
      <ToolbarToggleGroup v-model="_aspectRatio" space-x-4 type="single" aria-label="Text Alignment">
        <ToolbarToggleItem
          class="ml-0.5 h-[25px] inline-flex flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] text-black leading-none outline-none focus:relative first:ml-0 data-[state=on]:bg-primary-100 hover:bg-primary-200 data-[state=on]:text-primary focus:shadow-[0_0_0_2px] focus:shadow-primary"
          value="16:9" aria-label="16:9">
          16:9
        </ToolbarToggleItem>
        <ToolbarToggleItem
          class="ml-0.5 h-[25px] inline-flex flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] text-black leading-none outline-none focus:relative first:ml-0 data-[state=on]:bg-primary-100 hover:bg-primary-200 data-[state=on]:text-primary focus:shadow-[0_0_0_2px] focus:shadow-primary"
          value="1:1" aria-label="1:1">
          1:1
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator class="mx-[10px] w-[1px] bg-gray" />
      <ToolbarLink
        class="ml-0.5 h-[25px] inline-flex flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-transparent bg-white px-[5px] text-[13px] leading-none outline-none focus:relative first:ml-0 hover:cursor-pointer data-[state=on]:bg-green5 hover:bg-green3 hover:bg-transparent data-[state=on]:text-primary !font-normal focus:shadow-[0_0_0_2px] focus:shadow-primary"
        target="_blank" style="margin-right: 10">
        {{ file.name }}
      </ToolbarLink>
      <ToolbarButton
        class="h-[25px] inline-flex flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-primary px-[10px] text-[13px] text-white leading-none outline-none focus:relative hover:bg-primary-400 focus:shadow-[0_0_0_2px] focus:shadow-primary"
        style="margin-left: auto" @click="() => save()">
        {{ t('button.save') }}
      </ToolbarButton>
    </ToolbarRoot>
  </div>
</template>
