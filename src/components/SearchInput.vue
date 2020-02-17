<template>
  <div class="input-field col s12">
    <i class="material-icons" id="search-icon">search</i>
    <input placeholder="Поиск..." id="search" type="text" autocomplete="off">
  </div>
</template>

<script>
  export default {
    name: "SearchInput",
    mounted() {
      document.querySelector('#search').addEventListener('focus', function () {
        document.querySelector('#search-icon').style.color = "#deb887"
      })
      document.querySelector('#search').addEventListener('blur', function () {
        document.querySelector('#search-icon').style.color = "#ffffff"
      })
    }
  }
</script>

<style scoped>

</style>
