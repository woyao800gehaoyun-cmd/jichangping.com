import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jichangping.com',
  integrations: [sitemap({
    filter: (page) => page !== 'https://jichangping.com/search/'
  })],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
