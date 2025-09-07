// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrew-kula931.github.io/profile-website/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
