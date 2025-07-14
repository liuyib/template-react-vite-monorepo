import path from 'node:path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from '../../vite.config';

// https://vite.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      lib: {
        entry: path.join(__dirname, 'src/index.tsx'),
        name: 'RepoIcons',
        formats: ['es', 'cjs', 'umd'],
      },
    },
  }),
);
