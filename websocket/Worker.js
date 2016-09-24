'use strict';

var http = require('http'),
  express = require('express'),
  WebSocketServer = require('ws').Server,
  server = http.createServer(),
  db = require('./MongoDB').getDb(),
  Lib = require('./Lib'),
  wss = new WebSocketServer({server: server}),
  app = express(),
  workerPort = 8000 + 777,
  process = false,
  WORKER_INDEX = false,
  NODE_ENV = false;


module.exports.setup = function (p) {
  process = p;
  WORKER_INDEX = process.env.WORKER_INDEX;
  NODE_ENV = process.env.WORKER_INDEX;
  console.log('I\'m worker ' + WORKER_INDEX);

  process.on('message', function (m, c) {
    //Later
  });

  wss.on('connection', function connection(ws) {
    ws.connected = true;
    ws.sendObj = function (obj) {
      try {
        ws.send(JSON.stringify(obj));
      } catch (err) {
        console.log(err);
      }
    };
    ws.on('message', function incoming(data) {
      try {
        var d = JSON.parse(data);

        //ws.sendObj(d);


        /*
        db.collection('asdf').insertOne({asdf: 'qqqqq', d: {f: 'aaaa', q: 'ads;flkj'}}, function(err, result){
          if(!err){
            console.log('no error');
          }
        });
        */

        console.log(d);
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

  app.use(function (req, res) {// This is sent when the WebSocket is requested as a web page
    try {
      res.send('WebSocket -_- ' + WORKER_INDEX);
    } catch (err) {
      console.log('express res.send');
      console.log(err);
    }
  });

  server.on('request', app);
  server.listen(workerPort, function () {
    console.log('Worker ' + WORKER_INDEX + ' listening on port ' + server.address().port)
  });

  process.send({m: 'ready'});
};
