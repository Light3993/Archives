import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5173
    },
    watch: {
      usePolling: true
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});