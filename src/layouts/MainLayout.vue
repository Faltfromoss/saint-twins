<template>
  <div class="app-layout">
    <NavBar/>
    <div class="container container-main">
      <CustomSelect v-if="false"/>
      <SearchInput />
      <MainContent />
    </div>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import MainContent from "../views/MainContent";
  import CustomSelect from "../components/CustomSelect";
  import SearchInput from "../components/SearchInput";
  export default {
    name: "MainLayout",
    components: {NavBar, MainContent, CustomSelect, SearchInput}
  }
</script>

<style lang="sass">

</style>
