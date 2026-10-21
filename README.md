# HOTTYPE · 热字印刷

> 一句话进去，一张传单出来。 —— 一台 AI 传单机的演示落地页

**源码仓库：https://github.com/DRGJU/hottype**

## 这是什么

HOTTYPE 是一个虚构演示品牌（Hallmark 技能产出的设计样本）：把一句想法接进印刷版式，
产出传单 / 海报 / 小志。页面本身即排版样本 —— 没有编造任何用户数据。

## 技术栈

- **Astro** —— 组件化 + 现代构建，产物为纯静态 HTML（零运行时框架 JS）
- **原生 CSS** —— 设计 token 全走 `src/styles/tokens.css`（OKLCH 色板）
- **字型** —— Bricolage Grotesque · Geist · Noto Sans SC · Geist Mono（经 `fonts.loli.net` 镜像）
- **设计系统** —— Hallmark：宏观结构 Marquee Hero（03）· 主题 Brutal · 导航 N9 · 页脚 Ft4；
  slop-test 58/58 门禁通过；响应式实测 320 / 375 / 414 / 768 / 1280×800

## 快速开始

```bash
npm install --registry=https://registry.npmmirror.com   # 国内镜像
npm run dev                                             # 开发（热更新）
npm run build                                           # 产物在 dist/
npm run preview                                         # 本地预览产物
```

## 目录结构

```
src/
├─ layouts/Layout.astro        # 文档头 · 字体 · meta
├─ components/
│  ├─ NavEdge.astro            # N9 导航：wordmark 左 · 单动作右
│  ├─ HeroMarquee.astro        # 03 Marquee 折叠：fold 即宣言
│  ├─ TickerBand.astro         # 墨色跑马分节条（暂停 on hover）
│  ├─ Intro.astro              # S2 悬头 + 引导文 + CTA 行
│  ├─ HowSteps.astro           # F4 三步流程
│  ├─ SpecSheet.astro          # F3 规格单（定义行）
│  ├─ ClosingInk.astro         # 墨块结语
│  ├─ FooterColophon.astro     # Ft4 密排 colophon（含源码链接）
│  └─ StickyBar.astro          # C4 粘底 CTA 条
├─ pages/index.astro           # 组装 + 下载状态机脚本
└─ styles/                     # tokens.css + styles.css（设计契约）
```

## 部署（GitHub Pages）

`astro.config.mjs` 已预置 `site: 'https://drgju.github.io'`、`base: '/hottype'`。
在仓库 Settings → Pages 里把 Source 改为 **GitHub Actions** 即可接 CI 部署；
若改用自定义域名根路径，把 `base` 重设为 `'/'`。

---

「取一版」按钮是真实行为：会下载一份 `HOTTYPE-README.txt` 说明文件。© 2026 DRGJ
