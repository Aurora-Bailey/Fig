<template>
  <div class="match">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Match page.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../../sass/variables";
  @import "../../sass/mixins";

</style>
