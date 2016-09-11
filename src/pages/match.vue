<template>
  <div class="match">
    <div>{{msg}} {{page}}</div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data () {
    return {
      msg: 'Match page.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../sass/variables";
  @import "../sass/mixins";

</style>
