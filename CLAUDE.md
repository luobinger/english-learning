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
