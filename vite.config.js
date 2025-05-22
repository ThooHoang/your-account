import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base path for GitHub Pages - use your repository name
  base: '/your-account/', // Replace with your actual repository name if different
  build: {
    outDir: 'dist',
    // Ensure proper sourcemapping for debugging
    sourcemap: true,
  },
})
