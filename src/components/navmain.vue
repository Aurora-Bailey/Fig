<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="nav-main">
    <div class="nav-button" v-on:click="page='profile'" v-bind:class="{ 'active': page=='profile' }">
      <i class="fa fa-child"></i>
    </div>
    <div class="nav-button"  v-on:click="page='match'" v-bind:class="{ 'active': page=='match' }">
      <i class="fa fa-group"></i>
    </div>
    <div class="nav-button"  v-on:click="page='chat'" v-bind:class="{ 'active': page=='chat' }">
      <i class="fa fa-comments"></i>
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
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../sass/variables";
  @import "../sass/mixins";

  .nav-main {
    height: 100vh;
    width: 15vh;
    position: absolute;
    bottom: 0;
    right: auto;
    left: 0;
    top: 0;
    z-index: 1000;
    margin: auto;
    overflow: hidden;
    background-color: $base-alt;
    color: $base;


    @include portrait{
      height: 15vw;
      width: 100vw;
      bottom: 0;
      right: 0;
      left: 0;
      top: auto;
    };
    @include landscape{
      height: 100vh;
      width: 15vh;
      bottom: 0;
      right: auto;
      left: 0;
      top: 0;
    };
  }

  .nav-button {
    font-size: 10vh;
    text-align: center;
    height: 15vh;
    line-height: 15vh;
    cursor: pointer;

    &:hover {
      background-color: rgba(120,120,120,0.5);
    }
    &.active {
      background-color: $accent;
      color: $accent-alt;
    }

    @include portrait{
      font-size: 10vw;
      width: 33.3vw;
      display: inline-block;
      height: 15vw;
      line-height: 15vw;
      float: left;
    };
    @include landscape{
      font-size: 10vh;
      height: 33.3vh;
      line-height: 33.3vh;
    };
  }

</style>
