<template xmlns:v-on="http://www.w3.org/1999/xhtml">
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
        <div v-for="item in hobbies" class="hash-item"><i class="fa fa-hashtag fa-fw hashtag"></i> <span class="text">{{item}}</span></div>
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
        hobbies: ['Gaming', 'Movies', 'Fishing', 'Gardening', 'Walking', 'Exercise', 'ListeningToMusic', 'Hunting', 'TeamSports', 'Shopping', 'Traveling', 'Sleeping', 'Socializing', 'VideoGames', 'Sewing', 'Golf', 'Relaxing', 'Crafts', 'WatchingSports', 'Bicycling', 'PlayingCards', 'Hiking', 'Cooking', 'EatingOut', 'Swimming', 'Camping', 'Skiing', 'Writing', 'Boating', 'Motorcycling', 'AnimalCare', 'Bowling', 'Painting', 'Running', 'Dancing', 'HorsebackRiding', 'Tennis', 'Billiards', 'VolunteerWork'],
        msg: 'FirstLogin page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../sass/variables";
  @import "../sass/mixins";

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

        @include mobile{
          // display: block;
        };
      }

      .text, .hashtag{
        font-size: 2em;
        line-height: inherit;
      }

      .hashtag {
        opacity: 0.3;
      }
    }

    .outro {
      margin-top: 1em;
      color: lighten($base-alt-soft, 20%);
    }

    .done {
      margin-bottom: 0.25em;
    }

  }

</style>
