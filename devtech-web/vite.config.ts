import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Agrupar dependencias de node_modules en un solo chunk
          if (id.includes('node_modules')) {
            // Agrupar React y React Router en un solo chunk
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom')
            ) {
              return 'vendor'
            }
            // Otros módulos de node_modules
            return 'vendor'
          }
        }
      }
    }
  }
})