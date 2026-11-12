import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site is served under /portofolio-xavier/
export default defineConfig({
  base: '/portofolio-xavier/',
  plugins: [react()],
})
