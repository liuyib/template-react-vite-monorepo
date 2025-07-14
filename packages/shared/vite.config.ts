import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: path.join(__dirname, 'src/index.tsx'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
});
