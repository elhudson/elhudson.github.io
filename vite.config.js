import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from 'react-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target:'esnext'
  },
  plugins: [react()],
})
