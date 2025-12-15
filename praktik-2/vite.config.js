import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // pastikan ini ./ supaya bisa deploy ke Vercel
  plugins: [react()],
})
