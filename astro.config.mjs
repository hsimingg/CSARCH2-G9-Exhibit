import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://hsimingg.github.io',
    base: '/CSARCH2-G9-Exhibit',
    integrations: [react()],
});