// https://www.vuepress.cn/config/#index-styl  中文文档
module.exports = {
  base: '/zgm/docs/',
  dest: 'docs/dist',
  title: '资深前端知识体系整理',
  description: '前端知识体系',
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }],
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
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      { text: 'Languages', ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      { title: 'HTML', collapsable: true, children: ['src/html/content',] },
      { title: 'CSS', collapsable: true, children: ['src/css/content',] },
      { title: 'JS基础', collapsable: true, children: [ 'src/js/basic', 'src/js/content', ] },
      { title: '浏览器', collapsable: true, children: ['src/browser/content', ] },
      { title: '手写JS实现', collapsable: true, children: ['src/coderewrite/content', ] },
      { title: '框架原理', collapsable: true, children: ['src/frame/content', ] },
      { title: 'Webpack', collapsable: true, children: ['src/webpack/content', ] },
      { title: 'Node', collapsable: true, children: ['src/node/content', ] },
      { title: '插件库原理', collapsable: true, children: ['src/plugin/content', ] },
      { title: '客户端 APP', collapsable: true, children: ['src/app/content', ] },
      { title: '前端工程化', collapsable: true, children: ['src/engineering/content', ] },
      { title: '数据结构和算法', collapsable: true, children: ['src/algorithm/content', ] },
      { title: '真实面试', collapsable: true, children: ['src/interview/content', ] },
    ]
  }
}
