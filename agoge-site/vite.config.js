import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer' // Rätt import för Vite

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({  // Använd visualizer istället för bundleAnalyzer
      open: false,
      template: 'treemap',  // Mer textvänlig vy
      gzipSize: true,
      brotliSize: true,
      filename: 'bundle-report.html' // Genererar både visuell och textinfo
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {  // Förbättrad chunk-uppdelning
          react: ['react', 'react-dom'],
          vendors: ['lodash', 'axios'],
          tailwind: ['tailwindcss'],
          icons: ['@fortawesome/fontawesome-svg-core']
        }
      }
    }
  }
})