import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Serinus",
  titleTemplate: 'Serinus - Dart Backend Framework',
  description: "Serinus is a framework written in Dart for building efficient and scalable server-side applications.",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/serinus-icon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/serinus-icon-16x16.png"}],
  ],
  lastUpdated: true,
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
              { text: 'First Steps', link: '/overview/first-steps' },
              { text: 'Modules', link: '/overview/modules' },
              { text: 'Controllers', link: '/overview/controllers' },
              { text: 'Providers', link: '/overview/providers' },
              { text: 'Middleware', link: '/overview/middleware' },
            ]
          },
        ]
      },
      // {
      //   text: 'Roadmap',
      //   link: '/roadmap',
      // },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/francescovallone/serinus' },
    ]
  }
})
