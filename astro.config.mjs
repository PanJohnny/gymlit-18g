import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: 'https://panjohnny.vercel.app',
  integrations: [sitemap({
    filter: (page => page.includes("kronika") || page.includes("events"))
  })]
});