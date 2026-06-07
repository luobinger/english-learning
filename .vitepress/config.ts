import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '离谱的英语学习指南',
  description: 'English Level Up Tips - A comprehensive guide to learning English',
  base: '/english-learning/',
  srcDir: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/english-learning/logo.svg' }],
    ['meta', { property: 'og:title', content: '离谱的英语学习指南' }],
    ['meta', { property: 'og:description', content: 'English Level Up Tips - A comprehensive guide to learning English' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],
  vite: {
    build: {
      rollupOptions: {
        external: [/English-level-up-tips/]
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '中文', link: '/zh/' },
      { text: 'English', link: '/en/' }
    ],
    sidebar: {
      '/zh/': [
        {
          text: '章节',
          items: [
            { text: '项目介绍', link: '/zh/introduction' },
            { text: '认知篇', link: '/zh/understanding' },
            { text: '单词篇', link: '/zh/vocabulary' },
            { text: '听力篇', link: '/zh/listening' },
            { text: '阅读篇', link: '/zh/reading' },
            { text: '口语篇', link: '/zh/speaking' },
            { text: '写作篇', link: '/zh/writing' },
            { text: 'AI 篇', link: '/zh/ai' },
            { text: 'Real Life English', link: '/zh/week-1' },
            { text: '杂谈篇', link: '/zh/misc' }
          ]
        }
      ],
      '/en/': [
        {
          text: 'Chapters',
          items: [
            { text: 'Understanding', link: '/en/understanding' },
            { text: 'Vocabulary', link: '/en/vocabulary' },
            { text: 'Listening', link: '/en/listening' },
            { text: 'Reading', link: '/en/reading' },
            { text: 'Speaking', link: '/en/speaking' },
            { text: 'Writing', link: '/en/writing' },
            { text: 'AI', link: '/en/ai' },
            { text: 'Miscellaneous', link: '/en/misc' }
          ]
        }
      ]
    },
    footer: false
  }
})
