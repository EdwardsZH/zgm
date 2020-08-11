module.exports = {
  base: '/',
  dest: 'docs/dist',
  title: '资深前端知识体系整理',
  description: '前端知识体系',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    smoothScroll: true,
    // logo: '/logo.png',
    nav: [  
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'css',
        collapsable: true,
        children: [
          'css/common',
        ]
      },
      {
        title: 'js基础',
        collapsable: true,
        children: [
          'js/basic',
          'js/business',
          'js/ui',
          'js/callH5',
          'js/device',
          'js/imitate',
          'js/share',
          'js/other',
        ]
      },
      {
        title: '框架原理',
        collapsable: true,
        children: [
          'frame/basic',
          'frame/mall',
          'frame/health',
          'frame/tj',
          'frame/news',
          'frame/insurance',
          'frame/uplus',
          'frame/other',
        ]
      },
      {
        title: 'webpack',
        collapsable: true,
        children: [
          'webpack/basic',
          'webpack/mall',
          'webpack/health',
          'webpack/news',
          'webpack/uplus',
          'webpack/other',
        ]
      },
      {
        title: 'node',
        collapsable: true,
        children: [
          'node/api'
        ]
      },
      {
        title: '插件库原理',
        collapsable: true,
        children: [
          'plugin/fastclick'
        ]
      },
      {
        title: '计算机组成原理',
        collapsable: true,
        children: [
          'plugin/fastclick'
        ]
      },
      {
        title: '客户端 APP',
        collapsable: true,
        children: [
          'plugin/fastclick'
        ]
      }
    ]
  }
}
