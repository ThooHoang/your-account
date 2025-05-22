import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-account/', // Matches your repository name
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
