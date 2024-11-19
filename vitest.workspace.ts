import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './vitest.config.ts',
  './config/vite.config.ts',
  './config/vite.config.prod.ts',
  './config/vite.config.dev.ts',
])
