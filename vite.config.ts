import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 替换为你真实的 GitHub 仓库名，例如 https://luffyzh.github.io/ctms-prd/
  base: '/ctms-prd/',
  plugins: [react(), tailwindcss()],
})
