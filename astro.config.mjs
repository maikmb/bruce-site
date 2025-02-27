// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://seu-usuario.github.io', // Substitua 'seu-usuario' pelo seu nome de usuário do GitHub
  base: '/bruce-landing-page', // Substitua pelo nome do seu repositório
});