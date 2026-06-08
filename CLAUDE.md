# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A bilingual (Chinese/English) static content site for "离谱的英语学习指南" (English-level-up-tips), built on VitePress 1.x. Pure content site — no backend, no API calls, no stores. Deployed to CloudBase static hosting.

## Commands

```bash
npm run dev       # Start VitePress dev server (hot reload)
npm run build     # Build to .vitepress/dist/
npm run preview   # Preview production build locally
```

Deployment: `tcb hosting deploy ./.vitepress/dist -e <env-id>`

No linter, formatter, or test runner is configured.

## Architecture

### Content layer (`docs/`)

- `docs/index.md` — Homepage (`layout: page`, has ~520 lines of inline CSS in a `<style>` block, plus Vue `<script setup>` for IntersectionObserver fade-in animations)
- `docs/zh/` — Chinese chapter content (10 files: `index.md`, `introduction.md`, `understanding.md`, `vocabulary.md`, `listening.md`, `reading.md`, `speaking.md`, `writing.md`, `ai.md`, `misc.md`)
- `docs/en/` — English mirror (9 files: `index.md`, plus mirror of all zh/ chapters except `introduction.md`)
- `docs/public/logo.svg` — Site logo (also used as favicon)
- `docs/public/assets/` — 41 shared image assets (SVGs, PNGs, JPEGs)

Bilingual content is maintained by hand (no i18n framework). When adding a chapter, add both `docs/zh/<name>.md` and `docs/en/<name>.md`, then register in the sidebar config.

### Config layer (`.vitepress/`)

- `.vitepress/config.ts` — Site config: title, description, base path (`/english-learning/`), `<head>` meta tags (favicon, OG tags), nav (3 links), sidebar (separate `/zh/` and `/en/` sidebars), footer (license + copyright)
- `.vitepress/theme/index.ts` — Minimal theme entry: imports `DefaultTheme` from `vitepress/theme`, imports `./custom.css`, re-exports `DefaultTheme` with no modifications
- `.vitepress/theme/custom.css` — Currently contains only a placeholder comment; actual custom styles are inlined in `docs/index.md`'s `<style>` block

### Homepage design system

The homepage (`docs/index.md`) contains an inline `<style>` block that defines:

- Design tokens via CSS custom properties on `:root` and `.dark`: `--fg`, `--fg-soft`, `--muted`, `--bg`, `--surface`, `--border`, `--accent`, `--accent-hover`, `--accent-light`, `--sage`, `--sage-light`, `--radius-lg`, `--radius-xl`, `--shadow-md`, `--ease-out`
- Fonts: Georgia / Noto Serif SC (display), system sans-serif (body), JetBrains Mono (code)
- Component classes: `.hero`, `.btn`, `.section`, `.chapter-card`, `.feature-card`, `.wordlist-chip`, `.philosophy`, `.cta-box`, `.footer-info`
- Responsive breakpoints: 768px and 480px

**Important**: These design tokens are scoped to the homepage inline `<style>` block only. Chapter pages rely on VitePress default theme styles. Do not assume these tokens are globally available when editing chapter content.

### CloudBase deployment

- `cloudbaserc.json` — CloudBase env config, function root, and function definitions
- `cloudfunctions/image-proxy/` — HTTP function for proxying cloud storage image downloads. Uses `@cloudbase/node-sdk` (not `wx-server-sdk`). Listens on port 9000 via `http.createServer`. Configuration: `isHTTP: true`, no `installDependency` (deps must be pre-bundled for HTTP functions)

## Content Conventions

### ⚠️ 严禁使用在国内无法直接访问的内容

本项目面向中国大陆用户，所有页面元素、资源引用必须在国内网络环境下可正常访问。

**禁止引用的外部资源：**
- 外部 CDN 托管的 JS/CSS/字体（如 `fonts.googleapis.com`、`cdnjs.cloudflare.com`、`cdn.jsdelivr.net`、`unpkg.com` 等）
- Google 系服务（Google Fonts、Google Analytics、Google reCAPTCHA、Google Tag Manager 等）
- 被墙平台的嵌入内容（YouTube `<iframe>`、Twitter/Facebook/Instagram 嵌入等）
- 外部图片图床（所有图片必须下载到 `docs/public/assets/` 本地引用）

**文字链接注意事项：**
- YouTube、Medium、Reddit、Twitter 等被墙平台的链接在现有内容中作为参考引用存在，不强制替换
- 新增内容应优先使用国内可访问的替代平台（如 B 站替代 YouTube、知乎/掘金替代 Medium）
- 如必须引用被墙平台，应同时提供国内可访问的替代链接

**合规做法：**
- 图片 → 下载到 `docs/public/assets/`，用 `/assets/<filename>` 引用
- 字体 → 使用系统字体栈或本地字体文件
- JS/CSS → 使用 VitePress 内置或本地文件
- 徽章/图标 → 下载到本地



- Markdown files use VitePress frontmatter (`title`, `layout`, etc.) — all chapter files have at least `title`
- Pages use standard Markdown syntax with inline HTML where needed (no custom Vue components in use)
- Sidebar structure is defined in `.vitepress/config.ts` under `themeConfig.sidebar`
- Internal links use absolute paths with the VitePress base (e.g., `/zh/understanding`, `/en/ai`)
- Image references use `/assets/<filename>` paths (VitePress resolves from `docs/public/`)

## Adding a New Chapter

1. Create `docs/zh/<slug>.md` and `docs/en/<slug>.md` with at minimum a `title` frontmatter
2. Add sidebar entries in `.vitepress/config.ts` under both `/zh/` and `/en/` sidebars
3. Optionally add a nav dropdown entry in `themeConfig.nav`
4. If the chapter needs images, place them in `docs/public/assets/` and reference as `/assets/<filename>`
