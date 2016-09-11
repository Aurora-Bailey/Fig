<template>
  <div id="app">
    <profile :page="page" v-show="page=='profile'"></profile>
    <match :page="page" v-show="page=='match'"></match>
    <chat :page="page" v-show="page=='chat'"></chat>

    <nav-main :page.sync="page"></nav-main>
  </div>
</template>

<script>
  /* Components */
  import NavMain from './components/NavMain'

  /* Pages */
  import Profile from './pages/Profile'
  import Match from './pages/Match'
  import Chat from './pages/Chat'

  export default {
    components: {
      NavMain,
      Profile,
      Match,
      Chat
    },
    data () {
      return {
        page: 'profile'
      }
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
    position: absolute;
    bottom: 0;
    right: 0;
    left: 15vh;
    top: 0;
    font-family: Helvetica, sans-serif;
    font-size: 4vh;
    background-color: $base;

    @include portrait{
      font-size: 4vw;
      bottom: 15vw;
      left: 0;
    };
    @include landscape{
      font-size: 4vh;
      bottom: 0;
      left: 15vh;
    };
  }
  button{
    font-size: 4vh;
    padding: 1vh 2vh;

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
