'use strict';

var os = require('os');

class Master{
  constructor(cluster){
    this.cluster = cluster;
    this.masterPort = 7000 + 777;
    this.numCores = os.cpus().length;
    this.workers = [];

    for (let i = 0; i < this.numCores; i++) {
      this.makeWorker(i);
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log('worker died ' + worker.wid);
      this.makeWorker(worker.wid);
    });
  }

  makeWorker(id){
    console.log('making worker ' + id);
    this.workers[id] = this.cluster.fork({WORKER_INDEX: id});
    this.workers[id].wid = id;
    this.workers[id].ready = false;
  };
}

module.exports = Master;
