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

- `docs/index.md` — Homepage (uses `layout: page`, has its own inline CSS)
- `docs/zh/` — Chinese chapter content (10 files: understanding, vocabulary, listening, reading, speaking, writing, ai, word-list, misc, story)
- `docs/en/` — English mirror (same chapters + `index.md`)
- `docs/public/logo.svg` — Site logo

Bilingual content is maintained by hand (no i18n framework). When adding a chapter, add both `docs/zh/<name>.md` and `docs/en/<name>.md`, then register in the sidebar config.

### Config layer (`.vitepress/`)

- `.vitepress/config.ts` — Site config: nav, sidebar (separate `/zh/` and `/en/` sidebars), search, footer, outline
- `.vitepress/theme/index.ts` — Theme entry: extends DefaultTheme, registers 4 global Vue components
- `.vitepress/theme/custom.css` — Global CSS with oklch-based design tokens and VitePress component overrides

### Vue components (`.vitepress/theme/components/`)

4 globally registered components (available in all Markdown files without import):

- **HomeHero** — Full-page hero for the homepage
- **ChapterCard** — Card linking to a chapter (has `featured` variant)
- **WordCard** — Vocabulary card with localStorage-based favorites (`wordFavorites` key)
- **ThemeToggle** — Dark/light toggle, persists to localStorage (`vitepress-theme-appearance` key)

### Design tokens

`custom.css` defines theme colors via CSS custom properties using oklch color space:
- `--bg`, `--surface`, `--fg`, `--muted`, `--border`, `--accent`
- Dark theme via `[data-theme="dark"]` attribute selector
- Fonts: Georgia / Noto Serif SC (display), system sans-serif (body), JetBrains Mono (code)

Note: The homepage (`docs/index.md`) has its own inline `<style>` block with a separate variable naming convention — keep changes scoped to avoid conflicts.

## Content Conventions

- Markdown files use VitePress frontmatter (`layout`, `aside`, etc.)
- Chapters use `<ChapterCard>` and `<WordCard>` components directly in Markdown
- Sidebar structure is defined in `.vitepress/config.ts` under `themeConfig.sidebar`
- Outline depth is levels 2-3

## Adding a New Chapter

1. Create `docs/zh/<slug>.md` and `docs/en/<slug>.md`
2. Add sidebar entries in `.vitepress/config.ts` under both `/zh/` and `/en/` sidebars
3. Optionally add a nav dropdown entry in `themeConfig.nav`
