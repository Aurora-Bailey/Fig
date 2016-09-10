<template>
  <div class="nav-main">
    <div><button type="button" class="btn btn-info">Info</button></div>
    <i class="fa fa-camera-retro"></i> fa-camera-retro
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
    height: 100vh;
    width: 15vh;
    position: absolute;
    bottom: 0;
    right: auto;
    left: 0;
    top: 0;
    margin: auto;
    background-color: purple;

    @include portrait{
      height: 15vw;
      width: 100vw;
      bottom: 0;
      right: 0;
      left: 0;
      top: auto;
      background-color: red;
    };
    @include landscape{
      height: 100vh;
      width: 15vh;
      bottom: 0;
      right: auto;
      left: 0;
      top: 0;
      background-color: blue
    };
  }

</style>
