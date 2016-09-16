<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="first-login" class="first-login">
    <div class="narrow-wrapper">
      <div class="welcome box-unit">
        Welcome!
      </div>
      <div class="tellus box-unit">
        Tell us a bit about yourself.
      </div>

      <div class="age box-unit">
        What year were you born?<br>
        <input type="text" placeholder="YYYY">

      </div>

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

    .box-unit {
      margin: 30px 0 0;

      @include portrait{
        margin: 7.5vw 0 0;
      };
      @include landscape{
        margin: 7.5vh 0 0;
      };
    }


    .welcome {
      font-size: 60px;

      @include portrait{
        font-size: 14vw;
      };
      @include landscape{
        font-size: 14vh;
      };
    }

    .tellus {
      font-size: 20px;

      @include portrait{
        font-size: 5vw;
      };
      @include landscape{
        font-size: 5vh;
      };
    }

  }

</style>
