// @ts-check
import { defineConfig } from 'astro/config';

const base = '/qiita-astro-redirect-behavior'

// https://astro.build/config
export default defineConfig({
  base: base,
  redirects: {
    "/old-page": `${base}/new-page`
  }
});
