<template>
  <div id="app">
    <hello></hello>

    <button type="button" class="btn btn-info">Info</button>
    <i class="fa fa-camera-retro"></i> fa-camera-retro

    <nav-main></nav-main>
  </div>
</template>

<script>
import Hello from './components/Hello'
import NavMain from './components/NavMain'

export default {
  components: {
    Hello,
    NavMain
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
