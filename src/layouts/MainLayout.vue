<template>
  <div class="app-layout">
    <NavBar/>
    <div class="container container-main">
      <MainContent />
    </div>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import MainContent from "../views/MainContent";
  export default {
    name: "MainLayout",
    components: {NavBar, MainContent}
  }
</script>

<style lang="sass">

</style>
