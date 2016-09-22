<template>
  <div class="chat">
    <div>{{msg}} {{page}}</div>
    <div>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>
      asdf<br>

    </div>
  </div>
</template>

<script>
  import WebSocket from '../../components/obj/WebSocket'
  console.log(WebSocket.dummy)

  export default {
    props: ['page'],
    data () {
      return {
        msg: 'Chat page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "../../sass/variables";
  @import "../../sass/mixins";

</style>
