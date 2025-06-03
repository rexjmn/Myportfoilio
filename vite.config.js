
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist'
  },
  publicDir: 'public',
  server: {
    historyApiFallback: true
  },
  preview: {
    historyApiFallback: true
  }
})