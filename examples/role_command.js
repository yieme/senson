var senson = require('../index')

var test   = senson('tasks#run,job:count')

console.log(test) // { role: 'tasks', cmd: 'run', job: 'count' }
