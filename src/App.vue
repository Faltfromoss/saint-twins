<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<style lang="sass">
@import "node_modules/materialize-css/sass/materialize"
@import "assets/sass/styles"
</style>

<script>
  import MainLayout from "./layouts/MainLayout";
  export default {
    components: {MainLayout}
  }
</script>
