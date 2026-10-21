import { defineConfig } from 'astro/config';

// GitHub Pages: https://drgju.github.io/hottype/ — base 与 site 按该目标预置；
// 若改用域名根路径部署，把 base 重设为 '/'。
export default defineConfig({
  site: 'https://drgju.github.io',
  base: '/hottype',
});
