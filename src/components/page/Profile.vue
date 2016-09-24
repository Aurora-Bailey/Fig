<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="profile">
    <div>{{msg}}</div>
    <br>
    <button v-on:click="login()">Login</button>
    <button v-on:click="token()">Token</button>
    <button v-on:click="logout()">Logout</button>
  </div>
</template>

<script>
  import Facebook from '../obj/Facebook'

  export default {
    data () {
      return {
        msg: 'Profile page.'
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
<style lang="sass">
  @import "../../sass/variables";
  @import "../../sass/mixins";

</style>
