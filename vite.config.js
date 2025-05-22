import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-account/', // This should match the repository name
  build: {
    // Ensure proper output structure
    outDir: 'dist',
    emptyOutDir: true,
    // Generate proper entry point with correct MIME type
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  // Add this to ensure .jsx files are handled properly
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // Ensure dev server serves .jsx with correct MIME type
  server: {
    fs: {
      strict: false
    }
  }
})
