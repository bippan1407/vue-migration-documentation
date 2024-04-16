import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue 2 to 3 Migration",
  description: "Vue 2 to 3 Migration Guide",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Overview",
            link: "/docs/getting-started/overview",
          },
          {
            text: "Installation",
            link: "/docs/getting-started/installation",
          },
        ],
      },
      {
        text: "Using vue-migration",
        items: [
          {
            text: "Command line interface",
            link: "/docs/using-vue-migration/cli",
          },
          {
            text: "JSON configuration file",
            link: "/docs/using-vue-migration/json-configuration",
          },
          {
            text: "Options",
            link: "/docs/using-vue-migration/options",
          },
        ],
      },
      { text: "Example", link: "docs/example" },
      { text: "Runtime API Examples", link: "docs/api-examples" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
