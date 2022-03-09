import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import base from '@emotion/styled/types/base'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  base: '/CILevelCreator/'
})
