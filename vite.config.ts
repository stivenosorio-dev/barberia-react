import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { siteHeadPlugin } from './plugins/site-head.ts';

export default defineConfig({
  plugins: [react(), tailwindcss(), siteHeadPlugin()],
});
