import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit()
  ],
  server: {
    fs: {
      allow: [
        'C:/Users/Ayomide Ajimuda/Documents/03 - Projects'
      ]
    }
  }
});