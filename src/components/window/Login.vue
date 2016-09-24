<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="login" class="login">
    <!--<div class="login-logo">LOGO</div>-->
    <div class="login-center">
      <div class="login-facebook login-button" v-on:click="login()"><div class="text"><i class="fa fa-facebook fa-fw"></i> Login with Facebook</div></div>
      <div class="login-facebook login-button" v-on:click="token()"><div class="text"><i class="fa fa-facebook fa-fw"></i> token with Facebook</div></div>
      <div class="login-facebook login-button" v-on:click="logout()"><div class="text"><i class="fa fa-facebook fa-fw"></i> logout with Facebook</div></div>
      <!--<div class="login-google login-button" v-on:click="login()"><div class="text"><i class="fa fa-google-plus fa-fw"></i> Login with Google</div></div>-->
      <!--<div class="login-twitter login-button" v-on:click="login()"><div class="text"><i class="fa fa-twitter fa-fw"></i> Login with Twitter</div></div>-->
      <div>
        We will never post on your behalf.
      </div>
    </div>
  </div>
</template>

<script>
  import Facebook from '../obj/Facebook'

  export default {
    data () {
      return {
        msg: 'Login page.'
      }
    },
    methods: {
      login: function () {
        Facebook.login()
      },
      token: function () {
        Facebook.token()
      },
      logout: function () {
        Facebook.logout()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../sass/variables";
  @import "../../sass/mixins";

  #login {
    background-color: $accent;
    color: $accent-alt;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10090;
    overflow: auto;

    .login-logo {
      font-size: 3.75em;
      padding: 0.5em;
      text-align: center;
    }

    .login-center {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      background-color: rgba(0,0,0,1);
      color: white;
      text-align: center;
      padding: 2em 0;

    }
    .login-button{
      font-weight: bold;
      width: 18.75em;
      height: 3em;
      line-height: 3em;
      margin: 0.5em auto;
      cursor: pointer;

      @include noselect;
    }
    .text {
      text-align: center;
      font-size: 1.25em;
    }

    .login-facebook {
      color: white;
      background-color: $facebook;
      box-shadow: 0 0 0.5em 0 $facebook;
      &:hover {
        background-color: darken($facebook, 10%);
        color: darken(white, 10%)
      }
    }
    .login-google {
      color: white;
      background-color: $googleplus;
      box-shadow: 0 0 0.5em 0 $googleplus;
      &:hover {
        background-color: darken($googleplus, 10%);
        color: darken(white, 10%)
      }
    }
    .login-twitter {
      color: white;
      background-color: $twitter;
      box-shadow: 0 0 0.5em 0 $twitter;
      &:hover {
        background-color: darken($twitter, 10%);
        color: darken(white, 10%)
      }
    }
  }




</style>
