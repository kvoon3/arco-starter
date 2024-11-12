<script lang="ts" setup>
import { useFullscreen, useToggle } from '@vueuse/core'
import { computed, inject } from 'vue'
import Menu from '~/components/menu/index.vue'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'
import { access_token, isDark, last_login_time, refresh_token } from '~/shared/states'

const { t, locale } = useI18n()
const router = useRouter()

const appStore = useAppStore()
const userStore = useUserStore()
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()
const avatar = computed(() => {
  return userStore.userInfo?.avatar
})
const topMenu = computed(() => appStore.topMenu && appStore.menu)
const toggleTheme = useToggle(isDark)

// function setVisible() {
//   appStore.updateSettings({ globalSettings: true })
// }

const toggleDrawerMenu = inject('toggleDrawerMenu') as () => void

async function toggleLocales() {
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

function logout() {
  access_token.value = ''
  refresh_token.value = ''
  last_login_time.value = -1
  router.push('/login')
}
</script>

<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        >
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          {{ t('project.name') }}
        </a-typography-title>
        <icon-menu-fold
          v-if="!topMenu && appStore.device === 'mobile'"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
    <div class="center-side">
      <Menu v-if="topMenu" />
    </div>
    <ul class="right-side">
      <li>
        <a-tooltip :content="t('settings.language')">
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="toggleLocales"
          >
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-button
          class="nav-btn"
          type="outline"
          shape="circle"
          @click="toggleTheme()"
        >
          <template #icon>
            <icon-moon-fill v-if="!isDark" />
            <icon-sun-fill v-else />
          </template>
        </a-button>
      </li>
      <li>
        <a-tooltip
          :content="
            isFullscreen
              ? t('settings.navbar.screen.toExit')
              : t('settings.navbar.screen.toFull')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- <li>
        <a-tooltip :content="t('settings.title')">
          <a-button
            class="nav-btn"
            type="outline"
            shape="circle"
            @click="setVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <li>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
          >
            <img alt="avatar" :src="avatar">
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space @click="logout">
                <icon-export />
                <span>
                  {{ t('messageBox.logout') }}
                </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
  .navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.center-side {
  flex: 1;
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;
  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }
  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
  .message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>
