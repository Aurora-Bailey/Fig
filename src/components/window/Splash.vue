<template>
  <div id="splash" class="splash">
    <div class="splash-center">
      <div class="splash-logo">LOGO</div>
      <div class="splash-spinner">
        <i class="fa fa-spinner fa-pulse fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
      <div class="splash-state" v-show="state.ws!='ready'">Connecting to Server</div>
      <div class="splash-state" v-show="state.fbsdk!=true">Connecting to Facebook</div>
      <div class="splash-state" v-show="state.login=='idk'">Logging in</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['state']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../sass/variables";
  @import "../../sass/mixins";

  #splash {
    background-color: $accent;
    color: $accent-alt;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10100;
    overflow: auto;
    text-align: center;

    .splash-center {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      transform: translateY(-50%);
    }

    .splash-logo {
      font-size: 3.75em;
      margin: 0.25em auto;
    }
    .splash-spinner {
      font-size: 7.5em;
      margin: 0.25em auto;
    }
    .splash-state {
      margin: 1em 0;
    }
  }

</style>
