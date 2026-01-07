import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Update with your actual domain
  site: 'https://clubsxai.com',

  // Astro 5.0: Default is static, opt-in to SSR per page
  output: 'static',
  // Image optimization (passthrough for stability)
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
    },
  }),

  build: {
    assets: '_assets'
  },

  vite: {
    build: {
      cssCodeSplit: true
    },

    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});