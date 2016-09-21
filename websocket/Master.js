'use strict';

var os = require('os');

class Master {
  constructor(cluster) {
    this.cluster = cluster;
    this.masterPort = 7000 + 777;
    this.numCores = os.cpus().length;
    this.workers = [];

    for (let i = 0; i < this.numCores; i++) {
      this.makeWorker(i);
    }

    cluster.on('message', (w, m, h)=> {
      this.workerMessage(w, m, h)
    });
    cluster.on('exit', (w, c, s)=> {
      this.workerExit(w, c, s)
    });
  }

  workerMessage(worker, message, handle) {
    if (arguments.length === 2) {
      handle = message;
      message = worker;
      worker = undefined;
    }
    console.log(message);
  }
  workerExit(worker, code, signal) {
    console.log('worker died ' + worker.wid);
    this.makeWorker(worker.wid);
  }

  makeWorker(id) {
    console.log('making worker ' + id);
    this.workers[id] = this.cluster.fork({WORKER_INDEX: id});
    this.workers[id].wid = id;
    this.workers[id].ready = false;
  };

}

module.exports = Master;
