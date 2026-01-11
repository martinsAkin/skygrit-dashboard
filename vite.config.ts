import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Dev server proxy to avoid HTTPS -> HTTP mixed content issues
    proxy: {
      '/api': {
        target: 'http://74.50.82.253:8093', // your HTTP backend
        changeOrigin: true,                 // makes the origin header match
        secure: false,                      // allow self-signed or plain HTTP
      },
    },
  },
})
