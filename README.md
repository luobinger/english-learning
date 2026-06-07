# 离谱的英语学习指南 - 网站版

基于 [byoungd/English-level-up-tips](https://github.com/byoungd/English-level-up-tips) 项目构建的现代化网站。

## 技术栈

- **框架**: VitePress 1.x
- **UI**: Vue 3 + 自定义组件
- **样式**: 自定义 CSS + CSS Variables
- **字体**: Playfair Display + Source Sans Pro + JetBrains Mono
- **部署**: CloudBase 静态托管

## 特性

- ✨ 现代化杂志风格设计
- 🌓 深色/浅色主题切换（VitePress 内置）
- 🌍 中英文双语支持
- 📱 响应式布局
- 🔍 VitePress 内置全文搜索
- ⚡ 静态站点极速加载

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到 CloudBase

```bash
# 构建
npm run build

# 部署到 CloudBase 静态托管
tcb hosting deploy ./.vitepress/dist -e <your-env-id>
```

## 目录结构

```
04.english-learning/
├── .vitepress/
│   ├── config.ts          # VitePress 配置
│   └── theme/
│       ├── index.ts       # 主题入口
│       └── custom.css     # 自定义样式
├── docs/
│   ├── index.md           # 首页（含内联样式）
│   ├── zh/                # 中文章节（11 个 .md）
│   ├── en/                # 英文章节（9 个 .md）
│   └── public/            # 静态资源（logo + 41 张图片）
├── cloudfunctions/
│   └── image-proxy/       # 图片代理 HTTP 云函数
├── package.json
└── README.md
```

## 设计规范

### 颜色

主页在 `docs/index.md` 的 `<style>` 块中使用 CSS 自定义属性，暖色调配色方案。

### 字体

- 展示字体: Georgia / Noto Serif SC
- 正文: 系统无衬线字体
- 代码: JetBrains Mono

## 许可证

CC-BY-NC-4.0

## 致谢

感谢 [byoungd](https://github.com/byoungd) 提供的优质英语学习内容。
