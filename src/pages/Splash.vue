<template>
  <div class="splash">
    <div class="splash-logo">LOGO</div>
    <div class="splash-spinner">
      <i class="fa fa-spinner fa-pulse fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['page'],
    data () {
      return {
        msg: 'Splash page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .splash {
    background-color: $accent;
    color: $accent-alt;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10001;
    overflow: auto;
  }
  .splash-spinner {
    font-size: 30vh;
    line-height: 100vh;
    text-align: center;

    @include portrait{
      font-size: 30vw;
    };
    @include landscape{
      font-size: 30vh;
    };
  }

  .splash-logo {
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 8vh;
    font-size: 15vh;

    @include portrait{
      top: 15vh;
      font-size: 15vw;
    };
    @include landscape{
      top: 8vh;
      font-size: 15vh;
    };
  }
</style>
