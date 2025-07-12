import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3333,
    proxy: {
      '/api/generate-file-proxy': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/generate-file-proxy/, '/api/generate-file'),
      },
    },
  },
})
