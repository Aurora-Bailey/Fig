<template>
  <div id="app">
    <hello></hello>

    <button type="button" class="btn btn-info">Info</button>

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
    width: 100vw;
    height: 100vh;
    font-family: Helvetica, sans-serif;
    position: relative;
    font-size: 4vh;

    @include portrait{
      font-size: 4vh;
      background-color: purple;
    };
    @include landscape{
      font-size: 4vw;
      background-color: yellow;
    };
  }
  button{
    font-size: 4vh;
    padding: 1vh 2vh;

    @include portrait{
      font-size: 4vh;
      padding: 1vh 2vh
    };
    @include landscape{
      font-size: 4vw;
      padding: 1vw 2vw;
    };
  }

</style>
