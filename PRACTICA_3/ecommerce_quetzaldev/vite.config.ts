import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libs — cached independently across deploys
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Heavy PDF libs (~500 KB) — only loaded on /confirmacion
          pdf: ['jspdf', 'html2canvas-pro'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
