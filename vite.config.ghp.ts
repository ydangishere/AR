import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'ghp-preview',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: '/AR/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
