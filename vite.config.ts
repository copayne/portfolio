import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@/components': resolve(__dirname, './src/components'),
        '@/compositions': resolve(__dirname, './src/compositions'),
        '@/hooks': resolve(__dirname, './src/hooks'),
        '@/utils': resolve(__dirname, './src/utils'),
        '@/types': resolve(__dirname, './src/types'),
        '@/assets': resolve(__dirname, './src/assets'),
      },
    },
    optimizeDeps: {
      include: ['remotion', 'react', 'react-dom'],
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      sourcemap: command === 'serve',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            remotion: ['remotion', '@remotion/cli'],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
    },
  };
});
