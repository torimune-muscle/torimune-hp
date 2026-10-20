// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Actions でビルドするときは SITE_URL / BASE_PATH が自動で入る（.github/workflows/deploy.yml）
// ローカル（npm run dev）では未設定なので "/" で動く
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
