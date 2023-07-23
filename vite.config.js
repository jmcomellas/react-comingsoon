import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import i18nextLoader from 'vite-plugin-i18next-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [i18nextLoader({ paths: ['./src/locales'] }), react()],
})
