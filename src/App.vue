<template>
  <div id="app">
    <div id="page-viewport">
      <profile v-show="page=='profile'"></profile>
      <match v-show="page=='match'"></match>
      <group v-show="page=='group'"></group>
      <chat v-show="page=='chat'"></chat>
    </div>

    <login v-show="state.login!='done'"></login>
    <signup v-show="state.signup!='done'"></signup>
    <splash v-show="state.ws!='ready'"></splash>

    <nav-main :page="page"></nav-main>
  </div>
</template>

<script>
  // Objects
  import Data from './components/obj/Data'
  import WebSocket from './components/obj/WebSocket'
  console.log(WebSocket.dummy)
  // Parts
  import NavMain from './components/part/NavMain'
  // Pages
  import Profile from './components/page/Profile'
  import Match from './components/page/Match'
  import Group from './components/page/Group'
  import Chat from './components/page/Chat'
  import Login from './components/page/Login'
  import Signup from './components/page/Signup'
  import Splash from './components/page/Splash'

  export default {
    components: {
      NavMain,
      Profile,
      Match,
      Group,
      Chat,
      Login,
      Signup,
      Splash
    },
    data () {
      return Data
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

  #page-viewport {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 3.75em;
    top: 0;
    z-index: 100;
    padding: 1em;
    overflow: auto;

    @include portrait {
      left: 0;
      bottom: 3.75em;
      padding: 0.5em;
    }
  ;
    @include landscape {
      left: 3.75em;
      bottom: 0;
      padding: 0.5em;
    }
  ;
  }

</style>
