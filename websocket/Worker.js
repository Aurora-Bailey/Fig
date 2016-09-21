'use strict';

var http = require('http'),
  express = require('express'),
  WebSocketServer = require('ws').Server,
  server = http.createServer(),
  Lib = require('./Lib'),
  wss = new WebSocketServer({server: server}),
  app = express(),
  workerPort = 8000 + 777,
  process = false,
  WORKER_INDEX = false;

module.exports.setup = function(p){
  process = p;
  WORKER_INDEX = process.env.WORKER_INDEX;

  console.log('I\'m worker ' + WORKER_INDEX);

  process.send('READY!!');
};



/*


 app.use(function (req, res) {
 // This is sent when the WebSocket is requested as a webpage
 try {
 res.send('WebSocket');
 } catch (err) {
 console.log('express res.send');
 console.log(err);
 }
 });

 wss.on('connection', function connection(ws) {
 ws.connected = true;
 ws.sendObj = function (obj) {
 try {
 ws.send(JSON.stringify(obj));
 } catch (err) {
 if (NODE_ENV == 'development')console.log(err);
 }
 };
 ws.on('message', function incoming(data) {
 try {
 var d = JSON.parse(data);

 }
 catch (err) {
 console.log('Bad Packet: ', data, err);
 }
 });

 ws.on('close', function () {
 ws.connected = false;
 });

 ws.sendObj({m: 'hi'});
 });

 server.on('request', app);
 server.listen(gamePort, function () {
 console.log('NODE_ENV: ' + NODE_ENV + ' Server: ' + SERVER_NAME + ' Room: "' + ROOM_NAME + '" Worker: ' + WORKER_INDEX + ' Port: ' + server.address().port)
 });

 // Get message from master and check if need pass to http server
 process.on('message', function (m, c) {
 if ("doit" === m) {
 try {
 server.emit('connection', c);
 c.resume();
 } catch (err) {
 console.log('err: doit recieve');
 console.log(err);
 }
 } else if (typeof m === 'object') {
 if (m.m == 'population') {
 Game.numConnectedAllRooms = m.p;
 Game.capacityAllRooms = m.v;
 }

 }
 });

 */
