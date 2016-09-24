'use strict';

var cluster = require('cluster');

if (cluster.isMaster) {
  var Master = require('./Master');
  Master.setup(cluster);

} else {
  var MongoDB = require('./MongoDB');
  MongoDB.connectToServer(function (err) {
    if (err) {
      console.log('MongoDB Error: ', err)
    } else {
      var Worker = require('./Worker');
      Worker.setup(process);
    }
  });
}



