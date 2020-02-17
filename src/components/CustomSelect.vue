<template>
  <div class="input-field col s12">
    <select>
      <optgroup label="team 1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </optgroup>
      <optgroup label="team 2">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </select>
  </div>
</template>

<script>
  export default {
    name: "CustomSelect",
    data() {
      return {
        select: null
      }
    },
    mounted() {
      const elems = document.querySelectorAll('select');
      this.select = this.$M.FormSelect.init(elems)
    },
    destroyed() {
      if (this.select && this.select.destroy)
        this.select.destroy()
    }
  }
</script>

<style scoped>

</style>
