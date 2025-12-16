import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Permet d'utiliser describe/it sans import
    environment: 'jsdom' // Simule le navigateur si besoin
  }
});
