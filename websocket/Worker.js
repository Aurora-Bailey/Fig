'use strict';

class Worker{
  constructor(process){
    var WORKER_INDEX = process.env.WORKER_INDEX;
    console.log('from worker ' + WORKER_INDEX);

    setTimeout(()=> {
      process.exit();
    }, 10000 * Math.random());
  }
}

module.exports = Worker;



