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
  lastUpdated: true,
  cleanUrls: true,
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
            { text: 'Introduction', link: '/en/introduction' },
            { text: 'Understanding', link: '/en/understanding' },
            { text: 'Vocabulary', link: '/en/vocabulary' },
            { text: 'Listening', link: '/en/listening' },
            { text: 'Reading', link: '/en/reading' },
            { text: 'Speaking', link: '/en/speaking' },
            { text: 'Writing', link: '/en/writing' },
            { text: 'AI', link: '/en/ai' },
            { text: 'Real Life English', link: '/en/week-1' },
            { text: 'Miscellaneous', link: '/en/misc' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/byoungd/English-level-up-tips' }
    ],

    editLink: {
      pattern: 'https://github.com/byoungd/English-level-up-tips/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: 'Released under the CC-BY-NC-4.0 License.',
      copyright: 'Copyright © 2017-present byoungd'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
