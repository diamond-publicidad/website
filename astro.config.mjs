import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { base, site } from './src/config/site';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});