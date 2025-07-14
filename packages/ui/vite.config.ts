import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: path.join(__dirname, 'src/index.tsx'),
      name: 'UmdUI',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
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
