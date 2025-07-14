import { defineConfig } from 'dumi';

/** 部署路径前缀（可根据环境动态区分） */
const basePath = '';

export default defineConfig({
  mfsu: false,
  ssr: false,
  manifest: {},
  publicPath: `${basePath}/`,
  base: `${basePath}/`,
  alias: {
    // monorepo 下热更新失效，需要手动配置包的别名
    // https://d.umijs.org/guide/upgrading#%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6%E5%8D%87%E7%BA%A7
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'packages/ui/src' }],
    codeBlockMode: 'passive',
  },
  favicons: [`${basePath}/simple-logo.svg`],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    logo: `${basePath}/logo.svg`,
    title: 'TODO: title',
    bannerConfig: {
      showBanner: false,
    },
    description: {
      'en-US': 'TODO: desc',
      'zh-CN': 'TODO: desc',
    },
    actions: {
      'en-US': [
        { text: 'Getting Started', link: '/guide', type: 'primary' },
        { text: 'Components', link: '/components' },
      ],
      'zh-CN': [
        { text: '开始使用', link: '/zh-CN/guide', type: 'primary' },
        { text: '组件列表', link: '/zh-CN/components' },
      ],
    },
    features: {
      'en-US': [
        { title: 'TODO: feature 1' },
        { title: 'TODO: feature 2' },
        { title: 'TODO: feature 3' },
      ],
      'zh-CN': [
        { title: 'TODO: feature 1' },
        { title: 'TODO: feature 2' },
        { title: 'TODO: feature 3' },
      ],
    },
    rtl: true,
    socialLinks: {
      github: 'https://github.com/liuyib/template-react-vite-monorepo',
    },
    docVersions: {
      // 指定哪个包需要展示版本号
      // [packages.version]: '',
    },
    localesEnhance: [
      { id: 'en-US', switchPrefix: '中' },
      { id: 'zh-CN', switchPrefix: 'En' },
    ],
    sidebarGroupModePath: ['/guide', '/components'],
    nav: {
      'en-US': [
        { title: 'Guide', link: '/guide' },
        { title: 'Components', link: '/components' },
        { title: 'Releases', link: 'https://github.com/liuyib/template-react-vite-monorepo/tags' },
      ],
      'zh-CN': [
        { title: '指南', link: '/zh-CN/guide' },
        { title: 'Components', link: '/zh-CN/components' },
        { title: '更新日志', link: 'https://github.com/liuyib/template-react-vite-monorepo/tags' },
      ],
    },
    footer: 'TODO: footer',
  },
  links: [
    // 加载额外的资源（JS、CSS 等）
    // { rel: 'stylesheet', href: `${basePath}/style.css` },
  ],
});
