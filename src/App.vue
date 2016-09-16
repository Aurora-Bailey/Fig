<template>
  <div id="app">
    <div id="page-viewport">
      <profile :page="page" v-show="page=='profile'"></profile>
      <match :page="page" v-show="page=='match'"></match>
      <group :page="page" v-show="page=='group'"></group>
      <chat :page="page" v-show="page=='chat'"></chat>
    </div>

    <login :page.sync="page"  v-show="page=='login'"></login>
    <first-login :page.sync="page"  v-show="page=='first-login'"></first-login>
    <splash :page="page"  v-show="page=='splash'"></splash>


    <nav-main :page.sync="page"></nav-main>
  </div>
</template>

<script>
  /* Components */
  import NavMain from './components/NavMain'

  /* Pages */
  import Profile from './pages/Profile'
  import Match from './pages/Match'
  import Group from './pages/Group'
  import Chat from './pages/Chat'
  import FirstLogin from './pages/FirstLogin'
  import Login from './pages/Login'
  import Splash from './pages/Splash'

  export default {
    components: {
      NavMain,
      Profile,
      Match,
      Group,
      Chat,
      FirstLogin,
      Login,
      Splash
    },
    data () {
      return {
        page: 'splash'
      }
    },
    created: function () {
      setTimeout(() => {
        this.page = 'login'
      }, 2000)
    }
  }
</script>

<!-- BootStrap -->
<!--
<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
</style>
-->

<!-- Font Awesome -->
<style>
  @import 'lib/font-awesome/css/font-awesome.min.css';
</style>

<!-- Sass -->
<style lang="scss">

  /* SASS imports*/
  @import "sass/variables";
  @import "sass/mixins";

  /* Main styles*/
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100vh;
    width: 100vw;
    position: relative;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    background-color: $base;

    @include portrait{
      font-size: 4vw;
    };
    @include landscape{
      font-size: 4vh;
    };
  }
  #page-viewport{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 100px;
    top: 0;
    z-index: 100;
    padding: 20px;
    overflow: auto;

    @include portrait{
      left: 0;
      bottom: 15vw;
      padding: 2vw;
    };
    @include landscape{
      left: 15vh;
      bottom: 0;
      padding: 2vh;
    };
  }
  button{
    font-size: 18px;
    padding: 5px 10px;

    @include portrait{
      font-size: 4vw;
      padding: 1vw 2vw;
    };
    @include landscape{
      font-size: 4vh;
      padding: 1vh 2vh;
    };
  }

</style>
