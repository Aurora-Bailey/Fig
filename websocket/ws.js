'use strict';

var cluster = require('cluster');

if (cluster.isMaster) {
  var MasterClass = require('./Master');
  var Master = new MasterClass(cluster);

} else {
  var WorkerClass = require('./Worker');
  var Worken = new WorkerClass(process);

}



