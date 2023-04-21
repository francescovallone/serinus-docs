import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Serinus",
  titleTemplate: 'Serinus - Dart Backend Framework',
  description: "Serinus is a modular backend framework in dart",
  lastUpdated: true,
  base: '/serinus/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'pub.dev',
        link: 'https://pub.dev/packages/serinus'
      }
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
        items: [
          {
            text: 'Overview',
            items: [
              { text: 'First Steps', link: '/overview/first-step' },
              { text: 'Module', link: '/overview/module' },
              { text: 'Controller', link: '/overview/controller' },
            ]
          },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/francescovallone/serinus' },
    ]
  }
})
