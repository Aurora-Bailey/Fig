/*
 var x = new window.WebSocket('ws://localhost:7777')
 x.onopen = function () {
 console.log('asdf')
 }
 */
import Data from './Data'

var ws = {}
var failStart = 0 // web socket fails to start
Data.state.ws = 'dead'
start()

function start () {
  if (Data.state.ws !== 'dead') return false

  Data.state.ws = 'connecting'
  ws = new window.WebSocket('ws://localhost:8777')

  ws.onopen = () => {
    Data.state.ws = 'ready'
    failStart = 0
    sendObj({m: 'hi'})
  }
  ws.onclose = () => {
    Data.state.ws = 'dead'
    failStart++
    var timeout = 3000 * failStart
    setTimeout(start, timeout)
  }
  ws.onmessage = (e) => {
    var d = JSON.parse(e.data)
    console.log(d)

    if (d.m === 'login') {
      Data.state.login = 'done'
    } else if (d.m === 'signup') {
      Data.state.signup = 'done'
    }
  }
}

function sendObj (object) {
  if (Data.state.ws !== 'ready') {
    window.alert('WebSocket is not connected.')
    return false
  }
  ws.send(JSON.stringify(object))
}

var dummy = 'placeholder to keep lint happy'
export default {sendObj, dummy}
