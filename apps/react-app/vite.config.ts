import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    minify: true,
    lib: {
      entry: path.join(__dirname, 'src/index.tsx'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
});
