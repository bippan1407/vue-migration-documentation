import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue 2 to 3 Migration",
  description: "vue 2 to 3 migration guide",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/docs/examples/using-vue-migration" },
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
        text: "vuex-to-pinia-transform",
        items: [
          {
            text: "command line interface",
            link: "/docs/vuex-to-pinia-transform/cli",
          },
          {
            text: "json configuration file",
            link: "/docs/vuex-to-pinia-transform/json-configuration",
          },
          {
            text: "options",
            link: "/docs/vuex-to-pinia-transform/options",
          },
        ],
      },
      {
        text: "Using vue-migration",
        items: [
          {
            text: "Command line interface",
            link: "/docs/vue-migration/cli",
          },
          {
            text: "JSON configuration file",
            link: "/docs/vue-migration/json-configuration",
          },
          {
            text: "Options",
            link: "/docs/vue-migration/options",
          },
        ],
      },
      {
        text: "Example",
        items: [
          {
            text: "Example using vue-migration",
            link: "/docs/examples/using-vue-migration",
          },
          {
            text: "Example using vuex-to-pinia-transform",
            link: "/docs/examples/using-vuex-to-pinia-transform",
          },
          {
            text: "Example using both vue-migration and vuex-to-pinia-transform",
            link: "/docs/examples/using-vuex-to-pinia-transform-and-vue-migration",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/bippan1407/vue-migration" },
    ],
  },
});
