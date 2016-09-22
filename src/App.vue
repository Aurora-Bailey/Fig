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
  /* Data*/
  import Data from './components/obj/Data'

  /* Components */
  // parts
  import NavMain from './components/part/NavMain'
  // pages
  import Profile from 'components/page/Profile'
  import Match from 'components/page/Match'
  import Group from 'components/page/Group'
  import Chat from 'components/page/Chat'
  import FirstLogin from 'components/page/FirstLogin'
  import Login from 'components/page/Login'
  import Splash from 'components/page/Splash'

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
      return Data
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
  @import "sass/general";

  /* Main styles*/
  #app {
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  #page-viewport{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 3.75em;
    top: 0;
    z-index: 100;
    padding: 1em;
    overflow: auto;

    @include portrait{
      left: 0;
      bottom: 3.75em;
      padding: 0.5em;
    };
    @include landscape{
      left: 3.75em;
      bottom: 0;
      padding: 0.5em;
    };
  }

</style>
