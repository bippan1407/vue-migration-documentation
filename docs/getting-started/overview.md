# Overview

vue-migration converts vue 2 options api syntax to vue 3 syntax.

It is recommended to use [vuex-to-pinia-transform](https://www.npmjs.com/package/vuex-to-pinia-transform) to convert vuex syntax to pinia syntax.

> [!NOTE]
> This does not transform template code. This works only for vue 2 syntax on script tag.

## Does it convert all the code to the latest syntax?

vue-migration tries to convert most of the code that is necessary reducing manual efforts spend by devs to update to latest stack.

props, watch, data(), computed, emits, lifecychooks, $refs, $router, $route, $device, layout(nuxt 2) are converted to new vue 3 composition api syntax.

mapActions, mapState, mapGetters, mapMuations used with vuex are converted to pinia import syntax.

vuex-migration lib can convert all the files with .vue extension from vue 2 syntax to vue 3. However there are some file that needs to be converted manually.

Files with .js extension needs to converted manually
```   
    ./middleware
    ./mixins
    ./plugins
```