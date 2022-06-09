import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';

const VITE_PORT = 3333;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe(), viteCompression() as any],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@c': path.resolve(__dirname, '/src/components'),
    },
  },
  server: {
    port: VITE_PORT,
    open: true,
    proxy: {
      '/dev-api/mock': {
        target: `http://localhost:${VITE_PORT}`,
        changeOrigin: true,
        rewrite: (_path) => _path.replace(/^\/dev-api/, ''),
      },
      '/dev-api': {
        target: 'http://35.222.204.160:8070/',
        changeOrigin: true,
        rewrite: (_path) => _path.replace(/^\/dev-api/, ''),
      },
    },
  },
});
