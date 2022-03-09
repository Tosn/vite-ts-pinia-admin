import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const VITE_PORT = 3333;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe()],
  // base: '/vite-ts-pinia-admin', // github action need, can remove
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
        target: 'http://businesscard.webeye.cn/api',
        changeOrigin: true,
        rewrite: (_path) => _path.replace(/^\/dev-api/, ''),
      },
    },
  },
});
