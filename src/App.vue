<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import EmptyLayout from "./layouts/Empty.layout.vue";
import MainLayout from "./layouts/Main.layout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
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
