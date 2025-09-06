// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/qiita-astro-redirect-behavior',
  redirects: {
    "/old-page": "/qiita-astro-redirect-behavior/new-page"
  }
});
