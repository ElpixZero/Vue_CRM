<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/Empty.layout.vue";
import MainLayout from "./layouts/Main.layout.vue";

export default {
  computed: {
    layout() {
      console.log(this.$route.meta);
      return "empty-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
