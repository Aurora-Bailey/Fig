<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="first-login" class="first-login">
    <div class="narrow-wrapper">
      <div class="welcome box-unit">
        Welcome!
      </div>

      <div class="spacer">-</div>

      <div class="intro box-unit">
        What do you think about?
      </div>

      <div class="outro box-unit">
        Tip: You can add your own, <br>
        custom HashTags in the profile tab later.
      </div>

      <div class="spacer">-</div>

      <div class="hobbies box-unit">
        <div v-for="item in hobbies" class="hash-item" v-bind:class="{ 'active': item.state }" v-on:click="item.state=!item.state"><i class="fa fa-hashtag fa-fw hashtag"></i> <span class="text">{{item.tag}}</span></div>
      </div>

      <div class="spacer">-</div>

      <div class="done full-button box-unit" v-on:click="page='profile'">
        Done <i class="fa fa-check fa-fw"></i>
      </div>
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
        hobbies: [{state: false, tag: 'Gaming'}, {state: false, tag: 'Movies'}, {state: false, tag: 'Fishing'}, {state: false, tag: 'Gardening'}, {state: false, tag: 'Walking'}, {state: false, tag: 'Exercise'}, {state: false, tag: 'ListeningToMusic'}, {state: false, tag: 'Hunting'}, {state: false, tag: 'TeamSports'}, {state: false, tag: 'Shopping'}, {state: false, tag: 'Traveling'}, {state: false, tag: 'Sleeping'}, {state: false, tag: 'Socializing'}, {state: false, tag: 'VideoGames'}, {state: false, tag: 'Sewing'}, {state: false, tag: 'Golf'}, {state: false, tag: 'Relaxing'}, {state: false, tag: 'Crafts'}, {state: false, tag: 'WatchingSports'}, {state: false, tag: 'Bicycling'}, {state: false, tag: 'PlayingCards'}, {state: false, tag: 'Hiking'}, {state: false, tag: 'Cooking'}, {state: false, tag: 'EatingOut'}, {state: false, tag: 'Swimming'}, {state: false, tag: 'Camping'}, {state: false, tag: 'Skiing'}, {state: false, tag: 'Writing'}, {state: false, tag: 'Boating'}, {state: false, tag: 'Motorcycling'}, {state: false, tag: 'AnimalCare'}, {state: false, tag: 'Bowling'}, {state: false, tag: 'Painting'}, {state: false, tag: 'Running'}, {state: false, tag: 'Dancing'}, {state: false, tag: 'HorsebackRiding'}, {state: false, tag: 'Tennis'}, {state: false, tag: 'Billiards'}, {state: false, tag: 'VolunteerWork'}],
        msg: 'FirstLogin page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../sass/variables";
  @import "../../sass/mixins";

  #first-login {
    background-color: $base;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10000;
    overflow: auto;
    text-align: center;
    color: $base-alt-soft;

    padding: 0.5em;

    .box-unit {
    }

    .spacer {
      padding: 1em;
      text-align: center;
      visibility: hidden;
    }

    .welcome {
      font-size: 3.5em;
      margin-top: 1em;
    }

    .intro {
      font-size: 1.25em;
      font-weight: bold;
    }

    .hobbies {


      .hash-item{
        padding: 0.4em 1em;
        border: 0.1em solid $base-alt-soft;
        margin: 0.3em;
        display: inline-block;
        cursor: pointer;
        border-radius: 5em;

        &:hover {
          color: lighten($base-alt-soft, 20%);
        }
        @include noselect;

        @include mobile{
          cursor: default;
        };

        &.active {
          color: $accent-alt;
          border-color: $accent-alt;
          background-color: $accent;
        }
      }

      .text, .hashtag{
        font-size: 1.2em;
        line-height: inherit;
        pointer-events: none;
      }

      .hashtag {
        opacity: 0.5;
      }
    }

    .outro {
      margin-top: 1em;
      color: lighten($base-alt-soft, 10%);
    }

    .done {
      margin-bottom: 0.25em;
    }

  }
</style>
