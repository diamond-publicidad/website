import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://diamond-publicidad.github.io/website',
  base: '/website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});