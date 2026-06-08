# 离谱的英语学习指南

[English](./README.en.md) | 中文

> 从认知到实践，从单词到 AI，系统化的英语进阶路径。

基于 [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) 构建的双语静态站点，提供现代化的阅读体验。

**在线访问**: [https://cloudbase-d8garuhmo3f952c51-1433333114.tcloudbaseapp.com/english-learning/](https://cloudbase-d8garuhmo3f952c51-1433333114.tcloudbaseapp.com/english-learning/)

## 内容章节

| # | 章节 | 主题 |
|---|------|------|
| 01 | 认知篇 | 学习金字塔、沉浸式环境搭建 |
| 02 | 单词篇 | 科学记忆方法、词汇体系构建 |
| 03 | 听力篇 | 精听与泛听、材料选择 |
| 04 | 阅读篇 | 分级阅读策略、原版书入门 |
| 05 | 口语篇 | 开口突破、练习伙伴 |
| 06 | 写作篇 | 句子到文章的进阶逻辑 |
| 07 | AI 篇 | Gemini / ChatGPT / Claude / Perplexity 协作训练 |
| — | 杂谈篇 | IT 培训、碎片化学习、Kindle 与 iPad |

所有章节均提供中文和英文两个版本。

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/) 1.x
- **构建**: Vite + Vue 3
- **部署**: CloudBase 静态托管
- **云函数**: 图片代理（HTTP Function）

## 特性

- 中英文双语内容，独立侧边栏导航
- 自定义主页设计（杂志风格，CSS 动画）
- 深色 / 浅色主题切换
- 响应式布局（桌面 / 平板 / 手机）
- VitePress 内置全文搜索
- 所有外部资源本地化（无第三方 CDN 依赖）

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 本地预览构建产物
npm run preview
```

## 部署

```bash
# 构建
npm run build

# 部署到 CloudBase 静态托管（路径 /english-learning/）
tcb hosting deploy ./.vitepress/dist /english-learning -e cloudbase-d8garuhmo3f952c51
```

## 目录结构

```
04.english-learning/
├── .vitepress/
│   ├── config.ts              # 站点配置（导航、侧边栏、base 路径）
│   └── theme/
│       ├── index.ts           # 主题入口
│       ├── custom.css         # 全局自定义样式
│       └── homepage.css       # 主页专用样式
├── docs/
│   ├── index.md               # 主页（含内联 CSS + Vue 动画脚本）
│   ├── zh/                    # 中文章节（10 个 .md）
│   ├── en/                    # 英文章节（10 个 .md）
│   └── public/
│       ├── logo.svg           # 站点 Logo / Favicon
│       └── assets/            # 图片资源
├── cloudfunctions/
│   └── image-proxy/           # 图片代理 HTTP 云函数
├── cloudbaserc.json           # CloudBase 部署配置
├── package.json
├── CLAUDE.md                  # AI 辅助开发指南
├── README.md                  # 本文件
└── README.en.md               # English README
```

## 内容规范

- 每个章节同时提供 `docs/zh/<slug>.md` 和 `docs/en/<slug>.md`
- 图片统一存放在 `docs/public/assets/`，用 `/assets/<filename>` 引用
- 新增内容禁止引用国内无法访问的外部资源（YouTube 嵌入、Google Fonts 等）
- 文字链接中如含被墙平台（YouTube、Medium、Reddit），应同时提供国内替代链接

## 许可证

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

## 致谢

- 内容来源: [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips)
- 框架: [VitePress](https://vitepress.dev/) by Evan You
