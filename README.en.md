# English Level Up Tips

English | [中文](./README.md)

> A systematic guide to learning English — from mindset to practice, from vocabulary to AI.

A bilingual static site built on [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips), powered by VitePress with a custom magazine-style homepage.

**Live site**: [https://cloudbase-d8garuhmo3f952c51-1433333114.tcloudbaseapp.com/english-learning/](https://cloudbase-d8garuhmo3f952c51-1433333114.tcloudbaseapp.com/english-learning/)

## Chapters

| # | Chapter | Topic |
|---|---------|-------|
| 01 | Understanding | Learning pyramid, immersion setup |
| 02 | Vocabulary | Scientific memorization, word systems |
| 03 | Listening | Intensive & extensive listening, material selection |
| 04 | Reading | Graded reading, getting into native books |
| 05 | Speaking | Breaking the silence, finding practice partners |
| 06 | Writing | From sentences to paragraphs to essays |
| 07 | AI | Gemini / ChatGPT / Claude / Perplexity training loops |
| — | Miscellaneous | IT training,碎片化学习, Kindle & iPad |

All chapters are available in both Chinese and English.

## Tech Stack

- **Framework**: [VitePress](https://vitepress.dev/) 1.x
- **Build**: Vite + Vue 3
- **Hosting**: CloudBase Static Hosting
- **Cloud Function**: Image proxy (HTTP Function)

## Features

- Bilingual content with independent sidebar navigation per language
- Custom homepage design (magazine layout, CSS animations, glassmorphism)
- Dark / light theme toggle
- Responsive layout (desktop, tablet, mobile)
- Built-in full-text search via VitePress
- All external assets localized (no third-party CDN dependencies)

## Development

```bash
# Install dependencies
npm install

# Start dev server (default http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

```bash
# Build
npm run build

# Deploy to CloudBase static hosting (path: /english-learning/)
tcb hosting deploy ./.vitepress/dist /english-learning -e cloudbase-d8garuhmo3f952c51
```

## Project Structure

```
04.english-learning/
├── .vitepress/
│   ├── config.ts              # Site config (nav, sidebar, base path)
│   └── theme/
│       ├── index.ts           # Theme entry
│       ├── custom.css         # Global custom styles
│       └── homepage.css       # Homepage-specific styles
├── docs/
│   ├── index.md               # Homepage (inline CSS + Vue animation script)
│   ├── zh/                    # Chinese chapters (10 .md files)
│   ├── en/                    # English chapters (10 .md files)
│   └── public/
│       ├── logo.svg           # Site logo / favicon
│       └── assets/            # Image assets
├── cloudfunctions/
│   └── image-proxy/           # Image proxy HTTP cloud function
├── cloudbaserc.json           # CloudBase deployment config
├── package.json
├── CLAUDE.md                  # AI-assisted development guide
├── README.md                  # Chinese README
└── README.en.md               # This file
```

## Content Guidelines

- Each chapter has both `docs/zh/<slug>.md` and `docs/en/<slug>.md`
- Images are stored in `docs/public/assets/` and referenced as `/assets/<filename>`
- No externally hosted resources that are inaccessible in mainland China
- Text links to blocked platforms (YouTube, Medium, Reddit) should include accessible alternatives when possible

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

## Credits

- Content: [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips)
- Framework: [VitePress](https://vitepress.dev/) by Evan You
