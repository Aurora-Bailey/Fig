<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="first-login" class="first-login">
    <div class="narrow-wrapper">
      <div class="welcome box-unit">
        Welcome!
      </div>
      <div class="tellus box-unit">
        Tell us a bit about yourself.
      </div>

      <div class="spacer">-</div>

      <div class="age box-unit">
        Age<br>
        <input type="text" class="box-unit" placeholder="How old are you?">
      </div>

      <div class="spacer">-</div>

      <div class="done full-button box-unit" v-on:click="page='profile'">
        Next <i class="fa fa-arrow-right fa-fw"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      page: {twoWay: true}
    },
    data () {
      return {
        msg: 'FirstLogin page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../sass/variables";
  @import "../sass/mixins";

  #first-login {
    background-color: $base;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10000;
    overflow: auto;
    text-align: center;
    color: $base-alt-soft;

    padding: 0.5em;

    .box-unit {
      margin: 0.5em 0 0;
    }

    .spacer {
      padding: 2em;
      text-align: center;
      visibility: hidden;
    }

    .welcome {
      font-size: 3.5em;
    }

    .tellus {
      font-size: 1.25em;
    }

    .age {

    }



  }

</style>
