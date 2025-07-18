import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      logLevel: 'silent',
    }),
  ],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: path.join(__dirname, 'src/index.tsx'),
      fileName: (format) => `index.${format}.js`,
    },
  },
  test: {
    name: 'happy-dom-env',
    environment: 'happy-dom',
    include: ['src/**/*.test.{ts,tsx}'],
    globals: true,
    // 性能优化：https://cn.vitest.dev/guide/improving-performance
    isolate: false,
    fileParallelism: false,
    pool: 'threads',
  },
});
