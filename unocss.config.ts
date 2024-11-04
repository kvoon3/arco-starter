import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { themeColor } from './src/config/settings.json'

export default defineConfig({
  // ...
  theme: {
    colors: {
      primary: themeColor,
    },
  },
  shortcuts: [
    ['bg-base', 'bg-white dark:bg-black'],
    ['bg-base-2', 'bg-neutral-1 dark:bg-dark'],
    ['text-base', 'text-gray-800 dark:text-white'],
    ['position-center', 'position-x-center position-y-center'],
    ['position-x-center', 'left-50% translate-x--50%'],
    ['position-y-center', 'top-50%  translate-y--50%'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify({ /* preset options */ }),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetTypography({
      cssExtend:
      {
        'h1,h2,h3,h4,h5,h6': {
          color: 'orange',
        },
        'blockquote': {
          color: '#bbb',
        },
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
