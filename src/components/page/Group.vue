<template>
  <div class="group">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Group page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../../sass/variables";
  @import "../../sass/mixins";

</style>
