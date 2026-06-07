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
- 🌓 深色/浅色主题切换
- 🌍 中英文双语支持
- 📱 响应式布局
- 🔍 全文搜索
- ❤️ 单词收藏功能
- 📖 阅读进度保存
- ⚡ 极速加载

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
english-learning-web/
├── .vitepress/
│   ├── config.ts          # VitePress 配置
│   └── theme/
│       ├── index.ts       # 主题入口
│       ├── custom.css     # 自定义样式
│       └── components/    # Vue 组件
├── docs/
│   ├── index.md           # 首页
│   ├── zh/                # 中文内容
│   ├── en/                # 英文内容
│   └── public/            # 静态资源
├── package.json
└── README.md
```

## 设计规范

### 颜色

- 主色: `#1a1a2e` (深蓝黑)
- 强调色: `#e94560` (活力红)
- 背景浅色: `#f8f9fa`
- 背景深色: `#0f0f23`

### 字体

- 标题: Playfair Display
- 正文: Source Sans Pro
- 代码: JetBrains Mono

## 许可证

CC-BY-NC-4.0

## 致谢

感谢 [byoungd](https://github.com/byoungd) 提供的优质英语学习内容。
