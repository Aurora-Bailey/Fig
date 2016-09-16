<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="first-login">
    {{msg}} {{page}}
  </div>
</template>

<script>
  export default {
    props: {
      page: {twoWay: true}
    },
    data () {
      return {
        subPage: "init",
        msg: 'FirstLogin page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .first-login {
    background-color: $base;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10000;
    overflow: auto;
  }

</style>
