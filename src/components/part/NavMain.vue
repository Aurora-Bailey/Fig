<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="nav-main">
    <div class="nav-button" v-bind:class="{ 'active': page=='profile' }" v-on:click="pageTo('profile')">
      <i class="fa fa-child"></i>
    </div>
    <div class="nav-button" v-bind:class="{ 'active': page=='match' }" v-on:click="pageTo('match')">
      <i class="fa fa-group"></i>
    </div>
    <div class="nav-button" v-bind:class="{ 'active': page=='group' }" v-on:click="pageTo('group')">
      <i class="fa fa-soccer-ball-o"></i>
    </div>
    <div class="nav-button" v-bind:class="{ 'active': page=='chat' }" v-on:click="pageTo('chat')">
      <i class="fa fa-comments"></i>
    </div>
  </div>
</template>

<script>
  import WebSocket from '../obj/WebSocket'
  console.log(WebSocket.dummy)

  export default {
    props: ['page'],
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      pageTo: function (page) {
        WebSocket.shortObj({m: 'page', page: page})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../sass/variables";
  @import "../../sass/mixins";

  .nav-main {
    height: 100vh;
    width: 3.75em;
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
      height: 3.75em;
      width: 100vw;
      bottom: 0;
      right: 0;
      left: 0;
      top: auto;
    };
    @include landscape{
      height: 100vh;
      width: 3.75em;
      bottom: 0;
      right: auto;
      left: 0;
      top: 0;
    };
  }

  .nav-button {
    text-align: center;
    height: 3.75em;
    width: 3.75em;
    line-height: 3.75em;
    cursor: pointer;

    i {
      font-size: 2.5em;
      line-height: inherit;
    }

    &:hover {
      background-color: rgba(120,120,120,0.5);
    }
    &.active {
      background-color: $accent;
      color: $accent-alt;
    }

    @include portrait{
      width: 25vw;/*100 / num buttons*/
      display: inline-block;
      float: left;
    };
    @include landscape{
      height: 25vh;/*100 / num buttons*/
      line-height: 25vh;/*100 / num buttons*/
    };
  }

</style>
