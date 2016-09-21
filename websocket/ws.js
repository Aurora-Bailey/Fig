'use strict';

var cluster = require('cluster');

if (cluster.isMaster) {
  var Master = require('./Master');
  Master.setup(cluster);

} else {
  var Worker = require('./Worker');
  Worker.setup(process);

}



