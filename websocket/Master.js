'use strict';

var os = require('os'),
  numCores = os.cpus().length,
  cluster = false,
  workers = [];

function workerMessage(worker, message, handle) {
  if (arguments.length === 2) {
    handle = message;
    message = worker;
    worker = undefined;
  }
  console.log(message);
}
function workerExit(worker, code, signal) {
  console.log('worker died ' + worker.wid);
  makeWorker(worker.wid);
}
function makeWorker(id) {
  if (!cluster) return false;

  console.log('making worker ' + id);
  workers[id] = cluster.fork({WORKER_INDEX: id});
  workers[id].wid = id;
  workers[id].ready = false;
}

module.exports.setup = function (c) {
  cluster = c;

  for (let i = 0; i < numCores; i++) {
    makeWorker(i);
  }
  cluster.on('message', (w, m, h)=> {
    if(m.m == 'ready'){
      w.ready = true;
    }
  });
  cluster.on('exit', (w, c, s)=> {
    workerExit(w, c, s)
  });
};

