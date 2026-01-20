// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zerosubleads.com', // Update this to your actual domain
  integrations: [react(), tailwindcss(), icon(), sitemap()]
});
