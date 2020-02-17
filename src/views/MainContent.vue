<template>
    <div>
      <CustomSelect v-if="false"/>
      <SearchInput />
    </div>
</template>

<script>
  import CustomSelect from "../components/CustomSelect";
  import SearchInput from "../components/SearchInput";
  export default {
    name: "MainContent",
    components: {SearchInput, CustomSelect},
    data() {
      return {
          carousel: null
      }
    },
    mounted() {
    },
    destroyed() {
    }
  }
</script>

<style scoped>

</style>
