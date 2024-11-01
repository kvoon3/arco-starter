<script setup lang="ts">
console.log('sdflkj')
</script>

<template>
  <!-- <a-scrollbar type="track" style="height:200px;overflow: auto;">
  </a-scrollbar> -->
  <a-menu
    :style="{ width: '200px', height: '100%' }"
    :default-open-keys="['0']"
    :default-selected-keys="['0_2']"
    breakpoint="xl"
  >
    <a-sub-menu key="0">
      <template #icon>
        <icon-apps />
      </template>
      <template #title>
        Navigation 1
      </template>
      <a-menu-item key="0_0">
        Menu 1
      </a-menu-item>
      <a-menu-item key="0_1">
        Menu 2
      </a-menu-item>
      <a-menu-item key="0_2">
        Menu 3
      </a-menu-item>
      <a-menu-item key="0_3">
        Menu 4
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
