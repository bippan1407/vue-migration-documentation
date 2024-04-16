# Overview

vue-migration converts vue 2 options api syntax to vue 3 syntax.

It also converts vuex syntax to pinia you can use vuex-to-pinia to convert vuex syntax to pinia syntax for stores.


> [!NOTE]
> This does not transform template code. This works only for vue 2 syntax on script tag.

## Does it convert all the code to the latest syntax?

vue-migration tries to convert most of the code that is necessary reducing manual efforts spend by devs to update to latest stack.

props, watch, data(), computed, emits, lifecychooks, $refs, $router, $route, $device, layout(nuxt 2) are converted to new vue 3 composition api syntax.

mapActions, mapState, mapGetters, mapMuations used with vuex are converted to pinia import syntax.