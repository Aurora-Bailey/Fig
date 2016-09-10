<template>
  <div class="nav-main">
    <div><button type="button" class="btn btn-info">Info</button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../sass/variables";
  @import "../sass/mixins";
  
  .nav-main {
    position: absolute;
    bottom: 0;
    margin: auto;

    @include portrait{
      height: 15vw;
      width: 100vw;
      right: 0;
      left: 0;
      background-color: red;
    };
    @include landscape{
      height: 100vh;
      width: 15vh;
      left: 0;
      top: 0;
      background-color: blue
    };
  }

</style>
