<template>
  <div class="group">
    <div>{{msg}} {{page}}</div>
  </div>
</template>

<script>
  export default {
    props: ['page'],
    data () {
      return {
        msg: 'Group page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../sass/variables";
  @import "../sass/mixins";

</style>
