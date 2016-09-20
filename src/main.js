import Vue from 'vue'
import App from './App'

var x = new window.WebSocket('ws://localhost:7777')
x.onopen = function () {
  console.log('asdf')
}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
