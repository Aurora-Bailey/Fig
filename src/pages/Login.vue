<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="login">
    <div class="login-logo">LOGO</div>
    <div class="login-options">
      <div class="login-facebook" v-on:click="page='profile'"><div class="icon"><i class="fa fa-facebook fa-fw"></i></div> <div class="text">Login with Facebook</div></div>
      <div class="login-google" v-on:click="page='profile'"><div class="icon"><i class="fa fa-google-plus fa-fw"></i></div> <div class="text">Login with Google</div></div>
      <div class="login-twitter" v-on:click="page='profile'"><div class="icon"><i class="fa fa-twitter fa-fw"></i></div> <div class="text">Login with Twitter</div></div>
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
        msg: 'Login page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .login {
    background-color: $base;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10000;
    overflow: auto;
  }

  .login-logo {
    color: $accent;
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

  .login-options {
    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    font-size: 4.5vh;

    @include portrait{
      font-size: 4.5vw;
    };
    @include landscape{
      font-size: 4.5vh;
    };
  }

  .login-facebook, .login-google, .login-twitter {
    width: 75vh;
    height: 12vh;
    line-height: 12vh;
    margin: 2vh auto;
    border: 0.5vh solid rgba(0,0,0,0.2);
    cursor: pointer;

    @include portrait{
      width: 75vw;
      height: 12vw;
      line-height: 12vw;
      margin: 2vw auto;
      border: 0.5vw solid rgba(0,0,0,0.2);
    };
    @include landscape{
      width: 75vh;
      height: 12vh;
      line-height: 12vh;
      margin: 2vh auto;
      border: 0.5vh solid rgba(0,0,0,0.2);
    };
  }

  .login-facebook {
    background-color: $facebook;
    &:hover {
      background-color: darken($facebook, 10%);
      color: darken(white, 10%)
    }
  }
  .login-google {
    background-color: $googleplus;
    &:hover {
      background-color: darken($googleplus, 10%);
      color: darken(white, 10%)
    }
  }
  .login-twitter {
    background-color: $twitter;
    &:hover {
      background-color: darken($twitter, 10%);
      color: darken(white, 10%)
    }
  }
  .text {
    display: inline-block;
    float: left;
    padding: 0 5vh;

    @include portrait{
      padding: 0 5vw;
    };
    @include landscape{
      padding: 0 5vw;
    };
  }
  .icon {
    display: inline-block;
    text-align: center;
    width: 12vh;
    border-right: 0.5vh solid rgba(0,0,0,0.2);
    float: left;

    @include portrait{
      width: 12vw;
      border-right: 0.5vw solid rgba(0,0,0,0.2);
    };
    @include landscape{
      width: 12vh;
      border-right: 0.5vh solid rgba(0,0,0,0.2);
    };
  }
</style>
