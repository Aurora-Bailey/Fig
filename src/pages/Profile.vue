<template>
  <div class="profile">
    <div>{{msg}} {{page}}</div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data () {
    return {
      msg: 'Profile page.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../sass/variables";
  @import "../sass/mixins";

</style>
